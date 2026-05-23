import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Layers } from 'lucide-react'
import SystemArchitectureDiagram from './SystemArchitectureDiagram'

export default function ArchitectureDiagramModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex flex-col"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#030306]/95 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Ambient glows */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
          <motion.div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative glass-strong border-b border-white/5 px-6 md:px-10 py-4 flex items-center justify-between flex-shrink-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/30 to-indigo-600/20 border border-accent/30 flex items-center justify-center">
                <Layers size={20} className="text-accent-light" />
              </div>
              <div>
                <h2 className="font-semibold text-[16px]">System Architecture</h2>
                <p className="text-[12px] text-white/40">AI Trading Copilot · Enterprise Cloud Diagram</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-white/30 px-3 py-1.5 rounded-full glass">
                <span className="w-1.5 h-1.5 rounded-full bg-profit animate-pulse" />
                9 Layers · Cloud-Native
              </span>
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={onClose}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Close architecture diagram"
              >
                <X size={18} className="text-white/60" />
              </motion.button>
            </div>
          </motion.div>

          {/* Scrollable diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative flex-1 overflow-y-auto overflow-x-hidden"
          >
            <motion.div className="pt-8 pb-4 text-center px-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-light mb-3">
                Technical Architecture
              </p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-gradient mb-3">
                AI Trading Copilot
              </h1>
              <p className="text-white/40 max-w-xl mx-auto text-[15px]">
                Enterprise-grade, AI-native architecture for a modern retail investing platform — designed for scale, trust, and intelligent decision-making.
              </p>
            </motion.div>

            <SystemArchitectureDiagram />

            <div className="max-w-5xl mx-auto px-8 pb-12 text-center">
              <p className="text-[12px] text-white/25">
                Conceptual architecture · AI Trading Copilot Product Portfolio · 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
