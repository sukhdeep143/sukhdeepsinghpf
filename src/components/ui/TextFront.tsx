"use client";
import {motion} from "framer-motion";
import React from 'react'

function TextFront() {
  return (
   <main className='flex justify-center items-center flex-col '>
     <motion.div
      initial={{opacity: 0, y: 100}}
      animate={{
        opacity: 1,
        y: 0,
	  transition:{duration:0.5}
      }}
    >
        <h2 className='sm:text-8xl text-5xl sm:min-h-28 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient '>Web developer</h2>
        <h1 className='text-5xl sm:min-h-60 flex  items-center font-bold min-h-52 text-\'
        style={{
          backgroundImage: "url('/outline.png')",
          backgroundSize: "200px 200px", // Makes sure the image scales correctly
          backgroundPosition: "center", // Keeps the image centered
          backgroundRepeat: "no-repeat",
          animation: "rotateBg 5s linear infinite"
         
          
        }}
        
        >Sukhdeep Singh</h1>
        <p className="text-xl sm:text-2xl hover:text-4xl pt-5 line-clamp-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient text-center transition-transform duration-500 ease-in-out hover:scale-105 ">
  Hi, This is Sukhdeep Singh Web Developer Working Remotely from India
</p>
</motion.div>
   </main>
  )
}

export default TextFront