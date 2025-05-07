"use client"

import { useState } from "react"
import { FileText, BookOpen, Users, BarChart2 } from "lucide-react"

const Publications = () => {
  const [activeTab, setActiveTab] = useState("metrics")

  const tabs = [
    { id: "metrics", label: "Metrics", icon: <BarChart2 size={18} /> },
    { id: "journals", label: "Journal Papers", icon: <FileText size={18} /> },
    { id: "books", label: "Books & Chapters", icon: <BookOpen size={18} /> },
    { id: "conferences", label: "Conference Papers", icon: <Users size={18} /> },
  ]

  const metrics = {
    totalPublications: 120,
    journalPapers: 75,
    bookChapters: 15,
    conferencePapers: 30,
    hIndex: 28,
    citations: 2500,
    highlyCited: 12,
  }

  const journalPapers = [
    {
      title: "Tectonic framework of the 85°E Ridge in the Bay of Bengal",
      journal: "Journal of Geophysical Research: Solid Earth",
      year: 2018,
      authors: "Chaubey, A.K., Krishna, K.S., et al.",
      doi: "10.1029/2018JB016476",
    },
    {
      title: "Crustal structure and emplacement history of the 85°E Ridge, northeastern Indian Ocean",
      journal: "Geophysical Journal International",
      year: 2016,
      authors: "Chaubey, A.K., Srinivas, K., et al.",
      doi: "10.1093/gji/ggw123",
    },
    {
      title: "Seismic evidence for relict mid-ocean ridge segments in the northern Arabian Sea",
      journal: "Marine Geology",
      year: 2012,
      authors: "Chaubey, A.K., Bhattacharya, G.C., et al.",
      doi: "10.1016/j.margeo.2012.03.006",
    },
  ]

  const books = [
    {
      title: "Marine Geophysical Investigations in the Indian Ocean",
      publisher: "Springer",
      year: 2019,
      role: "Author",
      pages: "320",
    },
    {
      title: "Geophysical Characterization of the Indian Continental Margins",
      publisher: "Elsevier",
      year: 2015,
      role: "Editor",
      pages: "450",
    },
    {
      title: "Handbook of Marine Geophysical Methods",
      publisher: "Oxford University Press",
      year: 2010,
      role: "Chapter Author",
      pages: "25-48",
    },
  ]

  return (
    <section id="publications" className="section-container">
      <h2 className="section-title">Publications and Citations</h2>

      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              activeTab === tab.id ? "bg-[#003865] text-white" : "bg-gray-200 text-[#003865] hover:bg-gray-300"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === "metrics" && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 border rounded-lg border-[#FFD700]">
              <div className="text-4xl font-bold text-[#003865]">{metrics.totalPublications}</div>
              <div className="text-sm text-gray-600">Total Publications</div>
            </div>
            <div className="text-center p-4 border rounded-lg border-[#FFD700]">
              <div className="text-4xl font-bold text-[#003865]">{metrics.hIndex}</div>
              <div className="text-sm text-gray-600">h-index</div>
            </div>
            <div className="text-center p-4 border rounded-lg border-[#FFD700]">
              <div className="text-4xl font-bold text-[#003865]">{metrics.citations}</div>
              <div className="text-sm text-gray-600">Total Citations</div>
            </div>
            <div className="text-center p-4 border rounded-lg border-[#FFD700]">
              <div className="text-4xl font-bold text-[#003865]">{metrics.highlyCited}</div>
              <div className="text-sm text-gray-600">Highly Cited Papers</div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#003865] mb-4">Publication Types</h3>
            <div className="relative h-12 bg-gray-200 rounded-lg overflow-hidden">
              <div
                className="absolute h-full bg-[#003865]"
                style={{ width: `${(metrics.journalPapers / metrics.totalPublications) * 100}%` }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                  Journal Papers ({metrics.journalPapers})
                </span>
              </div>
              <div
                className="absolute h-full bg-[#FFD700]"
                style={{
                  width: `${(metrics.bookChapters / metrics.totalPublications) * 100}%`,
                  left: `${(metrics.journalPapers / metrics.totalPublications) * 100}%`,
                }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-[#003865] text-sm font-bold">
                  Books ({metrics.bookChapters})
                </span>
              </div>
              <div
                className="absolute h-full bg-gray-400"
                style={{
                  width: `${(metrics.conferencePapers / metrics.totalPublications) * 100}%`,
                  left: `${((metrics.journalPapers + metrics.bookChapters) / metrics.totalPublications) * 100}%`,
                }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                  Conferences ({metrics.conferencePapers})
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "journals" && (
        <div className="space-y-6">
          {journalPapers.map((paper, index) => (
            <div key={index} className="card border-l-4 border-[#003865]">
              <h3 className="text-lg font-bold text-[#003865]">{paper.title}</h3>
              <p className="text-[#003865] font-medium">
                {paper.journal}, {paper.year}
              </p>
              <p className="text-gray-600">{paper.authors}</p>
              <p className="text-sm text-[#FFD700] font-bold">DOI: {paper.doi}</p>
            </div>
          ))}
          <div className="text-center mt-4">
            <button className="primary-btn">View All Journal Papers</button>
          </div>
        </div>
      )}

      {activeTab === "books" && (
        <div className="space-y-6">
          {books.map((book, index) => (
            <div key={index} className="card border-l-4 border-[#FFD700]">
              <h3 className="text-lg font-bold text-[#003865]">{book.title}</h3>
              <p className="text-[#003865] font-medium">
                {book.publisher}, {book.year}
              </p>
              <div className="flex gap-4 mt-2">
                <span className="text-sm bg-[#003865] text-white px-2 py-0.5 rounded-full">{book.role}</span>
                <span className="text-sm bg-gray-200 text-[#003865] px-2 py-0.5 rounded-full">{book.pages} pages</span>
              </div>
            </div>
          ))}
          <div className="text-center mt-4">
            <button className="primary-btn">View All Books & Chapters</button>
          </div>
        </div>
      )}

      {activeTab === "conferences" && (
        <div className="text-center py-8">
          <p className="text-lg mb-4">Presented over 30 papers at national and international conferences</p>
          <button className="primary-btn">View Conference Papers</button>
        </div>
      )}
    </section>
  )
}

export default Publications
