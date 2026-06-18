import { motion } from 'framer-motion'
import BlurText from './animations/BlurText'
import GradientText from './animations/GradientText'
import ShinyText from './animations/ShinyText'
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
      className="relative overflow-hidden px-4 pb-16 pt-24 md:px-6 md:pb-24 md:pt-36"
    >
      <div className="ambient-glow hero-glow right-[-10rem] top-18 md:right-[6%] md:top-20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="mb-6 inline-flex"
          >
            <ShinyText className="rounded-full border border-green-200/80 bg-white/80 px-5 py-2 text-sm font-medium text-green-800 shadow-[0_10px_30px_rgba(34,197,94,0.08)] backdrop-blur">
              ✦ Building the future of software
            </ShinyText>
          </motion.div>

          <div className="max-w-3xl text-5xl font-extrabold tracking-[-0.04em] text-gray-950 md:text-6xl lg:text-7xl">
            <BlurText
              text="We Build"
              delay={90}
              animateBy="words"
              stepDuration={0.28}
              className="leading-[0.98]"
            />
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2 leading-[0.98]">
              <motion.div
                initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                <GradientText>Intelligent Solutions</GradientText>
              </motion.div>
            </div>
            <BlurText
              text="That Solve Real Problems"
              delay={85}
              animateBy="words"
              stepDuration={0.28}
              className="mt-1 leading-[0.98]"
            />
          </div>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.8}
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-8 text-gray-600"
          >
            NovaMind AI partners with forward-thinking companies to design, engineer,
            and scale high-performance digital products powered by modern technology and
            artificial intelligence.
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
              className="justify-center rounded-2xl px-7 py-4 text-base shadow-[0_18px_44px_rgba(34,197,94,0.22)]"
            >
              Start Your Project <span aria-hidden="true">→</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToId('projects')}
              className="justify-center rounded-2xl bg-white/70 px-7 py-4 text-base backdrop-blur-sm"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 48, scale: 0.96, filter: 'blur(14px)' }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <AgentHeroWindow />
        </motion.div>
      </div>
    </section>
  )
}
