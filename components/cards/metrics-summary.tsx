import React from 'react'

import { IconTrendingUp } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const MetricsSummary = () => {
    return (
        <Card>
            <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    $1,250.00
                </CardTitle>
                <CardAction>
                    <Badge variant="outline">
                        <IconTrendingUp />
                        +12.5%
                    </Badge>
                </CardAction>
            </CardHeader>
        </Card>
    )
}

export { MetricsSummary }