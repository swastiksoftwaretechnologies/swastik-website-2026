import { motion } from 'framer-motion'

const deliveryPrinciples = [
  'Start with the workflow',
  'Respect the data boundary',
  'Integrate with the real systems',
  'Ship a useful first release',
]

export default function TrustStrip() {
  return (
    <motion.section
      aria-labelledby="delivery-heading"
      initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="px-4 pb-10 md:px-6 md:pb-16"
    >
      <div className="mx-auto max-w-7xl border-y border-gray-200/80 py-7 md:py-9">
        <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-600">Exact Build delivery</p>
            <h2 id="delivery-heading" className="mt-1 text-lg font-semibold tracking-tight text-gray-950">AI that earns a place in the workflow.</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-gray-500">The details matter: the data boundary, the people using it and the systems it has to work with.</p>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
          {deliveryPrinciples.map((item) => (
            <span key={item} className="rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600">{item}</span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
