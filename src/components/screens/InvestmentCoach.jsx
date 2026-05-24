import { motion } from 'framer-motion'
import { ChevronLeft, Mic, Plus, Send } from 'lucide-react'
import RevaLogo from '../RevaLogo'
import { REVA_BRAND_NAME, REVA_TAGLINE } from '../../constants/revaBrand'

const USER = {
  name: 'James',
  photo: '/reva/reva-chat-user-james.png',
}

const REVA = {
  name: REVA_BRAND_NAME,
  subtitle: REVA_TAGLINE,
}

const messages = [
  {
    role: 'user',
    time: '2:14 PM',
    text: 'Hey REVA, the Fed meeting is this week. Should I be worried about my portfolio?',
  },
  {
    role: 'reva',
    time: '2:14 PM',
    text: 'Good question, James. A rate hold is priced in, but any surprise hawkish tone could pressure growth stocks. Your portfolio is 42% tech, so a 0.25% shift could mean a 3 to 5% short term drawdown. Nothing to panic about, but worth watching before adding new positions.',
    insight: true,
  },
  {
    role: 'user',
    time: '2:16 PM',
    text: 'NVDA dropped 4% today. Is this a buying opportunity or should I wait?',
  },
  {
    role: 'reva',
    time: '2:16 PM',
    text: 'NVDA fundamentals are strong, but you already hold 18% in semiconductors. Adding more increases concentration risk. If you believe in the AI thesis, a smaller tranche over 2 to 3 weeks (dollar cost averaging) is safer than going all in on a red day.',
    chips: ['Show DCA plan', 'See risk score'],
  },
  {
    role: 'user',
    time: '2:18 PM',
    text: 'What does "market correction" actually mean? I keep seeing it everywhere.',
  },
  {
    role: 'reva',
    time: '2:18 PM',
    text: 'A correction is a drop of 10% or more from a recent high. It is normal: markets average one every 1 to 2 years. Think of it as a sale on assets you already wanted, not a signal to sell everything. Your health score of 68 suggests you are positioned to ride one out.',
  },
]

function RevaAvatar({ size = 36 }) {
  return <RevaLogo size={size} ring />
}

function UserAvatar({ size = 36 }) {
  return (
    <motion.div
      className="rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/10"
      style={{ width: size, height: size }}
    >
      <img src={USER.photo} alt={USER.name} className="w-full h-full object-cover" />
    </motion.div>
  )
}

function MessageBubble({ message }) {
  const isUser = message.role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {isUser ? <UserAvatar /> : <RevaAvatar />}

      <div className={`flex flex-col max-w-[78%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`flex items-center gap-2 mb-1 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
          <span className="text-[11px] font-semibold text-white/70">{isUser ? USER.name : REVA.name}</span>
          <span className="text-[10px] text-white/25">{message.time}</span>
        </div>

        <div
          className={`rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
            isUser
              ? 'bg-[#007AFF] text-white rounded-tr-md'
              : 'glass border border-accent/15 text-white/85 rounded-tl-md'
          }`}
        >
          {message.text}
        </div>

        {message.insight && (
          <div className="mt-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
            <RevaLogo size="xs" />
            <span className="text-[10px] text-accent-light font-medium">Portfolio aware insight</span>
          </div>
        )}

        {message.chips && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {message.chips.map((chip) => (
              <span key={chip} className="text-[11px] px-2.5 py-1 rounded-full bg-accent/15 text-accent-light border border-accent/20">
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function InvestmentCoach() {
  return (
    <motion.div className="h-full flex flex-col bg-[#0b0b12]">
      {/* Chat header */}
      <div className="sticky top-0 z-30 bg-[#0b0b12]/95 backdrop-blur-xl border-b border-white/5 px-4 pt-14 pb-3">
        <div className="flex items-center gap-3">
          <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center -ml-1">
            <ChevronLeft size={20} className="text-white/60" />
          </button>
          <RevaAvatar size={40} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-[16px] font-bold text-white">{REVA.name}</h1>
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            </div>
            <p className="text-[11px] text-white/40 truncate">{REVA.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Date divider */}
      <div className="flex justify-center py-4">
        <span className="text-[11px] text-white/30 px-3 py-1 rounded-full bg-white/5">Today</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 pb-36 space-y-5">
        {messages.map((m, i) => (
          <MessageBubble key={i} message={m} />
        ))}

        {/* REVA typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-2.5 items-end"
        >
          <RevaAvatar size={28} />
          <motion.div className="glass rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-white/40"
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Input bar */}
      <div className="absolute bottom-[34px] left-0 right-0 px-4 z-40">
        <div className="flex gap-2 mb-2 overflow-x-auto hide-scrollbar">
          {['Rate impact', 'Buy the dip?', 'Explain P/E ratio'].map((q) => (
            <span key={q} className="flex-shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-white/6 text-white/50 border border-white/8">
              {q}
            </span>
          ))}
        </div>
        <div className="glass rounded-[22px] flex items-center gap-2 px-3 py-2 border border-white/8">
          <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center text-white/40">
            <Plus size={18} />
          </button>
          <input
            readOnly
            placeholder="Ask REVA anything about markets..."
            className="flex-1 bg-transparent text-[14px] text-white/70 placeholder:text-white/30 outline-none min-w-0"
          />
          <button type="button" className="w-8 h-8 rounded-full flex items-center justify-center text-white/40">
            <Mic size={16} />
          </button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0"
          >
            <Send size={15} className="text-white ml-0.5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
