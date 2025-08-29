import React from 'react'

import { MetricsSummary } from '@/components/cards/metrics-summary'

const Page = () => {
    return (
        <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <MetricsSummary />
            <MetricsSummary />
            <MetricsSummary />
            <MetricsSummary />
        </section>
    )
}

export default Page