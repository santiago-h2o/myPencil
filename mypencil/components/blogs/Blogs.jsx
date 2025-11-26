import { assets, blog_data } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Footer from '../Footer';
import Link from 'next/link';

const Blogs = ({ params }) => {
    const [data, setData] = useState(null);
    const fetchBlogData = async () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i])
                console.log(blog_data[i])
                break;
            }
        }
    }

    useEffect(() => {
        fetchBlogData()
    }, [])
    return (data ? <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href='/' >
                <Image src={assets.logo} width={180} height={180} alt='logo' className='w-[130px] sm:w-auto' />
                </Link>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                    Empezar
                    <Image src={assets.arrow} alt='arrow' />
                </button>
            </div>
            <div className='text-center my-24'>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                <Image src={data.author_img} width={60} height={60} alt='' className='mx-auto mt-6 border border-white rounded-full' />
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
            </div>
        </div>

        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image src={data.image} width={1280} height={720} alt='' className='border-8 border-white' />
            <h1 className='my-8 text-[26px] font-semibold'>Introduccion: </h1>
            <p>{data.description}</p>
            <h3 className='my-5 text-[18px] font-semibold'>Paso 1: Autorreflexión y establecimiento de metas</h3>
            <p className='my-3'>Antes de poder gestionar tu estilo de vida, debes tener una comprensión clara de lo que deseas lograr. Comienza reflexionando sobre tus valores, aspiraciones y objetivos a largo plazo.  </p>
            <p className='my-3'>Antes de poder gestionar tu estilo de vida, debes tener una comprensión clara de lo que deseas lograr. Comienza reflexionando sobre tus valores, aspiraciones y objetivos a largo plazo.  </p>

            <h3 className='my-5 text-[18px] font-semibold'>Paso 2: Autorreflexión y establecimiento de metas</h3>
            <p className='my-3'>Antes de poder gestionar tu estilo de vida, debes tener una comprensión clara de lo que deseas lograr. Comienza reflexionando sobre tus valores, aspiraciones y objetivos a largo plazo.  </p>
            <p className='my-3'>Antes de poder gestionar tu estilo de vida, debes tener una comprensión clara de lo que deseas lograr. Comienza reflexionando sobre tus valores, aspiraciones y objetivos a largo plazo.  </p>

            <h3 className='my-5 text-[18px] font-semibold'>Paso 3: Autorreflexión y establecimiento de metas</h3>
            <p className='my-3'>Antes de poder gestionar tu estilo de vida, debes tener una comprensión clara de lo que deseas lograr. Comienza reflexionando sobre tus valores, aspiraciones y objetivos a largo plazo.  </p>
            <p className='my-3'>Antes de poder gestionar tu estilo de vida, debes tener una comprensión clara de lo que deseas lograr. Comienza reflexionando sobre tus valores, aspiraciones y objetivos a largo plazo.  </p>
            <div className='my-24'>
                <p className='text-black font font-semibold my-4'>Compartir este articulo</p>
                <div className='flex'>
                    <Image src={assets.facebook_icon} width={50} alt='' />
                    <Image src={assets.twitter_icon} width={50} alt='' />
                    <Image src={assets.googleplus_icon} width={50} alt='' />
                </div>
            </div>
        </div>
        <Footer />
    </> : <></>
    )
}

export default Blogs

// PHE9lkG1vLsy7IUN
// maxcuello123_db_user
