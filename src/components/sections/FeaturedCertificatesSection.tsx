import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { certificates } from '../../data'
import SectionHeading from '../ui/SectionHeading'
import CertificateCard from '../CertificateCard'
import Lightbox from '../ui/Lightbox'

const featuredIds = [
  'c18',
  'c19',
  'c01',
  'c10',
  'c11',
  'c12',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: 'easeOut' as const,
    },
  },
}

export default function FeaturedCertificatesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const featured = featuredIds
    .map((id) =>
      certificates.find((certificate) => certificate.id === id),
    )
    .filter(
      (certificate): certificate is (typeof certificates)[number] =>
        Boolean(certificate),
    )

  return (
    <section
      id="certificates"
      aria-labelledby="featured-certificates-heading"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
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
        className="pointer-events-none absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl sm:h-96 sm:w-96"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.13, 0.06],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute -right-32 bottom-16 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl sm:h-96 sm:w-96"
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

      {/* =========================================================
          SECTION HEADING
          ========================================================= */}

      <SectionHeading
        eyebrow={`🏆 ${certificates.length} Certificates Earned`}
        title="Credentials that"
        highlight="back it up"
        description="A curated selection of credentials across artificial intelligence, machine learning, cybersecurity, programming, and modern technology."
        action={
          <Link
            data-cursor-hover
            to="/certificates"
            className="group hidden items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/30 px-5 py-2.5 text-sm text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-sky-400/5 hover:text-white sm:flex"
          >
            View All Certificates

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        }
      />

      {/* =========================================================
          FEATURED CERTIFICATES
          ========================================================= */}

      <motion.div
        className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Featured certificates"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
      >
        {featured.map((cert, index) => (
          <motion.div
            key={cert.id}
            variants={cardVariants}
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
            {/* Ambient card glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-400/0 via-violet-500/0 to-cyan-400/0 opacity-0 blur-2xl transition-all duration-500 group-hover:from-sky-400/10 group-hover:via-violet-500/10 group-hover:to-cyan-400/10 group-hover:opacity-100"
            />

            {/* Certificate number */}

            <div className="pointer-events-none absolute right-4 top-4 z-20 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="rounded-full border border-white/10 bg-slate-950/70 px-2 py-1 font-mono text-[8px] tracking-widest text-slate-500 backdrop-blur-md">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <CertificateCard
              cert={cert}
              onOpen={() => setActiveIndex(index)}
              delay={0}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* =========================================================
          CREDENTIAL STATEMENT
          ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
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
          delay: 0.25,
          duration: 0.6,
        }}
        className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-slate-800/60 bg-slate-950/20 px-5 py-4 text-center backdrop-blur-sm"
      >
        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Award
            size={18}
            className="shrink-0 text-sky-300"
          />
        </motion.div>

        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500 sm:text-xs sm:tracking-widest">
          Selected credentials highlighting AI, ML,
          cybersecurity & software development
        </p>

        <Sparkles
          size={14}
          className="hidden shrink-0 text-violet-400 sm:block"
        />
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
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="mt-10 flex justify-center sm:hidden"
      >
        <Link
          data-cursor-hover
          to="/certificates"
          className="group flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/30 px-6 py-3 text-sm text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-sky-400/5 hover:text-white"
        >
          View All Certificates

          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      {/* =========================================================
          CERTIFICATE LIGHTBOX
          ========================================================= */}

      <Lightbox
        items={featured}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  )
}