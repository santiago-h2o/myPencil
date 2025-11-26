'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const AddProduct = () => {

    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        title: '',
        description: '',
        category: 'Startup',
        author: 'Alex Bennet',
        authorImage: "/author_img.png"
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }));
        console.log(data)
    }

    return (
        <>
            <form action="" className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl'>Subir tnumbnail</p>
                <label htmlFor="image" className='cursor-pointer'>
                    <Image src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt='' className='mt-4' />
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                <p className='text-xl mt-4'>Titulo</p>
                <input onChange={onChangeHandler} value={data.title} name='title' type="text" placeholder='escribe aqui...' className='w-full sm:w-[500px] mt-4 px-4 py-3 border outline-none' required />
                <p className='text-xl mt-4'>Descripcion</p>
                <textarea onChange={onChangeHandler} value={data.description} name='description'  type="text" placeholder='escribe aqui el contenido...' rows={6} className='w-full sm:w-[500px] mt-4 px-4 py-3 border outline-none' required />
                <p className='text-xl mt-4'>Categoria</p>
                <select name="category" onChange={onChangeHandler} value={data.description} className='w-40 mt-4 px-4 py-3 border text-gray-500 outline-none'>
                    <option value="Startup">Start-Up</option>
                    <option value="Technology">Tecnologia</option>
                    <option value="Lifestyle">Buenos Habitos</option>
                </select>
                <br />
                <button type="submit" className='mt-8 w-40 h-12 bg-black text-white'>Agregar</button>
            </form>
        </>
    )
}

export default AddProduct