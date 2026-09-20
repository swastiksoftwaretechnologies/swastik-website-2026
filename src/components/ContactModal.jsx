import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Phone, X } from 'lucide-react'
import { Button } from './ui/Button'
import { useContactModal } from '../context/ContactModalContext'

const INFO = [
  { icon: Phone, lines: ['+91 98200 74233'], href: 'tel:+919820074233' },
  { icon: Mail, lines: ['rushilksanghavi@gmail.com'], href: 'mailto:rushilksanghavi@gmail.com' },
  { icon: MapPin, lines: ['Artham Mall, Marine Lines, Mumbai'] },
]

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function ContactModal() {
  const { open, closeModal } = useContactModal()
  const dialogRef = useRef(null)
  const returnFocusRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    returnFocusRef.current = document.activeElement
    const frame = requestAnimationFrame(() => dialogRef.current?.focus())
    const handler = (event) => {
      if (event.key === 'Escape') closeModal()
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = [...dialogRef.current.querySelectorAll(focusableSelector)]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
      returnFocusRef.current?.focus?.()
    }
  }, [open, closeModal])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="fixed inset-0 z-[100] bg-slate-950/50 backdrop-blur-sm" onClick={closeModal} />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4">
            <motion.div
              ref={dialogRef}
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-heading"
              tabIndex="-1"
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-white shadow-[0_40px_100px_rgba(15,23,42,0.25)] sm:max-h-[90vh] sm:rounded-[2rem]"
            >
              <button type="button" onClick={closeModal} aria-label="Close contact options" className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-gray-900 md:right-5 md:top-5"><X size={18} /></button>

              <div className="relative hidden shrink-0 flex-col overflow-hidden bg-gradient-to-br from-green-500 to-green-600 p-8 text-white md:flex md:w-[38%] md:p-9">
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/8" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-100">Contact Samvat AI</span>
                <p className="mt-4 text-xl font-semibold leading-8">A useful AI product begins with the workflow, not a generic pitch.</p>
                <div className="mt-8 space-y-6">
                  {INFO.map(({ icon: Icon, lines, href }) => {
                    const content = <div className="space-y-0.5">{lines.map((line) => <p key={line} className="text-sm leading-5 text-green-50">{line}</p>)}</div>
                    return <div key={lines[0]} className="flex items-start gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20"><Icon size={18} /></div>{href ? <a href={href} className="rounded text-white focus:outline-none focus:ring-2 focus:ring-white">{content}</a> : content}</div>
                  })}
                </div>
              </div>

              <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain p-5 pt-7 sm:p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-green-600">15 minutes with Rushil</p>
                <h2 id="contact-heading" className="mt-3 max-w-xl pr-8 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl md:text-4xl">Tell me what you are trying to improve.</h2>
                <p className="mt-4 text-base leading-7 text-gray-600">A workflow, repetitive process, data problem or AI product idea is enough. You do not need a finished specification.</p>
                <div className="mt-6 rounded-[1.5rem] border border-gray-200 bg-gray-50 p-4 sm:mt-7 sm:p-5">
                  <p className="text-sm leading-6 text-gray-600">I will get back to you personally.</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <Button href="mailto:rushilksanghavi@gmail.com?subject=Samvat%20AI%20consultation" className="w-full justify-center rounded-2xl px-4 py-3.5 text-sm">Email Rushil <ArrowRight size={17} /></Button>
                    <Button href="tel:+919820074233" variant="ghost" className="w-full justify-center rounded-2xl px-4 py-3.5 text-sm"><Phone size={17} />Call Rushil</Button>
                  </div>
                  <p className="mt-3 text-center text-xs text-gray-500">+91 98200 74233</p>
                </div>
                {/* TODO: Replace these direct contact actions with a verified scheduling URL and contact-form endpoint when supplied. */}
                <p className="mt-6 text-xs leading-5 text-gray-500">A scheduling link and form endpoint will be added once approved.</p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
