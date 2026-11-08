import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

   const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return(

  <>
     <nav className="bg-[#111116] text-white px-6 md:px-16 py-6">
      
        <div className="max-w-7xl mx-auto flex items-center hidden md:flex gap-10 justify-between">

          {/* Desktop navigation */}

          {/* Logo */}
<a href="#home" className="text-2xl font-bold">
  Olaniyi<span className="text-purple-400">.</span>
</a>

            <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-purple-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* mobile Menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className ="md:hidden text-2xl"
          aria-label = {menuOpen ? "Close menu" : "Open menu"}
          aria-expanded = {menuOpen ? "true" : "false"}
        >
  {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

        </div>

        {/* mobile Navigation    */}

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-6 pt-8 pb-4">
            {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
          </div>
          
        )}

     </nav>
  </>

   
  )

}

export default Navbar;