import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton, SecondaryButton, GlowOrb } from './shared'
import RevolutHomePhone from './RevolutHomePhone'
import RevaLogo from '../RevaLogo'
import { scrollToId } from '../../hooks/useInView'
import { PROTOTYPE_SCREENS } from '../../data/prototypeScreens'
import { DELIVERY_PHASES } from '../../data/productGantt'

export default function HeroSection({ onViewPrototype, onViewArchitecture }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      <GlowOrb className="w-[600px] h-[600px] -top-40 -left-40" />
      <GlowOrb className="w-[500px] h-[500px] top-20 -right-40" color="purple" />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-[12px] font-medium text-white/60 mb-8"
            >
              <RevaLogo size="sm" />
              REVA · Revolut Enhanced Value Advisor
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-4 mb-6"
            >
              <RevaLogo size="2xl" ring className="hidden sm:block" />
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                <span className="text-gradient">REVA</span>
                <br />
                <span className="text-gradient-blue text-4xl md:text-5xl lg:text-6xl">Revolut Enhanced Value Advisor</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/50 leading-relaxed max-w-xl mb-10"
            >
              REVA helps retail investors make smarter, safer, and more informed trading decisions through AI driven market intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <PrimaryButton onClick={() => scrollToId('solution')}>
                Explore Product Vision
                <ArrowRight size={16} className="inline ml-2 -mt-0.5" />
              </PrimaryButton>
              <SecondaryButton onClick={onViewPrototype}>
                View Prototype
              </SecondaryButton>
              <SecondaryButton onClick={onViewArchitecture} className="hidden sm:inline-flex">
                View Architecture
              </SecondaryButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-14 pt-8 border-t border-white/5"
            >
              {[['16', 'AI Features'], [String(DELIVERY_PHASES.length), 'Delivery Windows'], [String(PROTOTYPE_SCREENS.length), 'Prototype Screens']].map(([n, l]) => (
                <div key={l}>
                  <p className="text-2xl font-bold text-gradient-blue">{n}</p>
                  <p className="text-[12px] text-white/35 mt-1">{l}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <RevolutHomePhone />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] text-white/25 uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5"
        >
          <motion.div className="w-1 h-2 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
