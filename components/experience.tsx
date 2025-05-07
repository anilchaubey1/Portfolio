import { Briefcase, Navigation, Building,School } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      role: "Visiting Professor",
      institution: "Department of Applied Geophysics, IIT (ISM), Dhanbad",
      duration: "10 Aug 2021 – Present",
      description: "Teaching and guiding research in applied geophysics and marine geosciences.",
      icon: <Building size={24} className="text-[#FFD700]" />
    },
    {
      role: "Consultant",
      institution: "ESSO-NCPOR, Goa",
      duration: "16 Jul 2020 – 09 Aug 2021",
      description: "Provided expertise on polar and marine geophysical research programs.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />
    },
    {
      role: "Chief Scientist & Scientist-in-Charge",
      institution: "CSIR-NIO, Regional Centre, Mumbai",
      duration: "01 Apr 2015 – 31 Dec 2018",
      description: "Oversaw regional marine geophysical operations and administrative leadership.",
      icon: <Navigation size={24} className="text-[#FFD700]" />
    },
    {
      role: "Chief Scientist",
      institution: "CSIR-NIO, Goa",
      duration: "30 Jul 2009 – 31 Mar 2015",
      description: "Led national and international collaborative geophysical expeditions.",
      icon: <Navigation size={24} className="text-[#FFD700]" />
    },
    {
      role: "Scientist F",
      institution: "CSIR-NIO, Goa",
      duration: "30 Jul 2004 – 29 Jul 2009",
      description: "Advanced research on seabed morphology and tectonic processes.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />
    },
    {
      role: "Scientist EII",
      institution: "CSIR-NIO, Goa",
      duration: "30 Jul 1999 – 29 Jul 2004",
      description: "Marine geophysical data acquisition and tectonic studies.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />
    },
    {
      role: "Scientist EI",
      institution: "CSIR-NIO, Goa",
      duration: "30 Jul 1994 – 29 Jul 1999",
      description: "Participated in several oceanographic surveys and field research.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />
    },
    {
      role: "Scientist C",
      institution: "CSIR-NIO, Goa",
      duration: "30 Jul 1989 – 29 Jul 1994",
      description: "Contributed to marine gravity and magnetic data analysis.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />
    },
    {
      role: "Scientist B",
      institution: "CSIR-NIO, Goa",
      duration: "30 Jul 1984 – 29 Jul 1989",
      description: "Worked on geophysical instrumentation and data processing.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />
    },
    {
      role: "Research Assistant",
      institution: "University of Roorkee (Now IIT Roorkee)",
      duration: "01 Sep 1983 – 25 Jun 1984",
      description: "Assisted in research and teaching in applied geophysics.",
      icon: <School size={24} className="text-[#FFD700]" />
    }
  ];
  

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
