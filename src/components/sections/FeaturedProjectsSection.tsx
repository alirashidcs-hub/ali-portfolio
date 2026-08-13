import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects } from '../../data'
import type { Project } from '../../data/types'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ProjectCard'
import ProjectDetailsModal from '../ProjectDetailsModal'

export default function FeaturedProjectsSection() {
  const [active, setActive] = useState<Project | null>(null)

  const featured = projects.filter((project) => project.featured)

  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
    >
      <SectionHeading
        eyebrow={`${projects.length} Projects`}
        title="Ali Rashid's"
        highlight="Featured Work"
        description="Explore AI-powered applications, full-stack platforms, 3D web experiences, and software projects built by Ali Rashid, a Computer Science student and AI & Full-Stack Developer at UET Taxila."
        action={
          <Link
            data-cursor-hover
            to="/projects"
            className="group flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300 transition hover:border-sky-400/50 hover:text-white"
          >
            View All Projects
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        }
      />

      <div
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Featured projects by Ali Rashid"
      >
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
              duration: 0.5,
            }}
          >
            <ProjectCard
              project={project}
              onOpen={setActive}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center sm:hidden">
        <Link
          data-cursor-hover
          to="/projects"
          className="flex items-center gap-1.5 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300 transition hover:border-sky-400/50 hover:text-white"
        >
          View All Projects
          <ArrowRight size={14} />
        </Link>
      </div>

      <ProjectDetailsModal
        project={active}
        onClose={() => setActive(null)}
      />
    </section>
  )
}