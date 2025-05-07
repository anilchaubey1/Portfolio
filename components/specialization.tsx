import { Compass, Waves, Mountain, Globe, Layers } from "lucide-react"

const Specialization = () => {
  const specializations = [
    {
      title: "Marine Geophysics",
      icon: <Waves size={24} className="text-[#FFD700]" />,
      description: "Expert in marine geophysical surveys and interpretation of marine geophysical data.",
    },
    {
      title: "Gravity and Magnetic Methods",
      icon: <Compass size={24} className="text-[#FFD700]" />,
      description: "Specialized in gravity and magnetic data acquisition, processing, and interpretation.",
    },
    {
      title: "Tectonics",
      icon: <Layers size={24} className="text-[#FFD700]" />,
      description: "Research focus on tectonic evolution of the Indian Ocean and surrounding continental margins.",
    },
    {
      title: "Oceanography",
      icon: <Globe size={24} className="text-[#FFD700]" />,
      description: "Extensive experience in oceanographic research and expeditions.",
    },
    {
      title: "Geophysical Exploration",
      icon: <Mountain size={24} className="text-[#FFD700]" />,
      description: "Applied geophysics for resource exploration and geological mapping.",
    },
  ]

  return (
    <section id="specialization" className="section-container">
      <h2 className="section-title">Areas of Specialization</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specializations.map((spec, index) => (
          <div key={index} className="card hover-lift hover:border-l-4 hover:border-[#FFD700] card-gradient">
            <div className="flex items-start">
              <div className="p-3 bg-[#003865] rounded-full shadow-md hover-glow">{spec.icon}</div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-[#003865]">{spec.title}</h3>
                <p className="text-gray-600">{spec.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Specialization
