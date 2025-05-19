"use client"

import { useState } from "react"
import { FileText, BookOpen, Users, BarChart2 } from "lucide-react"
import data from './da'

const Publications = () => {
  const [activeTab, setActiveTab] = useState("metrics")

  const [journalLimit, setJournalLimit] = useState(4)
  const [bookLimit, setBookLimit] = useState(4)
  const [conferenceLimit, setConferenceLimit] = useState(4)
  const [reportLimit, setReportLimit] = useState(4)

  const tabs = data.tabs
  const metrics = data.metrics
  const journalPapers = data.journalPapers
  const books = data.books
  const conferencePapers = data.conferences
  const reports = data.reports

  const loadMore = (type: string) => {
    switch (type) {
      case "journals":
        setJournalLimit(prev => prev + 5)
        break
      case "books":
        setBookLimit(prev => prev + 5)
        break
      case "conferences":
        setConferenceLimit(prev => prev + 5)
        break
      case "reports":
        setReportLimit(prev => prev + 5)
        break
    }
  }

  return (
    <section id="publications" className="section-container">
      <h2 className="section-title">Publications and Citations</h2>

      {/* Tab Buttons */}
      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              activeTab === tab.id ? "bg-[#003865] text-white" : "bg-gray-200 text-[#003865] hover:bg-gray-300"
            }`}
          >
            {tab.icon === "FileText" && <FileText size={18} />}
            {tab.icon === "BookOpen" && <BookOpen size={18} />}
            {tab.icon === "Users" && <Users size={18} />}
            {tab.icon === "BarChart2" && <BarChart2 size={18} />}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Metrics Section */}
      {activeTab === "metrics" && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Publications", value: metrics.totalPublications },
              { label: "h-index", value: metrics.hIndex },
              { label: "Total Citations", value: metrics.citations },
              { label: "Highly Cited Papers", value: metrics.highlyCited }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4 border rounded-lg border-[#FFD700]">
                <div className="text-4xl font-bold text-[#003865]">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
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

      {/* Journal Papers */}
      {activeTab === "journals" && (
        <div className="space-y-6">
          {journalPapers.slice(0, journalLimit).map((paper, index) => (
            <div key={index} className="card border-l-4 border-[#003865]">
              <h3 className="text-lg font-bold text-[#003865]">{paper.title}</h3>
              <p className="text-[#003865] font-medium">
                {paper.journal}, {paper.year}
              </p>
              <p className="text-gray-600">{paper.authors}</p>
              <p className="text-sm text-[#FFD700] font-bold">DOI: {paper.doi}</p>
            </div>
          ))}
          {journalLimit < journalPapers.length && (
            <div className="text-center mt-4">
              <button onClick={() => loadMore("journals")} className="primary-btn">View More</button>
            </div>
          )}
        </div>
      )}

      {/* Books */}
      {activeTab === "books" && (
        <div className="space-y-6">
          {books.slice(0, bookLimit).map((book, index) => (
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
          {bookLimit < books.length && (
            <div className="text-center mt-4">
              <button onClick={() => loadMore("books")} className="primary-btn">View More</button>
            </div>
          )}
        </div>
      )}

      {/* Conference Papers */}
      {activeTab === "conferences" && (
        <div className="space-y-6">
          {conferencePapers.slice(0, conferenceLimit).map((paper, index) => (
            <div key={index} className="card border-l-4 border-[#FFD700]">
              <h3 className="text-lg font-bold text-[#003865]">{paper.title}</h3>
              <p className="text-[#003865] font-medium">
                {paper.conference}, {paper.year}
              </p>
              <p className="text-gray-600">{paper.authors}</p>
            </div>
          ))}
          {conferenceLimit < conferencePapers.length && (
            <div className="text-center mt-4">
              <button onClick={() => loadMore("conferences")} className="primary-btn">View More</button>
            </div>
          )}
        </div>
      )}

      {/* Reports */}
      {activeTab === "reports" && (
        <div className="space-y-6">
          {reports.slice(0, reportLimit).map((report, index) => (
            <div key={index} className="card border-l-4 border-[#FFD700]">
              <h3 className="text-lg font-bold text-[#003865]">{report.title}</h3>
              <p className="text-[#003865] font-medium">
                {report.author}, {report.year}
              </p>
              <div className="flex gap-4 mt-2">
                <span className="text-sm bg-[#003865] text-white px-2 py-0.5 rounded-full">{report.event}</span>
                <span className="text-sm bg-gray-200 text-[#003865] px-2 py-0.5 rounded-full">{report.pages} pages</span>
              </div>
            </div>
          ))}
          {reportLimit < reports.length && (
            <div className="text-center mt-4">
              <button onClick={() => loadMore("reports")} className="primary-btn">View More</button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default Publications
