import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { certificates } from '../../data'
import SectionHeading from '../ui/SectionHeading'
import CertificateCard from '../CertificateCard'
import Lightbox from '../ui/Lightbox'

export default function FeaturedCertificatesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const featured = certificates.filter((c) => c.featured)

  return (
    <section id="certificates" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        eyebrow={`🏆 ${certificates.length}+ Certificates Earned`}
        title="Credentials that"
        highlight="back it up"
        description="A growing archive of certifications across AI, cybersecurity, and programming."
        action={
          <Link
            data-cursor-hover
            to="/certificates"
            className="hidden items-center gap-1.5 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300 transition-colors hover:border-sky-400 hover:text-sky-300 sm:flex"
          >
            View All Certificates <ArrowRight size={14} />
          </Link>
        }
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((cert, i) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            onOpen={() => setActiveIndex(featured.indexOf(cert))}
            delay={i * 0.06}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center sm:hidden">
        <Link
          data-cursor-hover
          to="/certificates"
          className="flex items-center gap-1.5 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300"
        >
          View All Certificates <ArrowRight size={14} />
        </Link>
      </div>

      <Lightbox items={featured} index={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
    </section>
  )
}
