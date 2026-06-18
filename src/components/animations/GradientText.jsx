import clsx from 'clsx'

export default function GradientText({ children, className = '' }) {
  return (
    <span
      className={clsx(
        'inline-block bg-[linear-gradient(120deg,#166534_0%,#22c55e_35%,#86efac_52%,#16a34a_68%,#166534_100%)] bg-[length:220%_100%] bg-clip-text text-transparent animate-[gradient-sweep_6s_ease-in-out_infinite]',
        className
      )}
    >
      {children}
    </span>
  )
}
