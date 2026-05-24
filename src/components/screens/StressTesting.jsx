import { motion } from 'framer-motion'
import { CloudRain, TrendingDown } from 'lucide-react'
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const scenarios = [
  { name: '2008 Crisis', impact: -38, color: '#ef4444' },
  { name: 'COVID Crash', impact: -28, color: '#f59e0b' },
  { name: 'Rate Shock', impact: -18, color: '#f59e0b' },
  { name: 'Tech Selloff', impact: -22, color: '#ef4444' },
]

export default function StressTesting() {
  const portfolioImpact = -24.6
  const currentValue = 47832
  const stressedValue = Math.round(currentValue * (1 + portfolioImpact / 100))

  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-loss/15 flex items-center justify-center">
              <CloudRain size={20} className="text-loss" />
            </div>
            <div>
              <p className="text-[13px] text-white/40">What if markets crash?</p>
              <h1 className="text-[22px] font-bold">Stress Testing</h1>
            </div>
          </div>

          <div className="glass rounded-2xl p-5 mb-5 border border-loss/10">
            <p className="text-[13px] text-white/40 mb-1">Worst-Case Scenario Impact</p>
            <div className="flex items-end gap-3 mb-2">
              <p className="text-[36px] font-bold text-loss tabular-nums">{portfolioImpact}%</p>
              <TrendingDown size={24} className="text-loss mb-2" />
            </div>
            <p className="text-[14px] text-white/50">
              Portfolio could drop to <span className="text-white font-semibold">${stressedValue.toLocaleString()}</span> in a severe downturn
            </p>
          </div>

          <h2 className="text-[17px] font-semibold mb-3">Historical Scenarios</h2>
          <div className="h-[180px] mb-5">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scenarios}>
                <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} tickFormatter={(v) => `${v}%`} axisLine={false} tickLine={false} width={35} />
                <Bar dataKey="impact" radius={[6, 6, 0, 0]} barSize={28}>
                  {scenarios.map((s) => (
                    <Cell key={s.name} fill={s.color} fillOpacity={0.85} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass rounded-xl p-4 mb-4">
            <p className="text-[12px] text-accent-light font-semibold mb-1">AI Recommendation</p>
            <p className="text-[13px] text-white/60 leading-relaxed">
              Adding 8% bonds and 5% cash would reduce crash impact from -24.6% to -16.2% based on historical correlation data.
            </p>
          </div>

          <motion.button whileTap={{ scale: 0.98 }} className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-accent to-indigo-500 text-white">
            Run Custom Scenario
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
