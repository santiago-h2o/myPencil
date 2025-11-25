import React, { useEffect, useState } from 'react'

const page = async ({ params }) => {
    const resolvedParams = await params;
    const [data, setData] = useState(null);

    const fetchBlogData = async () => {

    }

    useEffect(() => {},[])

    return (
        <div>
            {resolvedParams.id}
        </div>
    )
}

export default page