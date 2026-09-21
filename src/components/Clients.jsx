import SplitText from './animations/SplitText'
import { ScrollReveal } from './ui/ScrollReveal'
import searceLogo from '../assets/client-logos/searce.svg'
import easeMyTripLogo from '../assets/client-logos/easemytrip.png'
import ixigoLogo from '../assets/client-logos/ixigo.png'
import tboLogo from '../assets/client-logos/tbo.svg'

const clientMarks = [
  { name: 'Searce', logo: searceLogo, className: 'h-10 w-10' },
  { name: 'Torch Wealth Management', fallback: 'TW', className: 'h-10 w-10 bg-gray-950 text-white' },
  { name: 'EaseMyTrip', logo: easeMyTripLogo, className: 'h-10 w-20' },
  { name: 'ixigo', logo: ixigoLogo, className: 'h-10 w-10 rounded-xl' },
  { name: 'TBO', logo: tboLogo, className: 'h-10 w-20' },
]

export default function Clients() {
  return (
    <section aria-labelledby="product-proof-heading" className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-gray-200 bg-white/80 px-6 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.05)] backdrop-blur-sm md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-green-600">
            Selected client and product contexts
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
              The work ranges from a two-part AI interview flow for Searce to research software for Torch Wealth Management&apos;s ~$700M+ AUM context, a five-action Australian care CRM, and travel data infrastructure used by three platforms. Reliability matters more than demo-day polish.
            </p>
          </ScrollReveal>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {clientMarks.map(({ name, logo, fallback, className }) => (
            <div key={name} className="flex min-h-20 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              {logo ? <img src={logo} alt={`${name} logo`} className={`shrink-0 object-contain ${className}`} /> : <span aria-label={`${name} word mark`} className={`flex shrink-0 items-center justify-center rounded-xl text-sm font-bold ${className}`}>{fallback}</span>}
              <span className="text-sm font-semibold leading-5 text-gray-700">{name}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs leading-5 text-gray-500">Official public logo assets are used where available. Torch Wealth Management remains a text mark pending an approved logo file.</p>
      </div>
    </section>
  )
}
