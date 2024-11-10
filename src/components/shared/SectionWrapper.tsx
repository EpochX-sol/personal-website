'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  background?: 'default' | 'alternate';
}

export default function SectionWrapper({ 
  children, 
  id, 
  className = "", 
  background = 'default' 
}: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={`min-h-screen flex items-center justify-center p-8 
        ${background === 'alternate' ? 'bg-gray-800' : 'bg-gray-900'}
        ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto w-full"
      >
        {children}
      </motion.div>
    </section>
  )
} 