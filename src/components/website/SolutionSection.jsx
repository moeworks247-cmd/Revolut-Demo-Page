import { motion } from 'framer-motion'
import {
  Sparkles, Shield, Heart, GraduationCap, Brain, Newspaper, Radar,
  BookOpen, CloudRain, RefreshCw, Gauge, Users, Target, FlaskConical, Gamepad2, Hexagon, Globe,
} from 'lucide-react'
import { FEATURE_CATEGORIES } from '../../data/featureRoadmap'
import { SectionLabel, SectionTitle, SectionSubtitle, Reveal, GlowOrb } from './shared'

const categoryIcons = {
  'Market Intelligence': Sparkles,
  'Risk & Confidence': Shield,
  'Portfolio Fitness': Heart,
  'Coaching & Growth': GraduationCap,
}

const featureMeta = {
  'AI Market Narrative Engine': { icon: Newspaper, example: '"Why the market moved today, in 2 minutes."' },
  'AI Earnings Intelligence': { icon: Sparkles, example: '"NVDA beat 4/4 quarters · ±12% post earnings vol."' },
  'AI Opportunity Scanner': { icon: Radar, example: '"AMD matches 92% of your portfolio profile."' },
  'Smart Risk Notifications': { icon: Shield, example: '"18% weekly volatility detected before you buy."' },
  'AI Behavioral Risk Detection': { icon: Brain, example: '"Trading velocity up 3×. Pause before acting."' },
  'Trade Confidence Engine': { icon: Gauge, example: '"68% confidence · moderate sector concentration risk."' },
  'Multi Currency Portfolio & Allocation': { icon: Globe, example: '"£47,932 across USD, EUR, GBP · 59% USD exposure."' },
  'AI Portfolio Health Score': { icon: Heart, example: '"Financial fitness: 68/100 · tech overweight."' },
  'Portfolio Stress Testing': { icon: CloudRain, example: '"Crash scenario: portfolio drops to $36,082."' },
  'Smart Portfolio Rebalancing': { icon: RefreshCw, example: '"Shift 12% from tech to healthcare."' },
  'AI Investment Journal': { icon: BookOpen, example: '"Impulsive trades down 40% this month."' },
  'Community Intelligence Layer': { icon: Users, example: '"Retail 78% bullish · analysts 89% buy on NVDA."' },
  'HIVE Community Copy Trading': { icon: Hexagon, example: '"Sarah & 2 friends follow Marcus · +34.2% YOY return."' },
  'Goal Based Investing AI': { icon: Target, example: '"House deposit 40.5% funded · 4 years left."' },
  'AI Investment Coach': { icon: GraduationCap, example: '"P/E is like a price tag on future earnings."' },
  'Market Event Simulator': { icon: FlaskConical, example: '"What if the Fed hikes 0.75%? → -12.4% impact."' },
  'AI Trade Sandbox': { icon: Gamepad2, example: '"Practice with $100K virtual · 67% win rate."' },
}

export default function SolutionSection() {
  return (
    <section id="solution" className="relative section-padding overflow-hidden bg-surface-raised/50">
      <GlowOrb className="w-[600px] h-[600px] -left-60 top-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>The Solution</SectionLabel>
          <SectionTitle className="mb-6">17 product capabilities</SectionTitle>
          <SectionSubtitle className="mb-16">
            Systematically organized across four pillars, from market understanding to coaching and simulation.
          </SectionSubtitle>
        </Reveal>

        <div className="space-y-16">
          {FEATURE_CATEGORIES.map((cat, ci) => {
            const CatIcon = categoryIcons[cat.title] || Sparkles
            return (
              <Reveal key={cat.title} delay={ci}>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                      <CatIcon size={20} className="text-accent-light" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{cat.title}</h3>
                      <p className="text-[14px] text-white/40">{cat.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.features.map((name, fi) => {
                    const meta = featureMeta[name] || { icon: Sparkles, example: '' }
                    const Icon = meta.icon
                    return (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fi * 0.05 }}
                        whileHover={{ y: -4 }}
                        className="glass rounded-2xl p-5 hover:border-white/10 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-accent/15 flex items-center justify-center mb-4 transition-colors">
                          <Icon size={18} className="text-accent-light" />
                        </div>
                        <h4 className="text-[15px] font-semibold mb-2 leading-snug">{name}</h4>
                        {meta.example && (
                          <p className="text-[12px] text-white/40 italic leading-relaxed">{meta.example}</p>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
