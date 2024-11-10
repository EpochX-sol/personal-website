'use client'

import { motion } from 'framer-motion'
import { Code, GraduationCap, Award, Briefcase, CheckCircle2 } from 'lucide-react'
 
const GROUPED_SKILLS = {
  "Frontend": [
    "React",
    "Next.js",
    "Svelte",
    "TypeScript",
    "TailwindCSS",
    "HTML/CSS",
  ],
  "Backend": [
    "Node.js",
    "Python",
    "Go",
    "Express",
    "FastAPI",
    "Django",
  ],
  "Database": [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
  ],
  "Tools & Others": [
    "Git",
    "Docker",
    "AWS",
    "Linux",
    "REST API",
    "GraphQL",
  ]
}

export default function About() {
  return (
    <section id="about" className="min-h-screen relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">

      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate software developer with a focus on creating efficient and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8"> 
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          > 
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-purple-500" />
                Education
              </h3>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-400">Computer Science</h4>
                <p className="text-gray-300">Microlink Information and Technology College</p>
                <p className="text-gray-400 mt-2">2019 – August 2023</p>
                <p className="text-gray-400 mt-4">Addis Ababa, Ethiopia</p>
              </div>
            </div>
 
            <div className="glass rounded-2xl px-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-blue-500" />
                Work Experience
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 pb-6 border-l-2 border-gray-700">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
                  <h4 className="text-lg font-semibold text-blue-400">Junior Software Developer</h4>
                  <p className="text-gray-400">Fineto Software</p>
                  <p className="text-sm text-gray-500">February 2024 - Present</p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500 shrink-0 mt-0.5" />
                      <span>Develop and maintain applications using Frappe ERP framework</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500 shrink-0 mt-0.5" />
                      <span>Implement AI automation solutions to enhance business processes</span>
                    </li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-700">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0" />
                  <h4 className="text-lg font-semibold text-purple-400">Software Developer</h4>
                  <p className="text-gray-400">Upwork</p>
                  <p className="text-sm text-gray-500">April 2024 - Present</p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-purple-500 shrink-0 mt-0.5" />
                      <span>Specialize in frontend development using Svelte and SvelteKit</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-purple-500 shrink-0 mt-0.5" />
                      <span>Implement backend solutions using Go lang</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
 
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-yellow-500" />
                Awards & Achievements
              </h3>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-400">Best Project Winner 2023</h4>
                <p className="text-gray-300">TELE-HEALTH TECHNOLOGY</p>
                <p className="text-gray-400 mt-2">Microlink Information Technology College</p>
                <p className="text-gray-300 mt-4">
                  Selected as the first among all projects in the Computer Science department
                </p>
              </div>
            </div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-pink-500" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(GROUPED_SKILLS).map(([category, skills], categoryIndex) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-gray-300 mb-3 flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        categoryIndex % 4 === 0 ? 'bg-blue-500' :
                        categoryIndex % 4 === 1 ? 'bg-purple-500' :
                        categoryIndex % 4 === 2 ? 'bg-pink-500' :
                        'bg-green-500'
                      }`} />
                      {category}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className={`bg-gray-800/50 p-3 rounded-lg flex items-center space-x-3 border border-gray-700/50 ${
                            categoryIndex % 4 === 0 ? 'hover:border-blue-500/50' :
                            categoryIndex % 4 === 1 ? 'hover:border-purple-500/50' :
                            categoryIndex % 4 === 2 ? 'hover:border-pink-500/50' :
                            'hover:border-green-500/50'
                          }`}
                        >
                          <Code className={`w-4 h-4 ${
                            categoryIndex % 4 === 0 ? 'text-blue-500' :
                            categoryIndex % 4 === 1 ? 'text-purple-500' :
                            categoryIndex % 4 === 2 ? 'text-pink-500' :
                            'text-green-500'
                          }`} />
                          <span className="text-sm">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 