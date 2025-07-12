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
      <head>
      <meta name="google-site-verification" content="M-qoF0SBTs0M3NAsRoKxSP32nx392vL2bzlwmZsO7Sw" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Prof. Anil K Chaubey - IIT (ISM) Dhanbad" />
      <meta property="og:description" content="Professional portfolio of Prof. Anil Kumar Chaubey, Visiting Professor at IIT (ISM) Dhanbad" />
      <meta property="og:url" content="https://portfoilio-ak-chaubey.vercel.app/" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://portfoilio-ak-chaubey.vercel.app/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="M-qoF0SBTs0M3NAsRoKxSP32nx392vL2bzlwmZsO7Sw" />
    </head>
    <body className={`${merriweather.variable} ${openSans.variable}`}>
      <Navbar />
      {children}
    </body>
  </html>
)
}
