import { motion } from 'framer-motion'
import {
  Sparkles, Shield, Heart, Newspaper, GraduationCap, CheckCircle2,
} from 'lucide-react'
import { SectionLabel, SectionTitle, SectionSubtitle, Reveal, GlowOrb } from './shared'

const features = [
  {
    icon: Sparkles,
    title: 'AI Trade Summaries',
    desc: 'Plain-language explanations of why a stock is moving — powered by real-time market data and news synthesis.',
    example: '"NVIDIA surged after strong enterprise AI demand."',
    benefit: 'Reduces information overload',
    gradient: 'from-blue-500/20 to-indigo-500/5',
  },
  {
    icon: Shield,
    title: 'Risk Alerts',
    desc: 'Proactive warnings before high-risk trades based on volatility patterns, portfolio exposure, and user risk profile.',
    example: '"This asset experienced 18% weekly volatility."',
    benefit: 'Prevents impulsive decisions',
    gradient: 'from-amber-500/20 to-orange-500/5',
  },
  {
    icon: Heart,
    title: 'Portfolio Health Scores',
    desc: 'Holistic diversification and risk scoring with actionable AI recommendations to improve portfolio balance.',
    example: '"Your portfolio is overexposed to tech."',
    benefit: 'Builds long-term investing habits',
    gradient: 'from-emerald-500/20 to-green-500/5',
  },
  {
    icon: Newspaper,
    title: 'AI Market Insights',
    desc: 'Personalised daily briefs explaining macro trends, market movements, and what they mean for your holdings.',
    example: '"Why the market moved today — in 2 minutes."',
    benefit: 'Improves financial literacy',
    gradient: 'from-violet-500/20 to-purple-500/5',
  },
  {
    icon: GraduationCap,
    title: 'Beginner Mode',
    desc: 'Simplified UI with educational tooltips, plain-language terms, and guided investing flows for new investors.',
    example: '"P/E Ratio — explained in one sentence."',
    benefit: 'Reduces onboarding anxiety',
    gradient: 'from-pink-500/20 to-rose-500/5',
  },
  {
    icon: CheckCircle2,
    title: 'Smart Trade Confirmation',
    desc: 'AI-powered pre-trade review showing risk score, portfolio impact, and confidence rating before every purchase.',
    example: '"Adding NVDA increases tech exposure to 51%."',
    benefit: 'Encourages informed decisions',
    gradient: 'from-cyan-500/20 to-blue-500/5',
  },
]

export default function SolutionSection() {
  return (
    <section id="solution" className="relative section-padding overflow-hidden bg-surface-raised/50">
      <GlowOrb className="w-[600px] h-[600px] -left-60 top-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>The Solution</SectionLabel>
          <SectionTitle className="mb-6">Meet AI Trading Copilot</SectionTitle>
          <SectionSubtitle className="mb-16">
            An AI-native investing layer that transforms every trade into an informed, confident decision — built for beginners and intermediate investors.
          </SectionSubtitle>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-2xl p-7 overflow-hidden hover:border-white/10 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-accent-light" />
                  </div>

                  <h3 className="text-[18px] font-semibold mb-2">{f.title}</h3>
                  <p className="text-[14px] text-white/45 leading-relaxed mb-5">{f.desc}</p>

                  <motion.div className="glass rounded-xl px-4 py-3 mb-4 border border-accent/10">
                    <p className="text-[12px] text-accent-light/80 italic leading-relaxed">{f.example}</p>
                  </motion.div>

                  <span className="inline-flex text-[11px] font-semibold uppercase tracking-wider text-profit/80">
                    {f.benefit}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
