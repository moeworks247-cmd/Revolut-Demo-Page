import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Heart, Shield, Bot } from 'lucide-react'
import { SectionLabel, SectionTitle, SectionSubtitle, Reveal, GlowOrb } from './shared'

const quarters = [
  {
    q: 'Q1 2026',
    title: 'AI Trade Summaries',
    desc: 'Launch plain-language stock summaries, earnings context, and news synthesis for top 500 equities.',
    icon: Sparkles,
    status: 'current',
    deliverables: ['Real-time news aggregation', 'GPT-powered summaries', 'In-app insight cards'],
  },
  {
    q: 'Q2 2026',
    title: 'Portfolio Health Engine',
    desc: 'Diversification scoring, sector exposure analysis, and personalised rebalancing recommendations.',
    icon: Heart,
    status: 'next',
    deliverables: ['Health score algorithm', 'Sector visualisation', 'Weekly health reports'],
  },
  {
    q: 'Q3 2026',
    title: 'Predictive Risk Alerts',
    desc: 'Pre-trade risk warnings using volatility prediction, earnings pattern analysis, and exposure modelling.',
    icon: Shield,
    status: 'planned',
    deliverables: ['Risk scoring model', 'Pre-trade modal', 'Volatility forecasting'],
  },
  {
    q: 'Q4 2026',
    title: 'AI Investment Coach',
    desc: 'Conversational AI advisor for personalised guidance, financial education, and goal-based investing.',
    icon: Bot,
    status: 'planned',
    deliverables: ['Chat interface', 'Goal tracking', 'Beginner curriculum'],
  },
]

export default function RoadmapSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="roadmap" className="relative section-padding overflow-hidden">
      <GlowOrb className="w-[600px] h-[600px] -left-40 top-20" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Product Strategy</SectionLabel>
          <SectionTitle className="mb-6">Roadmap to intelligent investing</SectionTitle>
          <SectionSubtitle className="mb-16">
            A phased rollout designed to deliver value quickly while building toward a full AI investment coaching platform.
          </SectionSubtitle>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-3">
            {quarters.map((item, i) => {
              const Icon = item.icon
              const isActive = active === i
              return (
                <motion.button
                  key={item.q}
                  onClick={() => setActive(i)}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full text-left glass rounded-2xl p-5 transition-all duration-300 ${
                    isActive ? 'border-accent/30 bg-accent/5' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <motion.div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isActive ? 'bg-accent/20' : 'bg-white/5'}`}>
                      <Icon size={20} className={isActive ? 'text-accent-light' : 'text-white/40'} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-0.5">
                        <span className="text-[12px] font-semibold text-accent-light">{item.q}</span>
                        {item.status === 'current' && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-profit/15 text-profit font-semibold">Current</span>
                        )}
                      </div>
                      <p className="font-semibold text-[16px]">{item.title}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full border-2 ${isActive ? 'border-accent bg-accent' : 'border-white/20'}`} />
                  </div>
                </motion.button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-strong rounded-3xl p-8 gradient-border sticky top-32"
            >
              <p className="text-[12px] font-semibold text-accent-light uppercase tracking-wider mb-3">
                {quarters[active].q}
              </p>
              <h3 className="font-display text-3xl mb-4">{quarters[active].title}</h3>
              <p className="text-white/50 leading-relaxed mb-8">{quarters[active].desc}</p>

              <p className="text-[12px] font-semibold text-white/30 uppercase tracking-wider mb-4">Key Deliverables</p>
              <ul className="space-y-3">
                {quarters[active].deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-[14px] text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
