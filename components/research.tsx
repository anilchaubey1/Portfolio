"use client"

import { useState } from "react"
import { Layers, Globe, Ship, Users, Star, Briefcase, BookOpenCheck, ClipboardList } from "lucide-react"
import Image from "next/image"

const Research = () => {
  const [activeTab, setActiveTab] = useState("marine")

  const tabs = [
    { id: "marine", label: "Marine Geophysics", icon: <Ship size={18} /> },
    { id: "tectonics", label: "Tectonics", icon: <Layers size={18} /> },
    { id: "indian", label: "Indian Ocean", icon: <Globe size={18} /> },
    { id: "collab", label: "Collaborations", icon: <Users size={18} /> },
    { id: "ecs", label: "Extended Shelf", icon: <Star size={18} /> },
    { id: "society", label: "Societal Impact", icon: <Briefcase size={18} /> },
    { id: "r_and_d", label: "R&D", icon: <BookOpenCheck size={18} /> },
    { id: "assignments", label: "Assignments", icon: <ClipboardList size={18} /> },
  ]

  const researchContent = {
    marine: {
      title: "Marine Geophysics",
      icon: <Ship size={24} className="text-[#FFD700]" />,
      content: (
        <div>
          <p className="mb-4">Led over 15 major marine geophysical expeditions in the Indian Ocean, focusing on:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Seafloor mapping and characterization</li>
            <li>Marine gravity and magnetic surveys</li>
            <li>Seismic profiling of the ocean floor</li>
            <li>Crustal structure studies of the Indian Ocean</li>
          </ul>
          <p>Developed new methodologies for marine geophysical data acquisition and interpretation, resulting in significant advancements in understanding the geological evolution of the Indian Ocean.</p>
        </div>
      ),
    },
    tectonics: {
      title: "Tectonics",
      icon: <Layers size={24} className="text-[#FFD700]" />,
      content: (
        <div>
          <p className="mb-4">Pioneered research on the tectonic evolution of:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The Central Indian Ridge system</li>
            <li>The Andaman Subduction Zone</li>
            <li>The 85°E Ridge in the Bay of Bengal</li>
            <li>The Laxmi Ridge in the Arabian Sea</li>
          </ul>
          <p>Contributed to the understanding of plate tectonics in the Indian Ocean region through integrated geophysical studies and tectonic reconstructions.</p>
        </div>
      ),
    },
    indian: {
      title: "Indian Ocean Studies",
      icon: <Globe size={24} className="text-[#FFD700]" />,
      content: (
        <div>
          <p className="mb-4">Comprehensive research on the Indian Ocean, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Participated in 25+ oceanographic cruises</li>
            <li>Mapped previously uncharted seafloor features</li>
            <li>Studied the Bengal Fan and its sedimentary processes</li>
            <li>Investigated the impact of the 2004 Indian Ocean Tsunami</li>
          </ul>
          <p>Published landmark papers on the geological and geophysical aspects of the Indian Ocean, contributing significantly to the global understanding of this ocean basin.</p>
        </div>
      ),
    },
    collab: {
      title: "Research Collaborations",
      icon: <Users size={24} className="text-[#FFD700]" />,
      content: (
        <div>
          <p className="mb-4">Established and maintained research collaborations with:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Woods Hole Oceanographic Institution, USA</li>
            <li>National Oceanography Centre, Southampton, UK</li>
            <li>GEOMAR Helmholtz Centre for Ocean Research, Germany</li>
            <li>Japan Agency for Marine-Earth Science and Technology</li>
            <li>Indian Navy's Hydrographic Department</li>
          </ul>
          <p>These collaborations have resulted in joint expeditions, publications, and knowledge exchange programs, enhancing the global understanding of marine geosciences.</p>
        </div>
      ),
    },
    ecs: {
      title: "Extended Continental Shelf",
      icon: <Star size={24} className="text-[#FFD700]" />,
      content: (
        <div>
          <p className="mb-4">Key contributions to India's extended continental shelf project:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Led Arabian Sea Sector in geophysical data analysis and interpretation</li>
            <li>Developed scientific basis for India's UN submission on ECS</li>
            <li>Presented technical findings before CLCS at UN, New York</li>
          </ul>
          <p>Played a pivotal role in India’s claim of 0.6 million sq. km extended continental shelf under UN Convention.</p>
        </div>
      ),
    },
    society: {
      title: "Societal Impact",
      icon: <Briefcase size={24} className="text-[#FFD700]" />,
      content: (
        <div>
          <p className="mb-4">Research contributions benefiting coastal communities and industries:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Investigated offshore hazards impacting coastal populations</li>
            <li>Advised on coastal management and environmental protection</li>
            <li>Supported projects for Power Grid Corp., NPCIL, and Sethusamudram Corp.</li>
          </ul>
          <p>Advanced applied geoscience for national development and safety.</p>
        </div>
      ),
    },
    r_and_d: {
      title: "Scientific and Industrial R&D",
      icon: <BookOpenCheck size={24} className="text-[#FFD700]" />,
      content: (
        <div>
          <p className="mb-4">Significant R&D milestones:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Identified SDRs and depth anomalies in the Arabian Basin</li>
            <li>Mapped ocean-continent boundaries along SW India</li>
            <li>Explained seafloor features near 2004 Sumatra earthquake</li>
            <li>Studied tectonics of Carlsberg Ridge</li>
            <li>Trained students, Indian Navy officers, and international scholars</li>
          </ul>
        </div>
      ),
    },
    assignments: {
      title: "National & Institutional Assignments",
      icon: <ClipboardList size={24} className="text-[#FFD700]" />,
      content: (
        <div>
          <p className="mb-4">Major leadership and expert roles:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Chairman & member of committees at CSIR-NIO</li>
            <li>Member, MoES Program Advisory Committee</li>
            <li>Expert roles in UPSC, NAAC, IIT Roorkee, Goa Univ.</li>
          </ul>
          <p>Contributed significantly to national science policy, technical recruitment, and academic evaluations.</p>
        </div>
      ),
    },
  }

  return (
    <section id="research" className="section-container">
      <h2 className="section-title">Research Contributions</h2>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2">
          <div className="mb-6 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#003865] text-white shadow-md transform scale-105"
                    : "bg-gray-200 text-[#003865] hover:bg-gray-300"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-[#003865] rounded-full shadow-md hover-glow">
                {researchContent[activeTab].icon}
              </div>
              <h3 className="ml-4 text-2xl font-bold text-[#003865]">
                {researchContent[activeTab].title}
              </h3>
            </div>

            <div className="pl-4 border-l-4 border-[#FFD700]">
              {researchContent[activeTab].content}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative h-full flex items-center justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-[#003865] shadow-lg">
              <Image
                src="https://www.iitism.ac.in/storage/FacultyDetails/IMG_174065757567c053a7ec0ab.JPG"
                alt="Prof. Anil Kumar Chaubey"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-12 w-24 h-24 bg-[#FFD700] opacity-10 rounded-full"></div>
            <div className="absolute -top-4 left-12 w-16 h-16 bg-[#003865] opacity-10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-2 border-dashed border-[#FFD700] rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research