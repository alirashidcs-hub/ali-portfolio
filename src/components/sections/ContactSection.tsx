import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Send,
  Check,
  ArrowUpRight,
} from 'lucide-react'
import { profile } from '../../data'
import SectionHeading from '../ui/SectionHeading'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const { socials } = profile

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)

    window.setTimeout(() => {
      setSent(false)
    }, 3200)
  }

  const cards = [
    {
      icon: Mail,
      label: 'Email',
      value: socials.email,
      href: `mailto:${socials.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: socials.phone,
      href: `tel:${socials.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: socials.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      href: socials.github,
    },
  ]

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
          ========================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl sm:h-96 sm:w-96"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
      />

      {/* =========================================================
          HEADING
          ========================================================= */}

      <SectionHeading
        eyebrow="Contact"
        title="Let's build"
        highlight="something together"
        description="Reach out for collaborations, internships, or just to talk about AI and web development."
      />

      {/* =========================================================
          LOCATION / MAP CARD
          ========================================================= */}

      <motion.div
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
          margin: '-80px',
        }}
        transition={{
          duration: 0.7,
          ease: 'easeOut',
        }}
        className="glass glow-border relative mb-10 mt-12 h-64 overflow-hidden rounded-3xl sm:h-72"
      >
        {/* Animated grid */}

        <motion.div
          aria-hidden="true"
          animate={{
            backgroundPosition: ['0px 0px', '28px 28px'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(56,189,248,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.35) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Map glow */}

        <motion.div
          aria-hidden="true"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl"
        />

        {/* Location marker */}

        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: 'spring',
          }}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.7, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              className="absolute inset-0 rounded-full bg-sky-400/30"
            />

            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-sky-400/40 bg-slate-950/90 shadow-[0_0_35px_rgba(56,189,248,0.2)] backdrop-blur-xl">
              <MapPin
                size={23}
                className="text-sky-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Location information */}

        <div className="absolute bottom-5 left-1/2 z-20 w-[calc(100%-2rem)] -translate-x-1/2 text-center sm:bottom-7">
          <p className="font-display text-sm text-slate-200 sm:text-base">
            {socials.location}
          </p>

          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600 sm:text-[10px]">
            Based in Pakistan · Available for opportunities
          </p>
        </div>
      </motion.div>

      {/* =========================================================
          CONTACT GRID
          ========================================================= */}

      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
        {/* =======================================================
            CONTACT DETAILS
            ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: '-60px',
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="space-y-3"
        >
          {cards.map(
            ({ icon: Icon, label, value, href }, index) => (
              <motion.a
                key={label}
                href={href}
                target={
                  href.startsWith('http')
                    ? '_blank'
                    : undefined
                }
                rel={
                  href.startsWith('http')
                    ? 'noreferrer'
                    : undefined
                }
                data-cursor-hover
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                whileHover={{
                  x: 5,
                }}
                className="glass glow-border group relative flex items-center gap-4 overflow-hidden rounded-2xl px-4 py-4 transition-all duration-300 hover:border-sky-400/20 hover:bg-slate-900/60 sm:px-5 sm:py-4"
              >
                {/* Hover glow */}

                <div className="pointer-events-none absolute -right-10 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-sky-400/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-400/10 bg-gradient-to-br from-sky-400/10 via-violet-500/10 to-cyan-400/10 text-sky-300 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={16} />
                </span>

                {/* Text */}

                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                    {label}
                  </span>

                  <span className="mt-1 block truncate text-sm text-slate-200 transition-colors group-hover:text-sky-200">
                    {value}
                  </span>
                </span>

                {/* Arrow */}

                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300"
                />
              </motion.a>
            ),
          )}

          {/* Location */}

          <motion.div
            initial={{
              opacity: 0,
              x: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.35,
              duration: 0.45,
            }}
            className="glass flex items-center gap-4 rounded-2xl px-4 py-4 sm:px-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-400/5 text-violet-300">
              <MapPin size={16} />
            </span>

            <span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                Location
              </span>

              <span className="mt-1 block text-sm text-slate-200">
                {socials.location}
              </span>
            </span>
          </motion.div>
        </motion.div>

        {/* =======================================================
            CONTACT FORM
            ======================================================= */}

        <motion.form
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: '-60px',
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          onSubmit={handleSubmit}
          className="glass glow-border relative overflow-hidden rounded-3xl p-5 sm:p-7"
        >
          {/* Form glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl"
          />

          <div className="relative space-y-5">
            {/* Form heading */}

            <div className="mb-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-sky-300">
                Start a conversation
              </p>

              <h3 className="mt-2 font-display text-xl text-slate-100 sm:text-2xl">
                Tell me about your idea
              </h3>
            </div>

            {/* Name */}

            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                Name
              </label>

              <input
                required
                type="text"
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-700 focus:border-sky-400/50 focus:bg-slate-950 focus:ring-2 focus:ring-sky-400/5"
                placeholder="Your name"
              />
            </div>

            {/* Email */}

            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                Email
              </label>

              <input
                required
                type="email"
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-700 focus:border-sky-400/50 focus:bg-slate-950 focus:ring-2 focus:ring-sky-400/5"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}

            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                Message
              </label>

              <textarea
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-700 focus:border-sky-400/50 focus:bg-slate-950 focus:ring-2 focus:ring-sky-400/5"
                placeholder="What are you building?"
              />
            </div>

            {/* Submit */}

            <motion.button
              data-cursor-hover
              type="submit"
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-950/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                {sent ? (
                  <>
                    <Check size={15} />
                    Message sent
                  </>
                ) : (
                  <>
                    <Send
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                    Send Message
                  </>
                )}
              </span>

              {/* Button shine */}

              {!sent && (
                <motion.span
                  aria-hidden="true"
                  initial={{
                    x: '-120%',
                  }}
                  animate={{
                    x: '120%',
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-y-0 w-20 skew-x-12 bg-white/20 blur-md"
                />
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}