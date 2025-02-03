"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, User, Briefcase, Code, FolderOpen, Mail } from "lucide-react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          MHS
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:text-primary flex items-center">
              <User className="w-4 h-4 mr-1" /> About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-primary flex items-center">
              <Code className="w-4 h-4 mr-1" /> Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-primary flex items-center">
              <Briefcase className="w-4 h-4 mr-1" /> Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary flex items-center">
              <FolderOpen className="w-4 h-4 mr-1" /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary flex items-center">
              <Mail className="w-4 h-4 mr-1" /> Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-primary text-primary-foreground"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
  )
}

