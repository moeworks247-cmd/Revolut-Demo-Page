import { motion } from 'framer-motion'
import { Calendar, TrendingUp } from 'lucide-react'
import { RevaInsightLabel } from '../shared'

const quarters = [
  { q: 'Q4 2025', eps: 0.89, est: 0.82, beat: true, summary: 'Beat by 8.5%. Data center revenue drove upside.' },
  { q: 'Q3 2025', eps: 0.81, est: 0.75, beat: true, summary: 'Strong AI chip demand exceeded analyst expectations.' },
  { q: 'Q2 2025', eps: 0.68, est: 0.65, beat: true, summary: 'Moderate beat. Gaming segment recovery noted.' },
]

export default function EarningsIntelligence() {
  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="sticky top-0 z-30 glass px-5 pt-14 pb-4">
          <p className="text-[13px] text-white/40">NVDA · AI Earnings Intel</p>
          <h1 className="text-[22px] font-bold">Earnings Intelligence</h1>
        </div>

        <motion.div className="px-5">
          <div className="gradient-border rounded-2xl mb-5 overflow-hidden">
            <div className="p-4 ai-shimmer">
              <RevaInsightLabel label="REVA · Next Earnings · Feb 26" logoSize="xs" className="mb-2" />
              <p className="text-[14px] text-white/80 leading-relaxed">
                NVDA has beaten estimates 4/4 last quarters. AI expects EPS of $0.94 vs $0.88 consensus. Historical post earnings volatility: ±12%.
              </p>
            </div>
          </div>

          <div className="flex gap-2 mb-5">
            {['Beat Rate 100%', 'Avg Surprise +9.2%', 'Vol ±12%'].map((s) => (
              <span key={s} className="glass rounded-lg px-3 py-2 text-[11px] font-semibold text-white/60">{s}</span>
            ))}
          </div>

          <h2 className="text-[17px] font-semibold mb-3">Quarterly History</h2>
          <div className="space-y-3">
            {quarters.map((q) => (
              <motion.div key={q.q} className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{q.q}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-profit/15 text-profit font-semibold">Beat</span>
                </div>
                <div className="flex items-center gap-4 mb-2 text-[13px] tabular-nums">
                  <span>EPS <strong className="text-white">${q.eps}</strong></span>
                  <span className="text-white/40">Est ${q.est}</span>
                  <TrendingUp size={14} className="text-profit" />
                </div>
                <p className="text-[12px] text-white/45">{q.summary}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
