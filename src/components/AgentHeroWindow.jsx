import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// ── constants ──────────────────────────────────────────────────────────────

const COMMAND = 'Summarize revenue anomalies and flag at-risk accounts'

const ACCOUNTS = [
  { id: 1, name: 'Apex Corp',       revenue: '$124K', delta: '−18%', risk: true  },
  { id: 2, name: 'DataFlow Inc',    revenue: '$89K',  delta: '+3%',  risk: false },
  { id: 3, name: 'Nexus Group',     revenue: '$67K',  delta: '−31%', risk: true  },
  { id: 4, name: 'Orbit Systems',   revenue: '$203K', delta: '+11%', risk: false },
  { id: 5, name: 'Prism Analytics', revenue: '$45K',  delta: '−24%', risk: true  },
]

const JSON_LINES = [
  '  "action":    "analyze_revenue",',
  '  "period":    "Q3-2025",',
  '  "threshold": -0.15,',
  '  "output":    "flag_at_risk"',
]

// ── TitleBar ───────────────────────────────────────────────────────────────

function TitleBar() {
  return (
    <div className="flex shrink-0 items-center gap-2 border-b border-white/10 px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-red-500/70" />
      <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
      <span className="h-3 w-3 rounded-full bg-green-500/70" />
      <span className="mx-2 h-4 w-px bg-white/15" />
      <span className="flex-1 font-mono text-xs text-white/35">
        samvat.ai / agent-console
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
        <span className="text-[11px] font-medium text-green-400/80">Online</span>
      </span>
    </div>
  )
}

// ── AccountTable ───────────────────────────────────────────────────────────

