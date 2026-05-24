import { motion } from 'framer-motion'
import { RefreshCw, ArrowRight } from 'lucide-react'

const shifts = [
  { from: 'Technology', fromPct: 42, toPct: 30, action: 'Reduce', color: '#6366f1' },
  { from: 'Healthcare', fromPct: 18, toPct: 22, action: 'Increase', color: '#22c55e' },
  { from: 'Cash', fromPct: 5, toPct: 12, action: 'Increase', color: '#64748b' },
]

export default function SmartRebalancing() {
  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
              <RefreshCw size={20} className="text-accent-light" />
            </div>
            <div>
              <p className="text-[13px] text-white/40">AI Optimized Allocation</p>
              <h1 className="text-[22px] font-bold">Smart Rebalancing</h1>
            </div>
          </div>

          <div className="glass rounded-2xl p-5 mb-5">
            <p className="text-[13px] text-white/40 mb-1">Rebalance Score</p>
            <p className="text-[32px] font-bold text-gradient-blue mb-1">Recommended</p>
            <p className="text-[13px] text-white/50">3 allocation shifts would improve diversification by 14 points</p>
          </div>

          <h2 className="text-[17px] font-semibold mb-3">Suggested Shifts</h2>
          <div className="space-y-3 mb-5">
            {shifts.map((s) => (
              <motion.div key={s.from} className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-[14px]">{s.from}</span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    s.action === 'Reduce' ? 'bg-loss/15 text-loss' : 'bg-profit/15 text-profit'
                  }`}>{s.action}</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] tabular-nums">
                  <span className="text-white/50">{s.fromPct}%</span>
                  <ArrowRight size={14} className="text-accent/50" />
                  <span className="font-semibold text-accent-light">{s.toPct}%</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button whileTap={{ scale: 0.98 }} className="w-full py-4 rounded-2xl font-semibold bg-gradient-to-r from-accent to-indigo-500 text-white mb-3">
            Apply AI Rebalance Plan
          </motion.button>
          <button className="w-full py-3 text-[13px] text-white/40 font-medium">Preview impact first</button>
        </div>
      </div>
    </motion.div>
  )
}
