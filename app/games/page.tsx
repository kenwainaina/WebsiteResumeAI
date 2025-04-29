"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeftIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TicTacToe from "@/components/TicTacToe"

export default function GamesAndProjects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "AI Tic-Tac-Toe",
      description:
        "An interactive Tic-Tac-Toe game where you play against a smart AI opponent. The AI uses strategy to make its moves, providing a challenging gaming experience.",
      technologies: ["React", "TypeScript", "Next.js"],
      component: <TicTacToe />,
    },
    {
      title: "Ultimate Tic-Tac-Toe",
      description:
        "A strategic game where two players play a meta-level tic-tac-toe game consisting of smaller tic-tac-toe boards inside each square of a larger 3x3 board.",
      technologies: ["React", "TypeScript", "CSS3"],
    },
    {
      title: "Fractal Tree Generator",
      description:
        "An interactive fractal tree generator that allows users to adjust parameters and create beautiful patterns.",
      technologies: ["p5.js", "JavaScript"],
    },
    {
      title: "Sorting Algorithm Visualizer",
      description:
        "A tool to visualize various sorting algorithms in action, including bubble sort, quick sort, and merge sort.",
      technologies: ["React", "JavaScript", "CSS3"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-red-950 to-purple-950">
      <div className="max-w-4xl mx-auto px-4 py-12">
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
          Games & Coding Projects
        </motion.h1>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 overflow-hidden">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                >
                  <CardTitle className="text-xl font-semibold text-white flex justify-between items-center">
                    {project.title}
                    {expandedProject === index ? (
                      <ChevronUpIcon className="h-6 w-6" />
                    ) : (
                      <ChevronDownIcon className="h-6 w-6" />
                    )}
                  </CardTitle>
                </CardHeader>
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-purple-500/20 text-purple-200 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.component && <div className="mt-4 bg-white/5 p-4 rounded-lg">{project.component}</div>}
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
