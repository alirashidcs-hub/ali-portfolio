import { motion } from 'framer-motion'
import { Download, FileText, Eye, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data'
import SectionHeading from './ui/SectionHeading'

export default function ResumeSection() {
  const [preview, setPreview] = useState(false)

  return (
    <section id="resume" className="relative mx-auto max-w-5xl px-6 py-32">
      <SectionHeading
        eyebrow="Resume"
        title="My professional"
        highlight="snapshot"
        description="Preview or download a one-page summary of my education, skills, projects, and experience."
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass glow-border mt-14 flex flex-col items-center gap-6 rounded-3xl p-10 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-sky-400/20 via-violet-500/20 to-cyan-400/20 p-4 text-sky-300">
            <FileText size={26} />
          </div>

          <div>
            <h3 className="font-display text-xl text-slate-100">
              Ali Rashid — Resume
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              A concise overview of my education, skills, projects, and
              technical experience.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap justify-center gap-3">
          <button
            type="button"
            data-cursor-hover
            onClick={() => setPreview(true)}
            className="flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300 transition-colors hover:border-sky-400 hover:text-sky-300"
          >
            <Eye size={15} />
            Preview
          </button>

          <a
            data-cursor-hover
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950 transition-transform hover:scale-105"
          >
            <Download size={15} />
            Download
          </a>
        </div>
      </motion.div>

      {/* Resume Preview Modal */}
      {preview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setPreview(false)}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setPreview(false)}
              aria-label="Close resume preview"
              className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-950/90 p-2 text-slate-400 backdrop-blur-md transition-colors hover:text-white"
            >
              <X size={18} />
            </button>

            <iframe
              src={profile.resumeUrl}
              title="Ali Rashid Resume Preview"
              className="h-full w-full"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}