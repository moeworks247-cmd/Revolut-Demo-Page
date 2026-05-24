import { motion } from 'framer-motion'
import { Gauge, CheckCircle2, AlertCircle } from 'lucide-react'

const factors = [
  { label: 'Portfolio Fit', score: 72, status: 'good' },
  { label: 'Risk Alignment', score: 58, status: 'warn' },
  { label: 'Timing Quality', score: 81, status: 'good' },
  { label: 'Diversification Impact', score: 45, status: 'warn' },
]

export default function TradeConfidence() {
  const overall = 68

  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <motion.div className="text-center mb-8">
            <p className="text-[13px] text-white/40 mb-2">Trade Confidence Engine</p>
            <h1 className="text-[22px] font-bold mb-6">NVDA Purchase Review</h1>
            <div className="relative w-40 h-40 mx-auto">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                <motion.circle
                  cx="60" cy="60" r="52" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round"
                  strokeDasharray={326}
                  initial={{ strokeDashoffset: 326 }}
                  animate={{ strokeDashoffset: 326 - (overall / 100) * 326 }}
                  transition={{ duration: 1.2 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Gauge size={20} className="text-accent-light mb-1" />
                <span className="text-3xl font-bold">{overall}</span>
                <span className="text-[11px] text-white/40">Confidence</span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-3 mb-6">
            {factors.map((f) => (
              <div key={f.label} className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[14px] font-medium">{f.label}</span>
                  <div className="flex items-center gap-2">
                    {f.status === 'good' ? (
                      <CheckCircle2 size={14} className="text-profit" />
                    ) : (
                      <AlertCircle size={14} className="text-warning" />
                    )}
                    <span className="font-bold tabular-nums">{f.score}</span>
                  </div>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${f.score}%`, opacity: f.status === 'warn' ? 0.6 : 1 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-4 mb-4 border border-accent/10">
            <p className="text-[12px] text-accent-light font-semibold mb-1">AI Verdict</p>
            <p className="text-[13px] text-white/60 leading-relaxed">
              Moderate confidence. Trade aligns with growth goals but increases sector concentration. Consider a smaller position size.
            </p>
          </div>

          <div className="flex gap-3">
            <motion.button whileTap={{ scale: 0.97 }} className="flex-1 py-4 rounded-2xl font-semibold bg-gradient-to-r from-accent to-indigo-500">Proceed</motion.button>
            <motion.button whileTap={{ scale: 0.97 }} className="flex-1 py-4 rounded-2xl font-semibold glass text-white/70">Adjust</motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
