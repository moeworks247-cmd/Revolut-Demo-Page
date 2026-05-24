/** 24-week REVA product delivery Gantt — complexity, teams, dependencies, epics */

export const GANTT_WEEKS = 24

export const GANTT_EPICS = [
  {
    id: 'core',
    name: 'Core Portfolio Experience',
    color: '#3b82f6',
    features: [
      'Portfolio Data Layer & APIs',
      'Stock Detail Screen',
      'Portfolio Health Screen',
      'Multi Currency Portfolio & Allocation',
      'AI Portfolio Health Score',
      'Beginner Mode Settings Screen',
    ],
  },
  {
    id: 'insights',
    name: 'AI Insights Layer',
    color: '#8b5cf6',
    features: [
      'Market Data Ingestion Pipeline',
      'AI News & Market Insights Feed',
      'AI Market Narrative Engine',
      'AI Earnings Intelligence',
      'Community Intelligence Layer',
    ],
  },
  {
    id: 'risk',
    name: 'Risk & Stress Systems',
    color: '#ef4444',
    features: [
      'AI Trade Risk Warning Modal',
      'Smart Risk Notifications',
      'Portfolio Stress Testing',
      'Smart Portfolio Rebalancing',
      'Market Event Simulator',
    ],
  },
  {
    id: 'behavioral',
    name: 'Behavioral & Personalization Layer',
    color: '#f59e0b',
    features: [
      'AI Behavioral Risk Detection',
      'AI Investment Journal',
      'AI Investment Coach',
      'Goal Based Investing AI',
    ],
  },
  {
    id: 'trading',
    name: 'Advanced Trading Intelligence',
    color: '#22c55e',
    features: [
      'Trade Confidence Engine',
      'AI Opportunity Scanner',
      'AI Trade Sandbox',
    ],
  },
]

export const FEATURE_TYPE_COLORS = {
  ai: { from: '#FACC15', to: '#FDE047' },
  core: { from: '#3b82f6', to: '#60a5fa' },
}

