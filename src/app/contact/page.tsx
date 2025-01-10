import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React from "react";
import { Teko } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const NewFontType = Teko({
  weight: ["700"],

  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function page() {
  return (
    <main
      className={`${NewFontType.className} min-h-screen  sm:pt-5 bg-gradient-to-r  via-purple-900 from-violet-800 to-black `}
    >
      <Header />
      <div className="grid p-5 sm:text-5xl text-3xl gap-5 justify-center sm:grid-cols-2">
        <div className=" flex flex-col text-center gap-5 items-center">
          <div>Instgram</div>
          <Image
            src="/instgram.png" // Place the image in the `public` folder
            alt="About Me"
            width={400} // Adjust dimensions
            height={400}
            className="rounded-lg shadow-2xl"
          />
          <Link
          href='https://www.instagram.com/sukhdeep_singh_bhagat/'
           className=" rounded-xl p-2 bg-pink-600 hover:bg-pink-800 shadow-2xl hover:font-bold">
            Follow Me
          </Link>
        </div>

        <div className=" flex flex-col text-center gap-5 items-center">
          {" "}
          <div>X</div>
          <Image
            src="/twitter.png" // Place the image in the `public` folder
            alt="About Me"
            width={400} // Adjust dimensions
            height={400}
            className="rounded-lg shadow-2xl"
          />
          <Link
          href='https://x.com/ManiBhagat3'
           className=" rounded-xl p-2 bg-pink-600 hover:bg-pink-800 shadow-2xl hover:font-bold">
            Follow Me
          </Link>
        </div>

        <div className=" flex flex-col text-center gap-5 items-center">
          {" "}
          <div>Facebook</div>
          <Image
            src="/facebook.png" // Place the image in the `public` folder
            alt="About Me"
            width={400} // Adjust dimensions
            height={400}
            className="rounded-lg shadow-2xl"
          />
          <Link
          href='https://www.facebook.com/mani.bhagat.5623/'
           className=" rounded-xl p-2 bg-pink-600 hover:bg-pink-800 shadow-2xl hover:font-bold">
            Follow Me
          </Link>
        </div>

        <div className=" flex flex-col text-center gap-5 items-center">
          {" "}
          <div>LinkedIn</div>
          <Image
            src="/linkedn.png" // Place the image in the `public` folder
            alt="About Me"
            width={400} // Adjust dimensions
            height={400}
            className="rounded-lg shadow-2xl"
          />
          <Link
          href='https://www.linkedin.com/in/sukhdeep-singh-417a98184/'
           className=" rounded-xl p-2 bg-pink-600 hover:bg-pink-800 shadow-2xl hover:font-bold">
            Follow Me
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default page;
