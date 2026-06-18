import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from './ui/Button'
import { ScrollReveal } from './ui/ScrollReveal'
import { useContactModal } from '../context/ContactModalContext'

const variants = {
  mid: {
    headline: "Let's Build Your Next Big Idea",
    subtext:
      'Stop letting technical debt dictate your growth. Partner with Samvat AI to engineer solutions that scale.',
    glow: false,
  },
  final: {
    headline: 'Ready to Transform Your Business with AI?',
    subtext:
      'Book a free consultation and discover how AI can solve your toughest challenges.',
    glow: true,
  },
}

export default function CTABreak({ variant = 'mid', id }) {
  const { headline, subtext, glow } = variants[variant]
  const { openModal } = useContactModal()

  return (
    <section
      id={id}
      className="relative isolate overflow-hidden px-4 py-20 md:px-6 md:py-28"
    >
      {/* Background tint */}
      <div className="absolute inset-0 bg-green-50/70" />

      {/* Decorative gradient edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

      {/* Ambient glow (final variant only) */}
      {glow && (
        <>
          <div className="ambient-glow hero-glow pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 opacity-70" />
          <div className="ambient-glow hero-glow pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 opacity-50" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <ScrollReveal>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-green-600"
          >
            {variant === 'mid' ? 'Work with us' : 'Get started'}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold tracking-[-0.04em] text-gray-950 md:text-5xl lg:text-6xl"
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
          >
            {subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              onClick={openModal}
              className="justify-center rounded-2xl px-8 py-4 text-base shadow-[0_18px_44px_rgba(34,197,94,0.22)] hover:shadow-[0_24px_52px_rgba(34,197,94,0.3)]"
            >
              Get in Touch <ArrowRight size={18} />
            </Button>
            <Button
              variant="ghost"
              onClick={openModal}
              className="justify-center rounded-2xl bg-white/80 px-8 py-4 text-base backdrop-blur-sm"
            >
              <Calendar size={18} />
              Book a Call
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
