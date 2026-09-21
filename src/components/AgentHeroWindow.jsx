import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Braces, Check, Database, LayoutTemplate, ShieldCheck } from 'lucide-react'

const BUILD_STEPS = [
  { title: 'Map the workflow', detail: 'Where does time, judgement or context get lost?', icon: LayoutTemplate },
  { title: 'Set the data boundary', detail: 'Define sources, permissions and useful context.', icon: Database },
  { title: 'Build the AI layer', detail: 'Agent, retrieval and integrations around the real task.', icon: Braces },
  { title: 'Launch with confidence', detail: 'Evaluate behaviour, monitor outcomes and iterate.', icon: ShieldCheck },
]

export default function AgentHeroWindow() {
  const [completeCount, setCompleteCount] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCompleteCount((current) => (current >= BUILD_STEPS.length ? 0 : current + 1))
    }, 1500)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-lg">
      <div className="absolute inset-0 scale-110 rounded-3xl bg-green-500/8 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#080d16] shadow-[0_32px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-3 sm:gap-2 sm:px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70 sm:h-3 sm:w-3" />
          <span className="mx-1.5 h-4 w-px bg-white/15 sm:mx-2" />
          <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-white/35 sm:text-xs">exactbuild.ai / delivery-console</span>
          <span className="flex shrink-0 items-center gap-1 text-[11px] font-medium text-green-400/80"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />Active</span>
        </div>

        <div className="p-4 sm:p-5">
          <div className="rounded-xl border border-green-500/20 bg-green-500/[0.07] p-3.5 sm:p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-green-400/80">Build brief</p>
            <p className="mt-2 text-sm font-medium leading-6 text-white sm:text-base">Turn care coordination into an AI-assisted workflow.</p>
            <p className="mt-2 text-xs leading-5 text-white/45">A useful AI product starts with the job, the data boundary and the outcome - not a generic chatbot.</p>
          </div>

          <div className="mt-5 space-y-2.5">
            {BUILD_STEPS.map((step, index) => {
              const done = index < completeCount
              const active = index === completeCount && completeCount < BUILD_STEPS.length
              const Icon = step.icon
              return (
                <motion.div key={step.title} layout className={`flex items-center gap-3 rounded-xl border px-3 py-3 transition-colors ${done ? 'border-green-500/25 bg-green-500/[0.08]' : active ? 'border-white/18 bg-white/[0.06]' : 'border-white/[0.07] bg-white/[0.025]'}`}>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${done ? 'bg-green-500 text-white' : active ? 'bg-white/10 text-green-400' : 'bg-white/[0.06] text-white/35'}`}>
                    {done ? <Check size={16} strokeWidth={3} /> : <Icon size={16} />}
                  </span>
                  <div className="min-w-0 flex-1"><p className={`text-xs font-semibold sm:text-sm ${done || active ? 'text-white/90' : 'text-white/45'}`}>{step.title}</p><p className="mt-0.5 truncate text-[10px] text-white/38 sm:text-[11px]">{step.detail}</p></div>
                  <AnimatePresence mode="wait">{active && <motion.span key="working" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[10px] font-medium text-green-400">Working</motion.span>}{done && <motion.span key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[10px] font-medium text-green-400">Ready</motion.span>}</AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.025] px-4 py-3.5 sm:px-5">
          <span className="font-mono text-[11px] text-white/35">Exact Build delivery system</span>
          <span className="rounded-lg border border-green-500/25 bg-green-500/10 px-2.5 py-1 text-[10px] font-semibold text-green-400">Workflow-first</span>
        </div>
      </div>
      <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-xl border border-white/10 bg-[#080d16] px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.4)] sm:-bottom-3 sm:-right-3"><span className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]" /><span className="text-xs font-medium text-white/50">Build plan active</span></div>
    </div>
  )
}
