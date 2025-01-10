import React from "react";
import Image from "next/image";
import Link from "next/link";

const MyProjects = () => {
  return (
    <section className="bg-black text-white sm:min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
      <Link
            href='https://astrology123.netlify.app/' 
            >
        {/* Title Section */}
        <div className="text-5xl font-bold mb-12 relative">
          <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">My projects</h1>
          <span className="absolute bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient right-0 top-0 text-7xl font-bold text-white">
            ×
          </span>
        </div>

        {/* Project Card */}
        <div className="relative flex items-center">
          {/* Project Image */}
          <div className="rounded-lg overflow-hidden">
           
            <Image
              src="/projectsImage.png"
              width={900}
              height={900}
              alt="Project"
              className="w-full h-auto"
            />
          </div>

          {/* Project Details */}

          <div  className="absolute bottom-4 left-4 text-gray-100 bg-gradient-to-t from-black via-black/50 to-transparent p-4 rounded-lg cursor-pointer">
            
            <h2 className="text-3xl font-bold">Astrology</h2>
            <p className="text-lg text-gray-100">2025</p>
            <h1>click Me To visit my website</h1>

            
          </div>
          
        </div>
            </Link>
      </div>
    </section>
  );
};

export default MyProjects;
