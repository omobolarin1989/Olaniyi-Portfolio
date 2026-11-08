import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="bg-[#111116] text-white px-6 md:px-16 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* left content */}
        <div className="order-2 md:order-1">
          <p className="text-purple-400 font-semibold mb-5">FRONTEND DEVELOPER</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hello, I'm
            <span className="text-purple-400 block">Olaniyi Olatunbosun</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-5 text-gray-200">
            I build engaging digital experiences.
          </h2>

           <p className="text-gray-400 text-base md:text-lg leading-8 max-w-xl mb-8">
            I'm a Frontend Developer passionate about building
            responsive, accessible, and user-friendly web
            applications that turn ideas into reality.
          </p>

           {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">

            <a
              href="#projects"
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-4 rounded-lg font-semibold flex items-center gap-3 transition"
            >
              View My Projects
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="border border-gray-500 hover:border-purple-400 px-6 py-4 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">

            <a
              href="https://github.com/omobolarin1989"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-purple-400 text-2xl transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/olaniyi-olatunbosun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-purple-400 text-2xl transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:omobolarin1989@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-purple-400 text-2xl transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>
        {/* right content  */}

        <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-full max-w-[380px]">

              {/* Decorative Background */}
            <div className="absolute inset-0 bg-purple-500 rounded-3xl rotate-6 opacity-40"></div>
               {/* Profile Picture */}
            <img
              src="/images/WhatsApp Image 2026-11-04 at 11.04.41 AM.jpeg"
              alt="Portrait of Olaniyi Olatunbosun"
              className="relative w-full h-[420px] md:h-[500px] object-cover object-top rounded-3xl border border-purple-400/30"
            />
            </div>


             </div>
        
      </div>
    </section>
  );
}

export default Hero;
