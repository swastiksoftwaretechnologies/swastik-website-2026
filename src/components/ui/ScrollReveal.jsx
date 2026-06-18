import { useScrollReveal } from '../../hooks/useScrollReveal'

export function ScrollReveal({ children, className = '', delay = 0, threshold }) {
  const { ref, isVisible } = useScrollReveal({ threshold })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
