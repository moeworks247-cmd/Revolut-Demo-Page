/** Systematic feature taxonomy & roadmap progress */
export const FEATURE_PHASES = [
  {
    id: 'q1',
    q: 'Q1 2026',
    title: 'Market Intelligence Core',
    theme: 'Understand markets in plain language',
    icon: 'Sparkles',
    status: 'current',
    progress: 62,
    desc: 'Launch AI powered market understanding: narratives, earnings context, opportunity discovery, and proactive risk notifications.',
    features: [
      { id: 'market-narrative', name: 'AI Market Narrative Engine', status: 'shipped', screen: 'news' },
      { id: 'earnings-intel', name: 'AI Earnings Intelligence', status: 'shipped', screen: 'earnings' },
      { id: 'opportunity-scanner', name: 'AI Opportunity Scanner', status: 'in_progress', screen: 'scanner' },
      { id: 'smart-risk-notifications', name: 'Smart Risk Notifications', status: 'in_progress', screen: 'risk' },
    ],
  },
  {
    id: 'q2',
    q: 'Q2 2026',
    title: 'Portfolio Fitness',
    theme: 'Build resilient, balanced portfolios',
    icon: 'Heart',
    status: 'next',
    progress: 38,
    desc: 'Holistic portfolio intelligence: health scoring, crash stress tests, smart rebalancing, trade confidence, and an AI investment journal.',
    features: [
      { id: 'health-score', name: 'AI Portfolio Health Score', status: 'shipped', screen: 'health' },
      { id: 'multicurrency', name: 'Multi Currency Portfolio & Allocation', status: 'in_progress', screen: 'multicurrency' },
      { id: 'stress-test', name: 'Portfolio Stress Testing', status: 'in_progress', screen: 'stress' },
      { id: 'rebalancing', name: 'Smart Portfolio Rebalancing', status: 'in_progress', screen: 'rebalancing' },
      { id: 'trade-confidence', name: 'Trade Confidence Engine', status: 'in_progress', screen: 'confidence' },
      { id: 'investment-journal', name: 'AI Investment Journal', status: 'planned', screen: 'journal' },
    ],
  },
  {
    id: 'q3',
    q: 'Q3 2026',
    title: 'Behavioral Intelligence',
    theme: 'Detect emotion driven investing patterns',
    icon: 'Brain',
    status: 'planned',
    progress: 24,
    desc: 'Emotion aware risk detection, HIVE community copy trading, sentiment layers, and goal based investing aligned to life objectives.',
    features: [
      { id: 'behavioral-risk', name: 'AI Behavioral Risk Detection', status: 'in_progress', screen: 'behavioral' },
      { id: 'hive', name: 'HIVE Community Copy Trading', status: 'in_progress', screen: 'hive' },
      { id: 'community-intel', name: 'Community Intelligence Layer', status: 'planned', screen: 'community' },
      { id: 'goal-based', name: 'Goal Based Investing AI', status: 'planned', screen: 'goals' },
    ],
  },
  {
    id: 'q4',
    q: 'Q4 2026',
    title: 'Coaching & Simulation',
    theme: 'Learn, practice, and grow with confidence',
    icon: 'Bot',
    status: 'planned',
    progress: 8,
    desc: 'Full AI investment coach, market event simulator, and risk free trade sandbox for beginner confidence building.',
    features: [
      { id: 'investment-coach', name: 'AI Investment Coach', status: 'planned', screen: 'coach' },
      { id: 'event-simulator', name: 'Market Event Simulator', status: 'planned', screen: 'simulator' },
      { id: 'trade-sandbox', name: 'AI Trade Sandbox', status: 'planned', screen: 'sandbox' },
    ],
  },
]

export const ALL_FEATURES = FEATURE_PHASES.flatMap((p) =>
  p.features.map((f) => ({ ...f, phase: p.q, phaseTitle: p.title }))
)

export const FEATURE_CATEGORIES = [
  {
    title: 'Market Intelligence',
    desc: 'Understand why markets move and spot opportunities early.',
    features: ['AI Market Narrative Engine', 'AI Earnings Intelligence', 'AI Opportunity Scanner'],
  },
  {
    title: 'Risk & Confidence',
    desc: 'Prevent emotional mistakes and validate every trade.',
    features: ['Smart Risk Notifications', 'AI Behavioral Risk Detection', 'Trade Confidence Engine'],
  },
  {
    title: 'Portfolio Fitness',
    desc: 'Measure, stress test, and rebalance for long term resilience.',
    features: ['Multi Currency Portfolio & Allocation', 'AI Portfolio Health Score', 'Portfolio Stress Testing', 'Smart Portfolio Rebalancing', 'AI Investment Journal'],
  },
  {
    title: 'Coaching & Growth',
    desc: 'Learn, simulate, and practice before risking real capital.',
    features: ['AI Investment Coach', 'Goal Based Investing AI', 'Market Event Simulator', 'AI Trade Sandbox', 'Community Intelligence Layer', 'HIVE Community Copy Trading'],
  },
]

export const statusLabel = {
  shipped: { text: 'Live', color: 'text-profit', bg: 'bg-profit/15' },
  in_progress: { text: 'In Progress', color: 'text-warning', bg: 'bg-warning/15' },
  planned: { text: 'Planned', color: 'text-white/40', bg: 'bg-white/5' },
}
