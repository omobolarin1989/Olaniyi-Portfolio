import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";


function About() {


   
       const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <FaCode /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "REST APIs", icon: <FaLaptopCode /> },
  ];

return(
     
    <section
      id="about"
      className="bg-white text-[#111116] px-6 md:px-16 py-20 md:py-28"
    >
      
      <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-14">
          <p className="text-purple-600 font-semibold tracking-widest mb-3">
            GET TO KNOW ME
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            More Than Just{" "}
            <span className="text-purple-500">Writing Code.</span>
          </h2>
        </div>

         {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Left Side - Biography */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Who I Am
            </h3>

            <div className="space-y-5 text-gray-600 leading-8">

              <p>
                I'm Olaniyi Olatunbosun, a Frontend Developer
                passionate about building modern, responsive,
                and user-friendly web experiences.
              </p>

              <p>
                With an educational background in Electrical
                Engineering and professional experience in
                Network Operations, I've developed a strong
                interest in technology, problem-solving, and
                creating solutions that make an impact.
              </p>

              <p>
                My focus is on building intuitive web interfaces,
                writing clean and maintainable code, and
                continuously improving my skills with modern
                frontend technologies.
              </p>

              <p>
                I enjoy turning ideas into functional digital
                experiences and I'm always eager to learn,
                grow, and take on new challenges.
              </p>

            </div>

             {/* Small Highlight */}
            <div className="mt-8 border-l-4 border-purple-500 pl-5">
              <p className="font-semibold text-gray-800">
                My Approach
              </p>

              <p className="text-gray-500 mt-2 leading-7">
                Learn continuously. Build thoughtfully.
                Create experiences that matter.
              </p>
            </div>
          </div>

          {/* Right Side - Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              My Technical Skills
            </h3>

            <p className="text-gray-500 mb-8 leading-7">
              Technologies and tools I use to bring ideas
              to life.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-purple-500 hover:bg-purple-50 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-3xl text-purple-500 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>

                  <span className="font-semibold text-sm text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>


      </div>

    </section>

   )

}


export default About;