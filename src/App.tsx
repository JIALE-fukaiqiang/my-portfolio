import StarField from './components/StarField'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import EvaluationSection from './sections/EvaluationSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import PosterDesignSection from './sections/PosterDesignSection'

function App() {
  return (
    <main className="relative w-full overflow-x-clip" style={{ backgroundColor: '#0C0C0C' }}>
      <StarField count={280} meteors={6} fixed />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <EvaluationSection />
      <ServicesSection />
      <ProjectsSection />
      <PosterDesignSection />
    </main>
  )
}

export default App
