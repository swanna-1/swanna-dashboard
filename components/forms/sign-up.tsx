"use client"

import React from 'react'

import { useFormik } from 'formik'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { authClient } from "@/lib/auth-client";

const SignUpForm = () => {

    const formik = useFormik({

        initialValues: {
            username: '',
            email: '',
            password: '',
        },

        onSubmit: async (values, { setSubmitting }) => {

            setSubmitting(true)

            await formik.validateForm()
            if (!formik.isValid) {
                toast.error("Try entering some real values");
                setSubmitting(false)
                return
            }

            try {

                const { data, error } = await authClient.signUp.email({
                    email: values.email, // user email address
                    password: values.password, // user password -> min 8 characters by default
                    name: values.username, // user display name
                    image: "", // User image URL (optional)
                    callbackURL: "/" // A URL to redirect to after the user verifies their email (optional)
                }, {
                    onRequest: (ctx) => {
                        //show loading
                    },
                    onSuccess: (ctx) => {
                        //redirect to the dashboard or sign in page
                        toast.success("Sign up successful! Please check your email to verify your account.");
                        // console.log("Sign up data", ctx.data);
                    },
                    onError: (ctx) => {
                        // display the error message
                        toast.error(ctx.error.message);
                    },
                });

            } catch (error) { console.error("error") }

            finally { setSubmitting(false) }

        },

    })

    return (
        <form onSubmit={formik.handleSubmit} className='space-y-4'>

            <div className="space-y-2">
                <Label htmlFor="username" className="ml-2">Username</Label>
                <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    required
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username && (
                    <div className="text-red-500 px-2">{formik.errors.username}</div>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="ml-2">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 px-2">{formik.errors.email}</div>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="password" className="ml-2">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                    <div className="text-red-500 px-2">{formik.errors.password}</div>
                )}
            </div>

            <Button type="submit" className='w-full'>
                {formik.isSubmitting ?
                    (
                        <span className='flex items-center'>
                            <Loader2 className='mr-2 animate-spin' />Signing Up...
                        </span>
                    ) : "Sign Up"}
            </Button>

        </form>
    )
}

export { SignUpForm }