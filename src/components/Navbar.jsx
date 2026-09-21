import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { Button } from './ui/Button'
import { useNavScroll } from '../hooks/useNavScroll'
import { useContactModal } from '../context/ContactModalContext'

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Capabilities', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const scrolled = useNavScroll(50)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openModal } = useContactModal()

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollToTarget = (href) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)

    if (!element) return

    setMobileOpen(false)

    if (window.lenis) {
      window.lenis.scrollTo(element, {
        offset: -96,
        duration: 1.1,
      })
      return
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
        <div
          className={clsx(
            'mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-transparent transition-all duration-300',
            scrolled
              ? 'bg-white/80 px-4 py-3 shadow-[0_14px_38px_rgba(15,23,42,0.08)] backdrop-blur-lg md:px-6'
              : 'bg-white/60 px-4 py-5 backdrop-blur-sm md:px-6'
          )}
        >
          <button
            type="button"
            onClick={() => scrollToTarget('#home')}
            className="flex items-center gap-3 text-left"
            aria-label="Go to top"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/12 ring-1 ring-green-500/15">
              <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)]" />
            </span>
            <span className="text-xl font-semibold tracking-tight text-gray-900">
              Exact Build
            </span>
          </button>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToTarget(item.href)}
                className="group relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-gray-950"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-green-500 transition-transform duration-200 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              onClick={openModal}
              className="rounded-2xl px-5 py-3 shadow-[0_12px_32px_rgba(34,197,94,0.22)] hover:shadow-[0_18px_44px_rgba(34,197,94,0.28)]"
            >
              Schedule a Free 15-Min Call
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm transition hover:border-green-300 hover:text-green-600 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div
        className={clsx(
          'fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={clsx(
          'fixed right-4 top-[5.5rem] z-50 w-[min(22rem,calc(100vw-2rem))] rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_24px_64px_rgba(15,23,42,0.18)] transition-all duration-300 lg:hidden',
          mobileOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        )}
      >
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-900">Navigate</p>
          <p className="mt-1 text-sm text-gray-500">Jump to any section with smooth scroll.</p>
        </div>

        <div className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToTarget(item.href)}
              className="flex w-full items-center justify-between rounded-2xl border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700 transition hover:border-green-300 hover:bg-green-50/70 hover:text-green-700"
            >
              <span>{item.label}</span>
              <span className="text-green-500">↗</span>
            </button>
          ))}
        </div>

        <Button
          onClick={() => { setMobileOpen(false); openModal() }}
          className="mt-5 w-full justify-center rounded-2xl"
        >
          15 Minutes with Rushil
        </Button>
      </aside>
    </>
  )
}
