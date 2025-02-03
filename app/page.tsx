import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Projects from "@/components/projects"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}

