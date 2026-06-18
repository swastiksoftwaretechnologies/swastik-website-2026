import SplitText from './animations/SplitText'
import { ScrollReveal } from './ui/ScrollReveal'
import { testimonials } from '../data/testimonials'
import CardSwap, { Card } from './animations/CardSwap'

function QuoteMark() {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 40 32"
      fill="none"
      className="mb-4 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M0 32V19.2C0 8.533 5.333 2.4 16 0L18.4 3.2C13.6 4.267 10.4 6.667 8.8 10.4 7.467 13.6 6.933 16.533 7.2 19.2H16V32H0ZM24 32V19.2C24 8.533 29.333 2.4 40 0L42.4 3.2C37.6 4.267 34.4 6.667 32.8 10.4 31.467 13.6 30.933 16.533 31.2 19.2H40V32H24Z"
        fill="#BBF7D0"
      />
    </svg>
  )
}

function TestimonialCardContent({ t }) {
  return (
    <div className="flex h-full flex-col p-7">
      <QuoteMark />
      <blockquote className="flex-1 text-sm italic leading-6 text-gray-600">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="mt-5 border-t border-gray-100 pt-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700 ring-2 ring-green-200">
            {t.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-950">{t.name}</p>
            <p className="mt-0.5 text-xs text-gray-500">
              {t.role} · {t.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const STATS = [
  { value: '50+', label: 'Happy Clients' },
  { value: '4.9★', label: 'Avg. Rating' },
  { value: '100%', label: 'Recommend Us' },
]

export default function Testimonials() {
  return (
    <section className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">

          {/* Left column */}
          <div className="w-full lg:max-w-[480px] lg:shrink-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-green-600">
              Client stories
            </p>
            <SplitText
              text="What Our Clients Say"
              tag="h2"
              splitType="chars"
              delay={22}
              duration={0.9}
              className="block text-4xl font-bold tracking-[-0.04em] text-gray-950 md:text-5xl lg:text-6xl"
            />
            <ScrollReveal className="mt-6">
              <p className="text-lg leading-8 text-gray-600">
                Real results from real partners. Here&apos;s what the teams
                we&apos;ve worked with have to say.
              </p>
            </ScrollReveal>

            <ScrollReveal className="mt-10 flex flex-wrap gap-10">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-3xl font-bold tracking-tight text-gray-950">
                    {value}
                  </span>
                  <span className="mt-1 text-sm text-gray-500">{label}</span>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Right column — CardSwap */}
          <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden lg:overflow-visible">
            <div className="relative h-[380px] w-full max-w-[420px] sm:h-[420px]">
              <CardSwap
                containerClass="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective-[900px] overflow-visible origin-center scale-[0.82] sm:scale-90 lg:scale-100"
                width={420}
                height={270}
                cardDistance={50}
                verticalDistance={55}
                delay={4000}
                pauseOnHover
                skewAmount={4}
              >
                {testimonials.map((t) => (
                  <Card
                    key={t.name}
                    customClass="!bg-white !border-gray-200 shadow-[0_18px_50px_rgba(15,23,42,0.06)] overflow-hidden"
                  >
                    <TestimonialCardContent t={t} />
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
