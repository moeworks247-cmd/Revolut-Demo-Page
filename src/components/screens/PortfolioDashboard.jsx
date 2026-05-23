import { motion } from 'framer-motion'
import { Bell, TrendingUp } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { portfolioData, formatCurrency, formatChange } from '../../data/mockData'
import { AIInsightCard, StockRow, SectionHeader } from '../shared'

export default function PortfolioDashboard({ onStockSelect }) {
  const { balance, dailyChange, dailyChangePercent, allocation, aiInsight, watchlist, trending } =
    portfolioData
  const isPositive = dailyChange >= 0

  return (
    <div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Header */}
        <div className="px-5 pt-14 pb-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[13px] text-white/40 font-medium">Good afternoon</p>
              <h1 className="text-[22px] font-bold text-gradient">Portfolio</h1>
            </div>
            <motion.button
              whileTap={{ scale: 0.92 }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center"
            >
              <Bell size={18} className="text-white/70" />
            </motion.button>
          </div>

          <AIInsightCard insight={aiInsight} />

          {/* Balance card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-5 mb-6"
          >
            <p className="text-[13px] text-white/40 font-medium mb-1">Total Balance</p>
            <p className="text-[36px] font-bold tracking-tight tabular-nums mb-2">
              {formatCurrency(balance)}
            </p>
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[13px] font-semibold ${
                  isPositive ? 'bg-profit/15 text-profit' : 'bg-loss/15 text-loss'
                }`}
              >
                <TrendingUp size={14} className={!isPositive ? 'rotate-180' : ''} />
                {formatChange(dailyChange, dailyChangePercent)}
              </div>
              <span className="text-[13px] text-white/30">Today</span>
            </div>
          </motion.div>

          {/* Allocation chart */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass rounded-2xl p-5 mb-6"
          >
            <SectionHeader title="Allocation" />
            <div className="flex items-center gap-4">
              <div className="w-[120px] h-[120px] flex-shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={allocation}
                      cx="50%"
                      cy="50%"
                      innerRadius={38}
                      outerRadius={55}
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
              </div>
              <div className="flex-1 space-y-2">
                {allocation.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <motion.div className="flex items-center gap-2">
                      <motion.div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-[13px] text-white/60">{item.name}</span>
                    </motion.div>
                    <span className="text-[13px] font-semibold tabular-nums">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Watchlist */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-1 mb-4"
          >
            <SectionHeader title="Watchlist" action="See all" />
            <div className="glass rounded-2xl px-4 divide-y divide-white/5">
              {watchlist.map((stock) => (
                <StockRow key={stock.symbol} stock={stock} onClick={() => onStockSelect(stock.symbol)} />
              ))}
            </div>
          </motion.div>

          {/* Trending */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="px-1"
          >
            <SectionHeader title="Trending" action="Explore" />
            <motion.div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
              {trending.map((stock, i) => (
                <motion.button
                  key={stock.symbol}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onStockSelect(stock.symbol)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex-shrink-0 w-[140px] glass rounded-2xl p-4 text-left hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-[15px]">{stock.symbol}</span>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-accent/15 text-accent-light">
                      {stock.tag}
                    </span>
                  </div>
                  <p className="text-[22px] font-bold tabular-nums mb-1">${stock.price.toFixed(2)}</p>
                  <p
                    className={`text-[13px] font-semibold ${
                      stock.change >= 0 ? 'text-profit' : 'text-loss'
                    }`}
                  >
                    {stock.change >= 0 ? '+' : ''}
                    {stock.changePercent.toFixed(2)}%
                  </p>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
