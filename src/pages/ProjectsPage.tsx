import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { projects } from '../data'
import type { Project } from '../data/types'
import PageHeader from '../components/ui/PageHeader'
import SearchInput from '../components/ui/SearchInput'
import CategoryPills from '../components/ui/CategoryPills'
import SortSelect from '../components/ui/SortSelect'
import ProjectCard from '../components/ProjectCard'
import ProjectDetailsModal from '../components/ProjectDetailsModal'

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'az', label: 'A → Z' },
  { value: 'featured', label: 'Featured first' },
]

export default function ProjectsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')
  const [active, setActive] = useState<Project | null>(null)

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    [],
  )

  const filtered = useMemo(() => {
    let list = projects.filter((p) => {
      const search = query.toLowerCase()

      const matchesQuery =
        p.title.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search) ||
        p.tags.some((t) => t.toLowerCase().includes(search))

      const matchesCategory =
        category === 'All' || p.category === category

      return matchesQuery && matchesCategory
    })

    list = [...list].sort((a, b) => {
      if (sort === 'newest') {
        return +new Date(b.date) - +new Date(a.date)
      }

      if (sort === 'oldest') {
        return +new Date(a.date) - +new Date(b.date)
      }

      if (sort === 'az') {
        return a.title.localeCompare(b.title)
      }

      if (sort === 'featured') {
        return Number(b.featured) - Number(a.featured)
      }

      return 0
    })

    return list
  }, [query, category, sort])

  return (
    <>
      <Helmet>
        <title>
          Projects | Ali Rashid — AI & Full-Stack Developer
        </title>

        <meta
          name="description"
          content="Explore AI, full-stack, 3D web, smart city, and software projects built by Ali Rashid, a BS Computer Science student at UET Taxila."
        />

        <link
          rel="canonical"
          href="https://ali-rashid-portfolio.vercel.app/projects"
        />

        <meta
          property="og:title"
          content="Projects | Ali Rashid — AI & Full-Stack Developer"
        />

        <meta
          property="og:description"
          content="Explore AI, full-stack, 3D web, smart city, and software projects built by Ali Rashid."
        />

        <meta
          property="og:url"
          content="https://ali-rashid-portfolio.vercel.app/projects"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content="Projects | Ali Rashid"
        />

        <meta
          name="twitter:description"
          content="Explore AI, full-stack, 3D web, and software projects built by Ali Rashid."
        />
      </Helmet>

      <div className="min-h-screen">
        <PageHeader
          eyebrow={`${projects.length} Projects`}
          title="Featured"
          highlight="work"
          description="Every project I've shipped, from AI-powered tools to 3D web experiences. Search, filter by category, or sort to find what you're looking for."
        />

        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-8">
            <CategoryPills
              options={categories}
              active={category}
              onChange={setCategory}
            />

            <div className="flex flex-wrap items-center gap-3">
              <SearchInput
                value={query}
                onChange={setQuery}
                placeholder="Search projects or tech..."
              />

              <SortSelect
                value={sort}
                onChange={setSort}
                options={sortOptions}
              />
            </div>
          </div>

          <p className="pt-6 font-mono text-xs uppercase tracking-widest text-slate-600">
            Showing {filtered.length} of {projects.length}
          </p>

          <div className="mt-6 grid gap-6 pb-32 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (i % 6) * 0.06,
                  duration: 0.4,
                }}
              >
                <ProjectCard
                  project={project}
                  onOpen={setActive}
                />
              </motion.div>
            ))}

            {filtered.length === 0 && (
              <p className="col-span-full py-16 text-center text-sm text-slate-500">
                No projects match your filters.
              </p>
            )}
          </div>
        </div>

        <ProjectDetailsModal
          project={active}
          onClose={() => setActive(null)}
        />
      </div>
    </>
  )
}