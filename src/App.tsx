'use client'

import { useState } from 'react'
import Navigation from './components/layout/Navigation'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { motion, AnimatePresence } from 'framer-motion'
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';

function ErrorFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h2>Something went wrong. Please try again.</h2>
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <AnimatePresence mode='wait'>
          <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
            <Navigation 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
            
            <main>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
                
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <About />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Projects />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Contact />
                </motion.div>
              </motion.div>
            </main>

            <footer className="py-6 text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} SAMUEL WUBALEM. All rights reserved.</p>
            </footer>
          </div>
        </AnimatePresence>
      </Suspense>
    </ErrorBoundary>
  )
}
