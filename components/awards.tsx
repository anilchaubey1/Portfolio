import { Award, Medal, Trophy } from "lucide-react"

const Awards = () => {
  const awards = [
    {
      title: "National Geoscience Award",
      organization: "Ministry of Mines, Government of India",
      year: "2018",
      description: "For outstanding contributions to Marine Geosciences",
      icon: <Trophy size={24} className="text-[#FFD700]" />,
    },
    {
      title: "CSIR Technology Award",
      organization: "Council of Scientific & Industrial Research",
      year: "2015",
      description: "For innovative research in Marine Geophysics",
      icon: <Award size={24} className="text-[#FFD700]" />,
    },
    {
      title: "Fellow of the Indian Geophysical Union",
      organization: "Indian Geophysical Union",
      year: "2012",
      description: "For significant contributions to Geophysical Sciences",
      icon: <Medal size={24} className="text-[#FFD700]" />,
    },
    {
      title: "INSA-Royal Society Exchange Fellowship",
      organization: "Indian National Science Academy",
      year: "2008",
      description: "For collaborative research with UK institutions",
      icon: <Award size={24} className="text-[#FFD700]" />,
    },
  ]

  return (
    <section id="awards" className="section-container">
      <h2 className="section-title">Awards and Honors</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, index) => (
          <div key={index} className="card border-2 border-[#FFD700]">
            <div className="flex items-start">
              <div className="p-3 bg-[#003865] rounded-full">{award.icon}</div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-[#003865]">{award.title}</h3>
                <p className="text-[#003865] font-medium">
                  {award.organization}, {award.year}
                </p>
                <p className="text-gray-600">{award.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Awards
