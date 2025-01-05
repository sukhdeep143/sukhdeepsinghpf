import React from "react";

function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8  text-white">
      {/* Text Container */}
      <div className="flex flex-col text-center md:text-left max-w-lg">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg leading-7 mb-6">
          I am a dedicated and skilled front-end developer with a passion for
          creating seamless and visually appealing user experiences. Currently
          pursuing my Master of Computer Applications (MCA), I am deeply
          invested in enhancing my technical expertise and expanding my
          knowledge base. With hands-on experience in front-end development, I
          specialize in building responsive and dynamic web interfaces that
          prioritize user engagement and accessibility. My curiosity drives me
          to constantly learn new tools, technologies, and best practices in the
          ever-evolving world of development. I have also explored the broader
          realm of full-stack development, which has given me a comprehensive
          understanding of the development lifecycle. My journey as a developer
          is marked by continuous growth, and I am committed to excelling
          further in the field.
        </p>
        <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
