import { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";

interface changeImageOptions{
    imageRoute: string,
    outFormat: 'jpg'
}

// export async function GET(){
//     console.log("ingresa");
//     return new Response(JSON.stringify(user),{
//         status:200,
//         headers:{'Content-Type': 'application/json'}
//     })
// }
export async function POST(request: Request){
    const data = await request.json()
    try {
        const nameShort = data.name.slice(0, -5);
        await sharp(`C:/Users/Steven/Downloads/${data.name}`)
        .toFormat(data.format)
        .toFile(`C:/Users/Steven/Downloads/${nameShort}.${data.format}`);
        return new Response(JSON.stringify({message:"imagen convertida con éxito"}),{
        status:200,
        headers:{'Content-Type': 'application/json'}
    })
    } catch (error) {
        return new Response(JSON.stringify(""),{
        status:500,
        headers:{'Content-Type': 'application/json'}
    })
    }
}