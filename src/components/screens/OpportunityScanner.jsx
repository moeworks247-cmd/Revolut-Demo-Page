import { motion } from 'framer-motion'
import { Radar } from 'lucide-react'
import { RevaInsightLabel } from '../shared'

const opportunities = [
  { symbol: 'AMD', name: 'Advanced Micro', match: 92, reason: 'AI chip momentum · complements NVDA exposure', tag: 'Sector Fit' },
  { symbol: 'VRTX', name: 'Vertex Pharma', match: 87, reason: 'Underweight healthcare · strong pipeline', tag: 'Diversify' },
  { symbol: 'XLE', name: 'Energy ETF', match: 78, reason: 'Reduces tech concentration risk', tag: 'Hedge' },
  { symbol: 'PLTR', name: 'Palantir', match: 71, reason: 'Trending · high retail interest', tag: 'Trending' },
]

export default function OpportunityScanner() {
  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
              <Radar size={20} className="text-accent-light" />
            </div>
            <div>
              <p className="text-[13px] text-white/40">AI Matched Opportunities</p>
              <h1 className="text-[22px] font-bold">Opportunity Scanner</h1>
            </div>
          </div>

          <div className="glass rounded-xl px-4 py-3 mb-5">
            <RevaInsightLabel label="REVA · 4 matches found" logoSize="xs" className="mb-1" />
            <p className="text-[12px] text-white/55 pl-7">Scanned 2,400 assets · matched to your portfolio profile</p>
          </div>

          <div className="space-y-3">
            {opportunities.map((o, i) => (
              <motion.div
                key={o.symbol}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileTap={{ scale: 0.98 }}
                className="glass rounded-2xl p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[16px]">{o.symbol}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-accent/15 text-accent-light">{o.tag}</span>
                    </div>
                    <p className="text-[12px] text-white/40">{o.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[20px] font-bold text-gradient-blue tabular-nums">{o.match}%</p>
                    <p className="text-[10px] text-white/35">Match</p>
                  </div>
                </div>
                <p className="text-[13px] text-white/55 leading-relaxed">{o.reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
