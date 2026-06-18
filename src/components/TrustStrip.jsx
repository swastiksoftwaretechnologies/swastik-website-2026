import { motion } from 'framer-motion'

const companyNames = [
  'AcmeCorp',
  'GlobalTech',
  'Nexus',
  'Synergy',
  'Vertex',
  'Zenith',
  'FrostTech',
  'OmniCoin',
]

// Duplicate the list to create a seamless loop; keys are disambiguated by set index
const marqueeItems = [
  ...companyNames.map((name, i) => ({ name, key: `a-${i}` })),
  ...companyNames.map((name, i) => ({ name, key: `b-${i}` })),
]

export default function TrustStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="px-4 pb-10 md:px-6 md:pb-16"
    >
      <div className="mx-auto max-w-7xl border-y border-gray-200/80 py-8 md:py-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
          Trusted by 50+ innovative companies
        </p>

        <div className="overflow-hidden" aria-hidden="true">
          <div className="marquee-track flex min-w-max items-center gap-4 pr-4">
            {marqueeItems.map(({ name, key }) => (
              <div
                key={key}
                className="flex items-center gap-3 rounded-full border border-gray-200 bg-white/80 px-5 py-3 text-sm font-medium text-gray-600 shadow-sm backdrop-blur-sm"
              >
                <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-green-500/80" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
