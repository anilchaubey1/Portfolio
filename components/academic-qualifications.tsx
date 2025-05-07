import { GraduationCap, Award, School } from "lucide-react"
import Image from "next/image"

const AcademicQualifications = () => {
  const qualifications = [
    {
      degree: "Ph.D. in Geophysics",
      university: "Banaras Hindu University",
      year: "1985",
      icon: <GraduationCap size={24} className="text-[#FFD700]" />,
      details: "Thesis on Marine Geophysics and Tectonics of the Indian Ocean",
    },
    {
      degree: "M.Tech. in Applied Geophysics",
      university: "Indian School of Mines (now IIT ISM), Dhanbad",
      year: "1980",
      icon: <Award size={24} className="text-[#FFD700]" />,
      details: "Specialized in Gravity and Magnetic methods",
    },
    {
      degree: "B.Sc. (Hons) in Physics",
      university: "Banaras Hindu University",
      year: "1978",
      icon: <School size={24} className="text-[#FFD700]" />,
      details: "First Class with Distinction",
    },
  ]

  return (
    <section id="qualifications" className="section-container relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-[#003865] opacity-5"></div>
      <div className="absolute -left-20 -top-20 w-48 h-48 rounded-full bg-[#FFD700] opacity-5"></div>

      <div className="relative z-10">
        <h2 className="section-title">Academic Qualifications</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 hidden md:flex justify-center items-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-[#003865] shadow-lg">
                <Image
                  src="https://www.iitism.ac.in/storage/FacultyDetails/IMG_174065757567c053a7ec0ab.JPG"
                  alt="Prof. Anil Kumar Chaubey"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#FFD700] rounded-full"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#003865] rounded-full border border-[#FFD700]"></div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="space-y-0">
              {qualifications.map((qual, index) => (
                <div key={index} className="timeline-item">
                  <div className="flex items-start">
                    <div className="mt-1">{qual.icon}</div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-[#003865]">{qual.degree}</h3>
                      <p className="text-lg">
                        {qual.university}, {qual.year}
                      </p>
                      <p className="text-gray-600">{qual.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcademicQualifications
