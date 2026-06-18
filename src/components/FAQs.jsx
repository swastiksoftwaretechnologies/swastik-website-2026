import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SplitText from './animations/SplitText'
import { ScrollReveal } from './ui/ScrollReveal'
import { faqs } from '../data/faqs'
import { useContactModal } from '../context/ContactModalContext'

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-[1.5rem] border transition duration-200 ${
        isOpen
          ? 'border-green-200 shadow-[0_16px_40px_rgba(34,197,94,0.08)]'
          : 'border-gray-200 hover:border-green-200'
      }`}
      style={{ borderLeftWidth: isOpen ? '4px' : '1px', borderLeftColor: isOpen ? '#22c55e' : undefined }}
    >
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition-colors duration-200 md:px-7 md:py-6 ${
          isOpen ? 'bg-green-50/60' : 'bg-white hover:bg-gray-50/60'
        }`}
        aria-expanded={isOpen}
      >
        <span className="flex-1 text-base font-semibold leading-7 text-gray-950">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-1 shrink-0 ${isOpen ? 'text-green-600' : 'text-gray-400'}`}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-t border-gray-100 bg-white px-6 pb-6 pt-5 md:px-7 md:pb-7">
              <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0)
  const { openModal } = useContactModal()

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-green-600">
            FAQ
          </p>
          <SplitText
            text="Frequently Asked Questions"
            tag="h2"
            splitType="chars"
            delay={18}
            duration={0.9}
            className="mx-auto block text-4xl font-bold tracking-[-0.04em] text-gray-950 md:text-5xl lg:text-6xl"
          />
          <ScrollReveal className="mx-auto mt-6 max-w-3xl">
            <p className="text-lg leading-8 text-gray-600">
              Everything you need to know about working with NovaMind AI. Don&apos;t
              see your question?{' '}
              <button
                type="button"
                onClick={openModal}
                className="font-semibold text-green-600 underline-offset-2 hover:underline"
              >
                Reach out directly.
              </button>
            </p>
          </ScrollReveal>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="relative">
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
