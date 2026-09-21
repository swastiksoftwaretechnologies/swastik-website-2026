import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Mail, MapPin, Phone, X } from 'lucide-react'
import { Button } from './ui/Button'
import { useContactModal } from '../context/ContactModalContext'

const BOOKING_EMAIL = 'swastiksoftwaretechnologies@gmail.com'
const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

function localDate() {
  const date = new Date()
  return new Date(date.getTime() - date.getTimezoneOffset() * 60_000).toISOString().slice(0, 10)
}

function gmailComposeUrl(subject = '', body = '') {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to: BOOKING_EMAIL })
  if (subject) params.set('su', subject)
  if (body) params.set('body', body)
  return `https://mail.google.com/mail/?${params.toString()}`
}

export default function ContactModal() {
  const { open, closeModal } = useContactModal()
  const dialogRef = useRef(null)
  const returnFocusRef = useRef(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [timeError, setTimeError] = useState('')
  const [submitted, setSubmitted] = useState(false)

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

  useEffect(() => {
    if (!open) {
      setSelectedTime('')
      setTimeError('')
      setSubmitted(false)
    }
  }, [open])

  const submitBooking = (event) => {
    event.preventDefault()
    if (!selectedTime) {
      setTimeError('Choose a preferred time to continue.')
      return
    }
    const form = new FormData(event.currentTarget)
    const body = [
      'New Exact Build 15-minute call request',
      '',
      `Name: ${form.get('name')}`,
      `Email: ${form.get('email')}`,
      `Preferred date: ${form.get('date')}`,
      `Preferred time: ${selectedTime} IST`,
      `Workflow or goal: ${form.get('workflow') || 'Not provided'}`,
    ].join('\n')
    setSubmitted(true)
    window.open(gmailComposeUrl('Exact Build - 15-minute call request', body), '_blank', 'noopener,noreferrer')
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="fixed inset-0 z-[100] bg-slate-950/50 backdrop-blur-sm" onClick={closeModal} />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4">
            <motion.div ref={dialogRef} key="modal" initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} role="dialog" aria-modal="true" aria-labelledby="contact-heading" tabIndex="-1" onClick={(event) => event.stopPropagation()} className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl overflow-hidden rounded-[1.5rem] bg-white shadow-[0_40px_100px_rgba(15,23,42,0.25)] sm:max-h-[calc(100dvh-2rem)] sm:rounded-[2rem]">
              <button type="button" onClick={closeModal} aria-label="Close booking form" className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-gray-900 md:right-5 md:top-5"><X size={18} /></button>

              <aside className="relative hidden w-[32%] shrink-0 flex-col overflow-hidden bg-gradient-to-br from-green-500 to-green-700 p-7 text-white lg:flex lg:p-8">
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/8" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-100">Exact Build call</span>
                <h2 className="mt-4 text-2xl font-semibold leading-8">Bring the workflow. Leave with a clearer build path.</h2>
                <div className="mt-8 space-y-5">
                  <div className="flex gap-4"><CalendarDays size={19} className="mt-0.5 shrink-0" /><p className="text-sm leading-6 text-green-50">Choose a preferred date and time. We will confirm availability personally.</p></div>
                  <div className="flex gap-4"><Mail size={19} className="mt-0.5 shrink-0" /><a className="break-all text-sm leading-6 text-green-50 underline-offset-4 hover:underline" href={gmailComposeUrl()} target="_blank" rel="noreferrer">{BOOKING_EMAIL}</a></div>
                  <div className="flex gap-4"><MapPin size={19} className="mt-0.5 shrink-0" /><p className="text-sm leading-6 text-green-50">Mumbai, India · working with global teams</p></div>
                </div>
                <p className="mt-auto pt-8 text-xs leading-5 text-green-100">No generic sales deck. We will look at the actual workflow, data and leverage.</p>
              </aside>

              <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain p-5 pt-7 sm:p-6 lg:p-7">
                {submitted ? (
                  <div className="flex min-h-96 flex-col justify-center text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700"><CheckCircle2 size={28} /></span>
                    <h2 id="contact-heading" className="mt-5 text-3xl font-bold tracking-tight text-gray-950">Request prepared.</h2>
                    <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-gray-600">Gmail has opened with your preferred time and workflow details addressed to Exact Build. Send it to complete the request; we will confirm the slot personally.</p>
                    <Button onClick={closeModal} variant="ghost" className="mx-auto mt-8 justify-center rounded-2xl">Done</Button>
                  </div>
                ) : (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-green-600">Book a 15-minute build call</p>
                    <h2 id="contact-heading" className="mt-3 max-w-2xl pr-8 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">Tell us when you want to make the workflow useful.</h2>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-gray-600">Choose a time that works. Add the bottleneck in one sentence and we will come prepared.</p>

                    <form className="mt-5 space-y-4" onSubmit={submitBooking}>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <label className="block text-sm font-semibold text-gray-700">Your name<input required name="name" autoComplete="name" className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-950 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="Your name" /></label>
                        <label className="block text-sm font-semibold text-gray-700">Work email<input required name="email" type="email" autoComplete="email" className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-950 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="you@company.com" /></label>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-[minmax(12rem,0.58fr)_1.42fr]">
                        <label className="block text-sm font-semibold text-gray-700">Preferred date<input required name="date" type="date" min={localDate()} className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-950 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100" /></label>
                        <label className="block text-sm font-semibold text-gray-700">Preferred time <span className="font-normal text-gray-400">IST</span><input required name="time" type="time" min="09:00" max="19:00" step="900" value={selectedTime} onChange={(event) => { setSelectedTime(event.target.value); setTimeError('') }} className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-950 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100" />{timeError && <p className="mt-2 text-xs font-medium text-red-600">{timeError}</p>}</label>
                      </div>
                      <label className="block text-sm font-semibold text-gray-700">What are you trying to improve? <span className="font-normal text-gray-400">Optional</span><textarea name="workflow" rows="2" className="mt-1.5 w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-950 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="For example: reduce manual review in our hiring workflow" /></label>
                      <div className="sticky bottom-0 z-10 -mx-1 flex flex-col gap-3 border-t border-gray-100 bg-white/95 px-1 pb-1 pt-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between"><p className="text-xs leading-5 text-gray-500">This opens a pre-addressed Gmail request. We confirm every appointment personally.</p><Button type="submit" className="shrink-0 justify-center rounded-2xl px-5 py-3">Open Gmail request <ArrowRight size={17} /></Button></div>
                    </form>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500"><a href={gmailComposeUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-green-700"><Mail size={16} />Email with Gmail</a><a href="tel:+919820074233" className="inline-flex items-center gap-2 transition hover:text-green-700"><Phone size={16} />Call Rushil</a><span className="inline-flex items-center gap-2"><Clock3 size={16} />15 minutes</span></div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
