"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: "Tester Work (Freelance)",
    company: "Various Clients",
    period: "September 2024 - Present",
    description: [
      "Conduct manual testing for various clients, ensuring software quality and functionality.",
      "Perform end-to-end testing of web and mobile applications, identifying bugs and usability issues.",
      "Create detailed test cases, execute test scripts, and maintain high product quality.",
    ],
  },
  {
    title: "QA Engineer",
    company: "Notion Technologies",
    period: "August 2023 - May 2024",
    description: [
      "Led QA efforts across e-commerce, food delivery, and technician booking platforms.",
      "Conducted comprehensive testing for travel websites and advertising campaigns on Android, iOS, and Web.",
      "Collaborated with developers to troubleshoot and resolve issues.",
      "Acted as a liaison between clients and development teams, providing training sessions on app and admin panel usage.",
    ],
  },
  {
    title: "Software QA Engineer",
    company: "Ignitech.in",
    period: "Feb 2023 - Aug 2023",
    description: [
      "Conducted software testing on web and mobile platforms.",
      "Created and executed detailed test cases, ensuring seamless user experiences.",
      "Collaborated with developers to troubleshoot and fix issues efficiently.",
    ],
  },
  {
    title: "Software QA Intern",
    company: "SIMMI FOUNDATION",
    period: "Sep 2022 - Jan 2023",
    description: [
      "Assisted in software testing processes, identifying bugs and issues.",
      "Worked on user acceptance testing (UAT) and reported critical defects.",
    ],
  },
  {
    title: "Software QA Intern",
    company: "Ignitech.in",
    period: "Jul 2022 - Aug 2022",
    description: [
      "Performed manual testing for web applications, ensuring product quality.",
      "Participated in cross-functional team discussions to improve the testing process.",
    ],
  },
]

export default function Experience() {
  const experienceRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
        },
      })
    }, experienceRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={experienceRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item mb-8 relative pl-8 border-l-2 border-primary">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <h4 className="text-lg text-primary">{exp.company}</h4>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <ul className="list-disc pl-5 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

