import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

import { db } from "@/lib/db";
import { schema } from "@/schema";

export const auth = betterAuth({
    
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: { ...schema },
    }),
    
    emailAndPassword: {
        enabled: true,
        autoSignIn:false
    },
    
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
    
    plugins: [nextCookies()] 

});