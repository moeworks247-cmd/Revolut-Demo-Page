import { motion } from 'framer-motion'
import { Users, TrendingUp, TrendingDown } from 'lucide-react'

const assets = [
  { symbol: 'NVDA', retail: 78, analyst: 89, trend: 'bullish' },
  { symbol: 'TSLA', retail: 62, analyst: 45, trend: 'mixed' },
  { symbol: 'AAPL', retail: 55, analyst: 72, trend: 'bullish' },
]

export default function CommunityIntel() {
  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center">
              <Users size={20} className="text-purple-400" />
            </div>
            <div>
              <p className="text-[13px] text-white/40">Retail + Analyst Sentiment</p>
              <h1 className="text-[22px] font-bold">Community Intel</h1>
            </div>
          </div>

          <div className="glass rounded-2xl p-4 mb-5">
            <p className="text-[12px] text-white/40 mb-3">Market-Wide Sentiment</p>
            <motion.div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-[11px] text-white/35 mb-1">Retail Investors</p>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div className="h-full w-[68%] bg-gradient-to-r from-accent to-indigo-500 rounded-full" />
                </div>
                <p className="text-[13px] font-semibold mt-1">68% Bullish</p>
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-white/35 mb-1">Analyst Consensus</p>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-[74%] bg-gradient-to-r from-profit/80 to-profit rounded-full" />
                </div>
                <p className="text-[13px] font-semibold mt-1">74% Buy</p>
              </div>
            </motion.div>
          </div>

          <h2 className="text-[17px] font-semibold mb-3">Your Holdings</h2>
          <div className="space-y-3">
            {assets.map((a) => (
              <motion.div key={a.symbol} className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-[16px]">{a.symbol}</span>
                  {a.trend === 'bullish' ? (
                    <TrendingUp size={16} className="text-profit" />
                  ) : (
                    <TrendingDown size={16} className="text-warning" />
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3 text-[12px]">
                  <div>
                    <p className="text-white/35 mb-0.5">Retail</p>
                    <p className="font-semibold tabular-nums">{a.retail}% bullish</p>
                  </div>
                  <div>
                    <p className="text-white/35 mb-0.5">Analysts</p>
                    <p className="font-semibold tabular-nums">{a.analyst}% buy</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
