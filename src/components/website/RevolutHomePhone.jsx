import { motion } from 'framer-motion'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'
import {
  AlertTriangle,
  Heart,
  Home,
  LayoutGrid,
  MoreHorizontal,
  Search,
  TrendingUp,
  User,
} from 'lucide-react'
import PhoneFrame from '../iPhoneFrame'
import RevaLogo from '../RevaLogo'
import { GlowOrb } from './shared'

const chartData = [
  { v: 46200 }, { v: 46800 }, { v: 47100 }, { v: 47450 }, { v: 47620 }, { v: 47832 },
]

function RevolutHomeContent() {
  return (
    <div className="h-full flex flex-col bg-[#0a0a0f] overflow-hidden">
      {/* Revolut-style header */}
      <div className="px-5 pt-14 pb-3">
        <div className="flex items-center justify-between mb-5">
          <motion.div className="flex items-center gap-2.5">
            <motion.div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <span className="text-[#0a0a0f] font-black text-sm tracking-tighter">R</span>
            </motion.div>
            <span className="text-[15px] font-semibold text-white tracking-tight">Revolut</span>
          </motion.div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center">
              <Search size={16} className="text-white/60" />
            </div>
            <div className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center">
              <User size={16} className="text-white/60" />
            </div>
          </div>
        </div>

        {/* Portfolio value — primary Revolut card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl p-5 mb-4"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #12121a 100%)' }}
        >
          <p className="text-[12px] text-white/45 font-medium mb-1">Portfolio value</p>
          <div className="flex items-end justify-between mb-3">
            <p className="text-[34px] font-bold tracking-tight tabular-nums leading-none">$47,832.64</p>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#22c55e]/15 text-[#22c55e] text-[12px] font-semibold">
              <TrendingUp size={12} />
              +2.68%
            </div>
          </div>
          <div className="h-[56px] -mx-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="revolutHeroGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={1.5} fill="url(#revolutHeroGrad)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* REVA insight — blended AI layer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-2xl overflow-hidden mb-4 ai-shimmer gradient-border"
        >
          <div className="relative p-4" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 100%)' }}>
            <div className="flex items-center gap-2 mb-2">
              <RevaLogo size="sm" />
              <span className="text-[11px] font-bold text-accent-light uppercase tracking-wider">REVA</span>
              <span className="text-[10px] text-white/30 ml-auto">Just now</span>
            </div>
            <p className="text-[13px] text-white/80 leading-relaxed">
              Your portfolio is heavily concentrated in tech. Consider diversifying to reduce sector risk before your next trade.
            </p>
          </div>
        </motion.div>

        {/* Risk Alert + Health Score row */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-xl p-3.5 bg-[#1c1010] border border-[#ef4444]/20"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <AlertTriangle size={13} className="text-[#ef4444]" />
              <span className="text-[10px] font-semibold text-[#ef4444] uppercase tracking-wider">Risk Alert</span>
            </div>
            <p className="text-[22px] font-bold text-white tabular-nums">18%</p>
            <p className="text-[10px] text-white/40 mt-0.5">Weekly volatility on NVDA</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl p-3.5 bg-[#0f1a14] border border-[#22c55e]/20"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <Heart size={13} className="text-[#22c55e]" />
              <span className="text-[10px] font-semibold text-[#22c55e] uppercase tracking-wider">Health Score</span>
            </div>
            <p className="text-[22px] font-bold text-white tabular-nums">68<span className="text-[14px] text-white/40 font-normal">/100</span></p>
            <p className="text-[10px] text-white/40 mt-0.5">Diversification needs work</p>
          </motion.div>
        </div>

        {/* Revolut quick actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="flex gap-2 overflow-x-auto hide-scrollbar pb-1"
        >
          {['Invest', 'Crypto', 'Savings', 'Stocks'].map((label) => (
            <div key={label} className="flex-shrink-0 px-4 py-2 rounded-full bg-white/6 text-[12px] text-white/60 font-medium">
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Revolut bottom nav */}
      <div className="mt-auto border-t border-white/5 bg-[#0a0a0f]/95 backdrop-blur-xl pb-[28px] pt-2 px-2">
        <div className="flex items-center justify-around">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: LayoutGrid, label: 'Invest', active: false },
            { label: 'REVA', active: false, accent: true, logo: true },
            { icon: MoreHorizontal, label: 'Hub', active: false },
          ].map(({ icon: Icon, label, active, accent, logo }) => (
            <div key={label} className="flex flex-col items-center gap-0.5 py-1 px-3">
              {active && <motion.div layoutId="hero-nav-dot" className="w-1 h-1 rounded-full bg-white mb-0.5" />}
              {logo ? (
                <RevaLogo size={20} />
              ) : (
                <Icon
                  size={20}
                  className={active ? 'text-white' : 'text-white/30'}
                  strokeWidth={active ? 2.2 : 1.8}
                />
              )}
              <span className={`text-[9px] font-medium ${active ? 'text-white' : accent ? 'text-accent-light' : 'text-white/30'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function RevolutHomePhone() {
  return (
    <div className="relative w-full flex justify-center lg:justify-end">
      <GlowOrb className="w-96 h-96 -top-16 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0" />

      <motion.div
        initial={{ opacity: 0, y: 48, rotateY: -8 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1200 }}
      >
        <PhoneFrame embed scale={0.88} label={null}>
          <RevolutHomeContent />
        </PhoneFrame>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute top-[18%] -right-2 lg:-right-8 glass rounded-xl px-3 py-2 hidden md:block"
      >
        <p className="text-[10px] text-accent-light font-semibold uppercase tracking-wider">Live in Revolut</p>
        <p className="text-[11px] text-white/60 whitespace-nowrap">REVA embedded natively</p>
      </motion.div>
    </div>
  )
}
