import React from 'react'

function TextFront() {
  return (
   <main className='flex justify-center items-center flex-col '>
        <h2 className='sm:text-8xl text-2xl sm:min-h-28 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient '>Web developer</h2>
        <h1 className='text-5xl sm:min-h-60 flex  items-center font-bold min-h-52 '
        style={{
          backgroundImage: "url('/outline.png')",
          backgroundSize: "200px 200px", // Makes sure the image scales correctly
          backgroundPosition: "center", // Keeps the image centered
          backgroundRepeat: "no-repeat",
          animation: "rotateBg 5s linear infinite"
         
          
        }}
        
        >Sukhdeep Singh</h1>
        <p className='text-xl  line-clamp-3 '>Hi, This is Sukhdeep Singh <br/>Web Developer<br/> Working Remotely from India </p>
   </main>
  )
}

export default TextFront