"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      })
    }, aboutRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="about-content space-y-4">
          <p>
            Results-driven QA Engineer with 2.7 years of experience in manual testing across diverse domains including
            e-commerce, food delivery, OTT platforms, and travel websites.
          </p>
          <p>Skilled in identifying and resolving issues, ensuring high-quality and user-friendly software products.</p>
          <p>Strong collaborative skills, working effectively with development teams to enhance product quality.</p>
          <p>Passionate about DevOps, agile methodologies, and learning new testing tools.</p>
        </div>
      </div>
    </section>
  )
}

