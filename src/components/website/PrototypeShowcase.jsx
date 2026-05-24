import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PrototypeScreen } from '../MobilePrototype'
import { PROTOTYPE_SCREENS } from '../../data/prototypeScreens'
import { DELIVERY_PHASES } from '../../data/productGantt'
import { SectionLabel, SectionTitle, SectionSubtitle, Reveal, GlowOrb } from './shared'

const phaseFilters = [{ id: 'All', label: 'All deliverables' }, ...DELIVERY_PHASES.map((p) => ({ id: p.id, label: p.label }))]

export default function PrototypeShowcase() {
  const scrollRef = useRef(null)
  const [active, setActive] = useState(0)
  const [phaseFilter, setPhaseFilter] = useState('All')

  const filteredScreens = phaseFilter === 'All'
    ? PROTOTYPE_SCREENS
    : PROTOTYPE_SCREENS.filter((s) => s.deliveryPhase === phaseFilter)

  const scroll = (dir) => {
    const next = Math.max(0, Math.min(filteredScreens.length - 1, active + dir))
    setActive(next)
    scrollRef.current?.children[next]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  const onFilterChange = (phase) => {
    setPhaseFilter(phase)
    setActive(0)
    scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
  }

  return (
    <section id="prototype" className="relative section-padding overflow-hidden">
      <GlowOrb className="w-[700px] h-[700px] left-1/2 top-0 -translate-x-1/2" color="purple" />

      <motion.div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Interactive Prototype</SectionLabel>
          <SectionTitle className="mb-6">{PROTOTYPE_SCREENS.length} production grade screens</SectionTitle>
          <SectionSubtitle className="mb-8">
            Each feature maps to its delivery window from the 24 week Gantt. Filter by estimated ship date.
          </SectionSubtitle>
        </Reveal>

        <motion.div className="flex gap-2 overflow-x-auto hide-scrollbar mb-8 pb-1">
          {phaseFilters.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onFilterChange(p.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-[12px] font-medium transition-colors whitespace-nowrap ${
                phaseFilter === p.id ? 'bg-accent text-white' : 'glass text-white/50 hover:text-white/70'
              }`}
            >
              {p.label}
            </button>
          ))}
        </motion.div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-[13px] text-white/40">
            {filteredScreens.length} screens
            {phaseFilter !== 'All' && ` · ${phaseFilters.find((p) => p.id === phaseFilter)?.label}`}
          </p>
          <div className="flex gap-3">
            <button type="button" onClick={() => scroll(-1)} disabled={active === 0} className="w-10 h-10 rounded-full glass flex items-center justify-center disabled:opacity-30 hover:bg-white/8 transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={() => scroll(1)} disabled={active === filteredScreens.length - 1} className="w-10 h-10 rounded-full glass flex items-center justify-center disabled:opacity-30 hover:bg-white/8 transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory"
          onScroll={(e) => {
            const el = e.target
            if (filteredScreens.length === 0) return
            const idx = Math.round(el.scrollLeft / (el.scrollWidth / filteredScreens.length))
            if (idx !== active && idx >= 0 && idx < filteredScreens.length) setActive(idx)
          }}
        >
          {filteredScreens.map((screen, i) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: Math.min(i * 0.05, 0.3) }}
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

              <motion.div className="text-center mt-2 px-4">
                <div className="flex items-center justify-center gap-2 mb-1 flex-wrap">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent-light">
                    {screen.targetDate} · Wk {screen.deliveryWeek}
                  </span>
                  <span className="text-[11px] text-white/25">{i + 1} / {filteredScreens.length}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{screen.title}</h3>
                <p className="text-[14px] text-white/40 leading-relaxed">{screen.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {filteredScreens.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { setActive(i); scrollRef.current?.children[i]?.scrollIntoView({ behavior: 'smooth', inline: 'center' }) }}
              className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-accent' : 'w-1.5 bg-white/20'}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
