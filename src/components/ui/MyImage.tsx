"use client"
import {motion} from "framer-motion";
import React from 'react';
import Image from 'next/image';
import Smedia from './Smedia';

function MyImage() {
  return (
    <main className='flex justify-center gap-10  '>
       <motion.div
      initial={{opacity: 0, y: 100}}
      animate={{
        opacity: 1,
        y: 0,
	  transition:{duration:0.5}
      }}
    >
      
        <div className=' size-fit '  style={{
              backgroundImage: "url('/splash.png')",
              backgroundSize: "300px 300px", // Makes sure the image scales correctly
              backgroundPosition: "top", // Keeps the image centered
              backgroundRepeat: "no-repeat",
              
            }}>
            <Image 
            src={'/SukhdeepSingh.png'}
            width={400}
            height={400}
            alt='Sukhdeep singh image'
            />
        </div>
        </motion.div>
        <div className='flex items-center  '>
            <Smedia />
        </div>
    </main>
  )
}

export default MyImage