import Hero from "@/components/hero"
import AcademicQualifications from "@/components/academic-qualifications"
import Specialization from "@/components/specialization"
import Experience from "@/components/experience"
import Awards from "@/components/awards"
import Research from "@/components/research"
import Teaching from "@/components/teaching"
import Administrative from "@/components/administrative"
import Memberships from "@/components/memberships"
import Publications from "@/components/publications"
// import InternationalExposure from "@/components/international-exposure"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Gallery from "@/components/gallery"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <AcademicQualifications />
        <Specialization />
        <Experience />
        <Awards />
        <Research />
        <Teaching />
        <Administrative />
        <Memberships />
        <Publications />
        {/* <InternationalExposure /> */}
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
