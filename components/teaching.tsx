"use client"

import { useState } from "react"
import { BookOpen, Users, Ship, Award } from "lucide-react"

const Teaching = () => {
  const [activeTab, setActiveTab] = useState("courses")

  const tabs = [
    { id: "courses", label: "Courses Taught", icon: <BookOpen size={18} /> },
  ]

  // const courses = [
  //   {
  //     // code: "GP-501",
  //     title: "Advanced Marine Geophysics",
  //     // level: "Postgraduate",
  //     // description: "Comprehensive course on marine geophysical methods, data acquisition, and interpretation.",
  //   },
  //   {
  //     code: "GP-403",
  //     title: "Gravity and Magnetic Methods",
  //     level: "Undergraduate",
  //     description: "Fundamentals of gravity and magnetic surveying techniques and data analysis.",
  //   },
  //   {
  //     code: "GP-605",
  //     title: "Tectonics and Geodynamics",
  //     level: "Doctoral",
  //     description: "Advanced course on plate tectonics, crustal deformation, and geodynamic processes.",
  //   },
  //   {
  //     code: "GP-302",
  //     title: "Geophysical Field Methods",
  //     level: "Undergraduate",
  //     description: "Practical training in geophysical field techniques and instrumentation.",
  //   },
  // ]
  const courses = [
    { title: "Oceanography" },
    { title: "Earth and Planetary System" },
    { title: "Introduction to Rock Physics" },
    { title: "Lab on Rock Physics" },
    { title: "Geophysical Prospecting" },
    { title: "Airborne Geophysics" },
    { title: "Seabed and Asteroid Mining" },
    { title: "Geophysical Methods" },
    { title: "Geophysical Methods Practical" },
    { title: "Introduction to Geophysics" }
  ];
  

  return (
    <section id="teaching" className="section-container">
      <h2 className="section-title">Teaching </h2>
      <div className="mb-6 flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-2 rounded-md transition-colors ${
              activeTab === tab.id ? "bg-[#003865] text-white" : "bg-gray-200 text-[#003865] hover:bg-gray-300"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="card hover:border-l-4 hover:border-[#FFD700]">
              <div className="flex items-start">
                <div className="p-3 bg-[#003865] rounded-full">
                  <BookOpen size={24} className="text-[#FFD700]" />
                </div>
                <div className="ml-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#003865]">{course.title}</h3>
                    {/* <span className="text-sm bg-[#FFD700] text-[#003865] px-2 py-0.5 rounded-full font-bold">
                      {course.code}
                    </span> */}
                  </div>
                  {/* <p className="text-[#003865] font-medium">{course.level}</p> */}
                  {/* <p className="text-gray-600">{course.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Teaching
