"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeftIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "CodeVault",
      description:
        "A platform where creators can share their affiliate codes directly with consumers, streamlining the process for both parties.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
    },
    {
      title: "UserLines",
      description:
        "A peer-to-peer sports betting platform where users create their own betting lines with specific odds. Opponents can match the odds, put down money, and the winner takes all, offering a more fair experience compared to traditional sports betting.",
      technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
    },
    {
      title: "Augmented Reality Campus Tour",
      description:
        "An interactive AR app that provides a virtual tour of James Madison University campus for prospective students. Featuring a Stornaway-powered interactive video experience.",
      technologies: ["Unity", "ARKit", "C#", "Stornaway"],
      hasInteractiveContent: true,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link href="/" passHref>
        <Button variant="outline" className="mb-8">
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-8"
      >
        Current Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.hasInteractiveContent && (
                  <div className="mb-4">
                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                      <iframe
                        src="https://player.stornaway.io/embed/e36a4348"
                        frameBorder="0"
                        allowFullScreen
                        allow="accelerometer; gyroscope; autoplay;"
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                      ></iframe>
                    </div>
                    <script src="https://studio.stornaway.io/embed/v1/standalone_player.js" defer></script>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-purple-500/20 text-purple-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
