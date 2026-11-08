import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";


function Contact() {

   return (

       <section
      id="contact"
      className="bg-white text-[#111116] px-6 md:px-16 py-20 md:py-28"
    >

       <div className="max-w-7xl mx-auto">
             {/* Section Heading */}
        <div className="mb-12">
          <p className="text-purple-600 font-semibold tracking-widest mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Let's Work{" "}
            <span className="text-purple-500">
              Together.
            </span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl leading-8">
            I'm always open to discussing new opportunities,
            interesting projects, and collaborations.
            Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

          {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Email Details */}
          <div className="bg-[#111116] text-white rounded-2xl p-8 md:p-10">

            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
              <FaEnvelope className="text-purple-400 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Have a project in mind?
            </h3>

            <p className="text-gray-400 leading-7 mb-8">
              Whether you have a project, a job opportunity,
              or simply want to connect, my inbox is always open.
            </p>

            <a
              href="mailto:omobolarin1989@gmail.com"
              className="inline-flex items-center gap-3 bg-purple-500 hover:bg-purple-600 text-white px-6 py-4 rounded-lg font-semibold transition"
            >
              Send Me an Email
              <FaArrowRight />
            </a>

          </div>

          {/* Social Links */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Connect With Me
            </h3>

            <p className="text-gray-600 leading-7 mb-8">
              You can also find me on these platforms
              to explore my work and professional background.
            </p>

            <div className="flex flex-col gap-5">

              {/* GitHub */}
              <a
                href="https://github.com/omobolarin1989"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 border border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition group"
              >
                <FaGithub className="text-3xl text-purple-500" />

                <div>
                  <h4 className="font-bold group-hover:text-purple-600">
                    GitHub
                  </h4>
                  <p className="text-sm text-gray-500">
                    Explore my projects and code
                  </p>
                </div>

              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/olaniyi-olatunbosun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 border border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition group"
              >
                <FaLinkedinIn className="text-3xl text-purple-500" />

                <div>
                  <h4 className="font-bold group-hover:text-purple-600">
                    LinkedIn
                  </h4>
                  <p className="text-sm text-gray-500">
                    Let's connect professionally
                  </p>
                </div>

              </a>

              {/* Email */}
              <a
                href="mailto:omobolarin1989@gmail.com"
                className="flex items-center gap-5 p-5 border border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition group"
              >
                <FaEnvelope className="text-3xl text-purple-500" />

                <div>
                  <h4 className="font-bold group-hover:text-purple-600">
                    Email
                  </h4>
                  <p className="text-sm text-gray-500">
                    omobolarin1989@gmail.com
                  </p>
                </div>

              </a>

            </div>
          </div>

        </div>
         
       </div>


    </section>

   )

}

export default Contact;