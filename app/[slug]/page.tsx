import React from 'react';
import { redirect } from 'next/navigation';
import { Url } from '@/models/url'; // Your Mongoose model
import { Connect } from '@/lib/mongoose'; // Your DB connection utility

const Page = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params;

    await Connect(); // Make sure DB is connected

    // Find URL in DB based on the alias
    const urlDoc = await Url.findOne({ alias: `/${slug}` });

    if (!urlDoc || (urlDoc.expiresAt && new Date() > urlDoc.expiresAt)) {
        // Redirect to a custom 404 or home if not found or expired
        redirect('/not-found');
    }

    // Optionally increment clicks
    urlDoc.clicks += 1;
    urlDoc.lastAccessed = new Date();
    await urlDoc.save();

    // Redirect to the original URL
    redirect(urlDoc.url);
};

export default Page;
