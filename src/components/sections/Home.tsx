'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Download, ArrowRight } from 'lucide-react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const downloadCV = () => {
    window.open('/cv.pdf', '_blank')
  }

  const navigateToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-b from-gray-900 to-gray-800 px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-blue-500">Software Developer</span> with a passion for innovation
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Results-oriented software developer with expertise in full-stack development, 
              specializing in Javascript, Python, and modern web technologies. 
              Committed to creating efficient solutions and delivering exceptional results.
            </p>

            <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
              <motion.button
                onClick={() => navigateToSection('contact')}
                className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Let's Connect</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                onClick={() => navigateToSection('projects')}
                className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-blue-400 border-2 border-blue-400 rounded-xl overflow-hidden transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.button>

              <motion.button
                onClick={downloadCV}
                className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 text-gray-300 rounded-xl overflow-hidden transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center perspective-1000"
          >
            <motion.div
              className="relative w-[500px] h-[500px] max-w-full"
              animate={!isMobile ? {
                rotateX: mousePosition.y * 0.1,
                rotateY: mousePosition.x * 0.1,
              } : undefined}
              transition={{ type: "spring", stiffness: 75, damping: 15 }}
              style={{ transformStyle: !isMobile ? 'preserve-3d' : undefined }}
            >
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-conic from-blue-500 via-purple-500 to-blue-500"
                animate={!isMobile ? { rotate: 360 } : undefined}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <motion.div 
                className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 bg-gray-900"
                style={{ transform: !isMobile ? 'translateZ(20px)' : undefined }}
              >
                <div className={`absolute inset-0 ${!isMobile ? 'animate-gradient-slow' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-400/50 to-pink-400/50" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/30 via-green-400/30 to-cyan-400/30 mix-blend-overlay" />
                </div> 
                <motion.div
                  className="relative z-10 w-full h-full"
                  whileHover={!isMobile ? { scale: 1.05 } : undefined}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/portfolio2.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
 
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10" />

              {!isMobile && [...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 rounded-full bg-blue-500/10"
                  initial={{ x: 0, y: 0 }}
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${20 + i * 25}%`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 