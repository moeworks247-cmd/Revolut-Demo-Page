import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Hexagon, TrendingUp, UserCheck, Shield, Zap, Leaf } from 'lucide-react'

const filters = ['All Leaders', 'Growth', 'Balanced', 'Defensive']

const riskStyles = {
  Aggressive: { icon: Zap, bg: 'bg-orange-500/15', text: 'text-orange-400' },
  Moderate: { icon: Shield, bg: 'bg-yellow-500/15', text: 'text-yellow-400' },
  Conservative: { icon: Leaf, bg: 'bg-emerald-500/15', text: 'text-emerald-400' },
}

const leaders = [
  {
    id: 1,
    name: 'Marcus Chen',
    handle: '@marcus_growth',
    initials: 'MC',
    avatarColor: '#6366f1',
    photo: '/hive/hive-marcus-chen.png',
    yoyReturn: 34.2,
    followers: '12.4K',
    riskBias: 'Aggressive',
    specialty: 'Tech & AI momentum',
    specialtyShort: 'Tech & AI momentum',
    winRate: 78,
    mutualFriends: { names: ['Sarah', 'James'], count: 3 },
    verified: true,
    rank: 1,
  },
  {
    id: 2,
    name: 'Elena Vasquez',
    handle: '@elena_balanced',
    initials: 'EV',
    avatarColor: '#ec4899',
    photo: '/hive/hive-elena-vasquez.png',
    yoyReturn: 22.8,
    followers: '8.9K',
    riskBias: 'Moderate',
    specialty: 'Diversified dividend growth',
    specialtyShort: 'Dividend growth',
    winRate: 71,
    mutualFriends: { names: ['Sarah'], count: 1 },
    verified: true,
    rank: 2,
  },
  {
    id: 3,
    name: 'David Okonkwo',
    handle: '@david_defensive',
    initials: 'DO',
    avatarColor: '#14b8a6',
    photo: '/hive/hive-david-okonkwo.png',
    yoyReturn: 14.6,
    followers: '6.2K',
    riskBias: 'Conservative',
    specialty: 'Low volatility income',
    specialtyShort: 'Income focus',
    winRate: 84,
    mutualFriends: null,
    verified: true,
    rank: 3,
  },
  {
    id: 4,
    name: 'Priya Sharma',
    handle: '@priya_momentum',
    initials: 'PS',
    avatarColor: '#f97316',
    photo: '/hive/hive-priya-sharma.png',
    yoyReturn: 28.1,
    followers: '5.1K',
    riskBias: 'Aggressive',
    specialty: 'Small cap breakout plays',
    specialtyShort: 'Small cap momentum',
    winRate: 65,
    mutualFriends: { names: ['James', 'Alex'], count: 2 },
    verified: false,
    rank: 4,
  },
  {
    id: 5,
    name: 'Tomás Rivera',
    handle: '@tomas_macro',
    initials: 'TR',
    avatarColor: '#8b5cf6',
    photo: '/hive/hive-tomas-rivera.png',
    yoyReturn: 19.4,
    followers: '4.8K',
    riskBias: 'Moderate',
    specialty: 'Macro rotation strategy',
    specialtyShort: 'Macro rotation',
    winRate: 69,
    mutualFriends: { names: ['Alex'], count: 1 },
    verified: false,
    rank: 5,
  },
]

function MutualFriendBadge({ mutualFriends }) {
  if (!mutualFriends) return null

  const { names, count } = mutualFriends
  const label =
    count === 1
      ? `${names[0]} follows`
      : `${names[0]} & ${count - 1} friend${count - 1 > 1 ? 's' : ''} follow`

  return (
    <motion.div className="flex items-center gap-2 mt-2.5 px-2.5 py-1.5 rounded-lg bg-accent/8 border border-accent/15">
      <motion.div className="flex -space-x-1.5">
        {names.slice(0, 2).map((name) => (
          <motion.div
            key={name}
            className="w-5 h-5 rounded-full bg-accent/30 border border-surface flex items-center justify-center text-[8px] font-bold text-accent-light"
          >
            {name[0]}
          </motion.div>
        ))}
      </motion.div>
      <UserCheck size={12} className="text-accent-light flex-shrink-0" />
      <span className="text-[11px] text-accent-light/90 font-medium">{label}</span>
    </motion.div>
  )
}

function RiskBiasBadge({ bias }) {
  const style = riskStyles[bias]
  const Icon = style.icon

  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
      <Icon size={10} />
      {bias}
    </span>
  )
}

