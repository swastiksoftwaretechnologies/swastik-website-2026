import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import SplitText from './animations/SplitText'
import { processSteps } from '../data/processSteps'

function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value))
}

export default function Process() {
  const containerRef = useRef(null)
  const fillRef = useRef(null)
  const progressMV = useMotionValue(0)
  const [activeCount, setActiveCount] = useState(0)
  // refs to each dot circle so we can measure their Y position vs the fill bar
  const dotRefs = useRef([])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    function update() {
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight

      // Fill bar: starts when section top reaches 80% down the viewport,
      // completes when section bottom reaches 55% down — last dot is in view by then
      const start = rect.top - windowH * 0.8
      const end = rect.bottom - windowH * 0.55
      const total = end - start
      const pct = clamp(-start / total)
      progressMV.set(pct)

      // Activate each step the moment the fill bar visually reaches its dot
      let count = 0
      dotRefs.current.forEach((dotEl, i) => {
        if (!dotEl) return
        const dotRect = dotEl.getBoundingClientRect()
        const dotCenter = (dotRect.top + dotRect.bottom) / 2
        // Dot's position as a fraction of the section container height
        const dotFraction = clamp((dotCenter - rect.top) / rect.height)
        if (pct >= dotFraction) count = i + 1
      })
      setActiveCount((prev) => (prev !== count ? count : prev))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [progressMV])

  useEffect(() => {
    return progressMV.on('change', (v) => {
      if (fillRef.current) fillRef.current.style.height = `${v * 100}%`
    })
  }, [progressMV])

  return (
    <section id="process" className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-green-600">
            A Proven Path Towards AI Implementation
          </p>
          <SplitText
            text="A Clear, Collaborative Journey to Success"
            tag="h2"
            splitType="chars"
            delay={16}
            duration={0.9}
            className="mx-auto block text-4xl font-bold tracking-[-0.04em] text-gray-950 md:text-5xl lg:text-6xl"
          />
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We guide you from initial concept to full implementation through a
            structured and transparent process, ensuring alignment and value at every
            stage.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-gray-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.98),rgba(255,255,255,0.96))] px-6 py-10 shadow-[0_30px_90px_rgba(15,23,42,0.06)] md:px-10 md:py-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_36%)]" />

          <div className="relative grid gap-y-14 md:grid-cols-[1fr_72px_1fr] md:gap-x-8 md:gap-y-0">

            {/* Vertical progress line — absolute so it spans ALL step rows.
                Mobile: left gutter (left-[11px]).
                Desktop: left-1/2 = center of grid = center of the 72px middle column. */}
            <div className="pointer-events-none absolute bottom-0 left-[11px] top-0 w-[3px] md:left-1/2 md:-translate-x-[1.5px]">
              <div className="absolute inset-0 rounded-full bg-gray-200" />
              <div
                ref={fillRef}
                className="absolute inset-x-0 top-0 rounded-full bg-green-500 shadow-[0_0_24px_rgba(34,197,94,0.28)]"
                style={{ height: '0%' }}
              />
            </div>

            {processSteps.map((step, index) => {
              const isActive = activeCount > index
              const isLeft = step.side === 'left'

              return (
                <div
                  key={step.number}
                  className="relative grid grid-cols-[32px_1fr] gap-4 md:col-span-3 md:grid-cols-[1fr_72px_1fr] md:gap-8"
                >
                  {/* Step card */}
                  <div
                    className={`${isLeft ? 'md:col-start-1 md:flex md:justify-end' : 'md:col-start-3'}`}
                  >
                    <motion.article
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.38,
                        x: isActive ? 0 : isLeft ? -36 : 36,
                        filter: isActive ? 'blur(0px)' : 'blur(3px)',
                      }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block max-w-md rounded-[1.75rem] border border-gray-200 bg-white/88 px-6 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:px-7 md:py-6"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-600">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950 md:text-[2rem]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-gray-600">
                        {step.description}
                      </p>
                    </motion.article>
                  </div>

                  {/* Dot + connector */}
                  <div className="relative md:col-start-2 md:flex md:items-center md:justify-center">

                    {/* Mobile: tick from vertical line to card */}
                    <div
                      className={`absolute left-[11px] top-1/2 block h-px w-6 -translate-y-1/2 transition-colors duration-500 md:hidden ${
                        isActive ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />

                    {/* Desktop: connector stub from dot edge toward the card.
                        Positioned so it starts just outside the dot circle (14px radius)
                        and extends 36px toward the card — clearly visible even when inactive. */}
                    <div
                      className={`absolute top-1/2 hidden h-px w-9 -translate-y-1/2 transition-colors duration-500 md:block ${
                        isLeft
                          ? 'right-[calc(50%+13px)]'   // extends leftward from dot edge
                          : 'left-[calc(50%+13px)]'    // extends rightward from dot edge
                      } ${isActive ? 'bg-green-500' : 'bg-gray-300'}`}
                    />

                    {/* Dot circle */}
                    <motion.div
                      ref={(el) => { dotRefs.current[index] = el }}
                      initial={false}
                      animate={{
                        scale: isActive ? 1.08 : 0.94,
                        backgroundColor: isActive ? '#22c55e' : '#ffffff',
                        borderColor: isActive ? '#22c55e' : '#d1d5db',
                        boxShadow: isActive
                          ? '0 0 0 10px rgba(34,197,94,0.14)'
                          : '0 0 0 0 rgba(34,197,94,0)',
                      }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="relative mt-1 h-7 w-7 rounded-full border-4 md:mt-0"
                    >
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 0.45 : 0.2,
                          backgroundColor: '#ffffff',
                        }}
                        className="absolute inset-[5px] rounded-full"
                      />
                    </motion.div>
                  </div>

                  {/* Empty opposing column (desktop only) */}
                  {isLeft ? (
                    <div className="hidden md:block md:col-start-3" />
                  ) : (
                    <div className="hidden md:block md:col-start-1" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
