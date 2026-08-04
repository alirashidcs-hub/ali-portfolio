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
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        eyebrow={`${projects.length} Projects`}
        title="Featured"
        highlight="work"
        description="A few of the builds I'm most proud of — from AI-powered platforms to 3D web experiences."
        action={
          <Link
            data-cursor-hover
            to="/projects"
            className="hidden items-center gap-1.5 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300 transition-colors hover:border-sky-400 hover:text-sky-300 sm:flex"
          >
            View All Projects <ArrowRight size={14} />
          </Link>
        }
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <ProjectCard project={project} onOpen={setActive} />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center sm:hidden">
        <Link
          data-cursor-hover
          to="/projects"
          className="flex items-center gap-1.5 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300"
        >
          View All Projects <ArrowRight size={14} />
        </Link>
      </div>

      <ProjectDetailsModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
