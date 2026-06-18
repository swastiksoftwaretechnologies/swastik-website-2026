import { ScrollReveal } from './ScrollReveal'

/**
 * Reusable section heading block: eyebrow label + h2 + optional subtext.
 * Uses scroll-reveal animation. SplitText from reactbits will be wired in Phase 2+.
 */
export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignClass = {
    center: 'text-center mx-auto',
    left: 'text-left',
  }[align]

  return (
    <ScrollReveal className={`max-w-3xl ${alignClass} mb-12 ${className}`}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-widest text-green-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
