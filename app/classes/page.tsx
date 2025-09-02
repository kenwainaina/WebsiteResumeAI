"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeftIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

type Course = {
  code?: string
  name: string
  description: string
}

type CourseCategory = {
  name: string
  courses: Course[]
}

const mastersCourseCategories: CourseCategory[] = [
  {
    name: "Core Courses",
    courses: [
      {
        name: "Ethical AI: Moral Dilemmas & Biases",
        description:
          "Exploration of ethical considerations in AI development and deployment, including bias detection and mitigation strategies.",
      },
      {
        name: "Introduction to Artificial Intelligence",
        description:
          "Foundational concepts of artificial intelligence, machine learning, and their applications in various industries.",
      },
      {
        name: "Innovation Management & AI Strategy",
        description: "Strategic frameworks for implementing AI solutions and managing innovation within organizations.",
      },
      {
        name: "AI Governance & Compliance",
        description:
          "Regulatory frameworks, compliance requirements, and governance structures for responsible AI implementation.",
      },
      {
        name: "Communication Strategies for Digital Transformation",
        description:
          "Effective communication techniques for leading AI initiatives and digital transformation projects.",
      },
      {
        name: "Capstone",
        description: "Culminating project applying AI management principles to solve real-world business challenges.",
      },
    ],
  },
  {
    name: "Focus Area: AI Strategy & Leadership",
    courses: [
      {
        name: "AI Leadership & Market Analysis",
        description:
          "Techniques for analyzing market opportunities and leading AI-driven initiatives within organizations.",
      },
      {
        name: "AI & Data-Driven Decision Making",
        description:
          "Frameworks for leveraging AI and data analytics to enhance organizational decision-making processes.",
      },
      {
        name: "Creative & Generative AI",
        description: "Applications of generative AI in creative industries and business innovation contexts.",
      },
      {
        name: "AI Security & Data Privacy",
        description: "Security considerations, privacy frameworks, and risk management strategies for AI systems.",
      },
    ],
  },
]

