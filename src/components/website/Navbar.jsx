import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { scrollToId } from '../../hooks/useInView'

const links = [
  { label: 'Problem', id: 'problem' },
  { label: 'Solution', id: 'solution' },
  { label: 'Prototype', id: 'prototype' },
  { label: 'Architecture', id: 'architecture' },
  { label: 'Roadmap', id: 'roadmap' },
  { label: 'Impact', id: 'impact' },
]

export default function Navbar({ onViewPrototype, onViewArchitecture }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-lg py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        <button onClick={() => scrollToId('hero')} className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-indigo-600 flex items-center justify-center">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="font-semibold text-[15px] hidden sm:block">AI Trading Copilot</span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              className="text-[13px] font-medium text-white/45 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 flex-shrink-0">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onViewArchitecture}
            className="hidden sm:block px-4 py-2 rounded-full text-[13px] font-semibold glass hover:bg-white/10 border border-white/8 transition-colors"
          >
            View Architecture
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onViewPrototype}
            className="px-4 md:px-5 py-2 rounded-full text-[13px] font-semibold bg-white/8 hover:bg-white/12 border border-white/8 transition-colors"
          >
            View Prototype
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
