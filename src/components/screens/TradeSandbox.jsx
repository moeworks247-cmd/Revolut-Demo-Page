import { motion } from 'framer-motion'
import { Gamepad2, TrendingUp, Award } from 'lucide-react'

export default function TradeSandbox() {
  return (
    <div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
              <Gamepad2 size={20} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-[13px] text-white/40">Practice Mode · Virtual $100K</p>
              <h1 className="text-[22px] font-bold">Trade Sandbox</h1>
            </div>
          </div>

          <div className="glass rounded-2xl p-5 mb-5 mt-4">
            <p className="text-[13px] text-white/40 mb-1">Sandbox Balance</p>
            <p className="text-[32px] font-bold tabular-nums mb-1">$100,000.00</p>
            <div className="flex items-center gap-2">
              <TrendingUp size={14} className="text-profit" />
              <span className="text-profit text-[14px] font-semibold">+$2,340 (+2.34%) all time</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="glass rounded-xl p-4 text-center">
              <Award size={18} className="text-accent-light mx-auto mb-2" />
              <p className="text-[20px] font-bold">12</p>
              <p className="text-[11px] text-white/40">Practice Trades</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-[20px] font-bold text-profit">67%</p>
              <p className="text-[11px] text-white/40">Win Rate</p>
            </div>
          </div>

          <div className="glass rounded-xl p-4 mb-5 border border-emerald-500/15">
            <p className="text-[12px] text-emerald-400 font-semibold mb-1">AI Coach Tip</p>
            <p className="text-[13px] text-white/60 leading-relaxed">
              Great job waiting 48h before your last sandbox trade. That patience improved your entry by 3.2%. Try the same discipline with real money.
            </p>
          </div>

          <motion.button whileTap={{ scale: 0.98 }} className="w-full py-4 rounded-2xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
            Open Sandbox Portfolio
          </motion.button>
        </div>
      </div>
    </div>
  )
}
