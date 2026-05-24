import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Brain,
  Code2,
  LineChart,
  Rocket,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import RevaLogo from '../RevaLogo'
import { SectionLabel, SectionTitle, Reveal, GlowOrb, PrimaryButton, SecondaryButton, FooterDisclaimer } from './shared'

const stats = [
  { value: '10+', label: 'Years hands on trading' },
  { value: '6+', label: 'Years fintech product leadership' },
  { value: '15+', label: 'Product features shipped' },
  { value: '60 to 75%', label: 'Operational friction reduced' },
  { value: '6 fig', label: 'Personal capital actively managed' },
  { value: 'FTMO', label: 'Certified · proven profitability' },
]

const achievements = [
  {
    title: 'Passed FTMO Challenge',
    date: '20 Feb 2026',
    desc: 'Demonstrated advanced risk management and consistent profit target delivery within defined loss limits.',
    image: '/mohamed/passed-ftmo-challenge.jpeg',
  },
  {
    title: 'Passed Verification',
    date: '6 Feb 2025',
    desc: 'Completed the full FTMO evaluation, Challenge and Verification, affirming readiness for funded trading.',
    image: '/mohamed/passed-verification.jpeg',
  },
  {
    title: 'Maximum Allocation',
    date: '6 Apr 2026',
    desc: 'Reached FTMO max allocation tier, proof of scalable, disciplined execution under real capital constraints.',
    image: '/mohamed/maximum-allocation.jpeg',
  },
]

const strengths = [
  { icon: LineChart, title: 'Thinks like a trader', desc: 'Data driven, metrics obsessed, bias toward action. Every decision defensible by numbers.' },
  { icon: Code2, title: 'Builds like an engineer', desc: 'Algorithmic systems in Python and MQL5 executing live in markets, not slide decks.' },
  { icon: Rocket, title: 'Ships under pressure', desc: '15+ features delivered with 60 to 75% friction reduction in ambiguous, fast paced environments.' },
  { icon: Users, title: 'Leads through ambiguity', desc: 'Managed teams where shipping fast and iterating on real data is survival, not a nice to have.' },
]

const revaAlignment = [
  {
    icon: Target,
    title: 'REVA is the thesis',
    desc: 'This portfolio is not a mock up exercise. It is Mohamed\'s product vision for Revolut Trading: AI native guidance that helps retail investors make smarter, safer decisions.',
  },
  {
    icon: Brain,
    title: 'Trader clarity × product craft',
    desc: 'Markets do not care about roadmaps. REVA was scoped with a 24 week Gantt, 20 prototype screens, and measurable delivery windows because that is how Mohamed runs product.',
  },
  {
    icon: BarChart3,
    title: 'Impact you can measure',
    desc: 'Portfolio health scores, risk alerts, and REVA chat are features designed to move retention, funded accounts, and informed trades, the KPIs Revolut cares about.',
  },
  {
    icon: Shield,
    title: 'Built for Revolut scale',
    desc: 'Enterprise architecture, phased rollout, and beginner to power user flows, ready to own trading features where execution and metrics decide success.',
  },
]

function HireNavbar({ onBackToReva }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/5">
      <motion.div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBackToReva}
          className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
        >
          <RevaLogo size="lg" />
          <span className="font-semibold text-[15px] hidden sm:block">REVA</span>
        </button>
        <button
          type="button"
          onClick={onBackToReva}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium glass hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to product case study
        </button>
      </motion.div>
    </header>
  )
}

