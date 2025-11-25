"use client"
import React from 'react'
import Blogs from '@/components/blogs/Blogs';

const page = async ({ params }) => {
  const resolvedParams = await params;
    return (
        <Blogs params={resolvedParams}/>
    )
}

export default page