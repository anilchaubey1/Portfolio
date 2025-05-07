import { Building, Briefcase } from "lucide-react"

const Administrative = () => {
  const roles = [
    {
      title: "Member, Academic Council",
      institution: "IIT (ISM) Dhanbad",
      duration: "2021 - Present",
      description: "Contributing to academic policy decisions and curriculum development.",
      icon: <Building size={24} className="text-[#FFD700]" />,
    },
    {
      title: "Head, Marine Geophysics Division",
      institution: "CSIR-National Institute of Oceanography",
      duration: "2015 - 2020",
      description: "Led a team of 25 scientists and technical staff, managed research projects worth over ₹20 crores.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />,
    },
    {
      title: "Member, Research Advisory Committee",
      institution: "Ministry of Earth Sciences",
      duration: "2012 - 2018",
      description: "Evaluated research proposals and monitored ongoing projects in marine sciences.",
      icon: <Building size={24} className="text-[#FFD700]" />,
    },
    {
      title: "Coordinator, Indo-German Marine Research Program",
      institution: "CSIR-NIO & GEOMAR",
      duration: "2010 - 2015",
      description: "Coordinated joint research initiatives between Indian and German marine research institutions.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />,
    },
  ]

  return (
    <section id="administrative" className="section-container">
      <h2 className="section-title">Administrative Roles</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-[#003865] text-white">
            <tr>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Institution</th>
              <th className="py-3 px-4 text-left">Duration</th>
              <th className="py-3 px-4 text-left">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {roles.map((role, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-[#003865] rounded-full mr-2">{role.icon}</div>
                    <span className="font-medium">{role.title}</span>
                  </div>
                </td>
                <td className="py-3 px-4">{role.institution}</td>
                <td className="py-3 px-4 text-[#003865] font-medium">{role.duration}</td>
                <td className="py-3 px-4 text-gray-600">{role.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Administrative
