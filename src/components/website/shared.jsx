import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
      <span className="w-8 h-px bg-accent/50" />
      {children}
    </span>
  )
}

export function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-gradient ${className}`}>
      {children}
    </h2>
  )
}

export function SectionSubtitle({ children, className = '' }) {
  return (
    <p className={`text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl ${className}`}>
      {children}
    </p>
  )
}

export function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function GlowOrb({ className = '', color = 'blue' }) {
  const colors = {
    blue: 'rgba(59,130,246,0.15)',
    purple: 'rgba(139,92,246,0.12)',
  }
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none glow-pulse ${className}`}
      style={{ background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)` }}
    />
  )
}

export function MetricCard({ value, label, suffix = '', inView = false, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="glass rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors"
    >
      <p className="text-3xl md:text-4xl font-bold tabular-nums text-gradient-blue mb-2">
        {value}{suffix}
      </p>
      <p className="text-sm text-white/45 leading-relaxed">{label}</p>
    </motion.div>
  )
}

export function PrimaryButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-7 py-3.5 rounded-full font-semibold text-[15px] bg-gradient-to-r from-accent to-indigo-500 text-white shadow-glow ${className}`}
    >
      {children}
    </motion.button>
  )
}

export function SecondaryButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-7 py-3.5 rounded-full font-semibold text-[15px] glass text-white/80 ${className}`}
    >
      {children}
    </motion.button>
  )
}
