import { motion } from 'framer-motion'
import GradientText from './animations/GradientText'
import { Button } from './ui/Button'
import AgentHeroWindow from './AgentHeroWindow'
import { useContactModal } from '../context/ContactModalContext'

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(12px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
}

export default function Hero() {
  const { openModal } = useContactModal()

  const scrollToId = (id) => {
    const element = document.getElementById(id)
    if (!element) return

    if (window.lenis) {
      window.lenis.scrollTo(element, { offset: -96, duration: 1.1 })
      return
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-4 pb-16 pt-24 md:px-6 md:pb-24 md:pt-36"
    >
      <div className="ambient-glow hero-glow right-[-10rem] top-18 md:right-[6%] md:top-20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 min-w-0">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="mb-6"
          >
            <p className="w-fit max-w-full rounded-full border border-green-200/80 bg-white/80 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-green-800 shadow-[0_10px_30px_rgba(34,197,94,0.08)] backdrop-blur sm:px-5 sm:text-sm sm:tracking-[0.18em]">
              Samvat AI &middot; Workflow-first delivery
            </p>
          </motion.div>

          <h1 id="hero-heading" className="max-w-3xl text-[2.15rem] font-extrabold leading-[1.04] tracking-[-0.04em] text-gray-950 sm:text-5xl sm:leading-[1.02] md:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Your AI idea deserves
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mt-1 block min-w-0"
            >
              <GradientText className="block max-w-full break-words">production-grade engineering.</GradientText>
            </motion.span>
          </h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.8}
            variants={fadeUp}
            className="mt-8 max-w-2xl break-words text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
          >
            I build custom AI software around real business workflows - from multimodal hiring and financial research to care operations and travel data infrastructure. Strategy, AI, backend and product delivery stay connected from the first architecture decision to deployment.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              onClick={openModal}
              className="justify-center rounded-2xl px-6 py-3.5 text-base shadow-[0_18px_44px_rgba(34,197,94,0.22)] sm:px-7 sm:py-4"
            >
              Schedule a Free 15-Min Call <span aria-hidden="true">→</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToId('projects')}
              className="justify-center rounded-2xl bg-white/70 px-6 py-3.5 text-base backdrop-blur-sm sm:px-7 sm:py-4"
            >
              Explore the Products
            </Button>
          </motion.div>
          <div className="mt-6 max-w-2xl space-y-2 text-sm leading-6 text-gray-500">
            <p className="font-medium text-gray-700">Microsoft-scale engineering. 3 AI research publications. Four AI products across hiring, finance, care and travel.</p>
            <p>Bring one workflow, bottleneck or product idea. We will use 15 minutes to map the architecture, feasibility and fastest useful first release.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 48, scale: 0.96, filter: 'blur(14px)' }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 min-w-0"
        >
          <AgentHeroWindow />
          <p className="mt-4 text-center text-xs text-gray-500">Illustrative interface - sample data.</p>
        </motion.div>
      </div>
    </section>
  )
}
