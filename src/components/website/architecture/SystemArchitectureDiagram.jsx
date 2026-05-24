import { motion } from 'framer-motion'
import {
  Smartphone, Monitor, LayoutDashboard, TrendingUp, Bot, Bell, Newspaper,
  Shield, Key, Wallet, Zap, Database, Settings,
  Radio, Bitcoin, FileText, Calendar, Activity, Users,
  Brain, MessageSquare, BarChart3, Target, Sparkles, Gauge,
  AlertTriangle, PieChart, HeartPulse, CheckCircle, Eye, CloudRain,
  Send, AlertCircle, Heart, BookOpen, Lightbulb,
  LineChart, UserCheck, Headphones, TrendingDown,
  Lock, ScanFace, FileCheck, Globe, UserCog, ClipboardList,
  Cloud, Boxes, Cpu, RadioTower, HardDrive, Network, Container,
} from 'lucide-react'
import RevaLogo from '../../RevaLogo'
import {
  FlowArrow, LayerHeader, ServicePill, OutputBadge, TopLevelFlow,
} from './diagramParts'

const iconMap = {
  Smartphone, Monitor, LayoutDashboard, TrendingUp, Bot, Bell, Newspaper,
  Shield, Key, Wallet, Zap, Database, Settings,
  Radio, Bitcoin, FileText, Calendar, Activity, Users,
  Brain, MessageSquare, BarChart3, Target, Sparkles, Gauge,
  AlertTriangle, PieChart, HeartPulse, CheckCircle, Eye, CloudRain,
  Send, AlertCircle, Heart, BookOpen, Lightbulb,
  LineChart, UserCheck, Headphones, TrendingDown,
  Lock, ScanFace, FileCheck, Globe, UserCog, ClipboardList,
  Cloud, Boxes, Cpu, RadioTower, HardDrive, Network, Container,
}

function ServiceGrid({ items, columns = 3 }) {
  const colClass = columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'
  return (
    <div className={`grid grid-cols-2 ${colClass} gap-2 md:gap-3`}>
      {items.map(({ icon, label, live }, i) => {
        const Icon = iconMap[icon] || Sparkles
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="glass rounded-xl p-3 flex items-center gap-2.5 hover:border-white/10 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
              <Icon size={15} className="text-accent-light" />
            </div>
            <span className="text-[12px] font-medium text-white/70 leading-tight">{label}</span>
            {live && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-profit animate-pulse flex-shrink-0" />}
          </motion.div>
        )
      })}
    </div>
  )
}

