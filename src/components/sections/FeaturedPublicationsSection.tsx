import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { publications } from '../../data'
import PublicationCard from '../PublicationCard'

export default function FeaturedPublicationsSection() {
  const featuredPublications = publications.filter(
    (publication) => publication.featured
  )

  return (
    <section
      id="publications"
      className="relative px-6 py-28 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"
        >
          <div>
            <div className="flex items-center gap-2">
              <BookOpen
                size={15}
                className="text-sky-400"
              />

              <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
                Writing & Publications
              </p>
            </div>

            <h2 className="mt-3 font-display text-3xl tracking-tight text-slate-100 md:text-4xl lg:text-5xl">
              Ideas worth{' '}
              <span className="text-gradient">
                exploring
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              Articles exploring artificial intelligence, visual AI,
              AI careers, 3D web experiences, smart cities, and
              emerging technologies.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            to="/publications"
            data-cursor-hover
            className="group hidden w-fit items-center gap-2 rounded-full border border-slate-700 bg-slate-950/40 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-slate-300 backdrop-blur-sm transition-all hover:border-sky-400/50 hover:text-sky-300 sm:inline-flex"
          >
            View All Publications

            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Featured Publications */}
        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Featured publications"
        >
          {featuredPublications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-60px',
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <PublicationCard
                publication={publication}
                delay={index * 0.05}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Information */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-slate-800/70 pt-7 sm:flex-row"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />

            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
              {publications.length} Publications · Medium
            </p>
          </div>

          {/* Mobile CTA */}
          <Link
            to="/publications"
            data-cursor-hover
            className="group inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-slate-400 transition-all hover:border-sky-400/50 hover:text-sky-300 sm:hidden"
          >
            Explore Publications

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}