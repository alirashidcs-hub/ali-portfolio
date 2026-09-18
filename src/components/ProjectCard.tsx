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
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E6D5D9] bg-white/75 shadow-[0_18px_55px_rgba(183,110,121,0.08)] backdrop-blur-xl transition-shadow duration-300 hover:border-[#C97887]/45 hover:shadow-[0_22px_65px_rgba(183,110,121,0.14)]"
    >
      {/* =========================================================
          CARD GLOW
          ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#B76E79]/0 via-[#C97887]/0 to-[#D99AA5]/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-[#B76E79]/10 group-hover:via-[#C97887]/10 group-hover:to-[#D99AA5]/10 group-hover:opacity-100"
      />

      {/* =========================================================
          PROJECT IMAGE
          ========================================================= */}

      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#FBECEF] via-[#F7E4E8] to-[#F2D8DD]">
        {project.images && project.images.length > 0 ? (
          <motion.img
            src={project.images[0]}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="h-full w-full object-cover"
            whileHover={{
              scale: 1.06,
            }}
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

        {/* Image overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2527]/65 via-[#2A2527]/5 to-transparent opacity-80" />

        {/* Shine */}

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          whileHover={{
            translateX: '100%',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        />

        {/* =====================================================
            STATUS
            ===================================================== */}

        <span
          className={`absolute left-4 top-4 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest backdrop-blur-md ${
            project.status === 'Completed'
              ? 'border-[#8A9A82]/30 bg-[#F3F7F1]/85 text-[#64745D]'
              : project.status === 'In Progress'
                ? 'border-[#C59B62]/30 bg-[#FBF6EC]/90 text-[#927344]'
                : 'border-white/40 bg-white/70 text-[#756B6E]'
          }`}
        >
          {project.status}
        </span>

        {/* =====================================================
            FEATURED
            ===================================================== */}

        {project.featured && (
          <span className="absolute right-4 top-4 rounded-full border border-white/60 bg-[#FFF7F9]/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-[#A35F6A] shadow-sm backdrop-blur-md">
            Featured
          </span>
        )}

        {/* =====================================================
            VIEW DETAILS
            ===================================================== */}

        <motion.button
          type="button"
          data-cursor-hover
          onClick={() => onOpen(project)}
          className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/50 bg-[#2A2527]/75 px-3 py-1.5 text-[10px] font-medium text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-[#2A2527]/90 group-hover:opacity-100"
        >
          View Details
          <ArrowUpRight size={12} />
        </motion.button>
      </div>

      {/* =========================================================
          CONTENT
          ========================================================= */}

      <div className="relative z-10 flex flex-1 flex-col p-6">

        {/* Category + Date */}

        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#B76E79]">
            {project.category}
          </span>

          <span className="font-mono text-[9px] text-[#40383B]">
            {project.date}
          </span>
        </div>

        {/* Title */}

        <motion.h3
          className="mt-2 font-display text-lg text-[#171416] transition-colors duration-300 group-hover:text-[#A35F6A]"
          whileHover={{
            x: 2,
          }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}

        <p className="mt-2 flex-1 text-sm leading-6 text-[#252023]">
          {project.description}
        </p>

        {/* =====================================================
            TAGS
            ===================================================== */}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#E7D8DB] bg-[#FFF7F9]/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-[#40383B] transition-all duration-300 hover:border-[#C97887]/40 hover:bg-[#FBECEF] hover:text-[#A35F6A]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* =====================================================
            ACTIONS
            ===================================================== */}

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#E9DCDF] pt-4">

          {/* Live Demo */}

          {project.liveUrl ? (
            <a
              data-cursor-hover
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#40383B] transition-colors hover:text-[#A35F6A]"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-[#B7AAAE]">
              <ExternalLink size={13} />
              Live Demo
            </span>
          )}

          {/* GitHub */}

          {project.githubUrl ? (
            <a
              data-cursor-hover
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#40383B] transition-colors hover:text-[#A35F6A]"
            >
              <Github size={13} />
              GitHub
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-[#B7AAAE]">
              <Github size={13} />
              GitHub
            </span>
          )}

          {/* Demo Video */}

          {project.demoVideoUrl && (
            <a
              data-cursor-hover
              href={project.demoVideoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#40383B] transition-colors hover:text-[#B76E79]"
            >
              <PlayCircle size={13} />
              Demo Video
            </a>
          )}

          {/* Case Study */}

          <button
            type="button"
            data-cursor-hover
            onClick={() => onOpen(project)}
            className="ml-auto flex items-center gap-1.5 text-xs text-[#B76E79] transition-all hover:gap-2 hover:text-[#963F4E]"
          >
            <FileText size={13} />
            Case Study
          </button>
        </div>
      </div>
    </motion.div>
  )
}
