import { useState } from 'react'
import { ArrowRight, Linkedin, Twitter, Github, Send, Phone, Mail } from 'lucide-react'
import { useContactModal } from '../context/ContactModalContext'

const footerLinks = {
  Services: [
    { label: 'AI Automation', href: '#services' },
    { label: 'Custom Software', href: '#services' },
    { label: 'Data Analytics', href: '#services' },
    { label: 'AI Chatbots', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
}

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Security', href: '#' },
]

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'X / Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
]

function scrollTo(href) {
  if (!href.startsWith('#')) return
  const id = href.slice(1)
  const el = document.getElementById(id)
  if (!el) return
  if (window.lenis) {
    window.lenis.scrollTo(el, { offset: -96, duration: 1.1 })
    return
  }
  el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { openModal } = useContactModal()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer id="contact" className="relative border-t border-gray-200 bg-white px-4 pt-16 md:px-6 md:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-3 text-left"
              aria-label="Back to top"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/12 ring-1 ring-green-500/20">
                <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_16px_rgba(34,197,94,0.5)]" />
              </span>
              <span className="text-xl font-semibold tracking-tight text-gray-900">
                Samvat AI
              </span>
            </button>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Intelligent solutions for modern businesses. We design and build the
              products that move the world forward.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:scale-110 hover:border-green-300 hover:text-green-600"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-2.5">
              <a
                href="tel:+919173915522"
                className="flex items-center gap-2.5 text-sm text-gray-500 transition hover:text-green-600"
              >
                <Phone size={14} className="shrink-0 text-green-500" />
                +91 123 123 1234
              </a>
              <a
                href="mailto:info@zestratech.com"
                className="flex items-center gap-2.5 text-sm text-gray-500 transition hover:text-green-600"
              >
                <Mail size={14} className="shrink-0 text-green-500" />
                info@swastik.com
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Services</p>
            <ul className="mt-4 space-y-3">
              {footerLinks.Services.map(({ label, href }) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(href)}
                    className="group flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-green-600"
                  >
                    <ArrowRight
                      size={13}
                      className="shrink-0 opacity-0 transition group-hover:opacity-100"
                    />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Company</p>
            <ul className="mt-4 space-y-3">
              {footerLinks.Company.map(({ label, href }) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => href === '#contact' ? openModal() : scrollTo(href)}
                    className="group flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-green-600"
                  >
                    <ArrowRight
                      size={13}
                      className="shrink-0 opacity-0 transition group-hover:opacity-100"
                    />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Stay Updated</p>
            <p className="mt-3 text-sm leading-6 text-gray-500">
              Subscribe for the latest in AI and technology — no spam, unsubscribe
              any time.
            </p>

            {submitted ? (
              <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-4 text-sm font-medium text-green-700">
                ✓ You&apos;re subscribed! Thanks for joining.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 min-w-0 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  />
                  <button
                    type="submit"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500 text-white shadow-sm transition hover:bg-green-600 hover:shadow-[0_8px_20px_rgba(34,197,94,0.3)]"
                    aria-label="Subscribe"
                  >
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-400 sm:flex-row">
            <p>© 2026 Samvat AI. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {legalLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="transition hover:text-green-600"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
