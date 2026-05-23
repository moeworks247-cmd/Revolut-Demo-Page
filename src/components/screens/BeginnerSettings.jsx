import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  ChevronRight,
  GraduationCap,
  Info,
  MessageCircle,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react'

function Toggle({ enabled, onChange }) {
  return (
    <motion.button
      onClick={() => onChange(!enabled)}
      className={`relative w-[52px] h-[32px] rounded-full transition-colors ${
        enabled ? 'bg-accent' : 'bg-white/10'
      }`}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute top-[3px] w-[26px] h-[26px] rounded-full bg-white shadow-md"
        animate={{ left: enabled ? 23 : 3 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.button>
  )
}

function SettingRow({ icon: Icon, title, subtitle, children, onClick }) {
  const Wrapper = onClick ? motion.button : 'div'

  return (
    <Wrapper
      {...(onClick ? { whileTap: { scale: 0.98 }, onClick } : {})}
      className={`w-full flex items-center gap-3 p-4 ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
        <Icon size={18} className="text-white/60" />
      </div>
      <div className="flex-1 text-left min-w-0">
        <p className="text-[15px] font-medium">{title}</p>
        {subtitle && <p className="text-[13px] text-white/40 mt-0.5">{subtitle}</p>}
      </div>
      {children}
    </Wrapper>
  )
}

const riskLevels = [
  { id: 'conservative', label: 'Conservative', desc: 'Lower risk, steady growth' },
  { id: 'moderate', label: 'Moderate', desc: 'Balanced risk and reward' },
  { id: 'aggressive', label: 'Aggressive', desc: 'Higher risk, higher potential' },
]

export default function BeginnerSettings() {
  const [beginnerMode, setBeginnerMode] = useState(true)
  const [tooltips, setTooltips] = useState(true)
  const [aiCoach, setAiCoach] = useState(true)
  const [riskWarnings, setRiskWarnings] = useState(true)
  const [riskTolerance, setRiskTolerance] = useState('moderate')

  return (
    <div className="h-full flex flex-col bg-surface">
      <div className="flex-1 overflow-y-auto pb-24">
        <motion.div className="px-5 pt-14">
          <div className="mb-6">
            <p className="text-[13px] text-white/40 font-medium">Personalize</p>
            <h1 className="text-[22px] font-bold text-gradient">Settings</h1>
          </div>

          {/* Beginner mode hero */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="gradient-border rounded-2xl mb-6 overflow-hidden"
          >
            <div className="p-5 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/5">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <GraduationCap size={22} className="text-accent-light" />
                  </div>
                  <div>
                    <h2 className="text-[17px] font-bold mb-1">Beginner Mode</h2>
                    <p className="text-[13px] text-white/50 leading-relaxed max-w-[220px]">
                      Simplified UI with plain-language explanations and guided investing
                    </p>
                  </div>
                </div>
                <Toggle enabled={beginnerMode} onChange={setBeginnerMode} />
              </div>
              {beginnerMode && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-white/5"
                >
                  <div className="flex items-center gap-2 text-[13px] text-accent-light">
                    <Sparkles size={14} />
                    <span>AI coaching and simplified terms enabled</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Risk tolerance */}
          <div className="glass rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield size={16} className="text-white/40" />
              <h3 className="text-[15px] font-semibold">Risk Tolerance</h3>
            </div>
            <div className="space-y-2">
              {riskLevels.map((level) => (
                <motion.button
                  key={level.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setRiskTolerance(level.id)}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-xl transition-colors ${
                    riskTolerance === level.id
                      ? 'bg-accent/15 ring-1 ring-accent/30'
                      : 'bg-white/[0.02] hover:bg-white/[0.04]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      riskTolerance === level.id ? 'border-accent' : 'border-white/20'
                    }`}
                  >
                    {riskTolerance === level.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2.5 h-2.5 rounded-full bg-accent"
                      />
                    )}
                  </div>
                  <div className="text-left">
                    <p className="text-[14px] font-semibold">{level.label}</p>
                    <p className="text-[12px] text-white/40">{level.desc}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* AI Coaching */}
          <div className="mb-4">
            <h3 className="text-[13px] font-semibold text-white/40 uppercase tracking-wider mb-2 px-1">
              AI Coaching Assistant
            </h3>
            <div className="glass rounded-2xl divide-y divide-white/5">
              <SettingRow
                icon={Bot}
                title="AI Coach"
                subtitle="Personalized investing guidance"
              >
                <Toggle enabled={aiCoach} onChange={setAiCoach} />
              </SettingRow>
              <SettingRow
                icon={Zap}
                title="Trade Risk Warnings"
                subtitle="Alerts before high-risk purchases"
              >
                <Toggle enabled={riskWarnings} onChange={setRiskWarnings} />
              </SettingRow>
              <SettingRow
                icon={Info}
                title="Educational Tooltips"
                subtitle="Explain terms as you browse"
              >
                <Toggle enabled={tooltips} onChange={setTooltips} />
              </SettingRow>
              <SettingRow
                icon={MessageCircle}
                title="Chat with AI Advisor"
                subtitle="Ask anything about investing"
                onClick={() => {}}
              >
                <ChevronRight size={18} className="text-white/25" />
              </SettingRow>
            </div>
          </div>

          {/* Tooltip preview */}
          {tooltips && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-4 border border-accent/10"
            >
              <motion.div className="flex items-start gap-2">
                <Info size={16} className="text-accent-light flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-semibold text-accent-light mb-1">Tooltip Preview</p>
                  <p className="text-[13px] text-white/55 leading-relaxed">
                    <strong className="text-white/70">P/E Ratio</strong> — Price divided by earnings per share.
                    A higher P/E may mean investors expect stronger future growth.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
