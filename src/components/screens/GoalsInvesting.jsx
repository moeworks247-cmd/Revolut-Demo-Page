import { motion } from 'framer-motion'
import { Target, Home, Plane, GraduationCap } from 'lucide-react'

const goals = [
  { icon: Home, title: 'House Deposit', target: 80000, current: 32400, pct: 40.5, years: 4, color: '#3b82f6' },
  { icon: Plane, title: 'Retirement Fund', target: 500000, current: 47832, pct: 9.6, years: 22, color: '#22c55e' },
  { icon: GraduationCap, title: 'Education Fund', target: 25000, current: 8200, pct: 32.8, years: 6, color: '#8b5cf6' },
]

export default function GoalsInvesting() {
  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
              <Target size={20} className="text-accent-light" />
            </div>
            <div>
              <p className="text-[13px] text-white/40">Life-Goal Alignment</p>
              <h1 className="text-[22px] font-bold">Goal Based Investing</h1>
            </div>
          </div>

          <div className="glass rounded-xl p-4 mb-5 border border-accent/10">
            <p className="text-[12px] text-accent-light font-semibold mb-1">AI Guidance</p>
            <p className="text-[13px] text-white/60 leading-relaxed">
              Your current portfolio is growth-heavy. For your house deposit timeline, consider shifting 15% to lower-volatility assets.
            </p>
          </div>

          <div className="space-y-4">
            {goals.map((g) => {
              const Icon = g.icon
              return (
                <motion.div key={g.title} className="glass rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${g.color}18` }}>
                      <Icon size={18} style={{ color: g.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{g.title}</p>
                      <p className="text-[12px] text-white/40">{g.years} years remaining</p>
                    </div>
                    <span className="text-[15px] font-bold tabular-nums" style={{ color: g.color }}>{g.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden mb-2">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: g.color, width: `${g.pct}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${g.pct}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <p className="text-[12px] text-white/45 tabular-nums">
                    ${g.current.toLocaleString()} of ${g.target.toLocaleString()}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
