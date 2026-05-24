import { motion } from 'framer-motion'
import { LayoutGrid, Newspaper, Heart, Settings } from 'lucide-react'

const tabs = [
  { id: 'portfolio', label: 'Portfolio', icon: LayoutGrid },
  { id: 'news', label: 'Insights', icon: Newspaper },
  { id: 'health', label: 'Health', icon: Heart },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-40">
      <div className="glass border-t border-white/5 px-1 pt-2 pb-[28px]">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            const Icon = tab.icon

            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.9 }}
                onClick={() => onTabChange(tab.id)}
                className="relative flex flex-col items-center gap-0.5 py-1.5 px-2"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -top-2 w-7 h-1 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  size={20}
                  className={isActive ? 'text-accent-light' : 'text-white/35'}
                  strokeWidth={isActive ? 2.2 : 1.8}
                />
                <span className={`text-[9px] font-medium ${isActive ? 'text-accent-light' : 'text-white/35'}`}>
                  {tab.label}
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
