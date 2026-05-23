import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PrototypeScreen } from '../MobilePrototype'
import { SectionLabel, SectionTitle, SectionSubtitle, Reveal, GlowOrb } from './shared'

const screens = [
  { id: 'portfolio', title: 'Portfolio Dashboard', desc: 'AI insights, allocation charts, watchlist, and trending assets at a glance.' },
  { id: 'stock', title: 'Stock Detail', desc: 'Live charts, AI summaries, volatility indicators, and analyst sentiment.' },
  { id: 'risk', title: 'AI Risk Warning', desc: 'Pre-trade risk analysis with volatility warnings and portfolio exposure alerts.' },
  { id: 'news', title: 'Market Insights Feed', desc: 'AI-generated daily briefs, personalised news, and beginner-friendly explainers.' },
  { id: 'health', title: 'Portfolio Health', desc: 'Diversification scores, sector exposure, and AI-powered recommendations.' },
  { id: 'settings', title: 'Beginner Mode', desc: 'Simplified investing, risk tolerance settings, and AI coaching preferences.' },
]

export default function PrototypeShowcase() {
  const scrollRef = useRef(null)
  const [active, setActive] = useState(0)

  const scroll = (dir) => {
    const next = Math.max(0, Math.min(screens.length - 1, active + dir))
    setActive(next)
    scrollRef.current?.children[next]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  return (
    <section id="prototype" className="relative section-padding overflow-hidden">
      <GlowOrb className="w-[700px] h-[700px] left-1/2 top-0 -translate-x-1/2" color="purple" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Interactive Prototype</SectionLabel>
          <SectionTitle className="mb-6">Production-grade mobile experience</SectionTitle>
          <SectionSubtitle className="mb-12">
            Six fully designed screens inside an iPhone 15 Pro frame — scroll to explore each flow.
          </SectionSubtitle>
        </Reveal>

        <div className="flex items-center justify-end gap-3 mb-8">
          <button onClick={() => scroll(-1)} disabled={active === 0} className="w-10 h-10 rounded-full glass flex items-center justify-center disabled:opacity-30 hover:bg-white/8 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scroll(1)} disabled={active === screens.length - 1} className="w-10 h-10 rounded-full glass flex items-center justify-center disabled:opacity-30 hover:bg-white/8 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory"
          onScroll={(e) => {
            const el = e.target
            const idx = Math.round(el.scrollLeft / (el.scrollWidth / screens.length))
            if (idx !== active && idx >= 0 && idx < screens.length) setActive(idx)
          }}
        >
          {screens.map((screen, i) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="flex-shrink-0 snap-center"
              style={{ width: 'min(420px, 85vw)' }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className={`transition-opacity duration-500 ${active === i ? 'opacity-100' : 'opacity-50'}`}
              >
                <div className="flex justify-center origin-top" style={{ transform: 'scale(0.82)', transformOrigin: 'top center', height: '720px' }}>
                  <PrototypeScreen screen={screen.id} />
                </div>
              </motion.div>

              <div className="text-center mt-2 px-4">
                <p className="text-[11px] font-semibold text-accent-light uppercase tracking-wider mb-1">
                  Screen {i + 1} of {screens.length}
                </p>
                <h3 className="text-xl font-semibold mb-2">{screen.title}</h3>
                <p className="text-[14px] text-white/40 leading-relaxed">{screen.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); scrollRef.current?.children[i]?.scrollIntoView({ behavior: 'smooth', inline: 'center' }) }}
              className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-accent' : 'w-1.5 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
