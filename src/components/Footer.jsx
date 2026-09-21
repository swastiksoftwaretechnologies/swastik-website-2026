import { ArrowRight, Mail, Phone } from 'lucide-react'
import { useContactModal } from '../context/ContactModalContext'

const serviceLinks = [
  'AI Agents & Automation',
  'RAG & Knowledge Systems',
  'Multimodal AI',
  'Custom AI SaaS',
  'AI for Operational Workflows',
]

const companyLinks = [
  { label: 'Selected work', href: '#projects' },
  { label: 'Founder', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

function scrollTo(href) {
  const element = document.getElementById(href.slice(1))
  if (!element) return
  if (window.lenis) {
    window.lenis.scrollTo(element, { offset: -96, duration: 1.1 })
    return
  }
  element.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const { openModal } = useContactModal()

  return (
    <footer id="contact" className="relative border-t border-gray-200 bg-white px-4 pt-16 md:px-6 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <button type="button" onClick={() => scrollTo('#home')} className="flex items-center gap-3 text-left" aria-label="Back to top">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/12 ring-1 ring-green-500/20"><span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_16px_rgba(34,197,94,0.5)]" /></span>
              <span className="text-xl font-semibold tracking-tight text-gray-900">Exact Build</span>
            </button>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">Serious AI engineering for workflows generic tools cannot solve.</p>
            <div className="mt-6 space-y-2.5">
              <a href="tel:+919820074233" className="flex items-center gap-2.5 text-sm text-gray-500 transition hover:text-green-600"><Phone size={14} className="shrink-0 text-green-500" />+91 98200 74233</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=swastiksoftwaretechnologies%40gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 break-all text-sm text-gray-500 transition hover:text-green-600"><Mail size={14} className="shrink-0 text-green-500" />swastiksoftwaretechnologies@gmail.com</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Capabilities</p>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((label) => <li key={label}><button type="button" onClick={() => scrollTo('#services')} className="group flex items-center gap-1.5 text-left text-sm text-gray-500 transition hover:text-green-600"><ArrowRight size={13} className="shrink-0 opacity-0 transition group-hover:opacity-100" />{label}</button></li>)}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Explore</p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map(({ label, href }) => <li key={label}><button type="button" onClick={() => scrollTo(href)} className="group flex items-center gap-1.5 text-left text-sm text-gray-500 transition hover:text-green-600"><ArrowRight size={13} className="shrink-0 opacity-0 transition group-hover:opacity-100" />{label}</button></li>)}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Have a real AI use case?</p>
            <p className="mt-3 text-sm leading-6 text-gray-500">Complex workflow. Proprietary data. High-value decision. Let&apos;s see if AI can create leverage.</p>
            <button type="button" onClick={openModal} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition hover:text-green-800">Schedule a Free 15-Min Call <ArrowRight size={16} /></button>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 py-6"><p className="text-center text-xs text-gray-400">© 2026 Exact Build. All rights reserved.</p></div>
      </div>
    </footer>
  )
}
