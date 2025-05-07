import { Briefcase, Navigation, Building } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      role: "Visiting Professor",
      institution: "Indian Institute of Technology (ISM), Dhanbad",
      duration: "2020 - Present",
      description: "Teaching advanced courses in Applied Geophysics and guiding research scholars.",
      icon: <Building size={24} className="text-[#FFD700]" />,
    },
    {
      role: "Chief Scientist & Head, Marine Geophysics",
      institution: "CSIR-National Institute of Oceanography, Goa",
      duration: "2010 - 2020",
      description: "Led major marine geophysical expeditions and research projects in the Indian Ocean.",
      icon: <Navigation size={24} className="text-[#FFD700]" />,
    },
    {
      role: "Principal Scientist",
      institution: "CSIR-National Institute of Oceanography, Goa",
      duration: "2000 - 2010",
      description: "Conducted research on marine geophysics and tectonics of the Indian Ocean region.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />,
    },
    {
      role: "Scientist",
      institution: "CSIR-National Institute of Oceanography, Goa",
      duration: "1985 - 2000",
      description: "Participated in numerous oceanographic expeditions and research cruises.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />,
    },
  ]

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Professional Experience</h2>

      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="flex items-start">
              <div className="mt-1">{exp.icon}</div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-[#003865]">{exp.role}</h3>
                <p className="text-lg font-medium">{exp.institution}</p>
                <p className="text-[#FFD700] font-bold">{exp.duration}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
