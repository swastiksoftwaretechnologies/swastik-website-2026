import { motion } from 'framer-motion'

const proofItems = [
  'Microsoft Bing Search + Azure',
  '1.2B+ query-question pairs evaluated daily',
  '2.1B+ fuzz-test inputs executed',
  '3 published research papers',
  "IIT Jodhpur Director's Gold Medal",
]

export default function TrustStrip() {
  return (
    <motion.section
      aria-labelledby="founder-proof-heading"
      initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="px-4 pb-10 md:px-6 md:pb-16"
    >
      <div className="mx-auto max-w-7xl border-y border-gray-200/80 py-8 md:py-10">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-green-600">
          Founder engineering background
        </p>
        <h2 id="founder-proof-heading" className="sr-only">Founder engineering proof</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {proofItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gray-200 bg-white/80 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-gray-500">
          Figures describe systems Rushil engineered at Microsoft. They are not Samvat AI client metrics.
        </p>
      </div>
    </motion.section>
  )
}
