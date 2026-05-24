import { getScreenDeliveryMeta } from './productGantt'

const RAW_PROTOTYPE_SCREENS = [
  { id: 'portfolio', title: 'Portfolio Dashboard', desc: 'Balance, allocation, AI insights, watchlist, and opportunity alerts.' },
  { id: 'stock', title: 'Stock Detail Screen', desc: 'Live quotes, charts, fundamentals, and trade entry with REVA context.' },
  { id: 'settings', title: 'Beginner Mode Settings', desc: 'Risk profile, simplified UI, and educational preferences.' },
  { id: 'news', title: 'Market Narrative Engine', desc: 'AI explains why markets moved with daily briefs in plain language.' },
  { id: 'earnings', title: 'Earnings Intelligence', desc: 'AI earnings summaries, beat/miss patterns, and post report analysis.' },
  { id: 'scanner', title: 'Opportunity Scanner', desc: 'AI surfaces trending opportunities matched to your portfolio profile.' },
  { id: 'risk', title: 'Smart Risk Notifications', desc: 'Pre trade warnings with volatility, exposure, and confidence scores.' },
  { id: 'health', title: 'Portfolio Health Score', desc: 'Financial fitness meter for diversification, risk, and AI recommendations.' },
  { id: 'multicurrency', title: 'Multi Currency Portfolio', desc: 'Hold and allocate across USD, EUR, GBP, and more with live FX and REVA exposure insights.' },
  { id: 'stress', title: 'Stress Testing', desc: 'Simulate market crashes and see portfolio impact before it happens.' },
  { id: 'rebalancing', title: 'Smart Rebalancing', desc: 'AI suggested allocation shifts to reduce concentration risk.' },
  { id: 'confidence', title: 'Trade Confidence Engine', desc: 'Confidence score and reasoning before every trade execution.' },
  { id: 'journal', title: 'Investment Journal', desc: 'AI documented trade history with lessons and behavioral patterns.' },
  { id: 'behavioral', title: 'Behavioral Risk Detection', desc: 'Emotion aware alerts when trading patterns signal panic or FOMO.' },
  { id: 'hive', title: 'HIVE Community Builder', desc: 'Follow top investors like Marcus Chen, mirror winning strategies, and see who your friends follow.' },
  { id: 'community', title: 'Community Intelligence', desc: 'Aggregated retail and analyst sentiment for smarter context.' },
  { id: 'goals', title: 'Goal Based Investing', desc: 'AI maps portfolio decisions to life goals: house, retirement, growth.' },
  { id: 'coach', title: 'REVA Chat Coach', desc: 'Conversational AI with portfolio aware answers, real time market guidance, and your personal REVA advisor.' },
  { id: 'simulator', title: 'Market Event Simulator', desc: 'What if scenarios for rate hikes, crashes, and sector rotations.' },
  { id: 'sandbox', title: 'AI Trade Sandbox', desc: 'Practice trades with virtual capital before risking real money.' },
]

export const PROTOTYPE_SCREENS = RAW_PROTOTYPE_SCREENS.map((screen) => {
  const delivery = getScreenDeliveryMeta(screen.id)
  return {
    ...screen,
    deliveryPhase: delivery?.phaseId ?? 'jun-26',
    deliveryLabel: delivery?.phaseLabel ?? 'Jun 2026 · Wks 21-24',
    targetDate: delivery?.targetDate ?? 'Jun 2026',
    deliveryWeek: delivery?.endWeek ?? 24,
  }
}).sort((a, b) => a.deliveryWeek - b.deliveryWeek)
