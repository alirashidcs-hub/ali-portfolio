import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { certificates } from '../../data'
import SectionHeading from '../ui/SectionHeading'
import CertificateCard from '../CertificateCard'
import Lightbox from '../ui/Lightbox'

const featuredIds = [
  'c18', // NVIDIA: Fundamentals of Machine Learning
  'c19', // NVIDIA: Fundamentals of Deep Learning
  'c01', // Google AI Professional Certificate
  'c10', // Microsoft: AI Agent Fundamentals
  'c11', // Google: Foundations of Cybersecurity
  'c12', // Google: Crash Course on Python
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
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
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

export default function FeaturedCertificatesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Only the 6 selected certificates below appear on the homepage.
  // All 23 certificates remain available on /certificates.
  const featured = featuredIds
    .map((id) => certificates.find((certificate) => certificate.id === id))
    .filter(
      (certificate): certificate is (typeof certificates)[number] =>
        Boolean(certificate),
    )

  return (
    <section
      id="certificates"
      aria-labelledby="featured-certificates-heading"
      className="relative mx-auto max-w-6xl px-6 py-32"
    >
      <SectionHeading
        eyebrow={`🏆 ${certificates.length} Certificates Earned`}
        title="Credentials that"
        highlight="back it up"
        description="A curated selection of credentials across artificial intelligence, machine learning, cybersecurity, programming, and modern technology."
        action={
          <Link
            data-cursor-hover
            to="/certificates"
            className="group hidden items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/5 hover:text-white sm:flex"
          >
            View All Certificates
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        }
      />

      {/* Featured Certificates */}
      <motion.div
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Featured certificates"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {featured.map((cert, index) => (
          <motion.div
            key={cert.id}
            variants={cardVariants}
            className="h-full"
          >
            <CertificateCard
              cert={cert}
              onOpen={() => setActiveIndex(index)}
              delay={0}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Credentials Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-3 text-center"
      >
        <Award size={18} className="shrink-0 text-sky-300" />

        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 sm:text-xs">
          Selected credentials highlighting AI, ML, cybersecurity & software
          development
        </p>
      </motion.div>

      {/* Mobile View All */}
      <div className="mt-10 flex justify-center sm:hidden">
        <Link
          data-cursor-hover
          to="/certificates"
          className="group flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/5 hover:text-white"
        >
          View All Certificates
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Certificate Lightbox */}
      <Lightbox
        items={featured}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  )
}