import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, TrendingUp } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { RevaInsightLabel, SectionHeader } from '../shared'

const baseCurrencies = ['GBP', 'USD', 'EUR']

const holdings = [
  { code: 'USD', flag: '🇺🇸', name: 'US Dollar', amount: 28420.18, localSymbol: '$', change: 1.24, pct: 59.2, color: '#3b82f6' },
  { code: 'EUR', flag: '🇪🇺', name: 'Euro', amount: 12850.44, localSymbol: '€', change: 0.68, changeNegative: false, pct: 26.8, color: '#6366f1' },
  { code: 'GBP', flag: '🇬🇧', name: 'British Pound', amount: 4962.02, localSymbol: '£', change: -0.12, changeNegative: true, pct: 10.3, color: '#22c55e' },
  { code: 'CHF', flag: '🇨🇭', name: 'Swiss Franc', amount: 1600.0, localSymbol: 'CHF ', change: 0.41, pct: 3.7, color: '#f59e0b' },
]

const fxRates = [
  { pair: 'GBP/USD', rate: 1.274, change: 0.08 },
  { pair: 'GBP/EUR', rate: 1.168, change: -0.03 },
  { pair: 'GBP/CHF', rate: 1.112, change: 0.05 },
]

const totalGbp = 47932.64

function formatMoney(value, symbol = '£') {
  return `${symbol}${value.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export default function MulticurrencyPortfolio() {
  const [base, setBase] = useState('GBP')

  const allocation = holdings.map((h) => ({ name: h.code, value: h.pct, color: h.color }))

  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <motion.div className="flex-1 overflow-y-auto pb-24">
        <motion.div className="px-5 pt-14">
          <motion.div className="flex items-center justify-between mb-6">
            <motion.div className="flex items-center gap-3">
              <motion.div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                <Globe size={20} className="text-accent-light" />
              </motion.div>
              <motion.div>
                <p className="text-[13px] text-white/40">Hold in 4 currencies</p>
                <h1 className="text-[22px] font-bold">Multi Currency</h1>
              </motion.div>
            </motion.div>
            <motion.div className="flex gap-1 p-1 rounded-full glass">
              {baseCurrencies.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setBase(c)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors ${
                    base === c ? 'bg-accent text-white' : 'text-white/40'
                  }`}
                >
                  {c}
                </button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-5 mb-5 gradient-border"
          >
            <p className="text-[13px] text-white/40 font-medium mb-1">Total portfolio · {base} equivalent</p>
            <p className="text-[34px] font-bold tracking-tight tabular-nums mb-2">{formatMoney(totalGbp)}</p>
            <motion.div className="flex items-center gap-2">
              <motion.div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-profit/15 text-profit text-[13px] font-semibold">
                <TrendingUp size={14} />
                +2.68% today
              </motion.div>
              <span className="text-[12px] text-white/30">Auto converted at live FX</span>
            </motion.div>
          </motion.div>

          <motion.div className="glass rounded-2xl p-4 mb-5">
            <RevaInsightLabel label="REVA FX Insight" className="mb-2" />
            <p className="text-[13px] text-white/70 leading-relaxed pl-7">
              59% USD exposure amplifies Fed rate sensitivity. Consider rebalancing 8% into EUR or GBP to reduce single currency risk.
            </p>
          </motion.div>

          <motion.div className="glass rounded-2xl p-5 mb-5">
            <SectionHeader title="Currency allocation" />
            <motion.div className="flex items-center gap-4 mb-4">
              <motion.div className="w-[110px] h-[110px] flex-shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={allocation}
                      cx="50%"
                      cy="50%"
                      innerRadius={34}
                      outerRadius={50}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >
                      {allocation.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>
              <motion.div className="flex-1 space-y-2">
                {holdings.map((h) => (
                  <motion.div key={h.code} className="flex items-center justify-between text-[12px]">
                    <motion.div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: h.color }} />
                      <span className="text-white/70">{h.code}</span>
                    </motion.div>
                    <span className="font-semibold tabular-nums">{h.pct}%</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <h2 className="text-[17px] font-semibold mb-3">Holdings by currency</h2>
          <motion.div className="space-y-3 mb-6">
            {holdings.map((h, i) => (
              <motion.div
                key={h.code}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-xl p-4"
              >
                <motion.div className="flex items-center justify-between mb-2">
                  <motion.div className="flex items-center gap-3">
                    <span className="text-xl">{h.flag}</span>
                    <motion.div>
                      <p className="font-semibold text-[14px]">{h.code}</p>
                      <p className="text-[11px] text-white/40">{h.name}</p>
                    </motion.div>
                  </motion.div>
                  <motion.div className="text-right">
                    <p className="font-semibold tabular-nums text-[15px]">
                      {h.localSymbol}{h.amount.toLocaleString('en-GB', { minimumFractionDigits: 2 })}
                    </p>
                    <p className={`text-[12px] font-medium tabular-nums ${h.changeNegative ? 'text-loss' : 'text-profit'}`}>
                      {h.changeNegative ? '' : '+'}{h.change}%
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ width: `${h.pct}%`, background: h.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${h.pct}%` }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <h2 className="text-[17px] font-semibold mb-3">Live FX rates</h2>
          <motion.div className="grid grid-cols-3 gap-2">
            {fxRates.map((fx) => (
              <motion.div key={fx.pair} className="glass rounded-xl p-3 text-center">
                <p className="text-[10px] text-white/40 mb-1">{fx.pair}</p>
                <p className="text-[14px] font-bold tabular-nums">{fx.rate}</p>
                <p className={`text-[11px] tabular-nums ${fx.change >= 0 ? 'text-profit' : 'text-loss'}`}>
                  {fx.change >= 0 ? '+' : ''}{fx.change}%
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
