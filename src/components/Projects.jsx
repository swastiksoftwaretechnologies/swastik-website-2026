import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import SplitText from './animations/SplitText'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const selectedProject = projects.find((project) => project.id === selectedProjectId) || null

  return (
    <section id="projects" className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-green-600">
            Featured Projects
          </p>
          <SplitText
            text="Interactive Product Deep-Dives"
            tag="h2"
            splitType="chars"
            delay={16}
            duration={0.9}
            className="mx-auto block text-4xl font-bold tracking-[-0.04em] text-gray-950 md:text-5xl lg:text-6xl"
          />
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Explore how we design intelligent systems, ship high-leverage products,
            and measure real business impact across healthcare, analytics, and logistics.
          </p>
        </div>

        <div className="mt-14">
          <LayoutGroup>
            <AnimatePresence mode="wait">
              {selectedProject ? (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProjectDetail
                    project={selectedProject}
                    onBack={() => setSelectedProjectId(null)}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="project-grid"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      onSelect={(item) => setSelectedProjectId(item.id)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>
      </div>
    </section>
  )
}
