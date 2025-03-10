import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'

// here we destrcuture params from the argument
// params is a Promise that resolves to an object with {id: string}

export const experimental_ppr = true;

const Page = async ({params} : {params: Promise<{id: string}>}) => {
    const id = (await params).id;
    const post = await client.fetch(STARTUPS_BY_ID_QUERY, {id})

    if (!post) return notFound();

    return (
        <>
            <h1 className='text-3xl'>This is a startup number: ${id}</h1>
        </>
    )
}

export default Page