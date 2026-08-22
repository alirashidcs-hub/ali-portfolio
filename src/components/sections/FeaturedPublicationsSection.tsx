import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { publications } from '../../data'
import PublicationCard from '../PublicationCard'

export default function FeaturedPublicationsSection() {
  return (
    <section
      id="publications"
      className="relative px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
              Writing & Publications
            </p>

            <h2 className="mt-3 font-display text-3xl text-slate-100 md:text-4xl">
              Publications
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
              Articles exploring artificial intelligence, 3D web experiences,
              smart cities, AI agents, and emerging technologies.
            </p>
          </div>

          <Link
            to="/publications"
            data-cursor-hover
            className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-sky-300 transition-all hover:border-sky-400/40 hover:bg-sky-400/10"
          >
            View All Publications
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Publications */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication, index) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
              delay={index * 0.06}
            />
          ))}
        </div>

        {/* Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
            {publications.length} Publications · Medium
          </p>
        </motion.div>
      </div>
    </section>
  )
}