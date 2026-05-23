import { useState } from 'react'
import LoadingScreen from './components/website/LoadingScreen'
import Navbar from './components/website/Navbar'
import HeroSection from './components/website/HeroSection'
import ProblemSection from './components/website/ProblemSection'
import SolutionSection from './components/website/SolutionSection'
import PrototypeShowcase from './components/website/PrototypeShowcase'
import ArchitectureSection from './components/website/ArchitectureSection'
import RoadmapSection from './components/website/RoadmapSection'
import KPISection from './components/website/KPISection'
import RevolutSection from './components/website/RevolutSection'
import CTASection, { Footer } from './components/website/CTASection'
import ArchitectureDiagramModal from './components/website/architecture/ArchitectureDiagramModal'
import { scrollToId } from './hooks/useInView'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [showArchitecture, setShowArchitecture] = useState(false)

  const handleViewPrototype = () => scrollToId('prototype')
  const handleViewArchitecture = () => setShowArchitecture(true)

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <ArchitectureDiagramModal isOpen={showArchitecture} onClose={() => setShowArchitecture(false)} />
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar onViewPrototype={handleViewPrototype} onViewArchitecture={handleViewArchitecture} />
        <main>
          <HeroSection onViewPrototype={handleViewPrototype} onViewArchitecture={handleViewArchitecture} />
          <ProblemSection />
          <SolutionSection />
          <PrototypeShowcase />
          <ArchitectureSection onViewArchitecture={handleViewArchitecture} />
          <RoadmapSection />
          <KPISection />
          <RevolutSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
