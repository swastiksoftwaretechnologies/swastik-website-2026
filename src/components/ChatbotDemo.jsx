import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, Sparkles } from 'lucide-react'
import { chatbotFlows } from '../data/projects'

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 rounded-2xl rounded-tl-md bg-gray-100 px-4 py-3">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="h-2 w-2 rounded-full bg-gray-400"
          animate={{ y: [0, -4, 0], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.12 }}
        />
      ))}
    </div>
  )
}

export default function ChatbotDemo() {
  const [activeFlowId, setActiveFlowId] = useState(chatbotFlows[0].id)
  const [visibleMessages, setVisibleMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef(null)

  const activeFlow = chatbotFlows.find((flow) => flow.id === activeFlowId) || chatbotFlows[0]

  useEffect(() => {
    const timeouts = []
    setVisibleMessages([])
    setIsTyping(false)

    let elapsed = 0

    activeFlow.conversation.forEach((message) => {
      if (message.role === 'user') {
        elapsed += 500
        timeouts.push(
          setTimeout(() => {
            setVisibleMessages((current) => [...current, message])
          }, elapsed)
        )
      } else {
        timeouts.push(
          setTimeout(() => {
            setIsTyping(true)
          }, elapsed)
        )

        elapsed += 800
        timeouts.push(
          setTimeout(() => {
            setIsTyping(false)
            setVisibleMessages((current) => [...current, message])
          }, elapsed)
        )
      }
    })

    return () => {
      timeouts.forEach(clearTimeout)
      setIsTyping(false)
    }
  }, [activeFlow])

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [visibleMessages, isTyping])

  return (
    <div className="grid gap-5 lg:grid-cols-[0.94fr_1.06fr]">
      <div className="rounded-[1.75rem] border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Aria Flows
            </p>
            <h4 className="mt-2 text-xl font-semibold tracking-tight text-gray-950">
              11 automated healthcare workflows
            </h4>
          </div>
          <div className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            Live replay
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {chatbotFlows.map((flow) => {
            const isActive = flow.id === activeFlowId

            return (
              <button
                key={flow.id}
                type="button"
                onClick={() => setActiveFlowId(flow.id)}
                className={`rounded-2xl border px-3 py-3 text-left text-sm font-medium transition ${
                  isActive
                    ? 'border-green-500 bg-green-500 text-white shadow-[0_12px_28px_rgba(34,197,94,0.2)]'
                    : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-green-300 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                {flow.label}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs leading-5 text-gray-500">
          Interactive demo - illustrative conversation with sample data. No real client or patient records are shown.
        </p>
        <div className="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Bot size={18} />
              <span className="absolute bottom-1 right-1 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-950">Aria</p>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            <Sparkles size={12} />
            {activeFlow.label}
          </div>
        </div>

        <div ref={scrollRef} className="h-[26rem] space-y-3 overflow-y-auto bg-[linear-gradient(180deg,#ffffff,#f8fafc)] px-5 py-5">
          <AnimatePresence initial={false}>
            {visibleMessages.map((message, index) => (
              <motion.div
                key={`${activeFlow.id}-${index}-${message.text}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                    message.role === 'user'
                      ? 'rounded-tr-md bg-green-500 text-white'
                      : 'rounded-tl-md bg-gray-100 text-gray-700'
                  }`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <div className="flex justify-start">
              <TypingIndicator />
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  )
}
