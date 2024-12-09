'use client'

import { motion } from 'framer-motion' 
import { Download, ArrowRight } from 'lucide-react'
import ThreeModel from '../../components/ThreeModel'
import { useEffect, useState } from 'react'

interface HomeProps {
  onLoadComplete: () => void;
}

export default function Home({ onLoadComplete }: HomeProps) { 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const downloadCV = () => {
    window.open('/cv.pdf', '_blank')
  }

  const navigateToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
 
  if (isMobile) {
    return (
      <section id="home" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="px-4 py-6"> 
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] mb-6"
          >
            <ThreeModel onLoadComplete={onLoadComplete} />
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} 
          >
            <h1 className="text-3xl font-bold text-white mb-4">
              <span className="text-blue-500 block mb-2">Software Developer</span>
              with a passion for innovation
            </h1>
            
            <p className="text-gray-300 text-base mb-8 leading-relaxed">
              Results-oriented software developer specializing in Javascript, 
              Python, and modern web technologies.
            </p>
 
            <div className="flex flex-col gap-3">
              <motion.button
                onClick={() => navigateToSection('contact')}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl"
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={() => navigateToSection('projects')}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-transparent text-blue-400 border-2 border-blue-400 rounded-xl"
                whileTap={{ scale: 0.95 }}
              >
                <span>View Projects</span>
              </motion.button>

              <motion.button
                onClick={downloadCV}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-800 text-gray-300 rounded-xl"
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Desktop Layout
  return (
    <section id="home" className="h-screen relative bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto h-full px-8">
        <div className="grid grid-cols-2 gap-12 h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              <span className="text-blue-500">Software Developer</span> with a passion for innovation
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Results-oriented software developer with expertise in full-stack development, 
              specializing in Javascript, Python, and modern web technologies. 
              Committed to creating efficient solutions and delivering exceptional results.
            </p>

            <div className="flex gap-4">
              <motion.button
                onClick={() => navigateToSection('contact')}
                className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                onClick={() => navigateToSection('projects')}
                className="px-8 py-4 bg-transparent text-blue-400 border-2 border-blue-400 rounded-xl hover:text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Projects</span>
              </motion.button>

              <motion.button
                onClick={downloadCV}
                className="group flex items-center gap-2 px-8 py-4 bg-gray-800 text-gray-300 rounded-xl hover:text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                <span>Download CV</span>
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center"
          >
            <div className="relative w-full h-[600px]">
              <ThreeModel onLoadComplete={onLoadComplete} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}