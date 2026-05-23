import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PhoneFrame from './iPhoneFrame'
import BottomNav from './BottomNav'
import PortfolioDashboard from './screens/PortfolioDashboard'
import StockDetail from './screens/StockDetail'
import RiskWarningModal from './screens/RiskWarningModal'
import NewsFeed from './screens/NewsFeed'
import PortfolioHealth from './screens/PortfolioHealth'
import BeginnerSettings from './screens/BeginnerSettings'

export default function MobilePrototype({ embed = false }) {
  const [activeTab, setActiveTab] = useState('portfolio')
  const [screen, setScreen] = useState('main')
  const [showRiskModal, setShowRiskModal] = useState(false)

  const content = (
    <AnimatePresence mode="wait">
      {screen === 'stock' ? (
        <motion.div
          key="stock"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="absolute inset-0"
        >
          <StockDetail onBack={() => { setScreen('main'); setShowRiskModal(false) }} onBuyClick={() => setShowRiskModal(true)} />
          <RiskWarningModal isOpen={showRiskModal} onClose={() => setShowRiskModal(false)} onContinue={() => setShowRiskModal(false)} />
        </motion.div>
      ) : (
        <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
          {activeTab === 'news' && <NewsFeed />}
          {activeTab === 'health' && <PortfolioHealth />}
          {activeTab === 'settings' && <BeginnerSettings />}
          {activeTab === 'portfolio' && <PortfolioDashboard onStockSelect={() => setScreen('stock')} />}
          <BottomNav activeTab={activeTab} onTabChange={(tab) => { setActiveTab(tab); setScreen('main'); setShowRiskModal(false) }} />
        </motion.div>
      )}
    </AnimatePresence>
  )

  return <PhoneFrame embed={embed}>{content}</PhoneFrame>
}

/** Static screen for portfolio showcase cards */
export function PrototypeScreen({ screen }) {
  const screens = {
    portfolio: <PortfolioDashboard onStockSelect={() => {}} />,
    stock: <StockDetail onBack={() => {}} onBuyClick={() => {}} />,
    risk: (
      <>
        <StockDetail onBack={() => {}} onBuyClick={() => {}} />
        <RiskWarningModal isOpen onClose={() => {}} onContinue={() => {}} />
      </>
    ),
    news: <NewsFeed />,
    health: <PortfolioHealth />,
    settings: <BeginnerSettings />,
  }

  return (
    <PhoneFrame embed label={null}>
      <div className="absolute inset-0 pointer-events-none">{screens[screen]}</div>
    </PhoneFrame>
  )
}
