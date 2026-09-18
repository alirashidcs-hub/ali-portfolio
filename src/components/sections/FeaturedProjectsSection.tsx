import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { projects } from '../../data'
import type { Project } from '../../data/types'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ProjectCard'
import ProjectDetailsModal from '../ProjectDetailsModal'

export default function FeaturedProjectsSection() {
  const [active, setActive] = useState<Project | null>(null)

  const featured = projects.filter(
    (project) => project.featured === true,
  )

  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
          ========================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.07, 0.13, 0.07],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-[#D99AA5]/20 blur-3xl sm:h-96 sm:w-96"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.11, 0.05],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-72 w-72 rounded-full bg-[#C97887]/15 blur-3xl sm:h-96 sm:w-96"
      />

      {/* =========================================================
          SUBTLE GRID
          ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(183,110,121,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(183,110,121,0.45) 1px, transparent 1px)',
          backgroundSize:
            'clamp(32px, 4vw, 48px) clamp(32px, 4vw, 48px)',
        }}
      />

      {/* =========================================================
          SECTION HEADING
          ========================================================= */}

      <SectionHeading
        eyebrow="Selected Projects"
        title="Featured"
        highlight="Work"
        description="A curated selection of AI-powered products, intelligent agent systems, full-stack applications, and interactive 3D experiences."
        action={
          <Link
            data-cursor-hover
            to="/projects"
            className="group hidden items-center gap-2 rounded-full border border-[#E5D1D6] bg-white/60 px-5 py-2.5 text-sm text-[#5F5558] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C97887]/40 hover:bg-white/85 hover:text-[#A35F6A] sm:flex"
          >
            View All Projects

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        }
      />

      {/* =========================================================
          PROJECT COUNT / LABEL
          ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
          delay: 0.15,
        }}
        className="mt-8 flex items-center justify-center sm:justify-start"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E5D1D6] bg-white/60 px-3 py-1.5 shadow-sm backdrop-blur-sm">
          <Sparkles
            size={11}
            className="text-[#B76E79]"
          />

          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8F8286]">
            {featured.length} Featured{' '}
            {featured.length === 1 ? 'Project' : 'Projects'}
          </span>
        </div>
      </motion.div>

      {/* =========================================================
          FEATURED PROJECTS
          ========================================================= */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.1,
            },
          },
        }}
        className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Featured projects"
      >
        {featured.map((project, index) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: {
                opacity: 0,
                y: 35,
                scale: 0.97,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.65,
                  ease: 'easeOut',
                },
              },
            }}
            whileHover={{
              y: -5,
            }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 18,
            }}
            className="group relative h-full"
          >
            {/* Card ambient glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-[#B76E79]/0 via-[#C97887]/0 to-[#D99AA5]/0 opacity-0 blur-2xl transition-all duration-500 group-hover:from-[#B76E79]/10 group-hover:via-[#C97887]/10 group-hover:to-[#D99AA5]/10 group-hover:opacity-100"
            />

            {/* Project number */}

            <div className="pointer-events-none absolute right-4 top-4 z-20 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="rounded-full border border-white/70 bg-white/80 px-2 py-1 font-mono text-[8px] tracking-widest text-[#8F8286] shadow-sm backdrop-blur-md">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <ProjectCard
              project={project}
              onOpen={setActive}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* =========================================================
          MOBILE VIEW ALL
          ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
          delay: 0.15,
        }}
        className="mt-10 flex justify-center sm:hidden"
      >
        <Link
          data-cursor-hover
          to="/projects"
          className="group flex items-center gap-2 rounded-full border border-[#E5D1D6] bg-white/65 px-6 py-3 text-sm text-[#5F5558] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C97887]/40 hover:bg-white/90 hover:text-[#A35F6A]"
        >
          View All Projects

          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      {/* =========================================================
          PROJECT DETAILS MODAL
          ========================================================= */}

      <ProjectDetailsModal
        project={active}
        onClose={() => setActive(null)}
      />
    </section>
  )
}