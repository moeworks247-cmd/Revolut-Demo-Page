import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import RevaLogo from '../RevaLogo'
import { FEATURE_PHASES, statusLabel } from '../../data/featureRoadmap'
import { SectionHeader } from '../shared'

export default function CopilotHub() {
  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="flex items-center gap-3 mb-6">
            <RevaLogo size="xl" ring />
            <div>
              <p className="text-[13px] text-white/40 font-medium">Revolut Enhanced Value Advisor</p>
              <h1 className="text-[22px] font-bold text-gradient">REVA Hub</h1>
            </div>
          </div>

          <div className="gradient-border rounded-2xl mb-6 overflow-hidden">
            <div className="p-4 bg-gradient-to-br from-accent/10 to-transparent">
              <div className="flex items-center gap-2 mb-2">
                <RevaLogo size="sm" />
                <span className="text-[11px] font-semibold text-accent-light uppercase tracking-wider">Roadmap Progress</span>
              </div>
              <p className="text-[28px] font-bold text-gradient-blue mb-2">31%</p>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-indigo-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '31%' }}
                  transition={{ duration: 1.2 }}
                />
              </div>
              <p className="text-[12px] text-white/40 mt-2">5 live · 7 in progress · 4 planned</p>
            </div>
          </div>

          {FEATURE_PHASES.map((phase) => (
            <div key={phase.id} className="mb-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[11px] font-semibold text-accent-light">{phase.q}</p>
                  <h2 className="text-[15px] font-semibold">{phase.title}</h2>
                </div>
                <span className="text-[13px] font-bold tabular-nums text-white/50">{phase.progress}%</span>
              </div>
              <div className="space-y-2">
                {phase.features.map((f) => {
                  const st = statusLabel[f.status]
                  return (
                    <motion.div
                      key={f.id}
                      whileTap={{ scale: 0.98 }}
                      className="glass rounded-xl px-4 py-3 flex items-center gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-medium truncate">{f.name}</p>
                        <p className="text-[11px] text-white/35">{phase.theme}</p>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${st.bg} ${st.color}`}>
                        {st.text}
                      </span>
                      <ChevronRight size={14} className="text-white/20" />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
