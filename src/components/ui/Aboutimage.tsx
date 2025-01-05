import React from 'react'
import Image from 'next/image'

function Aboutimage() {
  return (
    <main className='flex justify-center items-center'>
      <div>

        <Image
            className='rounded-full shadow-2xl '
            src={'/typing.jpg'}
            width={400}
            height={400}
            alt='Laptop image'
            />
        </div>
        
       
  
    </main>
  )
}

export default Aboutimage