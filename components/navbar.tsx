"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Qualifications", href: "#qualifications" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Publications", href: "#publications" },
    {name:"Gallery", href: "#gallery"},
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed bg-[#003865] w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#003865] shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-white font-serif font-bold text-xl">
            {scrolled && (
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FFD700]">
                <Image
                  src="https://www.iitism.ac.in/storage/FacultyDetails/IMG_174065757567c053a7ec0ab.JPG"
                  alt="Prof. Anil Kumar Chaubey"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <span>Prof. A.K. Chaubey</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#FFD700] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#003865] mt-2 py-4 px-2 rounded-lg">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#FFD700] transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
