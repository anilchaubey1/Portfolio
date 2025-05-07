"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import WorldMap from "./map"

const InternationalExposure = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const countries = [
    { name: "United States", visits: 8, purpose: "Research Collaboration, Conferences" },
    { name: "United Kingdom", visits: 5, purpose: "Academic Exchange, Conferences" },
    { name: "Germany", visits: 6, purpose: "Research Projects, Visiting Scientist" },
    { name: "Japan", visits: 4, purpose: "Research Cruises, Conferences" },
    { name: "Australia", visits: 3, purpose: "Conferences, Collaborative Research" },
    { name: "France", visits: 2, purpose: "Academic Visits, Conferences" },
    { name: "Russia", visits: 1, purpose: "International Conference" },
    { name: "South Africa", visits: 2, purpose: "Research Expedition, Conference" },
    { name: "China", visits: 3, purpose: "Academic Exchange, Conference" },
    { name: "Singapore", visits: 4, purpose: "Visiting Professor, Conferences" },
  ]

  return (
    <section id="international" className="section-container">
      <h2 className="section-title">International Exposure</h2>

      <div className="mb-6 text-center">
        <p className="text-lg mb-4">
          Visited <span className="font-bold text-[#003865]">{countries.length}</span> countries for academic and
          research purposes
        </p>
      </div>

      <div className="relative">
        <div className="bg-white p-4 rounded-lg h-[400px] shadow-md mb-6">
          <WorldMap
            // countries={countries}
            // hoveredCountry={hoveredCountry}
            // setHoveredCountry={setHoveredCountry}
          />
          <div className="absolute top-4 left-4 bg-white p-2 rounded-md shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#003865] rounded-full"></div>
              <span className="text-sm">Visited Countries</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map((country, index) => (
            <div
              key={index}
              className="card hover:shadow-lg cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredCountry(country.name)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <div className="flex items-start">
                <div className="p-2 bg-[#003865] rounded-full">
                  <MapPin size={20} className="text-[#FFD700]" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-[#003865]">{country.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm bg-[#FFD700] text-[#003865] px-2 py-0.5 rounded-full font-bold">
                      {country.visits} {country.visits === 1 ? "visit" : "visits"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{country.purpose}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InternationalExposure
