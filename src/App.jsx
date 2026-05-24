import { useState, useEffect } from 'react'
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
import WhyHireMohamedPage from './components/website/WhyHireMohamedPage'
import ArchitectureDiagramModal from './components/website/architecture/ArchitectureDiagramModal'
import { scrollToId } from './hooks/useInView'

export const HIRE_PAGE_HASH = '#why-hire-mohamed'

function isHirePage() {
  return window.location.hash === HIRE_PAGE_HASH
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [showArchitecture, setShowArchitecture] = useState(false)
  const [page, setPage] = useState(() => (isHirePage() ? 'hire' : 'home'))

  useEffect(() => {
    const onHashChange = () => {
      setPage(isHirePage() ? 'hire' : 'home')
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleViewPrototype = () => scrollToId('prototype')
  const handleViewArchitecture = () => setShowArchitecture(true)

  const goToHirePage = () => {
    window.location.hash = 'why-hire-mohamed'
  }

  const goToHome = () => {
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
    setPage('home')
    window.scrollTo(0, 0)
  }

  const viewPrototypeFromHire = () => {
    goToHome()
    setTimeout(() => scrollToId('prototype'), 150)
  }

  if (page === 'hire') {
    return (
      <WhyHireMohamedPage
        onBackToReva={goToHome}
        onViewPrototype={viewPrototypeFromHire}
      />
    )
  }

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <ArchitectureDiagramModal isOpen={showArchitecture} onClose={() => setShowArchitecture(false)} />
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar
          onViewPrototype={handleViewPrototype}
          onViewArchitecture={handleViewArchitecture}
          onViewHire={goToHirePage}
        />
        <main>
          <HeroSection onViewPrototype={handleViewPrototype} onViewArchitecture={handleViewArchitecture} />
          <ProblemSection />
          <SolutionSection />
          <PrototypeShowcase />
          <ArchitectureSection onViewArchitecture={handleViewArchitecture} />
          <RoadmapSection />
          <KPISection />
          <RevolutSection />
          <CTASection onViewHire={goToHirePage} />
        </main>
        <Footer onViewHire={goToHirePage} />
      </div>
    </>
  )
}