function LeaderAvatar({ leader, size = 'md', selected = false }) {
  const [imgError, setImgError] = useState(false)
  const showPhoto = leader.photo && !imgError

  const sizes = {
    sm: 'w-12 h-12 rounded-2xl text-[13px]',
    md: 'w-14 h-14 rounded-2xl text-[15px]',
    lg: 'w-16 h-16 rounded-2xl text-[17px]',
    xl: 'w-[72px] h-[72px] rounded-2xl text-[18px]',
  }

  const ring = selected ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-surface' : 'ring-2 ring-white/10'

  return (
    <motion.div className={`relative flex-shrink-0 ${sizes[size].split(' ')[0]} ${sizes[size].split(' ')[1]}`}>
      {showPhoto ? (
        <img
          src={leader.photo}
          alt={leader.name}
          onError={() => setImgError(true)}
          className={`${sizes[size].split(' ').slice(0, 2).join(' ')} object-cover object-top ${ring}`}
        />
      ) : (
        <motion.div
          className={`${sizes[size]} font-bold text-white flex items-center justify-center ${ring}`}
          style={{ background: `linear-gradient(135deg, ${leader.avatarColor}, ${leader.avatarColor}99)` }}
        >
          {leader.initials}
        </motion.div>
      )}
      {leader.rank <= 3 && (
        <motion.div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[9px] font-bold text-white shadow-lg z-10">
          {leader.rank}
        </motion.div>
      )}
    </motion.div>
  )
}

