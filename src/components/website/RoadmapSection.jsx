import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, AlertTriangle, Layers } from 'lucide-react'
import {
  GANTT_WEEKS,
  GANTT_EPICS,
  GANTT_FEATURES,
  FEATURE_TYPE_COLORS,
} from '../../data/productGantt'
import { SectionLabel, SectionTitle, SectionSubtitle, Reveal, GlowOrb } from './shared'

const epicMap = Object.fromEntries(GANTT_EPICS.map((e) => [e.id, e]))

const complexityColors = {
  S: 'bg-emerald-500/20 text-emerald-400',
  M: 'bg-blue-500/20 text-blue-400',
  L: 'bg-amber-500/20 text-amber-400',
  XL: 'bg-rose-500/20 text-rose-400',
}

function GanttBar({ feature }) {
  const colors = FEATURE_TYPE_COLORS[feature.type]
  const left = ((feature.start - 1) / GANTT_WEEKS) * 100
  const width = (feature.duration / GANTT_WEEKS) * 100

  return (
    <div className="relative h-7 flex items-center">
      <div className="w-[200px] flex-shrink-0 pr-3 flex items-center gap-1.5 min-w-0">
        {feature.critical && <AlertTriangle size={11} className="text-warning flex-shrink-0" title="Critical path" />}
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: colors.from }} />
        <span className="text-[11px] text-white/55 truncate" title={feature.name}>
          {feature.name}
        </span>
      </div>
      <div className="flex-1 relative h-5 bg-white/[0.03] rounded-md overflow-hidden">
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.02 }}
          className={`absolute top-0.5 bottom-0.5 rounded ${feature.critical ? 'ring-1 ring-warning/50' : ''}`}
          style={{
            left: `${left}%`,
            width: `${width}%`,
            background: `linear-gradient(90deg, ${colors.from}, ${colors.to})`,
          }}
          title={`Wk ${feature.start} to ${feature.start + feature.duration - 1}`}
        />
      </div>
      <span className={`w-8 text-right text-[10px] font-bold flex-shrink-0 ml-2 ${complexityColors[feature.complexity]?.split(' ')[1] || 'text-white/40'}`}>
        {feature.complexity}
      </span>
    </div>
  )
}

