import { motion } from 'framer-motion'
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts'
import { Brain, TrendingDown, Zap, BookOpen, AlertTriangle } from 'lucide-react'
import { SectionLabel, SectionTitle, SectionSubtitle, Reveal, GlowOrb } from './shared'

const problems = [
  {
    icon: Brain,
    title: 'Emotional Trading',
    stat: '67%',
    desc: 'of retail investors admit to making impulsive trades driven by fear or hype.',
    color: '#ef4444',
  },
  {
    icon: TrendingDown,
    title: 'Panic Selling',
    stat: '3.2×',
    desc: 'more likely to sell at a loss during volatility spikes without contextual guidance.',
    color: '#f59e0b',
  },
  {
    icon: Zap,
    title: 'Volatility Confusion',
    stat: '54%',
    desc: 'cannot interpret volatility metrics or understand what they mean for their portfolio.',
    color: '#3b82f6',
  },
  {
    icon: BookOpen,
    title: 'Information Overload',
    stat: '10K+',
    desc: 'financial data points available daily, overwhelming for beginner investors.',
    color: '#8b5cf6',
  },
  {
    icon: AlertTriangle,
    title: 'Low Financial Literacy',
    stat: '72%',
    desc: 'of Gen Z investors rate their own financial knowledge as "limited" or "beginner".',
    color: '#ec4899',
  },
]

const chartData = [
  { name: 'Confident', value: 23 },
  { name: 'Uncertain', value: 45 },
  { name: 'Anxious', value: 32 },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="relative section-padding overflow-hidden">
      <GlowOrb className="w-[500px] h-[500px] right-0 top-0" color="purple" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>The Problem</SectionLabel>
          <SectionTitle className="mb-6">Retail investing wasn't built for understanding.</SectionTitle>
          <SectionSubtitle className="mb-16">
            Millions of new investors enter markets every year, but platforms optimise for speed, not confidence.
          </SectionSubtitle>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <Reveal delay={1}>
            <div className="glass-strong rounded-3xl p-8 gradient-border">
              <p className="text-[13px] text-white/40 uppercase tracking-wider mb-6">Investor Sentiment During Volatility</p>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} barSize={48}>
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {chartData.map((entry, i) => (
                        <Cell key={i} fill={['#22c55e', '#f59e0b', '#ef4444'][i]} fillOpacity={0.85} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                {chartData.map((d, i) => (
                  <span key={d.name} className="text-[12px] text-white/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: ['#22c55e', '#f59e0b', '#ef4444'][i] }} />
                    {d.name} {d.value}%
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <blockquote className="relative">
              <div className="absolute -left-4 top-0 text-6xl text-accent/20 font-display leading-none">"</div>
              <p className="font-display text-3xl md:text-4xl leading-snug text-white/90 mb-6">
                Retail trading platforms optimise for execution speed, not investor understanding.
              </p>
              <p className="text-white/40 leading-relaxed">
                Users can buy a stock in seconds, but receive zero guidance on whether that trade aligns with their goals, risk tolerance, or portfolio health.
              </p>
            </blockquote>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 group hover:border-white/10 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${p.color}18` }}
                  >
                    <Icon size={20} style={{ color: p.color }} />
                  </div>
                  <span className="text-2xl font-bold tabular-nums" style={{ color: p.color }}>{p.stat}</span>
                </div>
                <h3 className="text-[17px] font-semibold mb-2">{p.title}</h3>
                <p className="text-[14px] text-white/45 leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
