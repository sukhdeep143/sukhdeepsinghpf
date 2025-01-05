import React from 'react'

function AboutMe() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-8 p-8  text-white'>
         {/* Text Container */}
      <div className="flex flex-col text-center md:text-left max-w-lg">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg leading-7 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
          consequat quam. Duis nulla est, molestie sed eros id, pretium
          faucibus dolor. Donec ut orci turpis. Aliquam eget nisi dui. Praesent
          at scelerisque purus, in varius arcu. Donec auctor faucibus purus
          vitae eleifend. Suspendisse sodales id lacus at blandit.
        </p>
        <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md">
          Contact Me
        </button>
      </div>

    </div>
  )
}

export default AboutMe