"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your message. Prof. Chaubey will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact Information</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-[#003865] mb-4">Get in Touch</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-[#003865] rounded-full">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-[#003865]">Email</h4>
                  <p className="text-gray-600">chaubeyrcm@gmail.com </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-[#003865] rounded-full">
                  <Phone size={20} className="text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-[#003865]">Phone</h4>
                  <p className="text-gray-600">+918369289939 (Mobile)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-[#003865] rounded-full">
                  <MapPin size={20} fill="" className="text-white " />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-[#003865]">Office Address</h4>
                  <p className="text-gray-600">National Centre for Polar and Ocean Research,</p>
                  <p className="text-gray-600">(Ministry of Earth Sciences, Government of India),</p>
                  <p className="text-gray-600">Headland Sada, Vasco-da-Gama, Goa 403804</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-[#003865] rounded-full">
                  <MapPin size={20} className="text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-[#003865]">Permanent Address</h4>
                  <p className="text-gray-600">C-4,  La  Marvel Colony, Raj Bhawan Road</p>
                  <p className="text-gray-600">Dona Paula, Goa - 403004, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#003865] mb-4">Office Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span>By Appointment</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-[#003865] mb-4">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003865]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003865]"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003865]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003865]"
              ></textarea>
            </div>

            <button type="submit" className="flex items-center justify-center gap-2 w-full primary-btn py-3">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
