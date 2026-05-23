import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, Shield, Sparkles, TrendingDown, X } from 'lucide-react'
import { riskWarning } from '../../data/mockData'

function RiskMeter({ score, label }) {
  const getColor = (s) => {
    if (s < 40) return '#22c55e'
    if (s < 70) return '#f59e0b'
    return '#ef4444'
  }

  return (
    <div className="flex-1">
      <motion.div className="flex items-center justify-between mb-2">
        <span className="text-[13px] text-white/50">{label}</span>
        <span className="text-[15px] font-bold tabular-nums" style={{ color: getColor(score) }}>
          {score}
        </span>
      </motion.div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${getColor(score)}88, ${getColor(score)})`,
          }}
        />
      </div>
    </div>
  )
}

export default function RiskWarningModal({ isOpen, onClose, onContinue }) {
  const { asset, volatilityWarning, exposureWarning, aiExplanation, riskScore, confidence } =
    riskWarning

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="absolute bottom-0 left-0 right-0 z-50 rounded-t-[28px] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #1a1a28 0%, #12121a 100%)',
              boxShadow: '0 -8px 40px rgba(0,0,0,0.6)',
            }}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-white/15" />
            </div>

            <div className="px-5 pb-8 max-h-[75vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-warning/15 flex items-center justify-center">
                    <Shield size={22} className="text-warning" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-warning uppercase tracking-wider">
                      AI Risk Check
                    </p>
                    <h2 className="text-[20px] font-bold">Review before buying {asset}</h2>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                >
                  <X size={16} className="text-white/50" />
                </motion.button>
              </div>

              {/* Risk scores */}
              <div className="flex gap-6 mb-6 p-4 glass rounded-2xl">
                <RiskMeter score={riskScore} label="Risk Score" />
                <RiskMeter score={confidence} label="AI Confidence" />
              </div>

              {/* Warnings */}
              <div className="space-y-3 mb-5">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="flex gap-3 p-4 rounded-2xl bg-loss/5 border border-loss/10"
                >
                  <AlertTriangle size={18} className="text-loss flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[13px] font-semibold text-loss mb-1">Volatility Warning</p>
                    <p className="text-[14px] text-white/70 leading-relaxed">{volatilityWarning}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-3 p-4 rounded-2xl bg-warning/5 border border-warning/10"
                >
                  <TrendingDown size={18} className="text-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[13px] font-semibold text-warning mb-1">Portfolio Exposure</p>
                    <p className="text-[14px] text-white/70 leading-relaxed">{exposureWarning}</p>
                  </div>
                </motion.div>
              </div>

              {/* AI explanation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="gradient-border rounded-2xl mb-6 overflow-hidden"
              >
                <div className="p-4 ai-shimmer">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} className="text-accent-light" />
                    <span className="text-[11px] font-semibold text-accent-light uppercase tracking-wider">
                      AI Analysis
                    </span>
                  </div>
                  <p className="text-[14px] text-white/80 leading-relaxed">{aiExplanation}</p>
                </div>
              </motion.div>

              {/* Actions */}
              <div className="space-y-3">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={onContinue}
                  className="w-full py-4 rounded-2xl font-semibold text-[16px] bg-gradient-to-r from-accent to-indigo-500 text-white"
                >
                  Continue with Purchase
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={onClose}
                  className="w-full py-4 rounded-2xl font-semibold text-[16px] bg-white/5 text-white/70 border border-white/8"
                >
                  Learn More
                </motion.button>
              </div>

              <p className="text-center text-[11px] text-white/25 mt-4 leading-relaxed">
                AI insights are for educational purposes only. Not financial advice.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
