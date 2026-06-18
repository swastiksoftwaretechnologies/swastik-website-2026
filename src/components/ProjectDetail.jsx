import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, FileText, LineChart, PlayCircle } from 'lucide-react'
import CountUp from './animations/CountUp'
import ChatbotDemo from './ChatbotDemo'

const tabs = [
  { id: 'demo', label: 'Live Demo', icon: PlayCircle },
  { id: 'docs', label: 'Documentation', icon: FileText },
  { id: 'impact', label: 'Impact', icon: LineChart },
]

function PlaceholderDemo({ project }) {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
        Demo video coming soon
      </p>
      <h4 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950">
        {project.title}
      </h4>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
        We&apos;re packaging the interactive walkthrough and documentation for this
        case study. The architecture, metrics, and delivery breakdown are already
        available in the tabs below.
      </p>
      <div className="mx-auto mt-8 flex h-64 max-w-4xl items-center justify-center rounded-[1.5rem] border border-gray-200 bg-white">
        <span className="text-sm font-medium text-gray-400">Video embed slot</span>
      </div>
    </div>
  )
}

export default function ProjectDetail({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('demo')

  const renderContent = () => {
    if (activeTab === 'demo') {
      return project.hasDemo ? <ChatbotDemo /> : <PlaceholderDemo project={project} />
    }

    if (activeTab === 'docs') {
      return (
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-xl font-semibold tracking-tight text-gray-950">
              Project Overview
            </h4>
            <p className="mt-4 text-base leading-7 text-gray-600">{project.overview}</p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                  Problem Statement
                </p>
                <p className="mt-3 text-base leading-7 text-gray-600">{project.problem}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                  Solution Approach
                </p>
                <p className="mt-3 text-base leading-7 text-gray-600">{project.solution}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                Architecture
              </p>
              <div className="mt-4 rounded-[1.4rem] border border-gray-200 bg-[linear-gradient(135deg,#f8fafc,#ffffff)] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                    Frontend
                  </div>
                  <ArrowRight className="text-gray-300" size={18} />
                  <div className="rounded-2xl bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700">
                    API Layer
                  </div>
                  <ArrowRight className="text-gray-300" size={18} />
                  <div className="rounded-2xl bg-gray-950 px-4 py-3 text-sm font-semibold text-white">
                    AI + Data
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="h-2 rounded-full bg-green-500" />
                  <div className="h-2 rounded-full bg-green-300" />
                  <div className="h-2 rounded-full bg-green-200" />
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                Tech Stack Used
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techUsed.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${project.accentClass} ${project.accentBorder}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="grid gap-5 md:grid-cols-3">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className={`rounded-[1.75rem] border bg-white p-6 shadow-sm ${project.accentBorder}`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              {metric.label}
            </p>
            <p className="mt-5 text-5xl font-bold tracking-tight text-gray-950">
              <CountUp to={metric.value} className="inline-block" />
              {metric.suffix}
            </p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      layout
      layoutId={`project-shell-${project.id}`}
      className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.08)] md:p-8"
    >
      <div className="flex flex-col gap-5 border-b border-gray-200 pb-6 md:flex-row md:items-start md:justify-between">
        <div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-green-300 hover:text-green-700"
          >
            <ArrowLeft size={16} />
            Back to projects
          </button>

          <div className="mt-5">
            <div className={`inline-flex rounded-2xl border px-4 py-2 text-sm font-semibold ${project.accentClass} ${project.accentBorder}`}>
              {project.title}
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
              {project.shortDescription}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${project.accentClass} ${project.accentBorder}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

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
                isActive
                  ? 'border-green-500 bg-green-500 text-white'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:text-green-700'
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
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
