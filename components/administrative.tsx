import { Building, Briefcase } from "lucide-react"

const Administrative = () => {
  const roles = [
    {
      title: "In-Charge, Training and Placement",
      institution: "Dept. of Applied Geophysics, IIT(ISM) Dhanbad",
      duration: "July 2022 – Present",
      description: "Overseeing student placement and industry interactions.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />,
    },
    {
      title: "Member, DUGC & DPGC",
      institution: "Dept. of Applied Geophysics, IIT(ISM) Dhanbad",
      duration: "July 2022 – Present",
      description: "Contributing to undergraduate and postgraduate academic governance.",
      icon: <Building size={24} className="text-[#FFD700]" />,
    },
    {
      title: "Chairman, Departmental Grievance Redressal Committee",
      institution: "IIT(ISM) Dhanbad",
      duration: "July 2022 – Present",
      description: "Addressing and resolving departmental academic grievances.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />,
    },
    {
      title: "Scientist-in-Charge, Mumbai Regional Centre",
      institution: "CSIR-NIO",
      duration: "April 2015 – Dec 2018",
      description: "Led regional scientific operations and coastal research activities.",
      icon: <Building size={24} className="text-[#FFD700]" />,
    },
    {
      title: "Decision Unit Leader, DU-74",
      institution: "CSIR-NIO",
      duration: "April 2015 – Dec 2018",
      description: "Managed unit activities and coordinated marine research efforts.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />,
    },
    {
      title: "Project Leader – Marine Ecological Assessment",
      institution: "CSIR-NIO",
      duration: "April 2015 – Dec 2018",
      description: "Led a project on sustainable coastal and shelf development on the west coast of India.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />,
    },
    {
      title: "Decision Unit Leader, DU-38 / DU-72",
      institution: "CSIR-NIO",
      duration: "Sept 2009 – March 2015",
      description: "Directed research units focusing on seabed and geological studies.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />,
    },
    {
      title: "Project Leader – Marine Geo-scientific Applications",
      institution: "CSIR-NIO",
      duration: "Sept 2009 – March 2015",
      description: "Led geological surveys of near-shore seabed and sub-seabed features across India.",
      icon: <Briefcase size={24} className="text-[#FFD700]" />,
    },
  ];
  

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
