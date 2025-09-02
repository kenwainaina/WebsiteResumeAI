"use client"

import { motion } from "framer-motion"
import {
  LinkedinIcon,
  MailIcon,
  RocketIcon,
  ShoppingCartIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  HeartIcon,
  BadgeCheckIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ken Wainaina</h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Interactive Design Graduate | Georgetown AI Management Master's Student
          </h2>
          <div className="flex gap-4 mb-6">
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/kenyatta-wainaina" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:kenwainaina123@gmail.com">
                <MailIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="text-gray-300">Great Falls, VA 22066 | kenwainaina123@gmail.com </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#041E42] to-[#63666A] rounded-full blur-2xl opacity-20" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professional-Pic-pZtU7TQwbyTkboUCWxKctJbYPpysNn.jpeg"
            alt="Profile"
            className="rounded-full w-64 h-64 mx-auto object-cover object-top border-4 border-white/10"
          />
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <p className="text-gray-300 leading-relaxed">
              Highly motivated Interactive Design graduate and current Master's student in Artificial Intelligence
              Management at Georgetown University, combining creative design with expertise in data analytics,
              generative AI, and software development. Proficient in SQL, Python, Java, CSS, and HTML, with experience
              in website development, Microsoft tools, and database administration. Expanding knowledge in AI strategy,
              ethical implementation, and emerging technologies through graduate studies. Skilled in cybersecurity
              frameworks (NIST, FISMA, FISCAM), project management, and cross-functional collaboration, delivering
              efficient, technology-driven solutions with a product management mindset.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <GraduationCapIcon className="mr-2" /> Education
        </h2>
        <div className="space-y-4">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm border-l-4 border-l-[#041E42]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white">Georgetown University, Washington, DC</h3>
              <p className="text-gray-300">Master of Professional Studies in Artificial Intelligence Management</p>
              <p className="text-gray-400">Started Summer 2025</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white">James Madison University, Harrisonburg, VA</h3>
              <p className="text-gray-300">Bachelor of Science – Interactive Design / Computer Information Systems</p>
              <p className="text-gray-400">Graduated: May 2025</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <BriefcaseIcon className="mr-2" /> Work Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-8 w-8 flex items-center justify-center bg-gray-800 text-white rounded">
                  <span className="font-bold text-sm"></span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Specialist</h3>
                  <p className="text-gray-400">Apple Inc., Tysons Corner, VA</p>
                  <p className="text-sm text-gray-500">July 2025 - Present</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>
                  • Drove sales growth by delivering personalized product recommendations aligned to customer needs
                </li>
                <li>
                  • Facilitated seamless device setup and troubleshooting, improving customer confidence and retention
                </li>
                <li>
                  • Cultivated brand loyalty by providing exceptional, solutions-focused service in a high-volume retail
                  setting
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <RocketIcon className="h-8 w-8 text-[#63666A]" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Robot Engineer</h3>
                  <p className="text-gray-400">Starship Technologies</p>
                  <p className="text-sm text-gray-500">February 2021 - June 2025</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>
                  • Managed and maintained 60 on-campus delivery robots, resolving technical issues and ensuring smooth
                  operation
                </li>
                <li>
                  • Led and trained a team of 20 student employees, mentoring them on coding, testing, and
                  implementation
                </li>
                <li>• Awarded US Employee of the Year in 2021, 2022, 2023 for outstanding performance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <ShoppingCartIcon className="h-8 w-8 text-[#63666A]" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Administrative and Communications Intern</h3>
                  <p className="text-gray-400">Harrisonburg Rockingham Chamber of Commerce</p>
                  <p className="text-sm text-gray-500">May 2024 – August 2024</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>
                  • Engineered an efficient integration framework for QuickBooks and Chamber Master, accelerating
                  reporting capabilities
                </li>
                <li>• Created and scheduled social media announcements to promote Chamber events and initiatives</li>
                <li>• Researched and proposed alternative solutions for existing paid memberships to online systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-8 w-8 flex items-center justify-center bg-blue-600 text-white rounded">
                  <span className="font-bold text-sm">M</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">AI Strategy Intern</h3>
                  <p className="text-gray-400">Meta</p>
                  <p className="text-sm text-gray-500">May 2023 - September 2023 · 5 months</p>
                  <p className="text-sm text-gray-500">Menlo Park, California, United States · On-site</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>
                  • Assisted in developing AI-driven business strategies to enhance operational efficiency across Meta's
                  global teams, focusing on optimizing data processing workflows
                </li>
                <li>
                  • Collaborated with cross-functional teams to integrate AI tools into business operations, improving
                  user engagement and customer experience
                </li>
                <li>
                  • Analyzed the effectiveness of AI-based solutions in streamlining marketing campaigns and customer
                  support automation, reducing response times by 25%
                </li>
                <li>
                  • Provided insights into ethical AI implementation, ensuring alignment with Meta's compliance
                  standards and data privacy regulations
                </li>
                <li>
                  • Supported the creation of AI training materials for team members, increasing internal awareness of
                  machine learning tools used in business decision-making
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <ShoppingCartIcon className="h-8 w-8 text-[#63666A]" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Admissions Manager</h3>
                  <p className="text-gray-400">Water Mine Family Swimming Hole</p>
                  <p className="text-sm text-gray-500">May 2018 - September 2021</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• Advanced from Cashier to manager in two years, leading and optimizing a team of 7 cashiers</li>
                <li>• Collaborated with upper management to define and implement roles and responsibilities</li>
                <li>• Coached and mentored cashiers to improve customer service and performance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Leadership Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <GraduationCapIcon className="mr-2" /> Leadership and Activities
        </h2>
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white">Head Coach (Volunteer)</h3>
            <p className="text-gray-300">Little Legends Basketball, Vienna, VA</p>
            <ul className="space-y-2 text-gray-300 mt-4">
              <li>• Coached 12 kids from 6th to 8th grade</li>
              <li>• Won Coach of the Year award two years in a row</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm mt-4">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white">Audio Visual Specialist</h3>
            <p className="text-gray-300">McLean Bible Church</p>
            <p className="text-gray-400">Science and Technology</p>
            <ul className="space-y-2 text-gray-300 mt-4">
              <li>• Managed church audio and visual</li>
              <li>• Created new visuals and scripts to perform on stage during service</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <BadgeCheckIcon className="mr-2" /> Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">Programming & Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>JavaScript (incl. Frameworks)</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>HTML</li>
                <li>SQL</li>
                <li>Linux</li>
                <li>Front-End Development</li>
                <li>Web Development</li>
                <li>Bootstrap</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">Design & User Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>User Experience Design (UED)</li>
                <li>User Experience (UX)</li>
                <li>User Analysis</li>
                <li>User Personas</li>
                <li>Interaction Design</li>
                <li>Web Design</li>
                <li>Design Management</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Premiere Pro</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">Data & Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Data Science</li>
                <li>Database Development</li>
                <li>Database Queries</li>
                <li>Database Management System (DBMS)</li>
                <li>Database Administration</li>
                <li>Pivot Tables</li>
                <li>Analytical Solutions</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm border-l-4 border-l-[#041E42]">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">Artificial Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Machine Learning</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Large Language Models</li>
                <li>AI Ethics & Governance</li>
                <li>Generative AI</li>
                <li>AI Strategy Development</li>
                <li>Neural Networks</li>
                <li>Prompt Engineering</li>
                <li>AI Integration</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">Business & Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Project Management</li>
                <li>Management</li>
                <li>Sales</li>
                <li>Advertising</li>
                <li>Business Collaboration</li>
                <li>QuickBooks</li>
                <li>Atlassian Bamboo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">Software & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Microsoft Office</li>
                <li>Microsoft PowerPoint</li>
                <li>Google Sites</li>
                <li>Computer Networking</li>
                <li>System Identification</li>
                <li>Computer Information Systems</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
                <li>Critical Thinking</li>
                <li>Thinking Skills</li>
                <li>Dexterity</li>
                <li>Troubleshooting</li>
                <li>Collaborative Environment</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Interests Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <HeartIcon className="mr-2" /> Interests
        </h2>
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <p className="text-gray-300">
              Technology including AI, UI/UX Design, Robotics, Team Sports (Basketball, Football, Lacrosse), Golf
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
