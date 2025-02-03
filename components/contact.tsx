"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react"
import type React from "react" // Added import for React

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const contactRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content > *", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      })
    }, contactRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="contact-content max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </button>
            </form>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-4">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:shaikhmohammedhanif07@gmail.com"
                  className="flex items-center space-x-2 text-primary hover:underline"
                >
                  <Mail className="w-5 h-5" />
                  <span>shaikhmohammedhanif07@gmail.com</span>
                </a>
                <a href="tel:+966573324693" className="flex items-center space-x-2 text-primary hover:underline">
                  <Phone className="w-5 h-5" />
                  <span>+966 573324693</span>
                </a>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Riyadh, Saudi Arabia</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/mohammed-hanif-shaikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/HEYNIF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

