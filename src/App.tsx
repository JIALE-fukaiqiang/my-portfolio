import { useState } from 'react'
import StarField from './components/StarField'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import StickyNav from './components/StickyNav'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import EvaluationSection from './sections/EvaluationSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import PosterDesignSection from './sections/PosterDesignSection'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <Loader onLoaded={() => setIsLoaded(true)} />

      {isLoaded && (
        <>
          <ScrollProgress />
          <StickyNav />

          <main className="relative w-full overflow-x-clip" style={{ backgroundColor: '#0C0C0C' }}>
            <StarField count={280} meteors={6} fixed />
            <HeroSection />
            <MarqueeSection />
            <AboutSection />
            <EvaluationSection />
            <ServicesSection />
            <ProjectsSection />
            <PosterDesignSection />
            <Footer />
          </main>

          <BackToTop />
        </>
      )}
    </>
  )
}

export default App