export default function SystemArchitectureDiagram() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 pb-16">
      <TopLevelFlow />

      {/* Layer 1 — UX */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-2xl p-6 md:p-8 mb-2 gradient-border"
      >
        <LayerHeader number="01" title="Frontend Experience Layer" subtitle="Premium mobile & web interfaces for retail investors" />
        <ServiceGrid items={[
          { icon: 'Smartphone', label: 'iOS App', live: true },
          { icon: 'Smartphone', label: 'Android App', live: true },
          { icon: 'LayoutDashboard', label: 'Portfolio Dashboard' },
          { icon: 'TrendingUp', label: 'Trading Interface' },
          { icon: 'Bot', label: 'AI Assistant UI', live: true },
          { icon: 'Bell', label: 'Notifications Center' },
          { icon: 'Newspaper', label: 'Market Insights Feed' },
        ]} columns={3} />
        <div className="flex flex-wrap gap-2 mt-4">
          <ServicePill pulse>Live chart indicators</ServicePill>
          <ServicePill>AI interaction panels</ServicePill>
          <ServicePill>Glowing fintech UI</ServicePill>
        </div>
      </motion.div>

      <FlowArrow label="Secure API calls" />

      {/* Layer 2 — API */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-2xl p-6 md:p-8 mb-2 gradient-border"
      >
        <LayerHeader number="02" title="Application Services Layer" subtitle="Low latency microservices & secure API gateway" />
        <ServiceGrid items={[
          { icon: 'Network', label: 'API Gateway', live: true },
          { icon: 'Key', label: 'Authentication Service' },
          { icon: 'Wallet', label: 'User Portfolio Service' },
          { icon: 'Zap', label: 'Trading Execution Service', live: true },
          { icon: 'Database', label: 'Market Data Aggregator', live: true },
          { icon: 'Settings', label: 'User Preference Engine' },
        ]} />
        <motion.div className="flex flex-wrap gap-2 mt-4">
          <ServicePill highlight pulse>&lt;50ms transaction latency</ServicePill>
          <ServicePill>End to end encryption</ServicePill>
          <ServicePill pulse>Real time sync</ServicePill>
        </motion.div>
      </motion.div>

      <FlowArrow label="Data ingestion" />

      {/* Layer 3 — Market Data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-2xl p-6 md:p-8 mb-2 gradient-border"
      >
        <LayerHeader number="03" title="Market Intelligence Layer" subtitle="Real time streaming data from global markets" />
        <ServiceGrid items={[
          { icon: 'Radio', label: 'Real-Time Stock Data', live: true },
          { icon: 'Bitcoin', label: 'Crypto Market Feeds', live: true },
          { icon: 'FileText', label: 'News Aggregation APIs', live: true },
          { icon: 'Calendar', label: 'Earnings Calendar Service' },
          { icon: 'Activity', label: 'Volatility Monitoring Engine', live: true },
          { icon: 'Users', label: 'Analyst Sentiment Service' },
        ]} />
        <div className="mt-4 flex items-center gap-3 glass rounded-xl px-4 py-3">
          <motion.div
            className="flex gap-1"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 bg-accent rounded-full" style={{ height: 8 + Math.sin(i) * 8 }} />
            ))}
          </motion.div>
          <span className="text-[12px] text-white/50">Live market pulse · Streaming ingestion pipeline active</span>
        </div>
      </motion.div>

      <FlowArrow label="AI inference pipeline" />

      {/* Layer 4 — AI Engine (centerpiece) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl p-6 md:p-8 mb-2 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.08) 50%, rgba(139,92,246,0.06) 100%)',
          border: '1px solid rgba(59,130,246,0.25)',
          boxShadow: '0 0 80px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <div className="absolute inset-0 ai-shimmer opacity-30 pointer-events-none" />
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30">
          <RevaLogo size="xs" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent-light">REVA Core</span>
        </div>

        <LayerHeader number="04" title="REVA Engine" subtitle="Revolut Enhanced Value Advisor · central intelligence hub with real time insight generation" accent />

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {[
            { icon: 'MessageSquare', label: 'Natural Language Processing' },
            { icon: 'Gauge', label: 'Risk Scoring Model' },
            { icon: 'BarChart3', label: 'Behavioral Analysis Engine' },
            { icon: 'PieChart', label: 'Portfolio Diversification Analysis' },
            { icon: 'Sparkles', label: 'Market Event Summarization' },
            { icon: 'Target', label: 'AI Confidence Scoring' },
            { icon: 'Brain', label: 'Personalized Recommendation Engine' },
            { icon: 'Activity', label: 'ML Inference Pipeline', live: true },
          ].map(({ icon, label, live }, i) => {
            const Icon = iconMap[icon]
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-black/20 rounded-xl p-3 border border-accent/15 hover:border-accent/30 transition-colors"
              >
                <Icon size={16} className="text-accent-light mb-2" />
                <p className="text-[11px] font-medium text-white/75 leading-snug">{label}</p>
                {live && <span className="inline-block mt-1.5 w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
              </motion.div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <OutputBadge variant="info">AI-generated trade insights</OutputBadge>
          <OutputBadge variant="info">Personalized risk recommendations</OutputBadge>
          <OutputBadge variant="info">Behavioral investment analysis</OutputBadge>
        </div>

        {/* Neural network visual */}
        <div className="mt-6 flex justify-center">
          <motion.div
            className="relative w-48 h-24"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg viewBox="0 0 200 80" className="w-full h-full">
              <defs>
                <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#818cf8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {[20, 60, 100, 140, 180].map((x, i) =>
                [15, 40, 65].map((y, j) => (
                  <motion.circle
                    key={`${i}-${j}`}
                    cx={x}
                    cy={y}
                    r={i === 2 ? 5 : 3}
                    fill={i === 2 ? '#3b82f6' : 'rgba(59,130,246,0.4)'}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: (i + j) * 0.15 }}
                  />
                ))
              )}
              <motion.path
                d="M 20 40 Q 60 20 100 40 T 180 40"
                fill="none"
                stroke="url(#neuralGrad)"
                strokeWidth="1"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      <FlowArrow label="Risk validation" />

      {/* Layer 5 — Risk */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-2xl p-6 md:p-8 mb-2 gradient-border border-warning/10"
      >
        <LayerHeader number="05" title="Risk Intelligence Layer" subtitle="Predictive analytics & dynamic risk scoring" />
        <ServiceGrid items={[
          { icon: 'Activity', label: 'Volatility Detection', live: true },
          { icon: 'PieChart', label: 'Portfolio Concentration Analysis' },
          { icon: 'HeartPulse', label: 'Panic-Sell Detection' },
          { icon: 'CheckCircle', label: 'Trade Safety Validation' },
          { icon: 'Eye', label: 'Exposure Monitoring', live: true },
          { icon: 'CloudRain', label: 'Market Risk Forecasting' },
        ]} />
        <div className="flex flex-wrap gap-3 mt-4">
          <OutputBadge variant="danger">High portfolio concentration detected</OutputBadge>
          <OutputBadge variant="warning">Elevated volatility risk</OutputBadge>
        </div>
      </motion.div>

      <FlowArrow label="Insight delivery" />

      {/* Layer 6 — Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-2xl p-6 md:p-8 mb-2 gradient-border"
      >
        <LayerHeader number="06" title="Smart Notification Engine" subtitle="Contextual alerts & personalised coaching" />
        <ServiceGrid items={[
          { icon: 'Send', label: 'Push Notifications' },
          { icon: 'AlertCircle', label: 'AI Trade Warnings', live: true },
          { icon: 'Heart', label: 'Portfolio Health Alerts' },
          { icon: 'Newspaper', label: 'Market Movement Summaries' },
          { icon: 'BookOpen', label: 'Educational Insights' },
          { icon: 'Lightbulb', label: 'Personalized Recommendations' },
        ]} />
        <div className="mt-4 space-y-2">
          <div className="glass rounded-xl px-4 py-3 border-l-2 border-warning/50">
            <p className="text-[11px] text-warning font-semibold mb-0.5">Risk Alert</p>
            <p className="text-[12px] text-white/60 italic">"This asset experienced 18% weekly volatility."</p>
          </div>
          <div className="glass rounded-xl px-4 py-3 border-l-2 border-accent/50">
            <p className="text-[11px] text-accent-light font-semibold mb-0.5">Exposure Warning</p>
            <p className="text-[12px] text-white/60 italic">"Your portfolio exposure to tech increased to 72%."</p>
          </div>
        </div>
      </motion.div>

      <FlowArrow label="Metrics pipeline" />

      {/* Layer 7 — Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-2xl p-6 md:p-8 mb-2 gradient-border"
      >
        <LayerHeader number="07" title="Analytics & KPI Dashboard" subtitle="Executive reporting & product intelligence" />
        <ServiceGrid items={[
          { icon: 'LineChart', label: 'User Engagement Metrics' },
          { icon: 'UserCheck', label: 'Retention Analytics' },
          { icon: 'Sparkles', label: 'AI Feature Adoption', live: true },
          { icon: 'Target', label: 'Trade Confidence Metrics' },
          { icon: 'Headphones', label: 'Support Ticket Reduction' },
          { icon: 'TrendingDown', label: 'Behavioral Improvement KPIs' },
        ]} />
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: 'AI Engagement', value: '67%', color: '#3b82f6' },
            { label: 'Retention Δ', value: '+19%', color: '#22c55e' },
            { label: 'Informed Trades', value: '74%', color: '#818cf8' },
          ].map((m) => (
            <div key={m.label} className="glass rounded-xl p-3 text-center">
              <p className="text-xl font-bold tabular-nums" style={{ color: m.color }}>{m.value}</p>
              <p className="text-[10px] text-white/40 mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <FlowArrow label="Security layer" />

      {/* Layer 8 — Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-2xl p-6 md:p-8 mb-2 gradient-border"
      >
        <LayerHeader number="08" title="Security & Compliance" subtitle="Enterprise grade trust infrastructure" />
        <ServiceGrid items={[
          { icon: 'Lock', label: 'End-to-End Encryption' },
          { icon: 'Shield', label: 'Fraud Detection', live: true },
          { icon: 'ScanFace', label: 'KYC/AML Systems' },
          { icon: 'FileCheck', label: 'GDPR Compliance' },
          { icon: 'UserCog', label: 'Secure Identity Management' },
          { icon: 'ClipboardList', label: 'Audit Logging' },
        ]} />
      </motion.div>

      <FlowArrow label="Cloud deployment" />

      {/* Layer 9 — Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-2xl p-6 md:p-8 gradient-border"
      >
        <LayerHeader number="09" title="Cloud Infrastructure" subtitle="Global-scale, high-availability deployment" />
        <ServiceGrid items={[
          { icon: 'Cloud', label: 'AWS / GCP Cloud', live: true },
          { icon: 'Boxes', label: 'Microservices Architecture' },
          { icon: 'Cpu', label: 'AI Model Hosting', live: true },
          { icon: 'RadioTower', label: 'Real-Time Event Streaming' },
          { icon: 'HardDrive', label: 'Distributed Databases' },
          { icon: 'Network', label: 'Load Balancers' },
          { icon: 'Container', label: 'Kubernetes Containers' },
        ]} columns={3} />
        <div className="mt-4 flex flex-wrap gap-2">
          <ServicePill highlight>99.99% uptime SLA</ServicePill>
          <ServicePill>Multi-region deployment</ServicePill>
          <ServicePill pulse>Auto-scaling enabled</ServicePill>
          <ServicePill>Global CDN edge nodes</ServicePill>
        </div>

        {/* Cloud visual */}
        <div className="mt-6 relative h-20 flex items-center justify-center">
          <motion.div
            className="absolute inset-x-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {['EU', 'US', 'APAC'].map((region, i) => (
            <motion.div
              key={region}
              className="absolute glass rounded-lg px-3 py-1.5 text-[10px] font-semibold text-white/50"
              style={{ left: `${20 + i * 30}%` }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            >
              {region}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
