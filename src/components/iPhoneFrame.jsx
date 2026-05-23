import { motion } from 'framer-motion'

export default function PhoneFrame({ children, embed = false, scale = 1, label }) {
  const frame = (
    <motion.div className="relative" style={{ transform: scale !== 1 ? `scale(${scale})` : undefined, transformOrigin: 'top center' }}>
      {!embed && (
        <motion.div
          className="absolute -inset-20 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <div
        className="relative rounded-[3.2rem] p-[10px] shadow-2xl"
        style={{
          background: 'linear-gradient(145deg, #3a3a3c 0%, #1c1c1e 40%, #2c2c2e 100%)',
          boxShadow: embed
            ? '0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)'
            : '0 25px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <motion.div className="absolute -left-[2px] top-[120px] w-[3px] h-[32px] rounded-l bg-[#3a3a3c]" />
        <motion.div className="absolute -left-[2px] top-[170px] w-[3px] h-[52px] rounded-l bg-[#3a3a3c]" />
        <motion.div className="absolute -left-[2px] top-[235px] w-[3px] h-[52px] rounded-l bg-[#3a3a3c]" />
        <motion.div className="absolute -right-[2px] top-[180px] w-[3px] h-[72px] rounded-r bg-[#3a3a3c]" />

        <div className="relative w-[393px] h-[852px] rounded-[2.8rem] overflow-hidden bg-surface">
          <div className="absolute top-[12px] left-1/2 -translate-x-1/2 z-50 w-[126px] h-[37px] bg-black rounded-full flex items-center justify-end pr-3">
            <div className="w-[10px] h-[10px] rounded-full bg-[#1a1a2e] ring-1 ring-white/5" />
          </div>

          <div className="absolute top-0 left-0 right-0 z-40 px-8 pt-[14px] flex justify-between items-center text-[13px] font-semibold">
            <span>9:41</span>
            <div className="flex items-center gap-1 opacity-80">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="white">
                <rect x="0" y="3" width="3" height="9" rx="1" opacity="0.4" />
                <rect x="5" y="2" width="3" height="10" rx="1" opacity="0.6" />
                <rect x="10" y="1" width="3" height="11" rx="1" opacity="0.8" />
                <rect x="15" y="0" width="3" height="12" rx="1" />
              </svg>
              <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
                <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="white" strokeOpacity="0.35" />
                <rect x="2" y="2" width="18" height="9" rx="2" fill="white" />
              </svg>
            </div>
          </div>

          <div className="relative h-full overflow-hidden">{children}</div>

          <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white/30 rounded-full z-50" />
        </div>
      </div>

      {(label || !embed) && (
        <p className="text-center mt-5 text-white/30 text-sm font-medium tracking-wide">
          {label || 'AI Trading Copilot · Prototype'}
        </p>
      )}
    </motion.div>
  )

  if (embed) return frame

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-10 bg-[#030306]">
      {frame}
    </div>
  )
}
