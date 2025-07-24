"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  Terminal,
  Cpu,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: "DSA", icon: Code2 },
    { name: "MERN Stack", icon: Globe },
    { name: "Python", icon: Terminal },
    { name: "Git", icon: Code2 },
    { name: "Docker", icon: Database },
    { name: "Google Cloud", icon: Cloud },
    { name: "AWS", icon: Cloud },
    { name: "Linux", icon: Terminal },
    { name: "AI/ML", icon: Cpu },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration, user authentication, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/divyanshxcode",
      demo: "#",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration using OpenAI API, WebSocket connections, and modern UI.",
      tech: ["Next.js", "Python", "OpenAI", "WebSocket"],
      github: "https://github.com/divyanshxcode",
      demo: "#",
    },
    {
      title: "Cloud Infrastructure Manager",
      description: "DevOps tool for managing cloud resources across AWS and GCP with automated deployment pipelines.",
      tech: ["Python", "Docker", "AWS", "GCP"],
      github: "https://github.com/divyanshxcode",
      demo: "#",
    },
    {
      title: "Algorithm Visualizer",
      description:
        "Interactive web app for visualizing sorting and pathfinding algorithms with step-by-step execution.",
      tech: ["React", "TypeScript", "D3.js"],
      github: "https://github.com/divyanshxcode",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-blue-400">divyanshxcode</div>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#about" className="hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">
                Skills
              </a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div
          className={`text-center transition-all duration-1000 ${isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Divyansh Singh
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-sans">
            Full Stack Developer • AI & Cloud Enthusiast • DTU CSE '27
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/divyanshxcode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/divyanshxcode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:divyanshxcode@gmail.com"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300 leading-relaxed font-sans">
              I'm a Computer Science and Engineering student passionate about building innovative solutions that bridge
              the gap between technology and real-world problems. With expertise in full-stack development, cloud
              technologies, and AI/ML, I enjoy creating scalable applications and exploring cutting-edge technologies.
              When I'm not coding, you'll find me solving algorithmic challenges or contributing to open-source
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400 font-sans">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-800 text-xs rounded text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo (soon)
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 text-center"
              >
                <skill.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <span className="text-sm font-sans">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div
          className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 font-sans"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 font-sans"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 font-sans"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-gray-400 font-sans">Or reach out directly:</p>
                <a
                  href="mailto:divyanshxcode@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  divyanshxcode@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0 font-sans">
              © 2024 Divyansh. Built with Next.js & Tailwind CSS
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/divyanshxcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/divyanshxcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/divyanshxcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a href="mailto:divyanshxcode@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
