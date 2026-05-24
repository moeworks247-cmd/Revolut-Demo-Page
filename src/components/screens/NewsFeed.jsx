import { motion } from 'framer-motion'
import { BookOpen, Clock, Globe, TrendingUp, User } from 'lucide-react'
import { RevaInsightLabel } from '../shared'
import { newsFeed } from '../../data/mockData'

const tagConfig = {
  'Daily Brief': { icon: Globe, variant: 'accent' },
  'For You': { icon: User, variant: 'success' },
  Learn: { icon: BookOpen, variant: 'default' },
  Trending: { icon: TrendingUp, variant: 'warning' },
  Macro: { icon: Globe, variant: 'default' },
}

const tagStyles = {
  accent: 'bg-accent/15 text-accent-light',
  success: 'bg-profit/15 text-profit',
  warning: 'bg-warning/15 text-warning',
  default: 'bg-white/8 text-white/50',
}

export default function NewsFeed() {
  const featured = newsFeed[0]

  return (
    <div className="h-full flex flex-col bg-surface">
      <motion.div className="flex-1 overflow-y-auto pb-24">
        <div className="px-5 pt-14">
          <div className="mb-6">
            <p className="text-[13px] text-white/40 font-medium">AI powered</p>
            <h1 className="text-[22px] font-bold text-gradient">Market Insights</h1>
          </div>

          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="gradient-border rounded-2xl mb-6 overflow-hidden"
          >
            <div className="relative p-5 bg-gradient-to-br from-accent/12 via-surface-card to-purple-900/10">
              <RevaInsightLabel label="REVA Featured" className="mb-3" />
              <h2 className="text-[20px] font-bold leading-tight mb-2">{featured.title}</h2>
              <p className="text-[14px] text-white/65 leading-relaxed mb-4">{featured.summary}</p>
              <div className="flex items-center gap-3 text-[12px] text-white/35">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {featured.readTime}
                </span>
                <span>{featured.time}</span>
              </div>
            </div>
          </motion.div>

          {/* Macro highlights */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
            {['S&P +0.8%', 'NASDAQ +1.2%', 'CPI 2.4%', 'VIX 14.2'].map((stat, i) => (
              <motion.div
                key={stat}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex-shrink-0 glass rounded-xl px-4 py-2.5"
              >
                <span className="text-[13px] font-semibold tabular-nums">{stat}</span>
              </motion.div>
            ))}
          </div>

          {/* Feed */}
          <div className="space-y-3">
            {newsFeed.slice(1).map((item, i) => {
              const config = tagConfig[item.tag] || tagConfig.Macro
              const Icon = config.icon

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass rounded-2xl p-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagStyles[config.variant]}`}
                    >
                      <Icon size={10} />
                      {item.tag}
                    </span>
                    <span className="text-[11px] text-white/25">{item.time}</span>
                  </div>
                  <h3 className="text-[16px] font-semibold leading-snug mb-2">{item.title}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed line-clamp-2 mb-3">
                    {item.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-white/30 flex items-center gap-1">
                      <Clock size={11} />
                      {item.readTime} read
                    </span>
                    <span className="text-[12px] font-medium text-accent-light">Read more</span>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
