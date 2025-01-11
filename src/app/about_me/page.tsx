import Footer from "@/components/ui/Footer";
import {Teko} from "next/font/google";
import Header from "@/components/ui/Header";
import Link from "next/link";

const NewFontType = Teko({
  weight: ['700', ],

  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',})
function page() {
  return (
    <main className={`${NewFontType.className} min-h-screen  sm:pt-5 bg-gradient-to-r  via-purple-900 from-violet-800 to-black`}>
      <Header  />


      <div className="flex justify-center">
      <Link 
          href='/'
        >
        <button className="text-center rounded-2xl border hover:font-bold bg-yellow-600 hover:bg-yellow-700 hover:text-black p-5 text-white">Go Back To Home Page </button>
        </Link>
        </div>
      <Footer />
    </main>
  )
}

export default page