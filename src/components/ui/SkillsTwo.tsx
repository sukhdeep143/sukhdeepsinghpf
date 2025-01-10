const SkillsTwo = () => {
    const skills = [
      { name: "ReactJs", level: 6 },
      { name: "NextJs", level: 5 },
      { name: "NodeJs", level: 6 },
      { name: "MongoDB", level: 7 },
    ];
  
    return (
      <div className="flex flex-col gap-6 sm:p-8  text-white">
        {skills.map((skill, index) => (
          <div key={index} className="flex pl-7 pr-7  items-center justify-between">
            {/* Skill Name */}
            <p className=" bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient sm:text-4xl text-xl">{skill.name}</p>
  
            {/* Skill Dots */}
            <div className="flex gap-1">
              {Array.from({ length: 10 }).map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`w-3 h-3 rounded-full ${
                    dotIndex < skill.level
                      ? "bg-pink-500"
                      : "bg-gray-700"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default SkillsTwo;
  