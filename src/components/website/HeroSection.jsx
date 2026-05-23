import { motion } from 'framer-motion'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react'
import { PrimaryButton, SecondaryButton, GlowOrb } from './shared'
import { scrollToId } from '../../hooks/useInView'

const chartData = [
  { v: 420 }, { v: 445 }, { v: 438 }, { v: 462 }, { v: 478 }, { v: 491 }, { v: 512 }, { v: 528 },
]

const floatingCards = [
  { label: 'AI Insight', text: 'Tech concentration at 42%', x: '-8%', y: '12%', delay: 0 },
  { label: 'Risk Alert', text: '18% weekly volatility', x: '72%', y: '8%', delay: 0.2 },
  { label: 'Health Score', text: 'Portfolio: 68/100', x: '68%', y: '72%', delay: 0.4 },
]

function HeroDashboard() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <GlowOrb className="w-96 h-96 -top-20 left-1/2 -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative glass-strong rounded-3xl p-6 glow-blue gradient-border"
        style={{ perspective: 1000 }}
      >
        <motion.div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[11px] text-white/40 uppercase tracking-wider mb-1">Portfolio Value</p>
            <p className="text-3xl font-bold tabular-nums">$47,832.64</p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-profit/15 text-profit text-sm font-semibold">
            <TrendingUp size={14} />
            +2.68%
          </div>
        </motion.div>

        <div className="h-[140px] mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} fill="url(#heroGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass rounded-xl p-4 ai-shimmer">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={14} className="text-accent-light" />
            <span className="text-[10px] font-semibold text-accent-light uppercase tracking-wider">AI Copilot</span>
          </div>
          <p className="text-[13px] text-white/70 leading-relaxed">
            Your portfolio is heavily concentrated in tech stocks. Consider diversifying to reduce sector risk.
          </p>
        </div>

        {/* Pulse rings */}
        <motion.div
          className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-accent"
          animate={{ boxShadow: ['0 0 0 0 rgba(59,130,246,0.4)', '0 0 0 12px rgba(59,130,246,0)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + card.delay, duration: 0.6 }}
          className="absolute glass rounded-xl px-4 py-3 hidden md:block"
          style={{ left: card.x, top: card.y }}
        >
          <p className="text-[10px] text-accent-light font-semibold uppercase tracking-wider mb-0.5">{card.label}</p>
          <p className="text-[12px] text-white/70 whitespace-nowrap">{card.text}</p>
        </motion.div>
      ))}
    </div>
  )
}

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[12px] font-medium text-white/60 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Conceptual Product · Revolut Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-gradient">AI-Powered</span>
              <br />
              <span className="text-gradient-blue">Investing Confidence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/50 leading-relaxed max-w-xl mb-10"
            >
              Helping retail investors make smarter, safer, and more informed trading decisions through AI-driven market intelligence.
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
              {[['6', 'Core Features'], ['4', 'Quarter Roadmap'], ['6', 'Prototype Screens']].map(([n, l]) => (
                <div key={l}>
                  <p className="text-2xl font-bold text-gradient-blue">{n}</p>
                  <p className="text-[12px] text-white/35 mt-1">{l}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <HeroDashboard />
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
          <div className="w-1 h-2 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
