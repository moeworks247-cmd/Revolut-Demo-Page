import { motion } from 'framer-motion'
import { Brain, AlertTriangle, TrendingDown, Zap } from 'lucide-react'
import { AIInsightCard } from '../shared'

const patterns = [
  { label: 'Panic Selling', score: 78, icon: TrendingDown, color: 'text-loss', desc: '3 sell orders in 24h during -2.1% market dip' },
  { label: 'FOMO Buying', score: 45, icon: Zap, color: 'text-warning', desc: 'Chasing PLTR after +12% social media spike' },
  { label: 'Revenge Trading', score: 22, icon: AlertTriangle, color: 'text-profit', desc: 'No detected patterns this week' },
]

export default function BehavioralRisk() {
  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-warning/15 flex items-center justify-center">
              <Brain size={20} className="text-warning" />
            </div>
            <div>
              <p className="text-[13px] text-white/40">Emotion Aware Investing</p>
              <h1 className="text-[22px] font-bold">Behavioral Risk</h1>
            </div>
          </div>

          <AIInsightCard insight="Your trading velocity increased 3× today. This pattern historically precedes impulsive decisions during volatility." compact />

          <div className="glass rounded-2xl p-5 mb-5">
            <p className="text-[13px] text-white/40 mb-1">Emotional Risk Score</p>
            <p className="text-[42px] font-bold text-warning tabular-nums mb-2">64</p>
            <p className="text-[13px] text-white/50">Moderate. Consider pausing before your next trade</p>
          </div>

          <SectionHeader title="Detected Patterns" />
          <div className="space-y-3 mb-5">
            {patterns.map((p) => {
              const Icon = p.icon
              return (
                <motion.div key={p.label} className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon size={16} className={p.color} />
                      <span className="font-semibold text-[14px]">{p.label}</span>
                    </div>
                    <span className={`text-[15px] font-bold tabular-nums ${p.color}`}>{p.score}</span>
                  </div>
                  <p className="text-[12px] text-white/45">{p.desc}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.button whileTap={{ scale: 0.98 }} className="w-full py-3.5 rounded-xl font-semibold bg-accent/15 text-accent-light border border-accent/25">
            Enable Cool Down Mode (15 min)
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

function SectionHeader({ title }) {
  return <h2 className="text-[17px] font-semibold mb-3">{title}</h2>
}
