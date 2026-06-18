import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import {
  Monitor, Server, Smartphone, Cloud, GitBranch, Brain,
  Atom, Triangle, FileCode, Wind, Layers, Shield, CircleDot,
  Binary, Zap, Leaf, ArrowRight, Database, Code2, Globe,
  CloudSnow, Box, Network, Terminal, Activity, Flame, Cpu,
  Link, Sparkles, HeartHandshake, BarChart3,
} from 'lucide-react'
import CountUp from './animations/CountUp'
import SplitText from './animations/SplitText'
import { ScrollReveal } from './ui/ScrollReveal'
import { techTabs } from '../data/techStack'

const ICON_MAP = {
  Monitor, Server, Smartphone, Cloud, GitBranch, Brain,
  Atom, Triangle, FileCode, Wind, Layers, Shield,
  CircleDot, Binary, Zap, Leaf, ArrowRight, Database,
  Code2, Globe, CloudSnow, Box, Network, Terminal,
  Activity, Flame, Cpu, Link, Sparkles,
  // aliases used in techStack data
  Snake: Binary,
  BarChart2: BarChart3, BarChart3,
  Circle: CircleDot,
  Heart: HeartHandshake,
}

function resolveIcon(name) {
  return ICON_MAP[name] || Box
}

// Spring config mirrors TiltedCard from ReactBits
const SPRING = { damping: 30, stiffness: 100, mass: 2 }

function TechCard({ tech, index }) {
  const ref = useRef(null)
  const rotateX = useSpring(useMotionValue(0), SPRING)
  const rotateY = useSpring(useMotionValue(0), SPRING)
  const scale = useSpring(1, SPRING)
  const TechIcon = resolveIcon(tech.icon)

  const onMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const ox = e.clientX - rect.left - rect.width / 2
    const oy = e.clientY - rect.top - rect.height / 2
    rotateX.set((oy / (rect.height / 2)) * -10)
    rotateY.set((ox / (rect.width / 2)) * 10)
  }

  const onEnter = () => scale.set(1.06)
  const onLeave = () => { scale.set(1); rotateX.set(0); rotateY.set(0) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
        className="rounded-[1.6rem] border border-gray-200 bg-white p-5 shadow-sm"
      >
        {/* Icon floats forward in Z space */}
        <div
          style={{ transform: 'translateZ(24px)' }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-slate-50 text-green-700 ring-1 ring-gray-200"
        >
          <TechIcon size={24} />
        </div>
        {/* Name sits slightly behind the icon */}
        <p
          style={{ transform: 'translateZ(12px)' }}
          className="mt-6 text-lg font-semibold tracking-tight text-gray-900"
        >
          {tech.name}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(techTabs[0])
  const ActiveTabIcon = resolveIcon(activeTab.icon)

  return (
    <section id="tech-stack" className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-green-600">
            Tech Stack
          </p>
          <SplitText
            text="We Build with Modern Technology"
            tag="h2"
            splitType="chars"
            delay={18}
            duration={0.9}
            className="mx-auto block text-4xl font-bold tracking-[-0.04em] text-gray-950 md:text-5xl lg:text-6xl"
          />
          <ScrollReveal className="mx-auto mt-6 max-w-3xl">
            <p className="text-lg leading-8 text-gray-600">
              From front-end frameworks to cloud infrastructure, we use the right
              tools to deliver fast, scalable, and future-proof solutions.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-gray-200 bg-white/80 px-6 py-4 text-sm font-medium text-gray-500 shadow-sm backdrop-blur-sm">
            <span className="text-gray-700">
              <CountUp to={30} className="font-semibold text-green-600" />+ Technologies
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-gray-300 md:block" />
            <span className="text-gray-700">
              <CountUp to={6} className="font-semibold text-green-600" /> Categories
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-gray-300 md:block" />
            <span className="text-gray-700">
              <CountUp to={5} className="font-semibold text-green-600" />+ Years Experience
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <div className="flex flex-wrap gap-3 overflow-x-auto pb-2 md:flex-nowrap md:overflow-x-auto">
            {techTabs.map((tab) => {
              const TabIcon = resolveIcon(tab.icon)
              const isActive = tab.id === activeTab.id

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'border-green-500 bg-green-500 text-white shadow-[0_16px_34px_rgba(34,197,94,0.2)]'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:text-green-700'
                  }`}
                >
                  <TabIcon size={16} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        <div className="mt-10 rounded-[2rem] border border-gray-200 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.05)] backdrop-blur-sm md:p-8">
          <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 ring-1 ring-green-200">
                <ActiveTabIcon size={22} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-gray-950">
                  {activeTab.label}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Modern tools selected to balance speed, scale, and maintainability.
                </p>
              </div>
            </div>
            <div className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-green-700">
              Core Capability
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
            >
              {activeTab.techs.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
