import { useState } from 'react'
import { motion } from 'framer-motion'
import { FlaskConical } from 'lucide-react'

const scenarios = [
  { id: 'rates', label: 'Fed +0.75% Rate Hike', impact: -12.4, desc: 'Growth stocks typically fall as borrowing costs rise' },
  { id: 'crash', label: 'Market -20% Correction', impact: -24.6, desc: 'Based on your current tech-heavy allocation' },
  { id: 'rotation', label: 'Sector Rotation to Energy', impact: -8.2, desc: 'Tech underperforms as capital flows to commodities' },
  { id: 'rally', label: 'AI Supercycle Rally +15%', impact: +18.3, desc: 'Your NVDA & AMD holdings would drive gains' },
]

export default function MarketSimulator() {
  const [active, setActive] = useState('crash')
  const selected = scenarios.find((s) => s.id === active)

  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center">
              <FlaskConical size={20} className="text-violet-400" />
            </div>
            <div>
              <p className="text-[13px] text-white/40">What If?</p>
              <h1 className="text-[22px] font-bold">Event Simulator</h1>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 mb-5 hide-scrollbar">
            {scenarios.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex-shrink-0 px-3 py-2 rounded-xl text-[12px] font-medium transition-colors ${
                  active === s.id ? 'bg-accent text-white' : 'glass text-white/50'
                }`}
              >
                {s.label.split(' ').slice(0, 2).join(' ')}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-strong rounded-2xl p-6 mb-5 gradient-border text-center"
          >
            <p className="text-[13px] text-white/40 mb-2">{selected.label}</p>
            <p className={`text-[48px] font-bold tabular-nums ${selected.impact >= 0 ? 'text-profit' : 'text-loss'}`}>
              {selected.impact >= 0 ? '+' : ''}{selected.impact}%
            </p>
            <p className="text-[14px] text-white/50 mt-2">
              Portfolio: ${Math.round(47832 * (1 + selected.impact / 100)).toLocaleString()}
            </p>
          </motion.div>

          <p className="text-[13px] text-white/55 leading-relaxed glass rounded-xl p-4">{selected.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}