function TopInvestorsStrip({ leaders: topLeaders, selectedId, onSelect }) {
  return (
    <motion.div className="mb-5">
      <motion.div className="flex items-center justify-between mb-3">
        <h2 className="text-[15px] font-semibold">Top Investors</h2>
        <span className="text-[11px] text-white/35">Tap to explore</span>
      </motion.div>
      <motion.div className="flex gap-2.5 overflow-x-auto pb-1 hide-scrollbar -mx-1 px-1">
        {topLeaders.map((leader) => {
          const selected = leader.id === selectedId
          return (
            <motion.button
              key={leader.id}
              type="button"
              onClick={() => onSelect(leader.id)}
              whileTap={{ scale: 0.96 }}
              className={`flex-shrink-0 w-[88px] rounded-2xl p-2.5 text-center transition-all ${
                selected
                  ? 'bg-gradient-to-b from-amber-500/20 to-orange-500/10 border border-amber-500/30'
                  : 'glass border border-transparent'
              }`}
            >
              <motion.div className="flex justify-center mb-2">
                <LeaderAvatar leader={leader} size="sm" selected={selected} />
              </motion.div>
              <p className="text-[11px] font-semibold truncate leading-tight mb-0.5">
                {leader.name.split(' ')[0]}
              </p>
              <p className="text-[10px] text-white/35 truncate mb-1">{leader.name.split(' ')[1]}</p>
              <p className="text-[12px] font-bold text-profit tabular-nums">+{leader.yoyReturn}%</p>
            </motion.button>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

function FeaturedLeaderCard({ leader }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22 }}
      className="gradient-border rounded-2xl mb-5 overflow-hidden"
    >
      <motion.div className="relative p-4 bg-gradient-to-br from-white/[0.06] to-transparent">
        <p className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider mb-3">
          Featured Leader · #{leader.rank}
        </p>
        <motion.div className="flex items-start gap-3 mb-3">
          <LeaderAvatar leader={leader} size="xl" selected />
          <motion.div className="flex-1 min-w-0">
            <motion.div className="flex items-center gap-1.5 mb-0.5">
              <p className="font-bold text-[17px] truncate">{leader.name}</p>
              {leader.verified && (
                <motion.div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-[8px] text-white">✓</span>
                </motion.div>
              )}
            </motion.div>
            <p className="text-[11px] text-white/40 mb-1">{leader.handle}</p>
            <p className="text-[12px] text-white/55 leading-snug">{leader.specialty}</p>
          </motion.div>
          <motion.div className="text-right flex-shrink-0">
            <motion.div className="flex items-center gap-1 justify-end">
              <TrendingUp size={14} className="text-profit" />
              <span className="text-[26px] font-bold text-profit tabular-nums leading-none">+{leader.yoyReturn}%</span>
            </motion.div>
            <p className="text-[10px] text-white/35 mt-1">Annualized YOY</p>
          </motion.div>
        </motion.div>

        <motion.div className="flex items-center flex-wrap gap-2 mb-2">
          <RiskBiasBadge bias={leader.riskBias} />
          <span className="text-[10px] text-white/30">{leader.followers} followers</span>
          <span className="text-[10px] text-white/30">·</span>
          <span className="text-[10px] text-white/30">{leader.winRate}% win rate</span>
        </motion.div>

        <MutualFriendBadge mutualFriends={leader.mutualFriends} />

        <motion.div className="flex gap-2 mt-4">
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="flex-1 py-3 rounded-xl text-[13px] font-semibold bg-gradient-to-r from-accent to-indigo-500 text-white"
          >
            Follow Strategy
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="px-5 py-3 rounded-xl text-[13px] font-semibold glass text-white/60"
          >
            Preview
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function LeaderCard({ leader, index, isSelected, onSelect }) {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(leader.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(leader.id)
        }
      }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      whileTap={{ scale: 0.98 }}
      className={`glass rounded-2xl p-4 mb-3 cursor-pointer transition-colors ${
        isSelected ? 'border border-amber-500/40 bg-amber-500/[0.06]' : 'hover:border-white/10'
      }`}
    >
      <motion.div className="flex items-start gap-3">
        <LeaderAvatar leader={leader} />

        <motion.div className="flex-1 min-w-0">
          <motion.div className="flex items-start justify-between gap-2 mb-1">
            <motion.div className="min-w-0">
              <motion.div className="flex items-center gap-1.5">
                <p className="font-semibold text-[15px] truncate">{leader.name}</p>
                {leader.verified && (
                  <motion.div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-[8px] text-white">✓</span>
                  </motion.div>
                )}
                {isSelected && (
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 flex-shrink-0">
                    Featured
                  </span>
                )}
              </motion.div>
              <p className="text-[11px] text-white/35">{leader.handle}</p>
            </motion.div>
            <motion.div className="text-right flex-shrink-0">
              <p className="text-[20px] font-bold text-profit tabular-nums leading-none">+{leader.yoyReturn}%</p>
              <p className="text-[9px] text-white/35 mt-0.5 uppercase tracking-wide">YOY Return</p>
            </motion.div>
          </motion.div>

          <p className="text-[12px] text-white/45 mb-2">{leader.specialty}</p>

          <motion.div className="flex items-center flex-wrap gap-2">
            <RiskBiasBadge bias={leader.riskBias} />
            <span className="text-[10px] text-white/30">{leader.followers} followers</span>
            <span className="text-[10px] text-white/30">·</span>
            <span className="text-[10px] text-white/30">{leader.winRate}% win rate</span>
          </motion.div>

          <MutualFriendBadge mutualFriends={leader.mutualFriends} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex gap-2 mt-3 pt-3 border-t border-white/5"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          className="flex-1 py-2.5 rounded-xl text-[12px] font-semibold bg-gradient-to-r from-accent to-indigo-500 text-white"
        >
          Follow Strategy
        </motion.button>
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2.5 rounded-xl text-[12px] font-semibold glass text-white/60"
        >
          Preview
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default function Hive() {
  const [activeFilter, setActiveFilter] = useState('All Leaders')
  const [selectedId, setSelectedId] = useState(leaders[0].id)
  const featuredRef = useRef(null)

  const selectedLeader = leaders.find((l) => l.id === selectedId) ?? leaders[0]

  const selectLeader = (id) => {
    setSelectedId(id)
    featuredRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  const filtered =
    activeFilter === 'All Leaders'
      ? leaders
      : leaders.filter((l) => {
          if (activeFilter === 'Growth') return l.riskBias === 'Aggressive'
          if (activeFilter === 'Balanced') return l.riskBias === 'Moderate'
          if (activeFilter === 'Defensive') return l.riskBias === 'Conservative'
          return true
        })

  return (
    <motion.div className="h-full flex flex-col bg-surface">
      <motion.div className="flex-1 overflow-y-auto pb-24">
        <motion.div className="px-5 pt-14">
          <motion.div className="flex items-center gap-3 mb-5">
            <motion.div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center border border-amber-500/20">
              <Hexagon size={20} className="text-amber-400" />
            </motion.div>
            <motion.div>
              <p className="text-[13px] text-white/40">Community Builder</p>
              <h1 className="text-[22px] font-bold">
                <span className="text-gradient">HIVE</span>
              </h1>
            </motion.div>
          </motion.div>

          <TopInvestorsStrip
            leaders={leaders}
            selectedId={selectedId}
            onSelect={selectLeader}
          />

          <div ref={featuredRef}>
            <AnimatePresence mode="wait">
              <FeaturedLeaderCard key={selectedLeader.id} leader={selectedLeader} />
            </AnimatePresence>
          </div>

          <motion.div className="flex gap-2 overflow-x-auto pb-3 mb-4 hide-scrollbar">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-[12px] font-medium transition-colors ${
                  activeFilter === f ? 'bg-accent text-white' : 'glass text-white/50'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          <motion.div className="flex items-center justify-between mb-3">
            <h2 className="text-[17px] font-semibold">All Leaders</h2>
            <span className="text-[11px] text-white/35">{filtered.length} investors</span>
          </motion.div>

          {filtered.map((leader, i) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
              index={i}
              isSelected={leader.id === selectedId}
              onSelect={selectLeader}
            />
          ))}

          <p className="text-[11px] text-white/25 text-center mt-2 px-4 leading-relaxed">
            Past performance does not guarantee future results. Copy trading involves risk.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
