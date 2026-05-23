import { motion } from 'framer-motion'
import { Layers, ArrowRight } from 'lucide-react'
import { SectionLabel, SectionTitle, SectionSubtitle, Reveal, GlowOrb, SecondaryButton } from './shared'

const topFlow = [
  'User Mobile App',
  'API Gateway',
  'Trading Platform Core',
  'AI Recommendation Engine',
  'Risk Analysis Engine',
  'Market Intelligence',
  'Notification System',
]

export default function ArchitectureSection({ onViewArchitecture }) {
  return (
    <section id="architecture" className="relative section-padding overflow-hidden bg-surface-raised/50">
      <GlowOrb className="w-[500px] h-[500px] right-0 bottom-0" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Technical Architecture</SectionLabel>
          <SectionTitle className="mb-6">How the AI works</SectionTitle>
          <SectionSubtitle className="mb-10">
            A real-time pipeline connecting market intelligence to personalised investor guidance — designed for scale inside a trading platform.
          </SectionSubtitle>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative glass-strong rounded-3xl p-8 md:p-12 mb-8 overflow-hidden gradient-border">
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }} />

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light mb-8 text-center">
              System Flow Overview
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {topFlow.map((step, i) => (
                <div key={step} className="flex items-center">
                  <span className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold ${
                    step.includes('AI') || step.includes('Risk')
                      ? 'bg-accent/15 text-accent-light border border-accent/25'
                      : 'glass text-white/60'
                  }`}>
                    {step}
                  </span>
                  {i < topFlow.length - 1 && (
                    <span className="mx-1 text-accent/30 text-xs hidden sm:inline">→</span>
                  )}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { n: '9', label: 'Architecture Layers' },
                { n: '6', label: 'AI Processing Modules' },
                { n: '99.99%', label: 'Target Uptime SLA' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-gradient-blue">{s.n}</p>
                  <p className="text-[12px] text-white/40 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onViewArchitecture}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-[15px] bg-gradient-to-r from-accent to-indigo-500 text-white shadow-glow"
              >
                <Layers size={18} />
                View Full Architecture
                <ArrowRight size={16} />
              </motion.button>
              <p className="text-[13px] text-white/35 text-center sm:text-left">
                9-layer enterprise diagram · AI-native · Cloud-first
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Real-time market data ingestion',
            'AI-generated trade summaries',
            'Portfolio concentration analysis',
            'Volatility pattern prediction',
            'Personalised risk scoring',
            'Contextual push notifications',
          ].map((cap, i) => (
            <motion.div
              key={cap}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 glass rounded-xl px-5 py-4"
            >
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span className="text-[14px] text-white/60">{cap}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
