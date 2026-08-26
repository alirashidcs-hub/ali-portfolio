import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { publications } from '../../data'
import PublicationCard from '../PublicationCard'

export default function FeaturedPublicationsSection() {
  const featuredPublications = publications.filter(
    (publication) => publication.featured,
  )

  return (
    <section
      id="publications"
      className="relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
          ========================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.07, 0.14, 0.07],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl sm:h-96 sm:w-96"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl sm:h-96 sm:w-96"
      />

      {/* =========================================================
          SUBTLE GRID
          ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.014]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
          backgroundSize:
            'clamp(32px, 4vw, 48px) clamp(32px, 4vw, 48px)',
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        {/* =======================================================
            SECTION HEADER
            ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.65,
            ease: 'easeOut',
          }}
          className="mb-10 flex flex-col justify-between gap-7 sm:mb-14 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            {/* Eyebrow */}

            <div className="flex items-center gap-2.5">
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <BookOpen
                  size={15}
                  className="text-sky-400"
                />
              </motion.div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400 sm:text-xs sm:tracking-[0.3em]">
                Writing & Publications
              </p>
            </div>

            {/* Heading */}

            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
              Ideas worth{' '}
              <span className="text-gradient">
                exploring
              </span>
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Articles exploring artificial intelligence, visual AI,
              AI careers, 3D web experiences, smart cities, and
              emerging technologies.
            </p>
          </div>

          {/* =====================================================
              DESKTOP CTA
              ===================================================== */}

          <Link
            to="/publications"
            data-cursor-hover
            className="group hidden w-fit shrink-0 items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/30 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-sky-400/5 hover:text-sky-300 sm:inline-flex"
          >
            View All Publications

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* =======================================================
            FEATURED PUBLICATIONS
            ======================================================= */}

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
              },
            },
          }}
          className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Featured publications"
        >
          {featuredPublications.map((publication, index) => (
            <motion.div
              key={publication.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
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
                className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-400/0 via-violet-500/0 to-cyan-400/0 opacity-0 blur-2xl transition-all duration-500 group-hover:from-sky-400/10 group-hover:via-violet-500/10 group-hover:to-cyan-400/10 group-hover:opacity-100"
              />

              {/* Publication number */}

              <div className="pointer-events-none absolute right-4 top-4 z-20 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full border border-white/10 bg-slate-950/70 px-2 py-1 font-mono text-[8px] tracking-widest text-slate-500 backdrop-blur-md">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <PublicationCard
                publication={publication}
                delay={index * 0.05}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* =======================================================
            BOTTOM INFORMATION
            ======================================================= */}

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
            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
            />

            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600 sm:text-[10px] sm:tracking-[0.25em]">
              {publications.length} Publications · Medium
            </p>
          </div>

          {/* Mobile CTA */}

          <Link
            to="/publications"
            data-cursor-hover
            className="group inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/30 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-slate-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/50 hover:text-sky-300 sm:hidden"
          >
            Explore Publications

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}