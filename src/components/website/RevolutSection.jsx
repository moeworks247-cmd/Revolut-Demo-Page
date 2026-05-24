import { motion } from 'framer-motion'
import { Target, Users, Shield, TrendingUp, Heart } from 'lucide-react'
import RevaLogo from '../RevaLogo'
import { SectionLabel, SectionTitle, SectionSubtitle, Reveal, GlowOrb } from './shared'

const pillars = [
  {
    icon: Target,
    title: 'Product Differentiation',
    desc: 'AI transforms Revolut Trading from an execution tool into an intelligent investing companion, a moat competitors cannot easily replicate.',
  },
  {
    icon: Users,
    title: 'Beginner Retention',
    desc: 'Guided investing reduces early churn. Users who understand their decisions stay funded 2.4× longer on average.',
  },
  {
    icon: Shield,
    title: 'Risk Behaviour Reduction',
    desc: 'Pre trade warnings and portfolio health scores reduce reckless trading patterns that lead to losses and platform distrust.',
  },
  {
    icon: Heart,
    title: 'Trust & Confidence',
    desc: 'Transparent AI explanations build the emotional safety net retail investors need, especially during market volatility.',
  },
  {
    icon: TrendingUp,
    title: 'Engagement & Revenue',
    desc: 'Higher engagement with AI features correlates with increased trading frequency, premium tier upgrades, and cross-sell opportunities.',
  },
  {
    logo: true,
    title: 'Long term Investing',
    desc: 'Shifts user behaviour from speculative trading toward goal based, diversified investing, aligning with regulatory best practices.',
  },
]

export default function RevolutSection() {
  return (
    <section id="revolut" className="relative section-padding overflow-hidden">
      <GlowOrb className="w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Strategic Fit</SectionLabel>
          <SectionTitle className="mb-6">Why this matters for Revolut</SectionTitle>
          <SectionSubtitle className="mb-16">
            REVA isn't a feature. It's a strategic layer that redefines what a trading platform can be.
          </SectionSubtitle>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative glass-strong rounded-3xl p-10 md:p-14 mb-16 gradient-border overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <blockquote className="relative max-w-3xl">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-white/90 mb-6">
                This transforms trading from transactional execution into intelligent financial guidance.
              </p>
              <p className="text-white/45 leading-relaxed text-lg">
                Revolut has built one of the world's most trusted fintech platforms. REVA is the natural evolution, embedding intelligence at every decision point to protect, educate, and empower millions of retail investors.
              </p>
            </blockquote>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass rounded-2xl p-7 hover:border-white/10 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  {p.logo ? <RevaLogo size="md" /> : <Icon size={20} className="text-accent-light" />}
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
