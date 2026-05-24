import { motion } from 'framer-motion'
import RevaLogo from './RevaLogo'
import { REVA_BRAND_NAME } from '../constants/revaBrand'

export function RevaInsightLabel({ label = 'REVA Insight', className = '', logoSize = 'sm' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <RevaLogo size={logoSize} />
      <span className="text-[11px] font-semibold text-accent-light uppercase tracking-wider">{label}</span>
    </div>
  )
}

export function AIInsightCard({ insight, compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`gradient-border rounded-2xl overflow-hidden ${compact ? '' : 'mb-5'}`}
    >
      <div className="relative p-4 ai-shimmer">
        <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/5" />
        <div className="relative flex gap-3">
          <RevaLogo size="lg" ring />
          <div className="flex-1 min-w-0">
            <RevaInsightLabel label={`${REVA_BRAND_NAME} Insight`} className="mb-1" logoSize="xs" />
            <p className={`text-white/90 leading-relaxed ${compact ? 'text-[13px]' : 'text-sm'}`}>
              {insight}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function StockRow({ stock, onClick, showTag }) {
  const isPositive = stock.change >= 0

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full flex items-center gap-3 py-3.5 px-1 group"
    >
      <div className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center text-xs font-bold text-white/80 ring-1 ring-white/5">
        {stock.symbol.slice(0, 2)}
      </div>
      <div className="flex-1 text-left min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[15px]">{stock.symbol}</span>
          {showTag && stock.tag && (
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-accent/15 text-accent-light">
              {stock.tag}
            </span>
          )}
        </div>
        <p className="text-[13px] text-white/40 truncate">{stock.name}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-[15px] tabular-nums">
          ${stock.price.toFixed(2)}
        </p>
        <p
          className={`text-[13px] font-medium tabular-nums ${
            isPositive ? 'text-profit' : 'text-loss'
          }`}
        >
          {isPositive ? '+' : ''}
          {stock.changePercent.toFixed(2)}%
        </p>
      </div>
    </motion.button>
  )
}

export function SectionHeader({ title, action, onAction }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-[17px] font-semibold text-white">{title}</h2>
      {action && (
        <button
          onClick={onAction}
          className="text-[13px] font-medium text-accent-light hover:text-accent transition-colors"
        >
          {action}
        </button>
      )}
    </div>
  )
}

export function ScoreRing({ score, label, color, size = 80 }) {
  const radius = (size - 8) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold tabular-nums">{score}</span>
        </div>
      </div>
      <span className="text-[12px] text-white/50 font-medium">{label}</span>
    </div>
  )
}

export function Pill({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-white/5 text-white/60',
    accent: 'bg-accent/15 text-accent-light',
    success: 'bg-profit/15 text-profit',
    warning: 'bg-warning/15 text-warning',
    danger: 'bg-loss/15 text-loss',
  }

  return (
    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${variants[variant]}`}>
      {children}
    </span>
  )
}
