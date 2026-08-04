import { motion } from 'framer-motion'
import { Award, Maximize2, ExternalLink } from 'lucide-react'
import type { Certificate } from '../data/types'

export default function CertificateCard({
  cert,
  onOpen,
  delay = 0,
}: {
  cert: Certificate
  onOpen: () => void
  delay?: number
}) {
  return (
    <motion.button
      data-cursor-hover
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4 }}
      className="glass glow-border group relative flex items-start gap-4 rounded-2xl p-5 text-left"
    >
      {cert.issuerLogo ? (
        <img src={cert.issuerLogo} alt={cert.issuer} className="mt-0.5 h-8 w-8 shrink-0 rounded-lg object-contain" />
      ) : (
        <Award className="mt-0.5 shrink-0 text-violet-300" size={20} />
      )}
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-sm text-slate-100">{cert.title}</h3>
        <p className="mt-1 font-mono text-xs text-slate-500">{cert.issuer}</p>
        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-sky-300/70">
          {cert.category} · {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </p>
        {cert.skillsLearned && cert.skillsLearned.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {cert.skillsLearned.slice(0, 2).map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-700/70 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-slate-400"
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label="View credential"
          className="absolute right-4 top-4 text-slate-600 opacity-0 transition-opacity hover:text-sky-300 group-hover:opacity-100"
        >
          <ExternalLink size={13} />
        </a>
      )}
      {!cert.credentialUrl && (
        <Maximize2
          size={13}
          className="absolute right-4 top-4 text-slate-600 opacity-0 transition-opacity group-hover:opacity-100"
        />
      )}
    </motion.button>
  )
}
