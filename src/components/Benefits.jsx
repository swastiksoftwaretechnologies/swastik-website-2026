import { motion } from 'framer-motion'
import { Network, Lightbulb, UserRound, Workflow, Gauge, Plug, Sparkles } from 'lucide-react'
import SplitText from './animations/SplitText'
import { ScrollReveal } from './ui/ScrollReveal'
import { benefits } from '../data/benefits'

const ICON_MAP = { Network, Lightbulb, UserRound, Workflow, Gauge, Plug, Sparkles }

function resolveIcon(name) {
  return ICON_MAP[name] || Sparkles
}

export default function Benefits() {
  return (
    <section id="benefits" aria-labelledby="benefits-heading" className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-green-600">
            Why work with us
          </p>
          <SplitText
            id="benefits-heading"
            text="AI depth without losing software-engineering discipline."
            tag="h2"
            splitType="chars"
            delay={20}
            duration={0.9}
            className="mx-auto block text-4xl font-bold tracking-[-0.04em] text-gray-950 md:text-5xl lg:text-6xl"
          />
          <ScrollReveal className="mx-auto mt-6 max-w-3xl">
            <p className="text-lg leading-8 text-gray-600">
              The advantage is not access to a model API. It is knowing how to turn uncertain model behavior into a dependable product.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = resolveIcon(benefit.icon)

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-[2rem] border border-gray-200 bg-white/85 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-[0_26px_70px_rgba(34,197,94,0.07)]"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 ring-1 ring-gray-200 transition duration-300 group-hover:bg-green-50 group-hover:text-green-700 group-hover:ring-green-200">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-gray-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
