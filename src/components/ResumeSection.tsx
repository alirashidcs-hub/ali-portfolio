import { motion } from 'framer-motion'
import { Download, FileText, Eye } from 'lucide-react'
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
        description="Preview or download a one-page summary of my education, skills, and project work."
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass glow-border mt-14 flex flex-col items-center gap-6 rounded-3xl p-10 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-sky-400/20 via-violet-500/20 to-cyan-400/20 p-4 text-sky-300">
            <FileText size={26} />
          </div>
          <div>
            <h3 className="font-display text-xl text-slate-100">My Resume</h3>
            <p className="mt-1 text-sm text-slate-500">
              A one-page snapshot of my education, skills, and project work.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            data-cursor-hover
            onClick={() => setPreview(true)}
            className="flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300 transition-colors hover:border-sky-400 hover:text-sky-300"
          >
            <Eye size={15} /> Preview
          </button>
          <a
            data-cursor-hover
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950"
          >
            <Download size={15} /> Download
          </a>
        </div>
      </motion.div>

      {preview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setPreview(false)}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass glow-border h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl"
          >
            <iframe src={profile.resumeUrl} title="Resume preview" className="h-full w-full" />
          </div>
        </motion.div>
      )}
    </section>
  )
}
