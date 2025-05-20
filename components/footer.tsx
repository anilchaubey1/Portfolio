import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-[#003865] text-white py-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFD700] opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFD700]">
                <Image
                  src="https://www.iitism.ac.in/storage/FacultyDetails/IMG_174065757567c053a7ec0ab.JPG"
                  alt="Prof. Anil K. Chaubey"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-[#FFD700]">Prof. Anil K. Chaubey</h3>
            </div>
            <p className="mb-2">Visiting Professor</p>
            <p className="mb-2">Department of Applied Geophysics</p>
            <p>Indian Institute of Technology (ISM), Dhanbad</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#FFD700] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#qualifications" className="hover:text-[#FFD700] transition-colors">
                  Qualifications
                </Link>
              </li>
              <li>
                <Link href="#research" className="hover:text-[#FFD700] transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#publications" className="hover:text-[#FFD700] transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#FFD700] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="text-[#FFD700] mr-2" />
                <span>chaubeyrcm@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#FFD700] mr-2" />
                <span>+91 8369289939</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-[#FFD700] mr-2 mt-1" />
                <span>Department of Applied Geophysics, IIT (ISM), Dhanbad, Jharkhand - 826004, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p>Made with ❤️ for academic excellence</p>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} Prof. Anil K. Chaubey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
