import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function FlowArrow({ label, vertical = true, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex ${vertical ? 'flex-col items-center py-3' : 'flex-row items-center px-2'} ${className}`}
    >
      {label && (
        <span className="text-[10px] font-medium text-accent-light/60 uppercase tracking-wider mb-1.5">{label}</span>
      )}
      <div className={`relative ${vertical ? 'h-10 w-px' : 'w-10 h-px'} bg-gradient-to-b from-accent/40 to-accent/10`}>
        <motion.div
          className={`absolute ${vertical ? 'left-1/2 -translate-x-1/2 w-1.5 h-1.5' : 'top-1/2 -translate-y-1/2 w-1.5 h-1.5'} rounded-full bg-accent`}
          animate={vertical ? { top: ['0%', '100%', '0%'] } : { left: ['0%', '100%', '0%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      {vertical && <ChevronDown size={14} className="text-accent/40 mt-0.5" />}
    </motion.div>
  )
}

export function LayerHeader({ number, title, subtitle, accent = false }) {
  return (
    <div className="flex items-start gap-4 mb-5">
      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-bold ${
        accent ? 'bg-accent/20 text-accent-light border border-accent/30' : 'bg-white/5 text-white/40'
      }`}>
        {number}
      </div>
      <div>
        <h3 className={`text-lg md:text-xl font-semibold ${accent ? 'text-gradient-blue' : 'text-white'}`}>{title}</h3>
        {subtitle && <p className="text-[13px] text-white/40 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  )
}

export function ServicePill({ children, highlight = false, pulse = false }) {
  return (
    <motion.span
      whileHover={{ scale: 1.03, borderColor: 'rgba(59,130,246,0.3)' }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
        highlight
          ? 'bg-accent/15 text-accent-light border border-accent/25'
          : 'glass text-white/60 border border-white/5'
      } ${pulse ? 'animate-pulse-soft' : ''}`}
    >
      {pulse && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
      {children}
    </motion.span>
  )
}

export function OutputBadge({ children, variant = 'warning' }) {
  const styles = {
    warning: 'bg-warning/10 text-warning border-warning/20',
    danger: 'bg-loss/10 text-loss border-loss/20',
    info: 'bg-accent/10 text-accent-light border-accent/20',
  }
  return (
    <span className={`inline-block text-[11px] px-3 py-1.5 rounded-lg border italic ${styles[variant]}`}>
      {children}
    </span>
  )
}

export function TopLevelFlow() {
  const steps = [
    'User Mobile App',
    'API Gateway',
    'Trading Platform Core',
    'AI Recommendation Engine',
    'Risk Analysis Engine',
    'Market Intelligence Layer',
    'Notification & Insights System',
  ]

  return (
    <div className="relative glass-strong rounded-2xl p-6 md:p-8 mb-8 gradient-border overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light mb-6 text-center">
        Top-Level System Flow
      </p>
      <motion.div className="relative flex flex-col md:flex-row md:flex-wrap md:justify-center items-center gap-2 md:gap-1">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`px-3 py-2 rounded-xl text-[11px] md:text-[12px] font-semibold text-center whitespace-nowrap ${
                step.includes('AI') || step.includes('Risk')
                  ? 'bg-gradient-to-r from-accent/20 to-indigo-600/15 border border-accent/30 text-accent-light glow-blue'
                  : 'glass text-white/70'
              }`}
            >
              {step}
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                className="hidden md:block mx-1 text-accent/30"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                →
              </motion.div>
            )}
            {i < steps.length - 1 && (
              <motion.div className="md:hidden text-accent/30 my-0.5">↓</motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
