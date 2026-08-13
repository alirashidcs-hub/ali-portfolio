import { useRef, useState, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, FileText, PlayCircle } from 'lucide-react'
import type { Project } from '../data/types'

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -8, y: px * 10 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 14 }}
      className="glass glow-border group relative flex flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-sky-500/15 via-violet-500/15 to-cyan-500/15 text-6xl">
        {project.images && project.images.length > 0 ? (
          <img src={project.images[0]} alt={project.title} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          project.emoji
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-70" />
        <span
          className={`absolute left-3 top-3 rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${
            project.status === 'Completed'
              ? 'bg-emerald-400/15 text-emerald-300'
              : project.status === 'In Progress'
                ? 'bg-amber-400/15 text-amber-300'
                : 'bg-slate-500/15 text-slate-400'
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-violet-300/80">
            {project.category}
          </span>
          {project.featured && (
            <span className="rounded-full border border-sky-400/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-sky-300">
              Featured
            </span>
          )}
        </div>
        <h3 className="mt-2 font-display text-lg text-slate-100">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-700/70 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-slate-800 pt-4 text-slate-400">
          {project.liveUrl ? (
            <a data-cursor-hover href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs hover:text-sky-300">
              <ExternalLink size={13} /> Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1 text-xs text-slate-700">
              <ExternalLink size={13} /> Live Demo
            </span>
          )}
          {project.githubUrl ? (
            <a data-cursor-hover href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs hover:text-sky-300">
              <Github size={13} /> GitHub
            </a>
          ) : (
            <span className="flex items-center gap-1 text-xs text-slate-700">
              <Github size={13} /> GitHub
            </span>
          )}
          {project.demoVideoUrl && (
            <a data-cursor-hover href={project.demoVideoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs hover:text-sky-300">
              <PlayCircle size={13} /> Demo Video
            </a>
          )}
          <button
            data-cursor-hover
            onClick={() => onOpen(project)}
            className="ml-auto flex items-center gap-1 text-xs text-violet-300 hover:text-violet-200"
          >
            <FileText size={13} /> Case Study
          </button>
        </div>
      </div>
    </motion.div>
  )
}
