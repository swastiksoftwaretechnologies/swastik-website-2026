import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, X } from 'lucide-react'
import { Button } from './ui/Button'
import { useContactModal } from '../context/ContactModalContext'

const INFO = [
  {
    icon: Phone,
    lines: ['+91 123 123 1234', '+91 123 123 5678'],
  },
  {
    icon: Mail,
    lines: ['info@swastik.com'],
  },
  {
    icon: MapPin,
    lines: [
      'A-314, Artham Mall, 3rd Floor,',
      'Zaveri Bazaar',
      'Mumbai, Maharashtra, India – 400002',
    ],
  },
]

const FIELD_CLS =
  'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-green-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-200'

export default function ContactModal() {
  const { open, closeModal } = useContactModal()
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) { setSubmitted(false); return }
    const handler = (e) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, closeModal])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[100] bg-slate-950/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Contact us"
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_100px_rgba(15,23,42,0.25)] max-h-[90vh]"
            >
              {/* Close button — sits over the white right panel so must use dark colours */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-gray-900 md:right-5 md:top-5"
              >
                <X size={18} />
              </button>

              {/* ── Left panel ── */}
              <div className="relative hidden shrink-0 flex-col overflow-hidden bg-gradient-to-br from-green-500 to-green-600 p-10 text-white md:flex md:w-[42%]">
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/8" />
                <div className="pointer-events-none absolute -bottom-8 -left-4 h-36 w-36 rounded-full bg-white/6" />
                <div className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full bg-white/6" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-100">
                  Reach out
                </span>
                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em]">
                  Let&apos;s Build<br />Something Great
                </h2>
                <p className="mt-4 text-sm leading-6 text-green-100">
                  Have a project in mind? Drop us a message and we&apos;ll get back to you within 24 hours.
                </p>

                <div className="mt-10 space-y-7">
                  {INFO.map(({ icon: Icon, lines }) => (
                    <div key={lines[0]} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                        <Icon size={18} />
                      </div>
                      <div className="space-y-0.5">
                        {lines.map((l) => (
                          <p key={l} className="text-sm leading-5 text-green-50">{l}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right panel ── */}
              <div className="flex flex-1 flex-col overflow-y-auto p-7 md:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-1 flex-col items-center justify-center gap-5 text-center"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 ring-4 ring-green-100">
                        <CheckCircle2 size={40} className="text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-950">Message Sent!</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          We&apos;ll get back to you within 24 hours.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="mt-2 text-sm font-semibold text-green-600 underline-offset-2 hover:underline"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-xl font-semibold tracking-tight text-gray-950">
                        Send us a message
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Fill out the form and we&apos;ll be in touch shortly.
                      </p>

                      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-700">
                              Full Name <span className="text-green-500">*</span>
                            </label>
                            <input required type="text" placeholder="Your Name" className={FIELD_CLS} />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-700">
                              Your Email <span className="text-green-500">*</span>
                            </label>
                            <input required type="email" placeholder="Email Address" className={FIELD_CLS} />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-700">
                              Phone{' '}
                              <span className="font-normal text-gray-400">(Optional)</span>
                            </label>
                            <input type="tel" placeholder="Phone Number" className={FIELD_CLS} />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-700">
                              Subject <span className="text-green-500">*</span>
                            </label>
                            <input required type="text" placeholder="Subject" className={FIELD_CLS} />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-700">
                            How can we help you?
                          </label>
                          <textarea
                            rows={5}
                            placeholder="What's on your mind..."
                            className={`${FIELD_CLS} resize-none`}
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full justify-center rounded-2xl px-8 py-4 text-base shadow-[0_14px_34px_rgba(34,197,94,0.22)] hover:shadow-[0_20px_44px_rgba(34,197,94,0.3)]"
                        >
                          Submit Now <ArrowRight size={18} />
                        </Button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
