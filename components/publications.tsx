"use client"

import { useState } from "react"
import { FileText, BookOpen, Users } from "lucide-react"
import data from './da'

const Publications = () => {
  const [activeTab, setActiveTab] = useState("papers")
  const [paperLimit, setPaperLimit] = useState(5)
  const [articleLimit, setArticleLimit] = useState(5)
  const [abstractLimit, setAbstractLimit] = useState(5)

const loadMore = (type: "papers" | "articles" | "abstracts") => {
  if (type === "papers") setPaperLimit(prev => prev + 5)
  else if (type === "articles") setArticleLimit(prev => prev + 5)
  else if (type === "abstracts") setAbstractLimit(prev => prev + 5)
}

  const tabs = [
    { id: "papers", label: "Research Papers", icon: <FileText size={18} /> },
    { id: "articles", label: "Articles & Reports", icon: <BookOpen size={18} /> },
    { id: "abstracts", label: "Abstracts", icon: <Users size={18} /> }
  ]

  return (
    <section id="publications" className="section-container">
      <h2 className="section-title">Publications</h2>

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
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Papers */}
      {activeTab === "papers" && (
        <div className="space-y-4">
          {data.papers.slice(0, paperLimit).map((item, index) => (
            <div key={index} className="card border-l-4 border-[#003865] p-4 bg-white rounded shadow">
              <p className="text-gray-800 whitespace-pre-line">{item.description}</p>
            </div>
          ))}
          {paperLimit < data.papers.length && (
            <div className="text-center mt-4">
              <button onClick={() => loadMore("papers")} className="primary-btn">View More</button>
            </div>
          )}
        </div>
      )}

      {/* Articles */}
      {activeTab === "articles" && (
        <div className="space-y-4">
          {data.articles.slice(0, articleLimit).map((item, index) => (
            <div key={index} className="card border-l-4 border-[#FFD700] p-4 bg-white rounded shadow">
              <p className="text-gray-800 whitespace-pre-line">{item.description}</p>
            </div>
          ))}
          {articleLimit < data.articles.length && (
            <div className="text-center mt-4">
              <button onClick={() => loadMore("articles")} className="primary-btn">View More</button>
            </div>
          )}
        </div>
      )}

      {/* Abstracts */}
      {activeTab === "abstracts" && (
        <div className="space-y-4">
          {data.abstracts.slice(0, abstractLimit).map((item, index) => (
            <div key={index} className="card border-l-4 border-[#999999] p-4 bg-white rounded shadow">
              <p className="text-gray-800 whitespace-pre-line">{item.description}</p>
            </div>
          ))}
          {abstractLimit < data.abstracts.length && (
            <div className="text-center mt-4">
              <button onClick={() => loadMore("abstracts")} className="primary-btn">View More</button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default Publications