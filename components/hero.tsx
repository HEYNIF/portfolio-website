"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { FileText, Send } from "lucide-react"

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10"
    >
      <div className="hero-content text-center">
        <h1 className="text-5xl font-bold mb-4">Mohammed Hanif Shaikh</h1>
        <h2 className="text-2xl mb-4">QA Engineer | Software Tester | DevOps Enthusiast</h2>
        <p className="text-xl mb-8">
          Ensuring seamless digital experiences through meticulous testing and collaboration.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/resume.pdf" className="btn btn-primary" download>
            <FileText className="w-4 h-4 mr-2" /> View Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
            <Send className="w-4 h-4 mr-2" /> Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

