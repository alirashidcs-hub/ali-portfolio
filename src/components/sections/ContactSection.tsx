import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Phone, Send, Check } from 'lucide-react'
import { profile } from '../../data'
import SectionHeading from '../ui/SectionHeading'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const { socials } = profile

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 3200)
  }

  const cards = [
    { icon: Mail, label: 'Email', value: socials.email, href: `mailto:${socials.email}` },
    { icon: Phone, label: 'Phone', value: socials.phone, href: `tel:${socials.phone.replace(/\s+/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: socials.linkedin },
    { icon: Github, label: 'GitHub', value: 'View my repositories', href: socials.github },
  ]

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build"
        highlight="something together"
        description="Reach out for collaborations, internships, or just to talk about AI and web development."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass glow-border relative mb-10 mt-14 flex h-56 items-center justify-center overflow-hidden rounded-2xl"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(56,189,248,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.4) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-2 text-center">
          <MapPin size={28} className="text-sky-300" />
          <p className="font-display text-sm text-slate-200">{socials.location}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Map preview placeholder</p>
        </div>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {cards.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              data-cursor-hover
              className="glass glow-border flex items-center gap-4 rounded-xl px-5 py-4 transition-transform hover:-translate-y-0.5"
            >
              <span className="rounded-full bg-gradient-to-br from-sky-400/20 via-violet-500/20 to-cyan-400/20 p-2.5 text-sky-300">
                <Icon size={16} />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500">{label}</span>
                <span className="block text-sm text-slate-200">{value}</span>
              </span>
            </a>
          ))}

          <div className="glass flex items-center gap-4 rounded-xl px-5 py-4">
            <span className="rounded-full bg-gradient-to-br from-sky-400/20 via-violet-500/20 to-cyan-400/20 p-2.5 text-sky-300">
              <MapPin size={16} />
            </span>
            <span>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500">Location</span>
              <span className="block text-sm text-slate-200">{socials.location}</span>
            </span>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass glow-border space-y-4 rounded-2xl p-7"
        >
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-slate-500">Name</label>
            <input
              required
              type="text"
              className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-200 outline-none focus:border-sky-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-slate-500">Email</label>
            <input
              required
              type="email"
              className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-200 outline-none focus:border-sky-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-slate-500">Message</label>
            <textarea
              required
              rows={4}
              className="mt-1.5 w-full resize-none rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-200 outline-none focus:border-sky-400"
              placeholder="What are you building?"
            />
          </div>
          <motion.button
            data-cursor-hover
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 py-3 text-sm font-medium text-slate-950"
          >
            {sent ? (
              <>
                <Check size={15} /> Message sent
              </>
            ) : (
              <>
                <Send size={15} /> Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
