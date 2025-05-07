import {  Waves, Globe, Layers,Activity,Landmark,ScanLine,Map, ShieldCheck} from "lucide-react"

const Specialization = () => {
  const specializations = [
    {
      title: "Marine Geophysics",
      icon: <Waves size={24} className="text-[#FFD700]" />,
      description: "Gravity, magnetic, and seismic methods applied in marine environments for geological and tectonic studies."
    },
    {
      title: "Continental Margins and EEZ",
      icon: <Globe size={24} className="text-[#FFD700]" />,
      description: "Study of geological structures and resource potential along continental margins and Exclusive Economic Zones (EEZ)."
    },
    {
      title: "Ocean-Floor Morphology and Tectonics",
      icon: <Layers size={24} className="text-[#FFD700]" />,
      description: "Research on ocean-floor features, plate tectonics, and seabed evolution in active and passive margins."
    },
    {
      title: "Lithosphere and Spreading Regions",
      icon: <Activity size={24} className="text-[#FFD700]" />,
      description: "Analysis of lithospheric processes and dynamics in actively spreading oceanic regions."
    },
    {
      title: "Archaeological Geophysics",
      icon: <Landmark size={24} className="text-[#FFD700]" />,
      description: "Application of geophysical techniques to explore and study submerged and coastal archaeological sites."
    },
    {
      title: "Extended Continental Shelf Mapping",
      icon: <Map size={24} className="text-[#FFD700]" />,
      description: "Delimitation and mapping of the outer limits of the continental shelf under UNCLOS guidelines."
    },
    {
      title: "High-Resolution Subsurface Imaging",
      icon: <ScanLine size={24} className="text-[#FFD700]" />,
      description: "Near-shore geophysical surveys for detailed imaging of subsurface features."
    },
    {
      title: "Coastal Zone Management",
      icon: <ShieldCheck size={24} className="text-[#FFD700]" />,
      description: "Geospatial and geophysical support for sustainable coastal development and regulatory compliance."
    }
  ];
  

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
