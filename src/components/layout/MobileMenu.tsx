'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '@/utils/constants'

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function MobileMenu({ 
  isOpen, 
  setIsOpen, 
  activeSection, 
  setActiveSection 
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'tween' }}
          className="fixed inset-y-0 left-0 w-64 bg-gray-800 z-50 md:hidden"
        >
          <ul className="flex flex-col space-y-4 p-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-500' : 'text-gray-300'
                  }`}
                  onClick={() => {
                    setActiveSection(item.id)
                    setIsOpen(false)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 