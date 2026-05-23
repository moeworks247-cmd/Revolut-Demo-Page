export const portfolioData = {
  balance: 47832.64,
  dailyChange: 1247.38,
  dailyChangePercent: 2.68,
  allocation: [
    { name: 'Technology', value: 42, color: '#6366f1' },
    { name: 'Healthcare', value: 18, color: '#22c55e' },
    { name: 'Finance', value: 15, color: '#3b82f6' },
    { name: 'Energy', value: 12, color: '#f59e0b' },
    { name: 'Consumer', value: 8, color: '#ec4899' },
    { name: 'Cash', value: 5, color: '#64748b' },
  ],
  aiInsight:
    'Your portfolio is heavily concentrated in tech stocks. Consider diversifying into healthcare and energy to reduce sector risk.',
  watchlist: [
    { symbol: 'NVDA', name: 'NVIDIA', price: 892.45, change: 3.24, changePercent: 0.36 },
    { symbol: 'AAPL', name: 'Apple', price: 198.32, change: -1.12, changePercent: -0.56 },
    { symbol: 'MSFT', name: 'Microsoft', price: 425.18, change: 2.87, changePercent: 0.68 },
    { symbol: 'TSLA', name: 'Tesla', price: 248.91, change: -4.23, changePercent: -1.67 },
  ],
  trending: [
    { symbol: 'AMD', name: 'Advanced Micro', price: 178.42, change: 5.12, changePercent: 2.96, tag: 'AI Chip' },
    { symbol: 'PLTR', name: 'Palantir', price: 24.87, change: 1.34, changePercent: 5.69, tag: 'Hot' },
    { symbol: 'COIN', name: 'Coinbase', price: 245.33, change: 8.21, changePercent: 3.46, tag: 'Crypto' },
  ],
}

export const stockDetail = {
  symbol: 'NVDA',
  name: 'NVIDIA Corporation',
  price: 892.45,
  change: 3.24,
  changePercent: 0.36,
  marketCap: '2.19T',
  volume: '42.8M',
  pe: 68.4,
  high52: 974.0,
  low52: 392.3,
  aiSummary:
    'NVIDIA surged after strong enterprise AI demand. Data center revenue grew 409% YoY, driven by hyperscaler GPU orders and expanding inference workloads.',
  volatility: { level: 'High', score: 78 },
  earnings: { next: 'Feb 26, 2026', beat: '4/4 last quarters' },
  sentiment: { rating: 'Strong Buy', analysts: 42, bullish: 89 },
  chartData: [
    { time: '9:30', price: 878 },
    { time: '10:00', price: 882 },
    { time: '10:30', price: 879 },
    { time: '11:00', price: 885 },
    { time: '11:30', price: 888 },
    { time: '12:00', price: 884 },
    { time: '12:30', price: 890 },
    { time: '1:00', price: 887 },
    { time: '1:30', price: 891 },
    { time: '2:00', price: 889 },
    { time: '2:30', price: 893 },
    { time: '3:00', price: 892 },
    { time: '3:30', price: 894 },
    { time: '4:00', price: 892.45 },
  ],
  news: [
    { title: 'NVIDIA unveils next-gen Blackwell Ultra chips for enterprise AI', source: 'Reuters', time: '2h ago' },
    { title: 'Analysts raise price targets ahead of earnings', source: 'Bloomberg', time: '4h ago' },
    { title: 'Data center demand continues to exceed supply', source: 'CNBC', time: '6h ago' },
  ],
}

export const riskWarning = {
  asset: 'NVDA',
  volatilityWarning: 'This asset experienced 18% weekly volatility after earnings announcements.',
  exposureWarning: 'Adding NVDA would increase your tech sector exposure from 42% to 51%.',
  aiExplanation:
    'Based on your moderate risk profile and current portfolio concentration, this purchase may increase short-term drawdown risk. Historical patterns show NVDA drops 8–12% within 5 days post-earnings in 3 of the last 4 quarters.',
  riskScore: 72,
  confidence: 84,
}

export const newsFeed = [
  {
    id: 1,
    type: 'market',
    title: 'Why the market moved today',
    summary:
      'The S&P 500 rose 0.8% as tech rallied on strong AI earnings. Bond yields fell after softer inflation data, boosting growth stocks.',
    tag: 'Daily Brief',
    time: 'Today · 4:15 PM',
    readTime: '2 min',
  },
  {
    id: 2,
    type: 'personalized',
    title: 'Your NVDA position is up 12% this month',
    summary:
      'Your NVIDIA holdings gained $1,842 this month. AI sector momentum remains strong, but consider taking partial profits if tech exceeds 45% of your portfolio.',
    tag: 'For You',
    time: 'Today · 2:30 PM',
    readTime: '1 min',
  },
  {
    id: 3,
    type: 'macro',
    title: 'AI explains inflation in simple terms',
    summary:
      'Inflation measures how much prices rise over time. When it cools, the Fed may cut rates — which typically helps stocks. Today\'s CPI came in at 2.4%, below expectations.',
    tag: 'Learn',
    time: 'Today · 11:00 AM',
    readTime: '3 min',
  },
  {
    id: 4,
    type: 'trend',
    title: 'Semiconductor sector hits new highs',
    summary:
      'Chip stocks are leading the market as AI infrastructure spending accelerates. NVDA, AMD, and AVGO account for 68% of sector gains this quarter.',
    tag: 'Trending',
    time: 'Yesterday',
    readTime: '2 min',
  },
  {
    id: 5,
    type: 'market',
    title: 'Fed signals patience on rate cuts',
    summary:
      'The Federal Reserve kept rates steady and indicated it needs more evidence of sustained inflation progress before cutting. Markets reacted mildly positive.',
    tag: 'Macro',
    time: 'Yesterday',
    readTime: '2 min',
  },
]

export const portfolioHealth = {
  diversificationScore: 62,
  riskScore: 71,
  healthScore: 68,
  sectors: [
    { name: 'Technology', exposure: 42, recommended: 25, color: '#6366f1' },
    { name: 'Healthcare', exposure: 18, recommended: 20, color: '#22c55e' },
    { name: 'Finance', exposure: 15, recommended: 18, color: '#3b82f6' },
    { name: 'Energy', exposure: 12, recommended: 15, color: '#f59e0b' },
    { name: 'Consumer', exposure: 8, recommended: 12, color: '#ec4899' },
    { name: 'Cash', exposure: 5, recommended: 10, color: '#64748b' },
  ],
  recommendations: [
  {
      title: 'Reduce tech concentration',
      detail: 'Consider reducing concentration in high-volatility assets. Your tech allocation is 17% above the recommended range.',
      priority: 'high',
    },
    {
      title: 'Increase cash reserves',
      detail: 'A 10% cash buffer would improve your ability to buy dips without selling winners.',
      priority: 'medium',
    },
    {
      title: 'Add defensive sectors',
      detail: 'Healthcare and utilities can provide stability during market downturns.',
      priority: 'low',
    },
  ],
}

export const formatCurrency = (value, compact = false) => {
  if (compact && Math.abs(value) >= 1000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value)
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export const formatChange = (value, percent) => {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${formatCurrency(value)} (${sign}${percent.toFixed(2)}%)`
}
