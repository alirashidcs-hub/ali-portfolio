import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects } from '../../data'
import type { Project } from '../../data/types'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ProjectCard'
import ProjectDetailsModal from '../ProjectDetailsModal'

export default function FeaturedProjectsSection() {
  const [active, setActive] = useState<Project | null>(null)

  const featured = projects.filter((project) => project.featured === true)

  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="relative mx-auto max-w-6xl px-6 py-32"
    >
      <SectionHeading
        eyebrow="Selected Projects"
        title="Featured"
        highlight="Work"
        description="A curated selection of AI-powered products, intelligent agent systems, full-stack applications, and interactive 3D experiences."
        action={
          <Link
            data-cursor-hover
            to="/projects"
            className="group hidden items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/5 hover:text-white sm:flex"
          >
            View All Projects
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        }
      />

      {/* Featured Projects */}
      <div
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Featured projects"
      >
        {featured.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard
              project={project}
              onOpen={setActive}
            />
          </div>
        ))}
      </div>

      {/* Mobile View All */}
      <div className="mt-10 flex justify-center sm:hidden">
        <Link
          data-cursor-hover
          to="/projects"
          className="group flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/5 hover:text-white"
        >
          View All Projects
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <ProjectDetailsModal
        project={active}
        onClose={() => setActive(null)}
      />
    </section>
  )
}