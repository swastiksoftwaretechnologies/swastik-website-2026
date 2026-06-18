import clsx from 'clsx'

export function Button({ children, variant = 'primary', className = '', href, onClick, ...props }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer select-none'

  const variants = {
    primary: 'bg-green-500 hover:bg-green-600 text-white shadow-sm hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5',
    ghost: 'border border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 hover:-translate-y-0.5',
    green_outline: 'border border-green-500 text-green-600 hover:bg-green-50 hover:-translate-y-0.5',
  }

  const classes = clsx(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