export default function WhyHireMohamedPage({ onBackToReva, onViewPrototype }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#030306]"
    >
      <HireNavbar onBackToReva={onBackToReva} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <GlowOrb className="w-[700px] h-[700px] -top-40 -left-40" />
        <GlowOrb className="w-[500px] h-[500px] top-20 -right-40" color="purple" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <Reveal>
            <SectionLabel>Product Owner · Fintech · Trading</SectionLabel>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              <span className="text-gradient">Why Hire</span>
              <br />
              <span className="text-gradient-blue">Mohamed?</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/55 leading-relaxed max-w-3xl mb-4">
              A Product Owner who trades the markets he builds for, and ships products that survive contact with real data.
            </p>
            <p className="text-[15px] text-accent-light/90 font-medium mb-12">
              Mohamed Abdirisak Mohamed · FTMO Certified · REVA Author/Founder
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                className="glass rounded-xl p-4 md:p-5 text-center hover:border-white/10 transition-colors"
              >
                <p className="text-2xl md:text-3xl font-bold text-gradient-blue tabular-nums mb-1">{s.value}</p>
                <p className="text-[11px] md:text-[12px] text-white/40 leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <SectionTitle className="mb-8">Trader mindset. Product discipline.</SectionTitle>
          </Reveal>

          <motion.div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal delay={1}>
              <motion.div className="space-y-5 text-[16px] md:text-[17px] text-white/60 leading-relaxed">
                <p>
                  Mohamed is a Product Owner with <strong className="text-white/90">10+ years of hands on trading experience</strong> and{' '}
                  <strong className="text-white/90">6+ years driving product strategy</strong> in fintech and high growth tech. He thinks like a trader: data driven, metrics obsessed, bias toward action. He builds like an engineer.
                </p>
                <p>
                  He has built <strong className="text-white/90">algorithmic trading systems in Python and MQL5</strong> that execute live in markets. He has shipped <strong className="text-white/90">15+ product features</strong> that reduced operational friction by <strong className="text-white/90">60 to 75%</strong>. He has managed teams through ambiguous, fast paced environments where shipping fast and iterating based on real data is survival.
                </p>
                <p>
                  Currently, he is managing the product roadmap for AI native revenue operations and automation solutions at <strong className="text-white/90">Prudentia Technologies</strong> while actively managing a personal portfolio across margin trading platforms. He is <strong className="text-white/90">FTMO certified</strong> with proven profitability managing six figures of personal capital.
                </p>
              </motion.div>
            </Reveal>

            <Reveal delay={2}>
              <div className="glass-strong rounded-3xl p-8 md:p-10 gradient-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative flex items-center gap-2 mb-4">
                  <TrendingUp size={20} className="text-accent-light" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-light">What drives him</span>
                </div>
                <p className="relative text-xl md:text-2xl font-display text-white/90 leading-snug mb-4">
                  Trading products are unforgiving.
                </p>
                <p className="relative text-[15px] text-white/55 leading-relaxed">
                  Markets do not care about your roadmap or your stakeholder alignment. They care about execution, metrics, and whether your product makes money or loses it. That clarity is addictive.
                </p>
              </div>
            </Reveal>
          </motion.div>
        </div>
      </section>

      {/* FTMO Achievements */}
      <section id="achievements" className="relative section-padding bg-surface-raised/30 overflow-hidden">
        <GlowOrb className="w-[600px] h-[600px] right-0 top-1/2 -translate-y-1/2" color="purple" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <Reveal>
            <SectionLabel>Verified achievements</SectionLabel>
            <SectionTitle className="mb-4">Proof in the markets</SectionTitle>
            <p className="text-lg text-white/45 max-w-2xl mb-12">
              FTMO certification is not a badge. It is evidence of risk discipline, repeatable strategy, and capital ready execution. Directly relevant to building trading products users trust with real money.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden gradient-border hover:border-accent/20 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden bg-black/40">
                    <img
                      src={a.image}
                      alt={`${a.title}, Mohamed Abdirisak Mohamed`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-[17px] font-semibold text-white">{a.title}</h3>
                      <span className="text-[11px] text-white/35 tabular-nums flex-shrink-0">{a.date}</span>
                    </div>
                    <p className="text-[13px] text-white/45 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="relative section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>How he works</SectionLabel>
            <SectionTitle className="mb-12">Built for trading product ownership</SectionTitle>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.title} delay={i}>
                  <div className="glass rounded-2xl p-6 h-full hover:border-white/10 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-accent-light" />
                    </div>
                    <h3 className="text-[16px] font-semibold mb-2">{s.title}</h3>
                    <p className="text-[14px] text-white/45 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* REVA × Revolut */}
      <section className="relative section-padding overflow-hidden">
        <GlowOrb className="w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <RevaLogo size="xl" ring />
              <SectionLabel>REVA × Revolut</SectionLabel>
            </div>
            <SectionTitle className="mb-6">Why this portfolio exists</SectionTitle>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-3xl mb-14">
              REVA, Revolut Enhanced Value Advisor, is Mohamed&apos;s answer to a simple question: what would intelligent trading guidance look like if it were built by someone who actually trades?
            </p>
          </Reveal>

          <motion.div className="grid md:grid-cols-2 gap-6 mb-14">
            {revaAlignment.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={i}>
                  <div className="glass-strong rounded-2xl p-7 gradient-border h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-accent-light" />
                      </div>
                      <div>
                        <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
                        <p className="text-[14px] text-white/50 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </motion.div>

          <Reveal delay={2}>
            <div className="glass-strong rounded-3xl p-8 md:p-12 gradient-border text-center max-w-4xl mx-auto">
              <p className="font-display text-2xl md:text-3xl text-white/90 leading-snug mb-6">
                At Revolut, Mohamed would bring that mentality to trading features: owning a product where every decision is defensible by data, where users actually profit from what ships, and where the next generation of trading infrastructure gets built.
              </p>
              <p className="text-[15px] text-white/45 leading-relaxed mb-8">
                He is comfortable with ambiguity, thrives under pressure, and has zero interest in maintaining the status quo. For a team building something that matters in fintech, he is the person you want.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <PrimaryButton onClick={onViewPrototype}>
                  Explore REVA Prototype
                  <ArrowRight size={16} className="inline ml-2 -mt-0.5" />
                </PrimaryButton>
                <SecondaryButton onClick={onBackToReva}>
                  View full case study
                </SecondaryButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mb-8">
            <div className="flex items-center gap-2">
              <RevaLogo size="md" />
              <span className="text-sm text-white/40">Mohamed Abdirisak Mohamed · Product Portfolio 2026</span>
            </div>
            <button
              type="button"
              onClick={onBackToReva}
              className="text-[13px] text-accent-light hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <Zap size={14} />
              Return to REVA product vision
            </button>
          </div>
          <FooterDisclaimer />
        </div>
      </footer>
    </motion.div>
  )
}
