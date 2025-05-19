import { Mail, Phone } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-20"
      // style={{
      //   backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
      // }}
    >
      <div className="absolute inset-0 bg-[#003865] opacity-80"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#FFD700] shadow-2xl relative z-10">
              <Image
                src="https://www.iitism.ac.in/storage/FacultyDetails/IMG_174065757567c053a7ec0ab.JPG"
                alt="Prof. Anil K. Chaubey"
                width={256}
                height={256}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -inset-1 bg-[#FFD700] opacity-20 rounded-full blur-md"></div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-[#FFD700] rounded-full"></div>
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#003865] rounded-full border-2 border-[#FFD700]"></div>
          </div>

          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-white mb-4 font-serif text-4xl md:text-5xl">Prof. Anil K. Chaubey</h1>

            <div className="h-1 w-32 bg-[#FFD700] mx-auto md:mx-0 mb-6"></div>

            <h2 className="text-white text-xl md:text-2xl mb-6 font-serif">
              Visiting Professor, Department of Applied Geophysics
            </h2>

            <h3 className="text-white text-lg md:text-xl mb-8 font-serif">
              Indian Institute of Technology (ISM), Dhanbad
            </h3>

            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-white">
                <Mail size={18} className="text-[#FFD700]" />
                <span>chaubeyrcm@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone size={18} className="text-[#FFD700]" />
                <span>+91 8369289939</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="accent-btn inline-block transform transition-transform hover:scale-105">
                Get in Touch
              </a>
              <a
                href="#research"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#FFD700] bg-transparent text-[#FFD700] px-6 py-2 text-sm font-medium shadow hover:bg-[#FFD700] hover:text-[#003865] transform transition-transform hover:scale-105"
              >
                View Research
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#f5f5f5"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
