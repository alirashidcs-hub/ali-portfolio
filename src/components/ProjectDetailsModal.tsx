import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, PlayCircle } from 'lucide-react'
import type { Project } from '../data/types'

export default function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass glow-border relative max-w-lg rounded-2xl p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 text-slate-500 hover:text-slate-200"
            >
              <X size={18} />
            </button>
            {project.images && project.images.length > 0 ? (
              <img
                src={project.images[0]}
                alt={project.title}
                loading="lazy"
                className="aspect-video w-full rounded-xl object-cover"
              />
            ) : (
              <div className="text-5xl">{project.emoji}</div>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-violet-300/80">
                {project.category}
              </p>
              <span
                className={`rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${
                  project.status === 'Completed'
                    ? 'bg-emerald-400/15 text-emerald-300'
                    : project.status === 'In Progress'
                      ? 'bg-amber-400/15 text-amber-300'
                      : 'bg-slate-500/15 text-slate-400'
                }`}
              >
                {project.status}
              </span>
              {project.featured && (
                <span className="rounded-full border border-sky-400/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-sky-300">
                  Featured
                </span>
              )}
            </div>
            <h3 className="mt-1 font-display text-2xl text-slate-100">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.longDescription}</p>

            {project.images && project.images.length > 1 && (
              <div className="mt-4 grid grid-cols-3 gap-2">
                {project.images.slice(1).map((img) => (
                  <img key={img} src={img} alt={project.title} loading="lazy" className="aspect-video rounded-lg object-cover" />
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-700/70 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-sky-300 hover:text-sky-200">
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-slate-100">
                  <Github size={14} /> GitHub
                </a>
              )}
              {project.demoVideoUrl && (
                <a href={project.demoVideoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-violet-300 hover:text-violet-200">
                  <PlayCircle size={14} /> Demo Video
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
