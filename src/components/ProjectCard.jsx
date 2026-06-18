import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Activity, BarChart3, Truck } from 'lucide-react'

const accentIconMap = {
  green: Activity,
  blue: BarChart3,
  amber: Truck,
}

const accentGlowMap = {
  green: 'rgba(34,197,94,0.18)',
  blue: 'rgba(59,130,246,0.18)',
  amber: 'rgba(245,158,11,0.18)',
}

export default function ProjectCard({ project, index, onSelect }) {
  const ref = useRef(null)
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)
  const rotateXRaw = useMotionValue(0)
  const rotateYRaw = useMotionValue(0)
  const rotateX = useSpring(rotateXRaw, { stiffness: 220, damping: 18 })
  const rotateY = useSpring(rotateYRaw, { stiffness: 220, damping: 18 })
  const sheenX = useTransform(mouseX, (value) => `${value}%`)
  const sheenY = useTransform(mouseY, (value) => `${value}%`)
  const spotlight = useMotionTemplate`radial-gradient(circle at ${sheenX} ${sheenY}, ${accentGlowMap[project.accentColor] || 'rgba(34,197,94,0.16)'}, transparent 42%)`
  const Icon = accentIconMap[project.accentColor] || Activity

  const initialAnimation = [
    { x: -100, y: 0 },
    { x: 0, y: 100 },
    { x: 100, y: 0 },
  ][index] || { x: 0, y: 60 }

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const percentX = ((event.clientX - rect.left) / rect.width) * 100
    const percentY = ((event.clientY - rect.top) / rect.height) * 100
    const centeredX = (percentX - 50) / 50
    const centeredY = (percentY - 50) / 50

    mouseX.set(percentX)
    mouseY.set(percentY)
    rotateYRaw.set(centeredX * 5)
    rotateXRaw.set(centeredY * -5)
  }

  const resetTilt = () => {
    rotateXRaw.set(0)
    rotateYRaw.set(0)
    mouseX.set(50)
    mouseY.set(50)
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => onSelect(project)}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, ...initialAnimation }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 16,
        delay: index * 0.15,
      }}
      layoutId={`project-shell-${project.id}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-7 text-left shadow-[0_24px_80px_rgba(15,23,42,0.06)]"
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: spotlight }} />
      <div className={`inline-flex rounded-2xl border px-4 py-2 text-sm font-semibold ${project.accentClass} ${project.accentBorder}`}>
        <Icon size={16} className="mr-2" />
        {project.title}
      </div>

      <div className="relative z-10 mt-7">
        <h3 className="text-3xl font-semibold tracking-tight text-gray-950">
          {project.title}
        </h3>
        <p className="mt-4 max-w-sm text-base leading-7 text-gray-600">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${project.accentClass} ${project.accentBorder}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <span className="text-sm font-semibold text-green-700">Click to explore</span>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-white transition group-hover:bg-green-500">
            <ArrowRight size={18} />
          </span>
        </div>
      </div>
    </motion.button>
  )
}
