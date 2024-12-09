'use client'

import { useState, useEffect, useRef } from 'react'
import Navigation from './components/layout/Navigation' 
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { motion, AnimatePresence } from 'framer-motion'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'
import './App.css'

const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="relative flex flex-col items-center">
        {/* Glowing background effect */}
        <div className="absolute inset-0 blur-3xl opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
        </div>
        
        {/* Main loading container */}
        <div className="relative flex flex-col items-center gap-8 p-8">
          {/* Spinning circles */}
          <div className="relative w-24 h-24">
            <motion.div
              className="absolute inset-0 border-4 border-blue-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-purple-500 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 border-4 border-pink-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Center dot */}
            <motion.div 
              className="absolute inset-[42%] bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
 
          <div className="flex flex-col items-center gap-2">
            <motion.h2 
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Please wait
            </motion.h2>
             
            <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                animate={{
                  width: ["0%", "100%"],
                  x: ["-100%", "0%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
 
            <motion.p 
              className="text-gray-400 text-sm flex items-center gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            > 
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.2 }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.4 }}
              >
                .
              </motion.span>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ErrorFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h2>Something went wrong. Please try again.</h2>
      </div>
    </div>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const loadTriggerCount = useRef(0);

  const handleLoadComplete = () => { 
    loadTriggerCount.current += 1;
    
    if (loadTriggerCount.current >= 2) {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) { 
        setIsLoading(false);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Suspense fallback={<LoadingScreen />}>
          <AnimatePresence mode='wait'>
            <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
              <Navigation 
                activeSection={activeSection} 
                setActiveSection={setActiveSection} 
              />
              
              <main className="scrollable">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home onLoadComplete={handleLoadComplete} />
                  <About />
                  <Projects />
                  <Contact />
                </motion.div>
              </main>

              <footer className="py-6 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} SAMUEL WUBALEM. All rights reserved.</p>
              </footer>
            </div>
          </AnimatePresence>
        </Suspense>
      )}
    </ErrorBoundary>
  );
}