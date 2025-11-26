import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server"
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";


const loadDB = async () => {
    await ConnectDB();
}

loadDB();

export async function GET(req) {
    console.log("Blog Get Hit")
    return NextResponse.json({ msg: "API WORKED" })
}

export async function POST(req) {
    const formData = await req.formData();
    const timestamp = Date.now()

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer)
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        authorImg: `${formData.get('authorImg')}`,
        image: imgUrl
    }

    await BlogModel.create(blogData);

    return NextResponse.json({success: true, msg: "Blog Added"})
}