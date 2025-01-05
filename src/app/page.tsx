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
     <div className="min-h-screen ">
       <div className="grid sm:grid-cols-2 m-4 gap-4 ">
          <div className="min-h-[100px] rounded-xl">
              <Aboutimage />
          </div>
          <div className="min-h-[100px] sm:pt-36 rounded-xl" >
            <AboutMe />
          </div>
       </div>
       <div className="flex sm:text-8xl text-5xl  justify-center">
        <h1>My Skills</h1>
       </div>
       <div className="grid sm:grid-cols-2 m-4 gap-4">
          <div className="min-h-[100px] rounded-xl">
              <Skills/>
       </div>
          <div>
              <SkillsTwo />

              

          </div>


       </div>
       <MyProjects />
       {/* <ContactMe /> */}
       <Footer />
     </div>
          
    </main>
  );
}
