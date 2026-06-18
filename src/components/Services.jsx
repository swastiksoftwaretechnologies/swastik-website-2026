import { motion } from 'framer-motion'
import { Bot, Code2, BarChart3, MessageSquare, ArrowRight, GitBranch, Sparkles } from 'lucide-react'
import SplitText from './animations/SplitText'
import { ScrollReveal } from './ui/ScrollReveal'
import { services } from '../data/services'
import { useContactModal } from '../context/ContactModalContext'

const iconMap = {
  Bot,
  Code2,
  BarChart3,
  MessageSquare,
}

function WorkflowMockup() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-inner">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-green-100 text-green-700">
          <Sparkles size={16} />
        </div>
        <div className="h-3 w-24 rounded-full bg-gray-200" />
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="rounded-2xl border border-green-200 bg-green-50 px-3 py-2 text-xs font-semibold text-green-700">
          Trigger
        </div>
        <ArrowRight className="text-gray-300" size={18} />
        <div className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600">
          Validate
        </div>
        <ArrowRight className="text-gray-300" size={18} />
        <div className="rounded-2xl border border-gray-200 bg-gray-900 px-3 py-2 text-xs font-semibold text-white">
          Launch
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="h-2 rounded-full bg-green-300" />
        <div className="h-2 rounded-full bg-green-500" />
        <div className="h-2 rounded-full bg-green-200" />
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="mx-auto flex w-[11.5rem] items-center justify-center rounded-[2rem] border border-gray-200 bg-white p-3 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:w-[13rem]">
      <div className="w-full rounded-[1.4rem] bg-gray-950 p-2">
        <div className="rounded-[1.1rem] bg-white p-3">
          <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-gray-200" />
          <div className="rounded-2xl bg-green-50 p-3">
            <div className="h-18 rounded-2xl bg-[linear-gradient(135deg,rgba(34,197,94,0.18),rgba(15,23,42,0.08))]" />
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-3 rounded-full bg-gray-200" />
            <div className="h-3 w-2/3 rounded-full bg-gray-100" />
          </div>
          <div className="mt-4 flex gap-2">
            <div className="h-9 flex-1 rounded-2xl bg-gray-100" />
            <div className="h-9 flex-1 rounded-2xl bg-green-500/85" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ChartMockup() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white/80 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-3 w-20 rounded-full bg-gray-200" />
        <div className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-green-700">
          Live
        </div>
      </div>
      <div className="flex h-28 items-end gap-2">
        {[48, 64, 40, 80, 68, 96, 74].map((height, index) => (
          <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-green-500 to-green-200" style={{ height }} />
        ))}
      </div>
      <div className="mt-4 h-px bg-gray-200" />
      <div className="mt-4 flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-green-500" />
        <div className="h-2 w-24 rounded-full bg-gray-200" />
      </div>
    </div>
  )
}

function ChatMockup() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-inner">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 rounded-full bg-green-100">
          <div className="absolute inset-0 flex items-center justify-center text-green-700">
            <Bot size={16} />
          </div>
        </div>
        <div>
          <div className="h-3 w-20 rounded-full bg-gray-200" />
          <div className="mt-1 h-2 w-12 rounded-full bg-green-200" />
        </div>
      </div>
      <div className="mt-5 space-y-3">
        <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-gray-100 px-3 py-2 text-xs text-gray-600">
          I found the customer onboarding issue. Want the suggested automation?
        </div>
        <div className="ml-auto max-w-[78%] rounded-2xl rounded-tr-md bg-green-500 px-3 py-2 text-xs text-white">
          Yes, create the workflow and notify the team.
        </div>
        <div className="max-w-[70%] rounded-2xl rounded-tl-md bg-gray-100 px-3 py-2 text-xs text-gray-600">
          Done. Drafted the workflow and queued the summary.
        </div>
      </div>
    </div>
  )
}

function ServiceMockup({ type }) {
  switch (type) {
    case 'workflow':
      return <WorkflowMockup />
    case 'mobile':
      return <MobileMockup />
    case 'chart':
      return <ChartMockup />
    case 'chat':
      return <ChatMockup />
    default:
      return null
  }
}

export default function Services() {
  const { openModal } = useContactModal()

  return (
    <section id="services" className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-green-600">
            Services
          </p>
          <SplitText
            text="What We Build"
            tag="h2"
            splitType="chars"
            delay={25}
            duration={0.8}
            className="mx-auto block text-[2.4rem] font-bold tracking-[-0.04em] text-gray-950 sm:text-4xl md:text-5xl"
          />
          <ScrollReveal className="mx-auto mt-6 max-w-3xl">
            <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Enterprise-grade architecture meets intuitive design. We deliver
              end-to-end solutions that modernize your technical foundation.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex min-h-[24rem] flex-col rounded-[2rem] border border-gray-200 bg-white/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-[0_28px_80px_rgba(34,197,94,0.08)] sm:min-h-[28rem] sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 ring-1 ring-green-200">
                    {Icon ? <Icon size={24} /> : <GitBranch size={24} />}
                  </div>
                  <div className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-[1.375rem] font-semibold tracking-tight text-gray-950 sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 flex-1">
                  <ServiceMockup type={service.mockupType} />
                </div>
              </motion.article>
            )
          })}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2 text-base font-semibold text-green-700 transition hover:text-green-800"
          >
            Have a project in mind? Let&apos;s talk <span aria-hidden="true">→</span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  )
}
