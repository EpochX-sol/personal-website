'use client'

import { useState, useEffect } from 'react'
import { Button } from "../ui/button"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '../../utils/constants'

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Samuel Wubalem
          </motion.a>
 
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`relative text-sm font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.id ? 'text-blue-500' : 'text-gray-300'
                }`}
                onClick={() => setActiveSection(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 -z-10 rounded-md bg-blue-600/50"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    style={{ height: '120%', width: '120%', top: '-10%', left: '-10%' }}
                  />
                )}
                {item.label}
              </motion.a>
            ))}
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              onClick={() => window.location.href = '#contact'}
            >
              Contact Me
            </Button>
          </div>
 
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>
 
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id 
                      ? 'bg-blue-500/10 text-blue-500' 
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                  onClick={() => {
                    setActiveSection(item.id)
                    setMenuOpen(false)
                  }}
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="px-4 pt-4 border-t border-gray-800">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  onClick={() => {
                    window.location.href = '#contact'
                    setMenuOpen(false)
                  }}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 