import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { PrimaryButton, GlowOrb } from './shared'
import { scrollToId } from '../../hooks/useInView'

export default function CTASection() {
  return (
    <section id="cta" className="relative section-padding overflow-hidden">
      <GlowOrb className="w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GlowOrb className="w-[400px] h-[400px] left-1/4 top-1/4" color="purple" />

      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[12px] font-medium text-white/50 mb-8"
        >
          <Sparkles size={14} className="text-accent-light" />
          Conceptual Product Portfolio · 2026
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-8"
        >
          <span className="text-gradient">The Future of Retail Investing</span>
          <br />
          <span className="text-gradient-blue">Is AI-Assisted.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg text-white/45 leading-relaxed max-w-2xl mx-auto mb-12"
        >
          AI Trading Copilot represents the next generation of fintech — where every investor, regardless of experience, has an intelligent partner guiding their financial journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <PrimaryButton onClick={() => scrollToId('prototype')}>
            View Full Product Case Study
            <ArrowRight size={16} className="inline ml-2 -mt-0.5" />
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-indigo-600 flex items-center justify-center">
            <Sparkles size={14} className="text-white" />
          </div>
          <span className="text-sm font-medium text-white/50">AI Trading Copilot</span>
        </div>
        <p className="text-[13px] text-white/25 text-center">
          Conceptual product portfolio · Not affiliated with Revolut Ltd.
        </p>
        <p className="text-[13px] text-white/25">© 2026 · Product Design Portfolio</p>
      </div>
    </footer>
  )
}
