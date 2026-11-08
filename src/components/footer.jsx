import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

    const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

 return (
    <footer className="bg-[#111116] text-white px-6 md:px-16 pt-16 pb-8">

      <div className="max-w-7xl mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">

          {/* Logo and Description */}
          <div>
            <a
              href="#home"
              className="text-3xl font-bold"
            >
              Olaniyi<span className="text-purple-400">.</span>
            </a>

            <p className="text-gray-400 leading-7 mt-5 max-w-sm">
              Frontend Developer passionate about creating
              responsive, accessible, and user-friendly
              digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400 transition w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Connect With Me
            </h3>

            <div className="flex items-center gap-5">

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

            <p className="text-gray-400 mt-5">
              Let's build something great together.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Olaniyi Olatunbosun.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition text-sm"
          >
            Back to Top
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
 );

}

export default Footer;