import type React from "react"
import type { Metadata } from "next"
import { Merriweather, Open_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Prof. Anil K Chaubey - IIT (ISM) Dhanbad",
  description: "Professional portfolio of Prof. Anil Kumar Chaubey, Visiting Professor at IIT (ISM) Dhanbad",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${merriweather.variable} ${openSans.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
