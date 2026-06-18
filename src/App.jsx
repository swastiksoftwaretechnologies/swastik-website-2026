import { lazy, Suspense, useEffect } from 'react'
import Lenis from 'lenis'
import DotGrid from './components/animations/DotGrid'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import CTABreak from './components/CTABreak'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import { ContactModalProvider } from './context/ContactModalContext'

// Heavy components (OGL WebGL + GSAP-heavy) — lazy loaded once page paint is done
const Clients = lazy(() => import('./components/Clients'))
const Services = lazy(() => import('./components/Services'))
const TechStack = lazy(() => import('./components/TechStack'))
const Process = lazy(() => import('./components/Process'))
const Projects = lazy(() => import('./components/Projects'))

function SectionSkeleton({ height = 'h-48' }) {
  return (
    <div className={`mx-auto max-w-7xl px-4 ${height} animate-pulse rounded-3xl bg-gray-100 md:px-6`} />
  )
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      delete window.lenis
    }
  }, [])

  return (
    <ContactModalProvider>
    <ContactModal />
    <div className="relative min-h-screen">
      {/* Interactive dot grid — fixed behind all content, events fire on window */}
      <div className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen">
        <DotGrid
          dotSize={3}
          gap={22}
          baseColor="#d1d5db"
          activeColor="#22c55e"
          proximity={130}
          speedTrigger={80}
          shockRadius={240}
          shockStrength={4}
          returnDuration={1.5}
          style={{ padding: 0 }}
        />
      </div>

      <Navbar />
      <main>
        {/* Above-fold — load immediately */}
        <Hero />
        <TrustStrip />

        {/* Below-fold — lazy loaded */}
        <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
          <Clients />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <TechStack />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-[700px]" />}>
          <Process />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <Projects />
        </Suspense>

        <CTABreak variant="mid" />
        <Benefits />
        <Testimonials />
        <FAQs />
        <CTABreak variant="final" id="about" />
      </main>
      <Footer />
    </div>
    </ContactModalProvider>
  )
}
