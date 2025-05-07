"use client"
import { Award, Globe, Users, Star } from "lucide-react";
import {useState} from "react";

const Awards = () => {
  const [activeTab, setActiveTab] = useState("national_awards")
  const nationalAwards = [
    {
      year: 1999,
      title: "M.S. Krishnan Medal",
      awardedBy: "Indian Geophysical Union",
      description: "For significant contribution to tectonic setting of the Indian Ocean.",
    },
    {
      year: 2002,
      title: "National Mineral Award",
      awardedBy: "Ministry of Mines, Government of India",
      description: "For significant contribution in the field of Geophysics.",
    },
    {
      year: 2010,
      title: "National Geoscience Award",
      awardedBy: "Ministry of Mines, Government of India",
      description: "For significant contribution in the field of Ocean Development.",
    },
    {
      year: 2013,
      title: "Certificate of Appreciation",
      awardedBy: "Director, CSIR-NIO",
      description: "Recognition for contributions to the institution.",
    },
  ];
  const internationalVisits = [
    {
      country: "Mauritius",
      date: "23–25 June 1985",
      purpose: "Demonstrate Indian oceanographic research capabilities onboard ORV Sagar Kanya.",
    },
    {
      country: "Norway",
      date: "7 Aug 1987 – 5 Feb 1988",
      purpose: "Training on NORSEIS for seismic data processing at GECO, Sandvika.",
    },
    {
      country: "Singapore",
      date: "22–23 May 1989",
      purpose: "Embarkation for Trans Indian Ocean Geotraverse cruise.",
    },
    {
      country: "Seychelles",
      date: "5–6 July 1989",
      purpose: "Disembarkation after TIOG cruise.",
    },
    {
      country: "USA",
      date: "27 Oct – 17 Nov 1997",
      purpose: "Training on ProMAX-2D and BSR discussion at USGS.",
    },
    {
      country: "France",
      date: "9 Sept 1999 – 31 Aug 2000",
      purpose: "Post-Doctoral fellowship at IUEM, UBO.",
    },
    {
      country: "Mauritius",
      date: "12–14 May 2000",
      purpose: "Embarkation for deep-sea diving cruise.",
    },
    {
      country: "Reunion",
      date: "7–8 June 2000",
      purpose: "Disembarkation from R/V l’Atalante.",
    },
    {
      country: "France",
      date: "12 Mar – 2 Apr 2003",
      purpose: "Exchange visit to IPG Paris and UBO, Brest (IFCPAR funded).",
    },
    {
      country: "Maldives",
      date: "25–28 July 2003",
      purpose: "Port call at Male after ORV Sagar Kanya cruise.",
    },
    {
      country: "Singapore",
      date: "5–10 July 2004",
      purpose: "Presented paper at AOGS Annual Meeting.",
    },
    {
      country: "Canada",
      date: "4–21 Dec 2005",
      purpose: "Training on Tessera-2D seismic modeling at Tesseral Technologies, Calgary.",
    },
    {
      country: "USA",
      date: "11–15 Dec 2006",
      purpose: "Presented research at AGU Fall Meeting, San Francisco.",
    },
    {
      country: "Iran",
      date: "6–13 July 2007",
      purpose: "Training on marine geophysical methods at GSI Tehran.",
    },
    {
      country: "USA",
      date: "15–19 Dec 2008",
      purpose: "Presented research at AGU Fall Meeting, San Francisco.",
    },
    {
      country: "Iran",
      date: "21 Aug – 18 Sept 2009",
      purpose: "Training on marine data processing at GSI Tehran.",
    },
    {
      country: "USA",
      date: "14–21 Aug 2010",
      purpose: "Presented India’s extended continental shelf to UN, New York.",
    },
    {
      country: "USA",
      date: "3–7 Dec 2012",
      purpose: "Presented research at AGU Fall Meeting, San Francisco.",
    },
    {
      country: "Germany",
      date: "26–28 June 2018",
      purpose: "IODP Science Evaluation Panel meeting at GFZ, Potsdam.",
    },
  ];
  
  // const memberships = [
  //   {
  //     organization: "Association of Exploration Geophysicists, India",
  //     since: 1985,
  //   },
  //   {
  //     organization: "Geological Society of India",
  //     since: 1988,
  //   },
  //   {
  //     organization: "Indian Geophysical Union",
  //     since: 2002,
  //   },
  //   {
  //     organization: "American Geophysical Union",
  //     since: 2002,
  //   },
  //   {
  //     organization: "Asia Oceania Geosciences Society, Singapore",
  //     since: 2004,
  //   },
  // ];
  


  const tabs = [
    {
      id: "national_awards",
      label: "National Awards",
      icon: <Award size={18} />,
    },
    {
      id: "international_visits",
      label: "International Visits",
      icon: <Globe size={18} />,
    },
    // {
    //   id: "memberships",
    //   label: "Professional Memberships",
    //   icon: <Users size={18} />,
    // },
  ];

  return (
    <section id="awards" className="section-container">
      <h2 className="section-title">Awards and Honors</h2>

      <div className="mb-6 flex gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-2 rounded-md transition-colors ${
              activeTab === tab.id
                ? "bg-[#003865] text-white"
                : "bg-gray-200 text-[#003865] hover:bg-gray-300"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeTab === "national_awards" &&
          nationalAwards.map((award, index) => (
            <div key={index} className="card border-2 border-[#FFD700] p-4 rounded-md shadow">
              <h3 className="text-lg font-bold text-[#003865]">{award.title}</h3>
              <p className="text-[#003865] font-medium">{award.awardedBy}, {award.year}</p>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}

        {activeTab === "international_visits" &&
          internationalVisits.map((visit, index) => (
            <div key={index} className="card border p-4 rounded-md shadow">
              <h3 className="text-lg font-bold text-[#003865]">{visit.country}</h3>
              <p className="text-[#003865]">{visit.date}</p>
              <p className="text-gray-600">{visit.purpose}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Awards
