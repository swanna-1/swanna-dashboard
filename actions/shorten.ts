'use server'

import { z } from 'zod'
import { dbConnect } from '@/lib/mongoose'
import { useUrlModel } from '@/models/url'

const formSchema = z.object({
    url: z.url({ message: 'Please enter a valid URL.' }),
})

type ActionResult = {
    url?: string
    error?: string
    success?: string
}

const REDIRECT_BASE_URL = process.env.NEXT_PUBLIC_REDIRECT_BASE_URL || "http://localhost:3000"

export async function shortenLinkAction(
    prevState: ActionResult,
    formData: FormData
): Promise<ActionResult> {

    const result = formSchema.safeParse({
        url: formData.get('url'),
    })

    if (!result.success) {
        return { error: result.error.issues[0].message }
    }

    const { url } = result.data

    try {

        await dbConnect("swanna")

        const Url = await useUrlModel('swanna');

        const existing = await Url.findOne({ url })
        if (existing) {
            return {
                success: 'This URL has already been shortened.',
                url: REDIRECT_BASE_URL + existing.alias,
            }
        }

        const newUrl = await Url.create({ url })

        return {
            success: `Shortened URL: ${newUrl.alias}`,
            url: REDIRECT_BASE_URL + newUrl.alias,
        }

    } catch (e) {
        console.error('Error shortening URL:', e)
        return { error: 'Something went wrong. Please try again.' }
    }
}
