import { motion } from 'framer-motion'
import { BookOpen, Brain, Lightbulb } from 'lucide-react'

const entries = [
  { date: 'Today', action: 'Viewed NVDA · Did not buy', lesson: 'Patience during volatility. Avoided FOMO entry at peak', mood: 'Calm' },
  { date: 'Yesterday', action: 'Sold TSLA partial', lesson: 'Took profits after 18% gain, aligned with rebalance plan', mood: 'Disciplined' },
  { date: 'Mar 18', action: 'Bought AAPL', lesson: 'Added on dip but increased tech concentration to 42%', mood: 'Reflective' },
]

export default function InvestmentJournal() {
  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center">
              <BookOpen size={20} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-[13px] text-white/40">AI Documented History</p>
              <h1 className="text-[22px] font-bold">Investment Journal</h1>
            </div>
          </div>

          <div className="glass rounded-2xl p-4 mb-5 border border-accent/10">
            <div className="flex items-center gap-2 mb-2">
              <Brain size={14} className="text-accent-light" />
              <span className="text-[11px] font-semibold text-accent-light uppercase">Weekly Insight</span>
            </div>
            <p className="text-[13px] text-white/60 leading-relaxed">
              You're improving. Impulsive trades down 40% vs last month. Your best decisions happen when you wait 24h before acting.
            </p>
          </div>

          <h2 className="text-[17px] font-semibold mb-3">Recent Entries</h2>
          <div className="space-y-3">
            {entries.map((e) => (
              <motion.div key={e.date + e.action} className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] text-white/40">{e.date}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent-light">{e.mood}</span>
                </div>
                <p className="font-semibold text-[14px] mb-2">{e.action}</p>
                <div className="flex gap-2">
                  <Lightbulb size={12} className="text-warning flex-shrink-0 mt-0.5" />
                  <p className="text-[12px] text-white/50 leading-relaxed">{e.lesson}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
