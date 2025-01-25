'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../../utils/constants'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
 
  const visibleProjects = showAll ? projects : projects.slice(0, 4)
 
  const nextImage = () => {
    const project = projects.find(p => p.id === selectedProject)
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    const project = projects.find(p => p.id === selectedProject)
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      )
    }
  }
 
  const handleCloseModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  return (
    <section 
      id="projects" 
      className="min-h-0 sm:min-h-screen relative py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm">
            Explore my portfolio of web applications, showcasing expertise in modern technologies.
          </p>
        </div>

        <div className="relative">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:overflow-x-visible sm:pb-0">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex-shrink-0 w-[85%] sm:w-auto snap-center"
              >
                <div 
                  className="glass rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="relative aspect-[4/3] bg-gray-900">
                    <img
                      src={project.images[0]}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-base font-bold mb-1 text-white">{project.title}</h3>
                      <p className="text-gray-200 text-xs line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-900/50 backdrop-blur-sm flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="text-xs text-purple-300">+{project.tags.length - 2}</span>
                      )}
                    </div>
                    <button className="flex items-center text-xs text-purple-400 hover:text-purple-300 transition-colors group mt-auto">
                      View Details
                      <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {!showAll && projects.length > 4 && (
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium transition-colors flex items-center space-x-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>See All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleCloseModal}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-2xl p-4 md:p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative z-10 scrollbar-none"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                overflowY: 'auto',
                overflowX: 'hidden'
              }}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null

                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-bold">{project.title}</h3>
                      <button
                        onClick={handleCloseModal}
                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="relative w-full h-[60vh] rounded-lg overflow-hidden mb-6 bg-gray-900">
                      <img
                        src={project.images[currentImageIndex]}
                        alt={project.title}
                        className="w-full h-full object-contain"
                        style={{
                          backgroundColor: 'rgb(17, 24, 39)'
                        }}
                      /> 
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage();
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage();
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                           
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-3 py-2 rounded-full">
                            {project.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(idx);
                                }}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <p className="text-gray-300 mb-6">
                      {project.longDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature) => (
                          <li 
                            key={feature}
                            className="flex items-center space-x-2 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Live
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-lg transition-colors"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </a>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 