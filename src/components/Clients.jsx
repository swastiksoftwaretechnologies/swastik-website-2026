import SplitText from './animations/SplitText'
import { ScrollReveal } from './ui/ScrollReveal'

const companyNames = ['Searce', 'Torch Wealth Management', 'EaseMyTrip', 'ixigo', 'TBO']

export default function Clients() {
  return (
    <section aria-labelledby="product-proof-heading" className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-gray-200 bg-white/80 px-6 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.05)] backdrop-blur-sm md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-green-600">
            Selected products built for or used by
          </p>
          <SplitText
            id="product-proof-heading"
            text="Built where AI has to survive real workflows."
            tag="h2"
            splitType="chars"
            delay={18}
            duration={0.8}
            className="mx-auto block text-4xl font-bold tracking-[-0.04em] text-gray-950 md:text-5xl"
          />
          <ScrollReveal className="mx-auto mt-6 max-w-3xl">
            <p className="text-lg leading-8 text-gray-600">
              Our products span hiring, financial research, care operations and travel infrastructure - environments where accuracy, reliability and usability matter more than demo-day polish.
            </p>
          </ScrollReveal>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {companyNames.map((name) => (
            <span key={name} className="rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-700">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
