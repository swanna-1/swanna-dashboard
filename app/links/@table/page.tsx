import React from 'react'

import {
    ChartNoAxesColumnIncreasing,
    Pen,
    SquareArrowOutUpRight,
    Trash2
} from 'lucide-react'

import { NewLinkButton } from '@/components/buttons/new-link';

import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const data = [
    {
        url: "https://www.example.com/long-article-for-us-dhdfff",
        shortLink: "https://sho.rt/abc123",
        clicks: 142,
        created: "2025-08-20",
        status: "active",
    },
    {
        url: "https://anotherexample.com/download-page",
        shortLink: "https://sho.rt/xyz789",
        clicks: 67,
        created: "2025-08-15",
        status: "expired",
    },
];

const Page = () => {
    return (
        <section className='flex flex-col gap-2'>

            <header className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold pl-2'>Links Table</h2>
                <NewLinkButton />
            </header>

            <Table className="border">

                <TableHeader className="bg-muted">
                    <TableRow>
                        <TableHead>URL</TableHead>
                        <TableHead>Short Link</TableHead>
                        <TableHead>Clicks</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index}>

                            <TableCell className="flex items-center gap-2">

                                <Button variant="ghost" size="icon" className="size-8">
                                    <SquareArrowOutUpRight />
                                </Button>

                                <span className='truncate'>{item.url}</span>

                            </TableCell>

                            <TableCell>
                                <a
                                    href={item.shortLink}
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {new URL(item.shortLink).host + new URL(item.shortLink).pathname}
                                </a>
                            </TableCell>

                            <TableCell>{item.clicks}</TableCell>

                            <TableCell>{item.created}</TableCell>

                            <TableCell>
                                <span className={item.status === 'active' ? 'text-green-600' : 'text-gray-500'}>
                                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                </span>
                            </TableCell>

                            <TableCell className="text-right flex justify-end items-center gap-3">

                                <Button variant="secondary" size="icon" className="size-8">
                                    <ChartNoAxesColumnIncreasing />
                                </Button>

                                <Button variant="secondary" size="icon" className="size-8">
                                    <Pen />
                                </Button>

                                <Button variant="destructive" size="icon" className="size-8">
                                    <Trash2 />
                                </Button>

                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>

            </Table>

            <footer className='pl-2'>this is a footer</footer>

        </section>
    )
}

export default Page