import { useRef, useState, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  ExternalLink,
  FileText,
  PlayCircle,
  ArrowUpRight,
} from 'lucide-react'
import type { Project } from '../data/types'

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()

    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5

    setTilt({
      x: py * -5,
      y: px * 7,
    })
  }

  const handleLeave = () => {
    setTilt({
      x: 0,
      y: 0,
    })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 16,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/50 shadow-xl shadow-black/10 backdrop-blur-xl"
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-400/0 via-violet-500/0 to-cyan-400/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-sky-400/10 group-hover:via-violet-500/10 group-hover:to-cyan-400/10 group-hover:opacity-100"
      />

      {/* Project Image */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-cyan-500/10">
        {project.images && project.images.length > 0 ? (
          <motion.img
            src={project.images[0]}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 2,
            }}
            className="flex h-full w-full items-center justify-center text-6xl"
          >
            {project.emoji}
          </motion.div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

        {/* Shine */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          whileHover={{
            translateX: '100%',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        />

        {/* Status */}
        <span
          className={`absolute left-4 top-4 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest backdrop-blur-md ${
            project.status === 'Completed'
              ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
              : project.status === 'In Progress'
                ? 'border-amber-400/20 bg-amber-400/10 text-amber-300'
                : 'border-slate-500/20 bg-slate-500/10 text-slate-400'
          }`}
        >
          {project.status}
        </span>

        {/* Featured */}
        {project.featured && (
          <span className="absolute right-4 top-4 rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-sky-300 backdrop-blur-md">
            Featured
          </span>
        )}

        {/* View Details */}
        <motion.button
          type="button"
          data-cursor-hover
          onClick={() => onOpen(project)}
          className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-[10px] font-medium text-slate-200 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100"
        >
          View Details
          <ArrowUpRight size={12} />
        </motion.button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col p-6">
        {/* Category + Date */}
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-violet-300/80">
            {project.category}
          </span>

          <span className="font-mono text-[9px] text-slate-600">
            {project.date}
          </span>
        </div>

        {/* Title */}
        <motion.h3
          className="mt-2 font-display text-lg text-slate-100"
          whileHover={{ x: 2 }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700/70 bg-slate-900/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-slate-400 transition-colors hover:border-sky-400/30 hover:text-sky-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-800/80 pt-4">
          {project.liveUrl ? (
            <a
              data-cursor-hover
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-sky-300"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-slate-700">
              <ExternalLink size={13} />
              Live Demo
            </span>
          )}

          {project.githubUrl ? (
            <a
              data-cursor-hover
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-sky-300"
            >
              <Github size={13} />
              GitHub
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-slate-700">
              <Github size={13} />
              GitHub
            </span>
          )}

          {project.demoVideoUrl && (
            <a
              data-cursor-hover
              href={project.demoVideoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-violet-300"
            >
              <PlayCircle size={13} />
              Demo Video
            </a>
          )}

          <button
            type="button"
            data-cursor-hover
            onClick={() => onOpen(project)}
            className="ml-auto flex items-center gap-1.5 text-xs text-violet-300 transition-all hover:gap-2 hover:text-violet-200"
          >
            <FileText size={13} />
            Case Study
          </button>
        </div>
      </div>
    </motion.div>
  )
}