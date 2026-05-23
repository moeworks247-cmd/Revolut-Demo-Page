import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Activity,
  BarChart3,
  Calendar,
  ChevronRight,
  Newspaper,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { stockDetail } from '../../data/mockData'
import { Pill } from '../shared'

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="glass rounded-lg px-3 py-2 text-[13px]">
      <p className="text-white/50">{payload[0].payload.time}</p>
      <p className="font-bold tabular-nums">${payload[0].value.toFixed(2)}</p>
    </div>
  )
}

export default function StockDetail({ onBack, onBuyClick }) {
  const { symbol, name, price, change, changePercent, marketCap, volume, pe, high52, low52, aiSummary, volatility, earnings, sentiment, chartData, news } =
    stockDetail
  const isPositive = change >= 0

  return (
    <div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-28">
        {/* Header */}
        <div className="sticky top-0 z-30 glass px-5 pt-14 pb-4">
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onBack}
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center"
            >
              <ArrowLeft size={18} />
            </motion.button>
            <div className="flex-1">
              <h1 className="font-bold text-[17px]">{symbol}</h1>
              <p className="text-[13px] text-white/40">{name}</p>
            </div>
            <motion.button whileTap={{ scale: 0.9 }} className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
              <BarChart3 size={18} className="text-white/60" />
            </motion.button>
          </div>
        </div>

        <div className="px-5">
          {/* Price */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5"
          >
            <p className="text-[40px] font-bold tracking-tight tabular-nums">${price.toFixed(2)}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-[15px] font-semibold ${isPositive ? 'text-profit' : 'text-loss'}`}>
                {isPositive ? '+' : ''}${Math.abs(change).toFixed(2)} ({isPositive ? '+' : ''}
                {changePercent.toFixed(2)}%)
              </span>
              <span className="text-[13px] text-white/30">Today</span>
            </div>
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="h-[200px] -mx-2 mb-6"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(255,255,255,0.25)', fontSize: 11 }}
                  interval="preserveStartEnd"
                />
                <YAxis
                  domain={['dataMin - 5', 'dataMax + 5']}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(255,255,255,0.25)', fontSize: 11 }}
                  tickFormatter={(v) => `$${v}`}
                  width={50}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#6366f1"
                  strokeWidth={2}
                  fill="url(#priceGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Time range pills */}
          <div className="flex gap-2 mb-6">
            {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((range, i) => (
              <button
                key={range}
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                  i === 0
                    ? 'bg-accent text-white'
                    : 'bg-white/5 text-white/40 hover:text-white/60'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* AI Summary */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="gradient-border rounded-2xl mb-6 overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-br from-accent/8 to-transparent">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-accent-light" />
                <span className="text-[11px] font-semibold text-accent-light uppercase tracking-wider">
                  AI Summary
                </span>
              </div>
              <p className="text-[14px] text-white/85 leading-relaxed">{aiSummary}</p>
            </div>
          </motion.div>

          {/* Indicators */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="glass rounded-xl p-3.5"
            >
              <Activity size={16} className="text-warning mb-2" />
              <p className="text-[11px] text-white/40 mb-1">Volatility</p>
              <p className="text-[15px] font-bold">{volatility.level}</p>
              <Pill variant="warning">{volatility.score}/100</Pill>
            </motion.div>
            <motion.div whileTap={{ scale: 0.97 }} className="glass rounded-xl p-3.5">
              <Calendar size={16} className="text-accent-light mb-2" />
              <p className="text-[11px] text-white/40 mb-1">Earnings</p>
              <p className="text-[13px] font-bold leading-tight">{earnings.next}</p>
              <Pill variant="success">{earnings.beat}</Pill>
            </motion.div>
            <motion.div whileTap={{ scale: 0.97 }} className="glass rounded-xl p-3.5">
              <Users size={16} className="text-profit mb-2" />
              <p className="text-[11px] text-white/40 mb-1">Sentiment</p>
              <p className="text-[13px] font-bold">{sentiment.rating}</p>
              <Pill variant="success">{sentiment.bullish}% bullish</Pill>
            </motion.div>
          </div>

          {/* Market stats */}
          <div className="glass rounded-2xl p-4 mb-6">
            <h3 className="text-[15px] font-semibold mb-3">Market Stats</h3>
            <motion.div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {[
                ['Market Cap', marketCap],
                ['Volume', volume],
                ['P/E Ratio', pe],
                ['52W High', `$${high52}`],
                ['52W Low', `$${low52}`],
                ['Beta', '1.72'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <span className="text-[13px] text-white/40">{label}</span>
                  <span className="text-[13px] font-semibold tabular-nums">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* News */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Newspaper size={16} className="text-white/40" />
              <h3 className="text-[15px] font-semibold">News</h3>
            </div>
            <div className="space-y-2">
              {news.map((item, i) => (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass rounded-xl p-4 text-left flex items-center gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-medium leading-snug mb-1 line-clamp-2">{item.title}</p>
                    <p className="text-[12px] text-white/35">
                      {item.source} · {item.time}
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-white/20 flex-shrink-0" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Buy/Sell bar */}
      <div className="absolute bottom-[34px] left-0 right-0 px-5 z-40">
        <div className="flex gap-3">
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="flex-1 py-4 rounded-2xl font-semibold text-[16px] bg-white/8 text-white/80 border border-white/10"
          >
            Sell
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onBuyClick}
            className="flex-1 py-4 rounded-2xl font-semibold text-[16px] bg-gradient-to-r from-accent to-indigo-500 text-white shadow-glow"
          >
            Buy
          </motion.button>
        </div>
      </div>
    </div>
  )
}
