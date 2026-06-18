import SplitText from './animations/SplitText'
import CircularGallery from './animations/CircularGallery'
import { ScrollReveal } from './ui/ScrollReveal'

const clientNames = [
  'AcmeCorp',
  'FrostTech',
  'OmniCoin',
  'ZapDrive',
  'GreenScale',
  'GlobalNet',
  'AeroSpace',
  'NexGen',
  'Quantum',
  'Stratos',
  'Vertex',
  'Synergy',
  'Zenith',
  'ParkTech',
  'WorkDiv',
  'MegaSoft',
]

const brandAccents = [
  '#0f766e',
  '#2563eb',
  '#7c3aed',
  '#d97706',
  '#16a34a',
  '#334155',
  '#0284c7',
  '#9333ea',
]

const buildLogoSvg = (name, accent) => {
  const safeName = name.replace(/&/g, '&amp;')
  const monogram = name
    .replace(/[^A-Za-z0-9 ]/g, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="640" viewBox="0 0 900 640">
      <defs>
        <linearGradient id="cardGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#f8fafc"/>
        </linearGradient>
      </defs>
      <rect width="900" height="640" rx="48" fill="url(#cardGlow)"/>
      <circle cx="180" cy="190" r="84" fill="${accent}" fill-opacity="0.12"/>
      <circle cx="180" cy="190" r="60" fill="${accent}" fill-opacity="0.18"/>
      <text x="180" y="208" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="54" font-weight="700" fill="${accent}">${monogram}</text>
      <text x="450" y="300" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="700" letter-spacing="-1.2" fill="#0f172a">${safeName}</text>
      <text x="450" y="370" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="500" fill="#64748b">Trusted technology partner</text>
      <rect x="140" y="448" width="620" height="18" rx="9" fill="#e2e8f0"/>
      <rect x="140" y="448" width="280" height="18" rx="9" fill="${accent}" fill-opacity="0.82"/>
    </svg>
  `)}`
}

const galleryItems = clientNames.map((name, index) => ({
  text: name,
  image: buildLogoSvg(name, brandAccents[index % brandAccents.length]),
}))

export default function Clients() {
  return (
    <section className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-green-600">
            Our Clients
          </p>
          <SplitText
            text="Trusted by 55+ Brands Worldwide"
            tag="h2"
            splitType="chars"
            delay={22}
            duration={0.9}
            className="mx-auto block text-4xl font-bold tracking-[-0.04em] text-gray-950 md:text-5xl lg:text-6xl"
          />
          <ScrollReveal className="mx-auto mt-6 max-w-3xl">
            <p className="text-lg leading-8 text-gray-600">
              From agile startups to Fortune 500 enterprises, we build the technical
              foundations that drive modern business.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-14 rounded-[2rem] border border-gray-200/80 bg-white/70 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.06)] backdrop-blur-sm md:p-6">
          <div className="relative h-[430px] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_45%)] md:h-[520px]">
            <CircularGallery
              items={galleryItems}
              bend={2.2}
              textColor="#475569"
              borderRadius={0.04}
              font="700 34px Inter"
              scrollSpeed={2.1}
              scrollEase={0.04}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-10 text-center" delay={150}>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-semibold text-green-700 transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-[0_14px_30px_rgba(34,197,94,0.12)]"
          >
            View All Clients <span aria-hidden="true">→</span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  )
}
