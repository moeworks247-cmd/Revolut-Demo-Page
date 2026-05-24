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
import BehavioralRisk from './screens/BehavioralRisk'
import StressTesting from './screens/StressTesting'
import SmartRebalancing from './screens/SmartRebalancing'
import TradeConfidence from './screens/TradeConfidence'
import EarningsIntelligence from './screens/EarningsIntelligence'
import OpportunityScanner from './screens/OpportunityScanner'
import InvestmentJournal from './screens/InvestmentJournal'
import CommunityIntel from './screens/CommunityIntel'
import GoalsInvesting from './screens/GoalsInvesting'
import InvestmentCoach from './screens/InvestmentCoach'
import MarketSimulator from './screens/MarketSimulator'
import TradeSandbox from './screens/TradeSandbox'
import Hive from './screens/Hive'
import MulticurrencyPortfolio from './screens/MulticurrencyPortfolio'

export const SCREEN_MAP = {
  portfolio: PortfolioDashboard,
  stock: StockDetail,
  news: NewsFeed,
  health: PortfolioHealth,
  multicurrency: MulticurrencyPortfolio,
  settings: BeginnerSettings,
  behavioral: BehavioralRisk,
  stress: StressTesting,
  rebalancing: SmartRebalancing,
  confidence: TradeConfidence,
  earnings: EarningsIntelligence,
  scanner: OpportunityScanner,
  journal: InvestmentJournal,
  community: CommunityIntel,
  goals: GoalsInvesting,
  coach: InvestmentCoach,
  simulator: MarketSimulator,
  sandbox: TradeSandbox,
  hive: Hive,
}

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

export function PrototypeScreen({ screen }) {
  if (screen === 'risk') {
    return (
      <PhoneFrame embed label={null}>
        <div className="absolute inset-0 pointer-events-none">
          <StockDetail onBack={() => {}} onBuyClick={() => {}} />
          <RiskWarningModal isOpen onClose={() => {}} onContinue={() => {}} />
        </div>
      </PhoneFrame>
    )
  }

  const Screen = SCREEN_MAP[screen]
  if (!Screen) return null

  return (
    <PhoneFrame embed label={null}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="h-full pointer-events-auto">
          <Screen />
        </div>
      </div>
    </PhoneFrame>
  )
}