/** @typedef {'S'|'M'|'L'|'XL'} Complexity */
/** @typedef {'ai'|'core'} FeatureType */
/** @type {Array<{id:string,name:string,type:FeatureType,complexity:Complexity,duration:number,teams:string[],dependencies:string[],epic:string,start:number,critical?:boolean}>} */
export const GANTT_FEATURES = [
  {
    id: 'data-layer',
    name: 'Portfolio Data Layer & APIs',
    type: 'core',
    complexity: 'L',
    duration: 4,
    teams: ['Backend', 'Data/Analytics', 'QA'],
    dependencies: ['None (foundation)'],
    epic: 'core',
    start: 1,
    critical: true,
  },
  {
    id: 'ingestion',
    name: 'Market Data Ingestion Pipeline',
    type: 'core',
    complexity: 'L',
    duration: 4,
    teams: ['Backend', 'Data/Analytics', 'QA'],
    dependencies: ['None (foundation)'],
    epic: 'insights',
    start: 1,
    critical: true,
  },
  {
    id: 'beginner-settings',
    name: 'Beginner Mode Settings Screen',
    type: 'core',
    complexity: 'S',
    duration: 2,
    teams: ['Frontend', 'UX/UI Design', 'QA'],
    dependencies: ['Portfolio Data Layer & APIs'],
    epic: 'core',
    start: 3,
  },
  {
    id: 'stock-detail',
    name: 'Stock Detail Screen',
    type: 'core',
    complexity: 'M',
    duration: 4,
    teams: ['Frontend', 'Backend', 'UX/UI Design', 'QA'],
    dependencies: ['Portfolio Data Layer & APIs'],
    epic: 'core',
    start: 3,
    critical: true,
  },
  {
    id: 'portfolio-health-ui',
    name: 'Portfolio Health Screen',
    type: 'core',
    complexity: 'M',
    duration: 4,
    teams: ['Frontend', 'Backend', 'Data/Analytics', 'UX/UI Design', 'QA'],
    dependencies: ['Portfolio Data Layer & APIs'],
    epic: 'core',
    start: 5,
  },
  {
    id: 'news-feed',
    name: 'AI News & Market Insights Feed',
    type: 'ai',
    complexity: 'M',
    duration: 4,
    teams: ['Frontend', 'Backend', 'Data/Analytics', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['Market Data Ingestion Pipeline'],
    epic: 'insights',
    start: 5,
  },
  {
    id: 'market-narrative',
    name: 'AI Market Narrative Engine',
    type: 'ai',
    complexity: 'L',
    duration: 8,
    teams: ['Frontend', 'Backend', 'ML/AI', 'Data/Analytics', 'UX/UI Design', 'QA'],
    dependencies: ['Market Data Ingestion Pipeline', 'Event pipelines'],
    epic: 'insights',
    start: 6,
    critical: true,
  },
  {
    id: 'multicurrency-allocation',
    name: 'Multi Currency Portfolio & Allocation',
    type: 'core',
    complexity: 'M',
    duration: 5,
    teams: ['Frontend', 'Backend', 'Data/Analytics', 'UX/UI Design', 'QA'],
    dependencies: ['Portfolio Data Layer & APIs', 'FX rates pipeline'],
    epic: 'core',
    start: 8,
    critical: true,
  },
  {
    id: 'health-score',
    name: 'AI Portfolio Health Score',
    type: 'ai',
    complexity: 'M',
    duration: 5,
    teams: ['Frontend', 'Backend', 'Data/Analytics', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['Portfolio Data Layer & APIs', 'Portfolio Health Screen'],
    epic: 'core',
    start: 7,
    critical: true,
  },
  {
    id: 'risk-modal',
    name: 'AI Trade Risk Warning Modal',
    type: 'ai',
    complexity: 'M',
    duration: 4,
    teams: ['Frontend', 'Backend', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['Stock Detail Screen', 'Portfolio Data Layer & APIs'],
    epic: 'risk',
    start: 7,
  },
  {
    id: 'earnings-intel',
    name: 'AI Earnings Intelligence',
    type: 'ai',
    complexity: 'M',
    duration: 4,
    teams: ['Frontend', 'Backend', 'Data/Analytics', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['Market Data Ingestion Pipeline', 'AI News & Market Insights Feed'],
    epic: 'insights',
    start: 9,
  },
  {
    id: 'smart-risk-notif',
    name: 'Smart Risk Notifications',
    type: 'ai',
    complexity: 'M',
    duration: 5,
    teams: ['Frontend', 'Backend', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['AI Trade Risk Warning Modal', 'Portfolio Data Layer & APIs'],
    epic: 'risk',
    start: 9,
  },
  {
    id: 'stress-test',
    name: 'Portfolio Stress Testing',
    type: 'ai',
    complexity: 'L',
    duration: 7,
    teams: ['Frontend', 'Backend', 'Data/Analytics', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['Portfolio Data Layer & APIs', 'AI Portfolio Health Score'],
    epic: 'risk',
    start: 10,
    critical: true,
  },
  {
    id: 'behavioral-risk',
    name: 'AI Behavioral Risk Detection',
    type: 'ai',
    complexity: 'L',
    duration: 8,
    teams: ['Frontend', 'Backend', 'ML/AI', 'Data/Analytics', 'UX/UI Design', 'QA'],
    dependencies: ['Portfolio Data Layer & APIs', 'Trade history pipeline'],
    epic: 'behavioral',
    start: 11,
  },
  {
    id: 'goal-investing',
    name: 'Goal Based Investing AI',
    type: 'ai',
    complexity: 'L',
    duration: 8,
    teams: ['Frontend', 'Backend', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['AI Portfolio Health Score', 'User profile layer'],
    epic: 'behavioral',
    start: 11,
  },
  {
    id: 'trade-confidence',
    name: 'Trade Confidence Engine',
    type: 'ai',
    complexity: 'M',
    duration: 5,
    teams: ['Frontend', 'Backend', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['AI Trade Risk Warning Modal', 'AI Portfolio Health Score'],
    epic: 'trading',
    start: 12,
  },
  {
    id: 'investment-journal',
    name: 'AI Investment Journal',
    type: 'ai',
    complexity: 'M',
    duration: 4,
    teams: ['Frontend', 'Backend', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['Trade history pipeline', 'AI Behavioral Risk Detection'],
    epic: 'behavioral',
    start: 13,
  },
  {
    id: 'investment-coach',
    name: 'AI Investment Coach',
    type: 'ai',
    complexity: 'XL',
    duration: 12,
    teams: ['Frontend', 'Backend', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['AI Insights Layer', 'Beginner Mode Settings Screen'],
    epic: 'behavioral',
    start: 13,
  },
  {
    id: 'opportunity-scanner',
    name: 'AI Opportunity Scanner',
    type: 'ai',
    complexity: 'L',
    duration: 6,
    teams: ['Frontend', 'Backend', 'ML/AI', 'Data/Analytics', 'UX/UI Design', 'QA'],
    dependencies: ['Portfolio profile engine', 'Market Data Ingestion Pipeline'],
    epic: 'trading',
    start: 14,
  },
  {
    id: 'community-intel',
    name: 'Community Intelligence Layer',
    type: 'ai',
    complexity: 'L',
    duration: 7,
    teams: ['Frontend', 'Backend', 'Data/Analytics', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['Sentiment data pipelines', 'Market Data Ingestion Pipeline'],
    epic: 'insights',
    start: 15,
  },
  {
    id: 'smart-rebalancing',
    name: 'Smart Portfolio Rebalancing',
    type: 'ai',
    complexity: 'M',
    duration: 5,
    teams: ['Frontend', 'Backend', 'ML/AI', 'Data/Analytics', 'UX/UI Design', 'QA'],
    dependencies: ['Portfolio Stress Testing', 'AI Portfolio Health Score'],
    epic: 'risk',
    start: 17,
  },
  {
    id: 'event-simulator',
    name: 'Market Event Simulator',
    type: 'ai',
    complexity: 'L',
    duration: 7,
    teams: ['Frontend', 'Backend', 'Data/Analytics', 'ML/AI', 'UX/UI Design', 'QA'],
    dependencies: ['Portfolio Stress Testing', 'Portfolio Data Layer & APIs'],
    epic: 'risk',
    start: 17,
  },
  {
    id: 'trade-sandbox',
    name: 'AI Trade Sandbox',
    type: 'core',
    complexity: 'M',
    duration: 5,
    teams: ['Frontend', 'Backend', 'UX/UI Design', 'QA'],
    dependencies: ['Stock Detail Screen', 'Portfolio Data Layer & APIs'],
    epic: 'trading',
    start: 20,
  },
]

const COMPLEXITY_LABELS = {
  S: '1 to 2 wks',
  M: '3 to 5 wks',
  L: '6 to 10 wks',
  XL: '10 to 16+ wks',
}

export function getComplexityLabel(c) {
  return COMPLEXITY_LABELS[c] || c
}

export const CRITICAL_PATH_IDS = GANTT_FEATURES.filter((f) => f.critical).map((f) => f.id)

/** Delivery windows aligned to 24 week Gantt (program start Jan 2026) */
export const DELIVERY_PHASES = [
  { id: 'jan-26', label: 'Jan 2026 · Wks 1-4', shortLabel: 'Jan 2026', weekMin: 1, weekMax: 4 },
  { id: 'feb-26', label: 'Feb 2026 · Wks 5-8', shortLabel: 'Feb 2026', weekMin: 5, weekMax: 8 },
  { id: 'mar-26', label: 'Mar 2026 · Wks 9-12', shortLabel: 'Mar 2026', weekMin: 9, weekMax: 12 },
  { id: 'apr-26', label: 'Apr 2026 · Wks 13-16', shortLabel: 'Apr 2026', weekMin: 13, weekMax: 16 },
  { id: 'may-26', label: 'May 2026 · Wks 17-20', shortLabel: 'May 2026', weekMin: 17, weekMax: 20 },
  { id: 'jun-26', label: 'Jun 2026 · Wks 21-24', shortLabel: 'Jun 2026', weekMin: 21, weekMax: 24 },
]

/** Maps prototype screen id → Gantt feature id */
export const SCREEN_TO_GANTT = {
  portfolio: 'portfolio-health-ui',
  stock: 'stock-detail',
  settings: 'beginner-settings',
  news: 'news-feed',
  earnings: 'earnings-intel',
  scanner: 'opportunity-scanner',
  risk: 'risk-modal',
  health: 'health-score',
  multicurrency: 'multicurrency-allocation',
  stress: 'stress-test',
  rebalancing: 'smart-rebalancing',
  confidence: 'trade-confidence',
  journal: 'investment-journal',
  behavioral: 'behavioral-risk',
  hive: 'goal-investing',
  community: 'community-intel',
  goals: 'goal-investing',
  coach: 'investment-coach',
  simulator: 'event-simulator',
  sandbox: 'trade-sandbox',
}

export function getGanttFeatureForScreen(screenId) {
  const ganttId = SCREEN_TO_GANTT[screenId]
  return GANTT_FEATURES.find((f) => f.id === ganttId) ?? null
}

export function getDeliveryPhaseForEndWeek(endWeek) {
  return DELIVERY_PHASES.find((p) => endWeek >= p.weekMin && endWeek <= p.weekMax) ?? DELIVERY_PHASES[DELIVERY_PHASES.length - 1]
}

export function getScreenDeliveryMeta(screenId) {
  const gantt = getGanttFeatureForScreen(screenId)
  if (!gantt) return null
  const endWeek = gantt.start + gantt.duration - 1
  const phase = getDeliveryPhaseForEndWeek(endWeek)
  return {
    endWeek,
    startWeek: gantt.start,
    duration: gantt.duration,
    phaseId: phase.id,
    phaseLabel: phase.label,
    phaseShort: phase.shortLabel,
    targetDate: phase.shortLabel,
  }
}
