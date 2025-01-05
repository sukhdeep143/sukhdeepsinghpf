import React from 'react'
import Image from 'next/image'

function Aboutimage() {
  return (
    <main className='flex justify-center items-center'>
      <div>
       
         
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-3 sm:p-5   text-white">
      {/* Image Container */}
      <div className="flex justify-center items-center">
        <Image
          src="/typing.jpg" // Place the image in the `public` folder
          alt="About Me"
          width={400} // Adjust dimensions
          height={400}
          className="rounded-full shadow-2xl"
        />
      </div>
      </div>
      </div>

        
       
  
    </main>
  )
}

export default Aboutimage