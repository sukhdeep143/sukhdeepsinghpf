import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import React from 'react'
import {Teko} from "next/font/google";

const NewFontType = Teko({
  weight: ['700', ],

  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',})


function page() {
  return (
    <main className={`${NewFontType.className} min-h-screen  sm:pt-5 bg-gradient-to-r  via-purple-900 from-violet-800 to-black`}>
        <Header />
            <div className='min-h-full'> 
                contact
            </div>
        <Footer />
    </main>
  )
}

export default page