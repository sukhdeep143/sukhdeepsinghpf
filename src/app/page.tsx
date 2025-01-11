'use client'
import Aboutimage from "@/components/ui/Aboutimage";
import AboutMe from "@/components/ui/AboutMe";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import MyImage from "@/components/ui/MyImage";
import MyProjects from "@/components/ui/ProjectsCreated";
import Skills from "@/components/ui/Skills";
import SkillsTwo from "@/components/ui/SkillsTwo";
import TextFront from "@/components/ui/TextFront";
import {Teko} from "next/font/google";
import {motion} from "framer-motion";




const NewFontType = Teko({
  weight: ['700', ],

  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',})



export default function Home() {
  return (
    <main className={`${NewFontType.className} min-h-screen  sm:pt-5 bg-gradient-to-r  via-purple-900 from-violet-800 to-black`}>
     <Header />

     

     <div className="grid m-4 gap-4 sm:grid-cols-2 ">
        <div className="min-h-[100px] hover:sm:border border-purple-600 shadow  rounded-lg flex justify-center items-center flex-col text-white pb-2"> 
          <TextFront />
        </div>
        <div className="min-h-[100px] hover:sm:border border-purple-600 shadow rounded-lg">
          <MyImage />
        </div>
     </div>

 
       <div className="flex sm:text-8xl text-3xl sm:pt-16 pt-6 justify-center">
        <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient"> Let`s Dive Into My World</h1>
       </div>



     <div className="min-h-screen ">
       <div className="grid sm:grid-cols-2 m-4 gap-4 ">
          <div className="min-h-[100px] rounded-xl">
              <Aboutimage />
          </div>
          <div className="min-h-[100px] sm:pt-14 rounded-xl" >
            <AboutMe />
          </div>
       </div>
       <div className="flex sm:text-8xl text-5xl  justify-center">
        <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">My Skills</h1>
       </div>
       <motion.div
      initial={{opacity: 0, y: 100}}
      animate={{
        opacity: 1,
        y: 0,
	  transition:{duration:0.5}
      }}
    >
       <div className="grid sm:grid-cols-2 m-4 gap-4">
          <div className="min-h-[100px] rounded-xl">
              <Skills/>
       </div>
          <div>
              <SkillsTwo />

              

          </div>


       </div>
       </motion.div>
       <MyProjects />
       {/* <ContactMe /> */}
       <Footer />
     </div>
          
    </main>
  );
}
