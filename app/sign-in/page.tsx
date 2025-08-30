import React from 'react'

import { SignInForm } from "@/components/forms/sign-in"
import { Card, CardContent } from "@/components/ui/card"

const Page = () => {
    return (
        // <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        //     <div className="w-full max-w-sm md:max-w-3xl">
        //         {/* <LoginForm /> */}
        //         <div className="flex flex-col gap-6">
        //             <Card className="overflow-hidden p-0">
        //                 <CardContent className="grid p-0 md:grid-cols-2">
        //                     <SignInForm />
        //                     <div className="bg-muted relative hidden md:block">
        //                         <img
        //                             src="/placeholder.svg"
        //                             alt="Image"
        //                             className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        //                         />
        //                     </div>
        //                 </CardContent>
        //             </Card>
        //             <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        //                 By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        //                 and <a href="#">Privacy Policy</a>.
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <main className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl space-y-4">
                <Card className="overflow-hidden p-0">
                    <CardContent className="grid p-0 md:grid-cols-2">
                        <SignInForm />
                        <div className="bg-muted relative hidden md:block">
                            <img
                                src="http://ui.shadcn.com/placeholder.svg"
                                alt="Image"
                                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                            />
                        </div>
                    </CardContent>
                </Card>

                <p className="text-muted-foreground text-center text-xs text-balance">
                    By clicking continue, you agree to our{" "}
                    <a href="#" className="underline underline-offset-4 hover:text-primary">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline underline-offset-4 hover:text-primary">
                        Privacy Policy
                    </a>.
                </p>
            </div>
        </main>
    )
}

export default Page
