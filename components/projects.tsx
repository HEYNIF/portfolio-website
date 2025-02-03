"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Server, ShoppingCart, Layout } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: "Jenkins CI/CD Pipeline",
    description: "Automated software deployment for seamless delivery.",
    icon: <Server className="w-12 h-12" />,
    link: "https://github.com/HEYNIF/jenkins-pipeline",
  },
  {
    name: "POS System for Supermarket",
    description: "Developed a system to print payment receipts.",
    icon: <ShoppingCart className="w-12 h-12" />,
    link: "https://github.com/HEYNIF/pos-system",
  },
  {
    name: "Portfolio Website",
    description: "Showcasing my skills and projects.",
    icon: <Layout className="w-12 h-12" />,
    link: "https://github.com/HEYNIF/portfolio",
  },
]

export default function Projects() {
  const projectsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
      })
    }, projectsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-item bg-card rounded-lg shadow-lg p-6 flex flex-col items-center">
              <div className="mb-4 text-primary">{project.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{project.name}</h3>
              <p className="text-muted-foreground mb-4 text-center">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

