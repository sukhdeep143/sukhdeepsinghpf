import React from 'react'
import Image from 'next/image'

function Aboutimage() {
  return (
    <main className='flex justify-center items-center'>
      <div>
       <div className='flex justify-center text-2xl sm:text-5xl'>
        <h1>Lets dive into my World</h1>
       </div>
         
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-3 sm:p-5   text-white">
      {/* Image Container */}
      <div className="flex justify-center items-center">
        <Image
          src="/typing.jpg" // Place the image in the `public` folder
          alt="About Me"
          width={500} // Adjust dimensions
          height={500}
          className="rounded-full shadow-lg"
        />
      </div>
      </div>
      </div>

        
       
  
    </main>
  )
}

export default Aboutimage