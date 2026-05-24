import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Heart } from 'lucide-react'
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { portfolioHealth } from '../../data/mockData'
import { ScoreRing, SectionHeader, RevaInsightLabel } from '../shared'

const priorityConfig = {
  high: { icon: AlertCircle, color: 'text-loss', bg: 'bg-loss/10 border-loss/15' },
  medium: { icon: AlertCircle, color: 'text-warning', bg: 'bg-warning/10 border-warning/15' },
  low: { icon: CheckCircle2, color: 'text-profit', bg: 'bg-profit/10 border-profit/15' },
}

function HealthMeter({ score }) {
  const getLabel = (s) => {
    if (s >= 80) return { text: 'Excellent', color: '#22c55e' }
    if (s >= 60) return { text: 'Good', color: '#6366f1' }
    if (s >= 40) return { text: 'Fair', color: '#f59e0b' }
    return { text: 'Needs Work', color: '#ef4444' }
  }

  const label = getLabel(score)
  const segments = 20

  return (
    <div className="glass rounded-2xl p-5 mb-6">
      <SectionHeader title="Portfolio Health" />
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[280px] mb-3">
          <svg viewBox="0 0 280 150" className="w-full">
            <defs>
              <linearGradient id="meterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
            <path
              d="M 30 130 A 110 110 0 0 1 250 130"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <motion.path
              d="M 30 130 A 110 110 0 0 1 250 130"
              fill="none"
              stroke="url(#meterGrad)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="345"
              initial={{ strokeDashoffset: 345 }}
              animate={{ strokeDashoffset: 345 - (score / 100) * 345 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
            <span className="text-[42px] font-bold tabular-nums">{score}</span>
            <span className="text-[14px] font-semibold" style={{ color: label.color }}>
              {label.text}
            </span>
          </div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: segments }).map((_, i) => {
            const filled = i < Math.round((score / 100) * segments)
            const hue = (i / segments) * 120
            return (
              <div
                key={i}
                className="w-2 h-1.5 rounded-sm transition-colors"
                style={{
                  backgroundColor: filled ? `hsl(${hue}, 70%, 50%)` : 'rgba(255,255,255,0.06)',
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function PortfolioHealth() {
  const { diversificationScore, riskScore, healthScore, sectors, recommendations } = portfolioHealth

  const chartData = sectors.map((s) => ({
    name: s.name.slice(0, 4),
    exposure: s.exposure,
    recommended: s.recommended,
    color: s.color,
  }))

  return (
    <div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
              <Heart size={20} className="text-accent-light" />
            </div>
            <p className="text-[13px] text-white/40 font-medium block">Financial Fitness</p>
            <h1 className="text-[22px] font-bold text-gradient">Portfolio Health</h1>
          </div>

          <HealthMeter score={healthScore} />

          {/* Score rings */}
          <div className="flex justify-around mb-6 glass rounded-2xl py-5">
            <ScoreRing score={diversificationScore} label="Diversification" color="#6366f1" />
            <ScoreRing score={riskScore} label="Risk Level" color="#f59e0b" />
            <ScoreRing score={healthScore} label="Overall" color="#22c55e" />
          </div>

          {/* Sector exposure */}
          <div className="glass rounded-2xl p-4 mb-6">
            <SectionHeader title="Sector Exposure" />
            <motion.div className="h-[180px] -mx-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barGap={4}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'rgba(255,255,255,0.25)', fontSize: 10 }}
                    tickFormatter={(v) => `${v}%`}
                    width={30}
                  />
                  <Bar dataKey="exposure" radius={[4, 4, 0, 0]} barSize={16}>
                    {chartData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} fillOpacity={0.9} />
                    ))}
                  </Bar>
                  <Bar dataKey="recommended" radius={[4, 4, 0, 0]} barSize={16} fill="rgba(255,255,255,0.12)" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
            <div className="flex items-center justify-center gap-5 mt-2 text-[11px] text-white/40">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-accent" /> Current
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-white/12" /> Target
              </span>
            </div>
          </div>

          {/* AI Recommendations */}
          <div>
            <RevaInsightLabel label="REVA Recommendations" className="mb-3" />
            <div className="space-y-3">
              {recommendations.map((rec, i) => {
                const config = priorityConfig[rec.priority]
                const Icon = config.icon

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className={`rounded-2xl p-4 border ${config.bg}`}
                  >
                    <div className="flex gap-3">
                      <Icon size={18} className={`${config.color} flex-shrink-0 mt-0.5`} />
                      <div>
                        <p className="text-[15px] font-semibold mb-1">{rec.title}</p>
                        <p className="text-[13px] text-white/55 leading-relaxed">{rec.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
