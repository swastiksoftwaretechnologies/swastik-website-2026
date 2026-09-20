import { lazy, Suspense, useEffect } from 'react'
import Lenis from 'lenis'
import DotGrid from './components/animations/DotGrid'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import CTABreak from './components/CTABreak'
import Benefits from './components/Benefits'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import { ContactModalProvider } from './context/ContactModalContext'

// Below-fold components are lazy loaded once page paint is done.
const Clients = lazy(() => import('./components/Clients'))
const Services = lazy(() => import('./components/Services'))
const TechStack = lazy(() => import('./components/TechStack'))
const Process = lazy(() => import('./components/Process'))
const Projects = lazy(() => import('./components/Projects'))
const Founder = lazy(() => import('./components/Founder'))

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
    <div className="relative min-h-screen min-w-0 overflow-x-clip">
      {/* Interactive dot grid — fixed behind all content, events fire on window */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen">
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

      <a href="#main-content" className="sr-only fixed left-4 top-4 z-[200] rounded-lg bg-white px-4 py-2 font-semibold text-green-700 shadow focus:not-sr-only">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
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
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-[760px]" />}>
          <Founder />
        </Suspense>
        <Benefits />

        <Suspense fallback={<SectionSkeleton height="h-[700px]" />}>
          <Process />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <TechStack />
        </Suspense>
        <FAQs />
        <CTABreak variant="final" />
      </main>
      <Footer />
    </div>
    </ContactModalProvider>
  )
}
