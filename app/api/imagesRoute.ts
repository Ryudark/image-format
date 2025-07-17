'use server'
import { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";

interface changeImageOptions{
    imageRoute: string,
    outFormat: 'jpg'
}

const handler = async (req:NextApiRequest, res: NextApiResponse)=>{
    console.log("ingresa");

    // const formatChangeImage = async ({imageRoute, outFormat}:changeImageOptions) =>{
    const {imageRoute, outFormat} =req.body as changeImageOptions
    try {
        await sharp(imageRoute)
        .toFormat(outFormat)
        .toFile(`output.${outFormat}`);
        // console.log('imagen convertida con éxito');
        res.status(200).json({message:"imagen convertida con éxito"})
    } catch (error) {
        // console.log('error convertir imagen');
        res.status(500).json({message:"error al convertir la imagen"})
    }
}

export default handler;