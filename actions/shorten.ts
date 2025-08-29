'use server'

import { z } from 'zod'

// 1. Define the schema
const formSchema = z.object({
    url: z.string().url({ message: 'Please enter a valid URL.' }),
})

// 2. Define the return type
type ActionResult = {
    url?: string
    error?: string
    success?: string
}

// 3. Create the action function
export async function shortenLinkAction(
    prevState: ActionResult,
    formData: FormData
): Promise<ActionResult> {
    const parsed = formSchema.safeParse({
        url: formData.get('url'),
    })

    if (!parsed.success) {
        return { error: parsed.error.issues[0].message }
    }

    const url = parsed.data.url

    try {
        // Imagine this calls your URL shortening service
        const shortened = await fakeShortenUrl(url)

        return { success: `Shortened URL: ${shortened}`, url: shortened }
    } catch (e) {
        return { error: 'Something went wrong. Please try again.' }
    }
}

// Fake shortening function for demonstration
async function fakeShortenUrl(url: string): Promise<string> {
    await new Promise((res) => setTimeout(res, 500)) // simulate delay
    return `https://short.ly/${Math.random().toString(36).substring(2, 8)}`
}