const bachelorCourseCategories: CourseCategory[] = [
  {
    name: "General Education Courses",
    courses: [
      {
        code: "ECON 201",
        name: "Introduction to Microeconomics",
        description:
          "Introduction to the principles of microeconomics, including supply and demand, market structures, and consumer behavior.",
      },
      {
        code: "ECON 200",
        name: "Introduction to Macroeconomics",
        description: "Overview of macroeconomic principles like national income, monetary policy, and economic growth.",
      },
      {
        code: "MATH 199",
        name: "Algebra/Precalculus Gateway",
        description: "Foundational algebra and precalculus concepts.",
      },
      {
        code: "MATH 205",
        name: "Introductory Calculus I",
        description: "Introduction to calculus concepts, including limits, derivatives, and integrals.",
      },
      {
        code: "PHIL 120",
        name: "Critical Thinking",
        description: "Focus on logical reasoning and problem-solving skills.",
      },
      {
        code: "PHIL 150",
        name: "Ethical Reasoning",
        description: "Exploration of ethical theories and their applications to real-world scenarios.",
      },
      {
        code: "PSYC 101",
        name: "General Psychology",
        description: "Survey of psychological principles, including human behavior, cognition, and emotion.",
      },
      {
        code: "SCOM 123",
        name: "Fundamentals of Human Communication: Group Presentations",
        description: "Focus on group communication, presentation skills, and collaborative teamwork.",
      },
      {
        code: "HIST 225",
        name: "U.S. History",
        description: "Examination of key events and themes in American history.",
      },
      {
        code: "KIN 100",
        name: "Lifetime Fitness and Wellness",
        description: "Principles of personal fitness and wellness with practical fitness activities.",
      },
      {
        code: "HTH 100",
        name: "Personal Wellness",
        description: "Overview of health and wellness, including mental health, nutrition, and stress management.",
      },
      {
        code: "REL 101",
        name: "Religions of the World",
        description: "Study of major world religions, their beliefs, practices, and cultural impacts.",
      },
    ],
  },
  {
    name: "College of Business Courses",
    courses: [
      {
        code: "COB 191",
        name: "Business Analytics I",
        description: "Introduction to data analysis and decision-making in a business context.",
      },
      {
        code: "COB 202",
        name: "Interpersonal Skills",
        description: "Development of communication and leadership skills for workplace collaboration.",
      },
      {
        code: "COB 241",
        name: "Financial Accounting",
        description: "Introduction to the principles of financial accounting.",
      },
      {
        code: "COB 242",
        name: "Managerial Accounting",
        description: "Focus on using accounting information for management decision-making.",
      },
      {
        code: "COB 291",
        name: "Business Analytics II",
        description: "Advanced business analytics and decision-making tools.",
      },
    ],
  },
  {
    name: "Computer Science and Information Systems",
    courses: [
      {
        code: "CIS 221",
        name: "Principles of Programming",
        description: "Fundamentals of programming with an emphasis on structured problem-solving and coding.",
      },
      {
        code: "COB 204",
        name: "Computer Information Systems",
        description: "Basics of information systems and their applications in business.",
      },
      {
        code: "CIS 340",
        name: "Web Development",
        description: "Development of web applications using modern web technologies and frameworks.",
      },
      {
        code: "CIS 450",
        name: "Mobile App Development",
        description: "Design and development of mobile applications for iOS and Android platforms.",
      },
      {
        code: "CIS 430",
        name: "Data Visualization",
        description: "Techniques and tools for creating effective visual representations of complex data sets.",
      },
    ],
  },
  {
    name: "Media Arts and Design (SMAD) Courses",
    courses: [
      {
        code: "SMAD 101",
        name: "Introduction to Media Arts and Design",
        description:
          "Overview of the field of media arts and design, covering basic concepts and career opportunities.",
      },
      {
        code: "SMAD 201",
        name: "Visual Communication Design",
        description: "Introduction to visual design principles and techniques.",
      },
      {
        code: "SMAD 202",
        name: "Audio-Visual Storytelling",
        description: "Fundamentals of storytelling through audio-visual media, including scripting and editing.",
      },
      {
        code: "SMAD 203",
        name: "User Experience Design",
        description: "Basics of designing user-centric digital experiences.",
      },
      {
        code: "SMAD 307",
        name: "Interactive Design for the Web",
        description: "Principles of web design, including HTML, CSS, and user interaction.",
      },
      {
        code: "SMAD 301",
        name: "The Media Arts: Culture by Design",
        description: "Exploration of how media arts shape and are shaped by culture.",
      },
      {
        code: "SMAD 315",
        name: "Digital Social Media Advertising",
        description: "Study of advertising principles within the context of social media platforms.",
      },
      {
        code: "SMAD 317",
        name: "User Interaction Design",
        description: "Advanced concepts in user interaction design for digital products.",
      },
      {
        code: "SMAD 332",
        name: "Advanced Visual Communication Design",
        description: "Advanced techniques in graphic design and communication.",
      },
      {
        code: "SMAD 400",
        name: "Senior Assessment in Media Arts and Design",
        description: "Capstone project assessing skills acquired during the program.",
      },
      {
        code: "SMAD 408",
        name: "Converged Media Lab",
        description: "Practical application of multimedia storytelling in a lab setting.",
      },
      {
        code: "SMAD 417",
        name: "Business and Management in Interactive Design",
        description: "Focus on project management and business strategies in media design.",
      },
      {
        code: "SMAD 470",
        name: "New Media and Society",
        description: "Exploration of new media technologies and their societal impacts.",
      },
      {
        code: "SMAD 472",
        name: "Media and Politics",
        description: "Study of the relationship between media and political processes.",
      },
    ],
  },
  {
    name: "Special Topics and Electives",
    courses: [
      {
        code: "UNST 190",
        name: "Special Topics: X-Labs Applied Exploration",
        description: "Hands-on interdisciplinary projects with a focus on real-world applications like 3D printing.",
      },
      {
        code: "UNST 190",
        name: "Special Topics: 3D Printing Real World Solutions",
        description: "Advanced exploration of 3D printing technologies and their practical uses.",
      },
      {
        code: "LTLE 375",
        name: "Selected Topics in Media: 3D Printing Real World Solutions",
        description: "Deep dive into 3D printing applications in media arts and design.",
      },
      {
        code: "CISE 480",
        name: "Special Topics in Computer Science and Engineering: eSports",
        description: "Examination of the eSports industry, its technologies, and cultural implications.",
      },
    ],
  },
  {
    name: "Natural Sciences",
    courses: [
      {
        code: "PHYS 121",
        name: "The Nature of Light and Sound",
        description: "Study of the physical principles behind light and sound, including practical applications.",
      },
      {
        code: "ANTH 196",
        name: "Biological Anthropology",
        description: "Introduction to the biological and evolutionary aspects of human life.",
      },
      {
        code: "ARTH 206",
        name: "Renaissance to Modern Art",
        description: "Exploration of artistic movements from the Renaissance to modern times.",
      },
    ],
  },
]

export default function Classes() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" passHref>
          <Button variant="outline" className="mb-8 bg-transparent">
            <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-8"
        >
          My Classes
        </motion.h1>

        {/* Master's Degree Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center mb-6">
            <h2 className="text-3xl font-bold text-white mr-3">Master's Courses</h2>
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
              <Badge className="bg-[#041E42] text-white">Georgetown University</Badge>
              <Badge className="bg-[#63666A] text-white">Started Summer 2025</Badge>
            </div>
          </div>

          <div className="space-y-8">
            {mastersCourseCategories.map((category, index) => (
              <motion.div
                key={`master-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm border-l-4 border-l-[#041E42]">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.courses.map((course, courseIndex) => (
                        <AccordionItem
                          key={`master-${index}-${courseIndex}`}
                          value={`master-item-${index}-${courseIndex}`}
                        >
                          <AccordionTrigger className="text-white hover:text-white/80 font-medium">
                            {course.name}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">{course.description}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bachelor's Degree Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-wrap items-center mb-6">
            <h2 className="text-3xl font-bold text-white mr-3">Bachelor's Courses</h2>
            <Badge className="bg-purple-600 text-white mt-2 sm:mt-0">James Madison University</Badge>
          </div>

          <div className="space-y-8">
            {bachelorCourseCategories.map((category, index) => (
              <motion.div
                key={`bachelor-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.courses.map((course, courseIndex) => (
                        <AccordionItem
                          key={`bachelor-${index}-${courseIndex}`}
                          value={`bachelor-item-${index}-${courseIndex}`}
                        >
                          <AccordionTrigger className="text-white hover:text-white/80">
                            {course.code && <span className="font-semibold">{course.code} - </span>}
                            {course.name}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">{course.description}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
