"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeftIcon, ExternalLinkIcon, FileTextIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "JMUCARE Workflow Management System",
      description:
        "A digital workflow system for JMU's Center for Advancement Research in Education that streamlines tracking of faculty research, grant applications, and student involvement. Developed in a team of 8 CIS and SMAD students using Azure, this solution replaced manual spreadsheets with an intuitive interface to enhance decision-making and project coordination.",
      technologies: ["C#", ".NET", "SQL Server", "Bootstrap", "Azure"],
      links: [
        {
          label: "View Project",
          url: "https://jmu-capstone.github.io/final-push/",
          icon: <ExternalLinkIcon className="h-4 w-4 mr-2" />,
        },
        {
          label: "Documentation",
          url: "https://www.canva.com/design/DAGj_7Cqz68/R9S0YF3NftrQcrxxsVRFTA/view?utm_content=DAGj_7Cqz68&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h88816f94dd",
          icon: <FileTextIcon className="h-4 w-4 mr-2" />,
        },
      ],
    },
    {
      title: "Augmented Reality Campus Tour",
      description:
        "An interactive AR app that provides a virtual tour of James Madison University campus for prospective students. Featuring a Stornaway-powered interactive video experience.",
      technologies: ["Unity", "ARKit", "C#", "Stornaway"],
      hasInteractiveContent: true,
    },
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
            <Card className="card-georgetown h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
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
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-[#041E42]/30 text-gray-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {project.links && (
                <CardFooter className="pt-4 flex gap-3 justify-end">
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="outline"
                      size="sm"
                      className="bg-[#041E42] hover:bg-[#041E42]/80 text-white border-none"
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        {link.icon}
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
