import React from "react";

function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center  justify-center   text-white">
      {/* Text Container */}
      <div className="flex flex-col text-center sm:text-left max-w-lg">
        <h1
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-center animate-gradient">
          About Me
        </h1>
        
        <p className="text-lg sm:text-2xl leading-7 text-teal-100 hover:font-extralight text-center ">
          I am a dedicated and skilled front-end developer with a passion for
          creating seamless and visually appealing user experiences. Currently
          pursuing my Master of Computer Applications (MCA), I am deeply
          invested in enhancing my technical expertise and expanding my
          knowledge base. With hands-on experience in front-end development, I
          specialize in building responsive and dynamic web interfaces that
          prioritize user engagement and accessibility.
        </p>
        
        {/* <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md">
          Contact Me
        </button> */}
      </div>
    </div>
  );
}

export default AboutMe;
