import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Github,
  ExternalLink,
  PlayCircle,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import type { Project } from '../data/types'

export default function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!project) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [project])

  // Close with Escape key
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 22,
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-700/60 bg-[#080d18]/95 shadow-2xl shadow-black/60"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.08, rotate: 90 }}
              whileTap={{ scale: 0.94 }}
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/70 bg-black/50 text-slate-400 backdrop-blur-md transition-colors hover:border-sky-400/50 hover:text-white"
            >
              <X size={18} />
            </motion.button>

            {/* Scrollable content */}
            <div className="relative overflow-y-auto">
              {/* Project Hero Image */}
              <div className="relative overflow-hidden">
                {project.images && project.images.length > 0 ? (
                  <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                    src={project.images[0]}
                    alt={project.title}
                    className="h-56 w-full object-cover sm:h-72 md:h-80"
                  />
                ) : (
                  <div className="flex h-56 items-center justify-center bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-cyan-500/10 text-7xl sm:h-72">
                    {project.emoji}
                  </div>
                )}

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-transparent to-black/10" />

                {/* Project number / label */}
                <div className="absolute bottom-5 left-6 flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full border border-sky-400/20 bg-black/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md">
                    <Sparkles size={11} />
                    Case Study
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="px-6 pb-8 pt-2 sm:px-8 sm:pb-10 md:px-10">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">
                    {project.category}
                  </span>

                  <span className="text-slate-700">•</span>

                  <span
                    className={`rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest ${
                      project.status === 'Completed'
                        ? 'bg-emerald-400/10 text-emerald-300'
                        : project.status === 'In Progress'
                          ? 'bg-amber-400/10 text-amber-300'
                          : 'bg-slate-500/10 text-slate-400'
                    }`}
                  >
                    {project.status}
                  </span>

                  {project.featured && (
                    <>
                      <span className="text-slate-700">•</span>

                      <span className="rounded-full border border-sky-400/30 bg-sky-400/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-sky-300">
                        Featured
                      </span>
                    </>
                  )}
                </div>

                {/* Title */}
                <motion.h2
                  id="project-modal-title"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
                >
                  {project.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base"
                >
                  {project.longDescription}
                </motion.p>

                {/* Technology Stack */}
                <div className="mt-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Technology & Skills
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.15 + index * 0.04,
                        }}
                        className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-slate-300 transition-colors hover:border-sky-400/40 hover:text-sky-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Additional Images */}
                {project.images && project.images.length > 1 && (
                  <div className="mt-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Project Preview
                    </p>

                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {project.images.slice(1).map((image, index) => (
                        <motion.div
                          key={image}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.2 + index * 0.05,
                          }}
                          className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
                        >
                          <img
                            src={image}
                            alt={`${project.title} preview ${index + 2}`}
                            loading="lazy"
                            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-950/30"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                      <ArrowUpRight size={14} />
                    </motion.a>
                  )}

                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm text-slate-300 transition-colors hover:border-sky-400/40 hover:text-white"
                    >
                      <Github size={15} />
                      GitHub
                    </motion.a>
                  )}

                  {project.demoVideoUrl && (
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.demoVideoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-5 py-2.5 text-sm text-violet-300 transition-colors hover:border-violet-400/40 hover:text-violet-200"
                    >
                      <PlayCircle size={15} />
                      Demo Video
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}