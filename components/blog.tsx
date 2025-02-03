"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const blogPosts = [
  {
    title: "My Journey in #90DaysOfDevOps",
    excerpt: "Exploring the world of DevOps and its impact on software development.",
    link: "https://dev.to/heynif/my-journey-in-90daysofdevops-1234",
  },
  {
    title: "Best Practices for Manual Testing",
    excerpt: "Tips and tricks to improve your manual testing process.",
    link: "https://dev.to/heynif/best-practices-for-manual-testing-5678",
  },
  {
    title: "Introduction to API Testing with Postman",
    excerpt: "Learn the basics of API testing using Postman.",
    link: "https://dev.to/heynif/introduction-to-api-testing-with-postman-9012",
  },
]

export default function Blog() {
  const blogRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: blogRef.current,
          start: "top 80%",
        },
      })
    }, blogRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="blog" ref={blogRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-item bg-card rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