function AccountTable({ showRisk }) {
  return (
    <div className="space-y-0.5 p-4">
      {/* Header */}
      <div className="mb-2 grid grid-cols-[1fr_64px_56px_78px] gap-2 border-b border-white/8 pb-2 px-2">
        {['Account', 'Revenue', 'Δ QoQ', 'Status'].map((h) => (
          <span
            key={h}
            className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/25"
          >
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      {ACCOUNTS.map((acc, i) => (
        <div
          key={acc.id}
          className="grid grid-cols-[1fr_64px_56px_78px] gap-2 items-center rounded-lg px-2 py-2.5 transition-colors hover:bg-white/[0.03]"
        >
          {/* Name */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/8 text-[9px] font-bold text-white/45">
              {acc.name.slice(0, 2).toUpperCase()}
            </div>
            <span className="truncate text-xs font-medium text-white/72">{acc.name}</span>
          </div>

          {/* Revenue */}
          <span className="font-mono text-xs text-white/50">{acc.revenue}</span>

          {/* Delta */}
          <span
            className={`font-mono text-xs font-semibold ${
              acc.delta.startsWith('−') ? 'text-red-400' : 'text-emerald-400'
            }`}
          >
            {acc.delta}
          </span>

          {/* Status */}
          <div className="relative h-5">
            <AnimatePresence mode="wait">
              {showRisk ? (
                acc.risk ? (
                  <motion.span
                    key="risk"
                    initial={{ opacity: 0, y: -5, scale: 0.88 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.32,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 flex items-center justify-center rounded-md border border-red-500/30 bg-red-500/12 text-[10px] font-semibold text-red-400"
                  >
                    ⚠ At Risk
                  </motion.span>
                ) : (
                  <motion.span
                    key="ok"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.07 }}
                    className="absolute inset-0 flex items-center justify-center rounded-md border border-emerald-500/20 bg-emerald-500/8 text-[10px] font-semibold text-emerald-400"
                  >
                    ✓ OK
                  </motion.span>
                )
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center text-[10px] text-white/40"
                >
                  —
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── ProcessingOverlay ──────────────────────────────────────────────────────

function ProcessingOverlay() {
  const [lineIdx, setLineIdx] = useState(0)

  useEffect(() => {
    let count = 0
    const t = setInterval(() => {
      count++
      setLineIdx(count)
      if (count >= JSON_LINES.length) clearInterval(t)
    }, 220)
    return () => clearInterval(t)
  }, [])

  const allDone = lineIdx >= JSON_LINES.length

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#080d16]/92 backdrop-blur-sm"
    >
      {/* Thinking dots */}
      <div className="flex items-center gap-2.5">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-green-400"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.22 }}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-white/38">Agent processing…</span>
      </div>

      {/* JSON block */}
      <div className="w-full max-w-[288px] rounded-xl border border-green-500/20 bg-green-950/20 px-5 py-4 font-mono text-xs leading-relaxed">
        <div className="mb-0.5 text-white/30">{'{'}</div>
        {JSON_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={lineIdx > i ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="text-green-300/85"
          >
            {line}
          </motion.div>
        ))}
        <div className="mt-0.5 text-white/30">{'}'}</div>
      </div>

      {/* Spinner — appears once all lines are shown */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 font-mono text-[11px] text-emerald-400/80"
          >
            <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.2" />
              <path
                d="M12 2a10 10 0 0 1 10 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Executing on live data…
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── CommandBar ─────────────────────────────────────────────────────────────

function CommandBar({ state, typedText }) {
  return (
    <div className="shrink-0 border-t border-white/10 bg-white/[0.025] px-4 py-3.5">
      <div className="flex items-start gap-3">
        {/* Agent icon */}
        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/15">
          <svg
            className="h-3 w-3 text-green-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
          </svg>
        </div>

        {/* Message area */}
        <div className="flex min-h-[36px] flex-1 items-center">
          <AnimatePresence mode="wait">
            {state === 'IDLE' && (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="font-mono text-xs italic text-white/20"
              >
                Ask agent to run analysis, generate reports…
              </motion.span>
            )}

            {state === 'TYPING' && (
              <motion.span
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-mono text-xs text-white/85"
              >
                {typedText}
                <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-green-400 align-middle" />
              </motion.span>
            )}

            {state === 'PROCESSING' && (
              <motion.span
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-xs italic text-white/25"
              >
                Running analysis on accounts…
              </motion.span>
            )}

            {state === 'SUCCESS' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2"
              >
                <div className="flex h-4 w-4 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/15">
                  <svg
                    className="h-2.5 w-2.5 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-mono text-xs text-emerald-400">
                  3 accounts flagged — report ready
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Send button */}
        <button
          type="button"
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-colors ${
            state === 'TYPING'
              ? 'border-green-500/50 bg-green-500/20 text-green-400'
              : 'border-white/10 bg-white/5 text-white/18'
          }`}
        >
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// ── AgentHeroWindow ────────────────────────────────────────────────────────

export default function AgentHeroWindow() {
  const [state, setState] = useState('IDLE')
  const [typedText, setTypedText] = useState('')

  // State machine: IDLE → TYPING → PROCESSING → SUCCESS → IDLE
  useEffect(() => {
    if (state === 'IDLE') {
      const t = setTimeout(() => setState('TYPING'), 1400)
      return () => clearTimeout(t)
    }
    if (state === 'PROCESSING') {
      const t = setTimeout(() => setState('SUCCESS'), 2500)
      return () => clearTimeout(t)
    }
    if (state === 'SUCCESS') {
      const t = setTimeout(() => {
        setTypedText('')
        setState('IDLE')
      }, 4000)
      return () => clearTimeout(t)
    }
  }, [state])

  // Typing effect — cleans up its own timers, never conflicts with state machine
  useEffect(() => {
    if (state !== 'TYPING') return
    let i = 0
    let endTimer
    const interval = setInterval(() => {
      i++
      setTypedText(COMMAND.slice(0, i))
      if (i >= COMMAND.length) {
        clearInterval(interval)
        endTimer = setTimeout(() => setState('PROCESSING'), 500)
      }
    }, 40)
    return () => {
      clearInterval(interval)
      clearTimeout(endTimer)
    }
  }, [state])

  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Ambient glow behind the window */}
      <div className="absolute inset-0 scale-110 rounded-3xl bg-green-500/8 blur-3xl" />

      {/* Window */}
      <div className="relative flex h-[480px] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[#080d16] shadow-[0_32px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]">
        {/* Subtle green top-glow inside the window */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-green-500/6 to-transparent" />

        <TitleBar />

        {/* Stage */}
        <div className="relative flex-1 overflow-hidden">
          <AccountTable showRisk={state === 'SUCCESS'} />
          <AnimatePresence>
            {state === 'PROCESSING' && <ProcessingOverlay key="overlay" />}
          </AnimatePresence>
        </div>

        {/* Command bar */}
        <CommandBar state={state} typedText={typedText} />
      </div>

      {/* Floating status badge */}
      <div className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-xl border border-white/10 bg-[#080d16] px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
        <span className="text-xs font-medium text-white/50">Agent online</span>
      </div>
    </div>
  )
}
