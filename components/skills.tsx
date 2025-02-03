"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Globe, Server, Smartphone, PenTool, GitBranch, Users, UserPlus } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: "Manual Testing", icon: <PenTool className="w-12 h-12" />, level: 90 },
  { name: "Regression Testing", icon: <Code className="w-12 h-12" />, level: 85 },
  { name: "UAT", icon: <Users className="w-12 h-12" />, level: 80 },
  { name: "Cross-browser Testing", icon: <Globe className="w-12 h-12" />, level: 85 },
  { name: "API Testing (Postman)", icon: <Server className="w-12 h-12" />, level: 75 },
  { name: "Agile Methodologies", icon: <GitBranch className="w-12 h-12" />, level: 80 },
  { name: "Mobile Testing", icon: <Smartphone className="w-12 h-12" />, level: 85 },
  { name: "Team Collaboration", icon: <UserPlus className="w-12 h-12" />, level: 90 },
]

export default function Skills() {
  const skillsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
      })
    }, skillsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item flex flex-col items-center">
              <div className="mb-4 text-primary">{skill.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-center">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="text-sm text-muted-foreground mt-2">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

