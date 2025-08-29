"use client"

import React, { useActionState } from 'react'

import { InfoIcon } from 'lucide-react'
import { toast } from 'sonner'

import { shortenLinkAction } from '@/actions/shorten'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const NewLinkForm = () => {

    const [state, formAction, isPending] = useActionState(shortenLinkAction, {});

    state.error && toast.error(state.error);

    return (
        <>
            {state?.success ? (

                <>
                    <div className="*:not-first:mt-2">
                        <Input
                            id=""
                            className="read-only:bg-muted"
                            defaultValue={state.url}
                            readOnly
                            placeholder="Url"
                            type="url"
                        />
                    </div>
                    <div className="rounded-md border border-blue-500/50 px-4 py-3 text-blue-600">
                        <p className="text-sm">
                            <InfoIcon
                                className="me-3 -mt-0.5 inline-flex opacity-60"
                                size={16}
                                aria-hidden="true"
                            />
                            Click the URL to copy it to your clipboard.
                        </p>
                    </div>
                </>

            ) : (

                <form action={formAction} className='flex flex-col gap-4'>

                    <div className='flex flex-col gap-2'>

                        <Label htmlFor="url" className='pl-2'>Destination URL</Label>

                        <Input
                            id="url"
                            name="url"
                            type="url"
                            placeholder='https://example.com'
                            required
                            className='w-full'
                        />

                    </div>

                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? "Shortening..." : "Shorten"}
                    </Button>

                    {state?.error && <p className="text-red-500">{state.error}</p>}

                </form>
            )}
        </>
    )

}

export { NewLinkForm }