export default function RoadmapSection() {
  const [showTable, setShowTable] = useState(false)
  const [epicFilter, setEpicFilter] = useState('all')

  const filteredFeatures =
    epicFilter === 'all'
      ? GANTT_FEATURES
      : GANTT_FEATURES.filter((f) => f.epic === epicFilter)

  const userFeatures = GANTT_FEATURES.filter(
    (f) => !f.name.includes('Data Layer') && !f.name.includes('Ingestion Pipeline')
  )

  return (
    <section id="roadmap" className="relative section-padding overflow-hidden">
      <GlowOrb className="w-[600px] h-[600px] -left-40 top-20" />

      <motion.div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Product Strategy</SectionLabel>
          <SectionTitle className="mb-6">24 week delivery Gantt</SectionTitle>
          <SectionSubtitle className="mb-10">
            Realistic timeline across 20 product features plus foundational data layers. Parallel workstreams, dependency ordered, critical path highlighted.
          </SectionSubtitle>
        </Reveal>

        {/* Epic grouping */}
        <Reveal delay={1}>
          <div className="flex items-center gap-2 mb-4">
            <Layers size={16} className="text-accent-light" />
            <h3 className="text-[15px] font-semibold">Epic Grouping</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {GANTT_EPICS.map((epic) => (
              <motion.button
                key={epic.id}
                type="button"
                onClick={() => setEpicFilter(epicFilter === epic.id ? 'all' : epic.id)}
                whileTap={{ scale: 0.98 }}
                className={`text-left glass rounded-2xl p-5 transition-all ${
                  epicFilter === epic.id ? 'border border-white/15 bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: epic.color }} />
                  <span className="font-semibold text-[14px]">{epic.name}</span>
                </div>
                <ul className="space-y-1">
                  {epic.features.map((f) => {
                    const feat = GANTT_FEATURES.find((gf) => gf.name === f)
                    const dotColor = feat ? FEATURE_TYPE_COLORS[feat.type].from : epic.color
                    return (
                      <li key={f} className="text-[11px] text-white/40 leading-relaxed flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dotColor }} />
                        {f}
                      </li>
                    )
                  })}
                </ul>
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Visual Gantt */}
        <Reveal delay={2}>
          <div className="glass-strong rounded-3xl p-6 md:p-8 gradient-border mb-10 overflow-x-auto">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-accent-light" />
                <h3 className="font-semibold">Delivery Timeline</h3>
                {epicFilter !== 'all' && (
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-accent/15 text-accent-light">
                    {epicMap[epicFilter]?.name}
                  </span>
                )}
              </div>
              <motion.div className="flex items-center gap-4 text-[11px] text-white/40">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-2 rounded-sm" style={{ background: `linear-gradient(90deg, ${FEATURE_TYPE_COLORS.core.from}, ${FEATURE_TYPE_COLORS.core.to})` }} />
                  Core
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-2 rounded-sm" style={{ background: `linear-gradient(90deg, ${FEATURE_TYPE_COLORS.ai.from}, ${FEATURE_TYPE_COLORS.ai.to})` }} />
                  AI
                </span>
                <span className="flex items-center gap-1"><AlertTriangle size={12} className="text-warning" /> Critical path</span>
              </motion.div>
            </div>

            <div className="min-w-[720px]">
              <div className="flex mb-2 pl-[200px]">
                {Array.from({ length: GANTT_WEEKS }, (_, i) => (
                  <span
                    key={i}
                    className="flex-1 text-center text-[9px] text-white/25 tabular-nums"
                    style={{ minWidth: 0 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                ))}
              </div>
              <div className="space-y-1.5">
                {filteredFeatures.map((f) => (
                  <GanttBar key={f.id} feature={f} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Summary table toggle */}
        <Reveal delay={3}>
          <button
            type="button"
            onClick={() => setShowTable(!showTable)}
            className="text-[13px] font-medium text-accent-light hover:text-white transition-colors mb-4"
          >
            {showTable ? 'Hide' : 'Show'} summary table ({userFeatures.length} features)
          </button>

          {showTable && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="glass rounded-2xl overflow-hidden mb-10 overflow-x-auto"
            >
              <table className="w-full text-left text-[12px]">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="px-4 py-3 font-semibold text-white/50">Feature</th>
                    <th className="px-4 py-3 font-semibold text-white/50">Type</th>
                    <th className="px-4 py-3 font-semibold text-white/50">Complexity</th>
                    <th className="px-4 py-3 font-semibold text-white/50">Duration</th>
                    <th className="px-4 py-3 font-semibold text-white/50">Weeks</th>
                    <th className="px-4 py-3 font-semibold text-white/50">Teams</th>
                    <th className="px-4 py-3 font-semibold text-white/50">Dependencies</th>
                  </tr>
                </thead>
                <tbody>
                  {userFeatures.map((f) => (
                    <tr key={f.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                      <td className="px-4 py-3 font-medium text-white/80">
                        {f.critical && <AlertTriangle size={11} className="inline mr-1 text-warning" />}
                        {f.name}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide"
                          style={{ color: FEATURE_TYPE_COLORS[f.type].from }}
                        >
                          <span className="w-2 h-2 rounded-full" style={{ background: FEATURE_TYPE_COLORS[f.type].from }} />
                          {f.type}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${complexityColors[f.complexity]}`}>
                          {f.complexity}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-white/45 tabular-nums">{f.duration} wks</td>
                      <td className="px-4 py-3 text-white/45 tabular-nums">
                        {f.start} to {f.start + f.duration - 1}
                      </td>
                      <td className="px-4 py-3 text-white/40">{f.teams.join(', ')}</td>
                      <td className="px-4 py-3 text-white/35 max-w-[200px]">{f.dependencies.join('; ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </Reveal>
      </motion.div>
    </section>
  )
}
