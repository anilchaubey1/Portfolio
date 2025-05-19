import { GraduationCap, Award, School } from "lucide-react"
import Image from "next/image"

const AcademicQualifications = () => {
  const qualifications = [
    {
      degree: "Post-Doc",
      university: "IUEM, Université de Bretagne Occidentale, Plouzané, France",
      year: 2000,
      details: "Marine Magnetic",
      icon: <GraduationCap size={24} className="text-[#FFD700]" />,
    },
    {
      degree: "Ph.D.",
      university: "Goa University",
      year: 1998,
      details: "Marine Sciences",
      icon: <Award size={24} className="text-[#FFD700]" />,
    },
    {
      degree: "M.Tech.",
      university: "University of Roorkee (Now IIT, Roorkee)",
      year: 1983,
      details: "Applied Geophysics",
      icon: <School size={24} className="text-[#FFD700]" />,
    },
    {
      degree: "B.Sc.",
      university: "Gorakhpur University",
      year: 1979,
      details: "Physics, Chemistry and Maths",
      icon: <School size={24} className="text-[#FFD700]" />,
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
                  alt="Prof. Anil K. Chaubey"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-top"
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
