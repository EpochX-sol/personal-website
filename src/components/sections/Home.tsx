'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window width is less than 1024px (lg breakpoint)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile)

    // Mouse move event only for desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        const { clientX, clientY } = e
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        const moveX = (clientX - centerX) / 25
        const moveY = (clientY - centerY) / 25
        setMousePosition({ x: moveX, y: moveY })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile])

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-b from-gray-900 to-gray-800 px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      {/* Background Effects */}
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
            <div className="flex gap-4">
              <motion.a
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                whileTap={!isMobile ? { scale: 0.95 } : undefined}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                whileTap={!isMobile ? { scale: 0.95 } : undefined}
              >
                View Projects
              </motion.a>
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
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-conic from-blue-500 via-purple-500 to-blue-500"
                animate={!isMobile ? { rotate: 360 } : undefined}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Main Image Container */}
              <motion.div 
                className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 bg-gray-900"
                style={{ transform: !isMobile ? 'translateZ(20px)' : undefined }}
              >
                {/* Gradient Overlay */}
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

              {/* Floating Elements - Only show on desktop */}
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