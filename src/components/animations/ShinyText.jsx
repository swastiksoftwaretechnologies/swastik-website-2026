import clsx from 'clsx'

export default function ShinyText({ children, className = '' }) {
  return (
    <span className={clsx('relative inline-flex overflow-hidden whitespace-nowrap', className)}>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)] opacity-70 animate-[shiny-sweep_3.8s_ease-in-out_infinite]"
      />
    </span>
  )
}
