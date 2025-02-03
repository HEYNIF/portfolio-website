"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const certifications = [
  {
    name: "Certificate in Quality Assurance (QA)",
    issuer: "Certification Authority",
    date: "2023",
  },
]

export default function Certifications() {
  const certificationsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".certification-item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: certificationsRef.current,
          start: "top 80%",
        },
      })
    }, certificationsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="certifications" ref={certificationsRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <h3 className="text-xl font-bold">{cert.name}</h3>
              <h4 className="text-lg text-primary">{cert.issuer}</h4>
              <p className="text-sm text-muted-foreground">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

