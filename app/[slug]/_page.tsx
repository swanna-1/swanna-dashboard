import React from 'react';
import { notFound, redirect } from 'next/navigation';

import { dbConnect } from '@/lib/mongoose';
import { redis } from '@/lib/redis';

import { useUrlModel } from '@/models/url';

const ONE_HOUR_IN_SECONDS = 3600;

const Page = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {

    const { slug } = await params;
    if (!slug || typeof slug !== 'string') { notFound() }

    const redisKey = `url:${slug}`;

    const cached = await redis.get(redisKey);

    if (cached) {
        const parsed = JSON.parse(cached);

        console.log(`[cache hit] - ${redisKey}`);
        redirect(parsed.url);
    }

    await dbConnect("swanna");

    const Url = await useUrlModel('swanna');

    const urlDoc = await Url.findOne({ alias: `/${slug}` });

    if (!urlDoc || (urlDoc.expiresAt && new Date() > urlDoc.expiresAt)) { notFound() }

    Url.updateOne({ alias: `/${slug}` }, { $set: { lastAccessed: new Date() } })
        .catch(err => console.error('Failed to track click', err));

    const dataToCache = {
        url: urlDoc.url,
        expiresAt: urlDoc.expiresAt,
    };

    await redis.set(redisKey, JSON.stringify(dataToCache), 'EX', ONE_HOUR_IN_SECONDS);

    console.log(`[cache miss] - ${redisKey}`);
    console.log(`[db hit] - ${redisKey}`);

    redirect(urlDoc.url);
};

export default Page;
