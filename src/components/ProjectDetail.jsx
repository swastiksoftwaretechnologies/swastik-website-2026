import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ExternalLink, FileText, Lightbulb, PlayCircle } from 'lucide-react'
import ChatbotDemo from './ChatbotDemo'

const allTabs = [
  { id: 'demo', label: 'Live Demo', icon: PlayCircle },
  { id: 'how-it-works', label: 'How it works', icon: FileText },
  { id: 'capability', label: 'Capability', icon: Lightbulb },
]

export default function ProjectDetail({ project, onBack }) {
  const tabs = project.hasDemo ? allTabs : allTabs.filter((tab) => tab.id !== 'demo')
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  const renderHowItWorks = () => (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
        <div className="space-y-7">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Problem</p>
            <p className="mt-3 text-base leading-7 text-gray-600">{project.problem}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Solution</p>
            <p className="mt-3 text-base leading-7 text-gray-600">{project.solution}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">What it does</p>
            <ul className="mt-4 space-y-3">
              {project.whatItDoes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-gray-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Architecture</p>
          <div className="mt-4 rounded-[1.4rem] border border-gray-200 bg-[linear-gradient(135deg,#f8fafc,#ffffff)] p-5">
            <div className="grid gap-3 text-center text-xs font-semibold sm:grid-cols-3">
              <div className="rounded-2xl bg-green-50 px-3 py-3 text-green-700">Product interface</div>
              <div className="rounded-2xl bg-gray-100 px-3 py-3 text-gray-700">APIs and workflows</div>
              <div className="rounded-2xl bg-gray-950 px-3 py-3 text-white">AI and data layer</div>
            </div>
          </div>
          <p className="mt-3 text-xs leading-5 text-gray-500">Illustrative product architecture.</p>
        </div>

        <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Technology used</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techUsed.map((tech) => (
              <span
                key={tech}
                className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${project.accentClass} ${project.accentBorder}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderCapability = () => (
    <div className="grid gap-6 lg:grid-cols-2">
      <article className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Demonstrated capability</p>
        <p className="mt-4 text-lg leading-8 text-gray-700">{project.capability}</p>
      </article>
      <article className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Context</p>
        <p className="mt-4 text-lg leading-8 text-gray-700">{project.context}</p>
        {project.disclosure && <p className="mt-5 text-sm leading-6 text-gray-500">{project.disclosure}</p>}
      </article>
      <article className={`rounded-[1.75rem] border p-6 shadow-sm ${project.accentBorder} ${project.accentBg}`}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Product signal</p>
        <p className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950">{project.proof.headline}</p>
        <p className="mt-4 text-sm leading-6 text-gray-600">{project.proof.note}</p>
      </article>
    </div>
  )

  const renderContent = () => {
    if (activeTab === 'demo') return <ChatbotDemo />
    if (activeTab === 'how-it-works') return renderHowItWorks()
    return renderCapability()
  }

  return (
    <motion.div
      layout
      layoutId={`project-shell-${project.id}`}
      className="rounded-[1.5rem] border border-gray-200 bg-white p-5 shadow-[0_30px_90px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-6 md:p-8"
    >
      <div className="flex flex-col gap-5 border-b border-gray-200 pb-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-green-300 hover:text-green-700"
          >
            <ArrowLeft size={16} />
            Back to products
          </button>
          <div className="mt-5">
            <div className={`inline-flex rounded-2xl border px-4 py-2 text-sm font-semibold ${project.accentClass} ${project.accentBorder}`}>
              {project.title}
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl md:text-4xl">{project.hook}</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">{project.shortDescription}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] ${project.accentClass} ${project.accentBorder}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {project.resourceLinks?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.resourceLinks.map((resource) => (
            <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-700">
              {resource.label}<ExternalLink size={16} />
            </a>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive ? 'border-green-500 bg-green-500 text-white' : 'border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:text-green-700'
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}>
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-8 border-t border-gray-100 pt-5 text-sm font-medium leading-6 text-green-700">{project.cta}</p>
    </motion.div>
  )
}
