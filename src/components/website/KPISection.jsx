import { motion } from 'framer-motion'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { SectionLabel, SectionTitle, SectionSubtitle, Reveal, GlowOrb } from './shared'
import RevaLogo from '../RevaLogo'
import { useInView, useCountUp } from '../../hooks/useInView'

const metrics = [
  { end: 34, suffix: '%', label: 'Increase in investor confidence scores' },
  { end: 28, suffix: '%', label: 'Reduction in panic selling during volatility' },
  { end: 19, suffix: '%', label: 'Improvement in 90-day retention' },
  { end: 22, suffix: '%', label: 'Higher funded account conversion rate' },
  { end: 41, suffix: '%', label: 'Reduction in trading-related support tickets' },
  { end: 67, suffix: '%', label: 'AI feature engagement rate (WAU)' },
]

const chartData = [
  { month: 'M1', informed: 42, baseline: 38 },
  { month: 'M2', informed: 48, baseline: 39 },
  { month: 'M3', informed: 55, baseline: 40 },
  { month: 'M4', informed: 61, baseline: 41 },
  { month: 'M5', informed: 68, baseline: 42 },
  { month: 'M6', informed: 74, baseline: 43 },
]

function AnimatedMetric({ end, suffix, label, index }) {
  const [ref, inView] = useInView()
  const value = useCountUp(end, 1800, inView)

  return (
    <div ref={ref} className="glass rounded-2xl p-6 md:p-7 hover:border-white/10 transition-colors">
      <p className="text-3xl md:text-4xl font-bold tabular-nums text-gradient-blue mb-2">
        +{value}{suffix}
      </p>
      <p className="text-[13px] text-white/45 leading-relaxed">{label}</p>
    </div>
  )
}

export default function KPISection() {
  return (
    <section id="impact" className="relative section-padding overflow-hidden bg-surface-raised/50">
      <GlowOrb className="w-[700px] h-[700px] right-0 top-0" color="purple" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Business Impact</SectionLabel>
          <SectionTitle className="mb-6">Investment-grade outcomes</SectionTitle>
          <SectionSubtitle className="mb-12">
            Projected KPI improvements based on comparable AI-assisted fintech feature rollouts and user research benchmarks.
          </SectionSubtitle>
        </Reveal>

        <Reveal delay={1}>
          <div className="glass-strong rounded-3xl p-8 md:p-10 mb-12 gradient-border text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light mb-3">North Star Metric</p>
            <p className="font-display text-3xl md:text-4xl text-gradient mb-3">
              Percentage of users making informed trades
            </p>
            <p className="text-white/40 max-w-xl mx-auto">
              Measured by trades preceded by AI insight engagement, risk review completion, or portfolio health check within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {metrics.map((m, i) => (
            <AnimatedMetric key={m.label} {...m} index={i} />
          ))}
        </div>

        <Reveal delay={2}>
          <div className="glass-strong rounded-3xl p-8 gradient-border">
            <p className="text-[13px] text-white/40 uppercase tracking-wider mb-6">Informed Trades vs. Baseline (6-Month Projection)</p>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} tickFormatter={(v) => `${v}%`} domain={[30, 80]} />
                  <Tooltip
                    contentStyle={{ background: '#12121c', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}
                    labelStyle={{ color: 'rgba(255,255,255,0.5)' }}
                  />
                  <Line type="monotone" dataKey="informed" stroke="#3b82f6" strokeWidth={2.5} dot={{ fill: '#3b82f6', r: 4 }} name="With REVA" />
                  <Line type="monotone" dataKey="baseline" stroke="rgba(255,255,255,0.2)" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Baseline" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 mt-4">
              <span className="flex items-center gap-2 text-[12px] text-white/40">
                <RevaLogo size="xs" /> With REVA
              </span>
              <span className="flex items-center gap-2 text-[12px] text-white/40">
                <span className="w-4 h-0.5 bg-white/20 rounded" style={{ borderTop: '2px dashed' }} /> Baseline
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
