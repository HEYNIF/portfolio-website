"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const education = [
  {
    degree: "Master of Science in Information Technology",
    institution: "Mumbai University",
    period: "2020 – 2023",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Mumbai University",
    period: "2017 - 2020",
  },
]

export default function Education() {
  const educationRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%",
        },
      })
    }, educationRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="education" ref={educationRef} className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <h4 className="text-lg text-primary">{edu.institution}</h4>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

