'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import handler from "./api/imagesRoute";

export default function Home() {

  interface MyObject {
    name: string;
  }

  const [images, setImages] = useState<MyObject[]>([])

  const nameFile = (event: any) =>{
    const selectFiles: string[] = Array.from(event.target.files)
    setImages(selectFiles)
  }
  const datos = {
    nombre: 'Ejemplo',
    valor: 123
  };
  const imageChange = async() =>{
    for (let index = 0; index < images.length; index++) {
      try {
        const respuesta = await fetch('/api/imagesChange', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({name:images[index].name, format: "jpg"})
        })
        if(!respuesta.ok){
          throw new Error(`error al enviar datos: ${respuesta.status}`)
        }
        const dato = await respuesta.json()
        console.log('respuesta del servidor: ', dato);
      } catch (error) {
        console.log("error");
      }
    }
  }
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Agrega la o las imágenes que deseas cambiar el formato.
          </li>
          <li className="tracking-[-.01em]">
            Escoge el formato a cambiarlas.
          </li>
          <li className="tracking-[-.01em]">
            Escoge la carpeta que deseas las guarden.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <input
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            rel="noopener noreferrer"
            type="file"
            multiple
            accept=".avif"
            onChange={nameFile}
            title = "Choose a video please"
          />
          <button onClick={imageChange}>cambiar imagenes</button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
