import { motion } from 'framer-motion'
import { BrainCircuit, Braces, Building2, ChartNoAxesCombined, Check } from 'lucide-react'
import { experiences } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const experienceIcons = [Braces, BrainCircuit, ChartNoAxesCombined]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden bg-[#FFF0F3] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(183,110,121,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(183,110,121,0.55) 1px, transparent 1px)',
          backgroundSize: 'clamp(32px, 4vw, 48px) clamp(32px, 4vw, 48px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div id="experience-heading">
          <SectionHeading
            eyebrow="Internships & Professional Experience"
            title="Experience"
            highlight=""
            description="Hands-on internship experience across Python development, machine learning, and data analysis."
            align="center"
          />
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.05, ease: 'easeOut' }}
            className="absolute bottom-8 left-5 top-8 w-px origin-top bg-gradient-to-b from-[#B76E79] via-[#D99AA5] to-[#E3C8CE] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((experience, index) => {
              const Icon = experienceIcons[index]
              const isLeft = index % 2 === 0

              return (
                <div
                  key={experience.id}
                  className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:gap-x-0"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.65 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
                    className="relative z-10 col-start-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#D9BFC5] bg-white text-[#9F5262] shadow-[0_8px_20px_rgba(183,110,121,0.10)] md:col-start-2 md:justify-self-center"
                  >
                    <Icon size={17} strokeWidth={1.8} />
                  </motion.div>

                  <motion.article
                    initial={{ opacity: 0, y: 24, scale: 0.985 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.16 }}
                    transition={{ duration: 0.65, delay: 0.12 + index * 0.12, ease: 'easeOut' }}
                    whileHover={{ y: -5 }}
                    className={`group relative col-start-2 row-start-1 overflow-hidden rounded-3xl border border-[#E3C8CE] bg-white/85 p-5 shadow-[0_18px_55px_rgba(183,110,121,0.08)] transition-[border-color,box-shadow] duration-300 hover:border-[#B76E79] hover:shadow-[0_22px_60px_rgba(159,82,98,0.13)] sm:p-6 ${
                      isLeft ? 'md:col-start-1' : 'md:col-start-3'
                    }`}
                  >
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B76E79]/65 to-transparent" />

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#9F5262]">
                          {experience.type}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-[#171416] sm:text-2xl">
                          {experience.role}
                        </h3>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E3C8CE] bg-[#FFF7F9] px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-[#40383B]">
                        <Building2 size={12} className="text-[#9F5262]" />
                        {experience.organization}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#252023] sm:text-[0.9375rem] sm:leading-7">
                      {experience.description}
                    </p>

                    <div className="mt-5 grid gap-2 border-t border-[#F0E4E7] pt-4 sm:grid-cols-2">
                      {experience.responsibilities.map((responsibility) => (
                        <div key={responsibility} className="flex items-start gap-2 text-sm leading-5 text-[#40383B]">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FBECEF] text-[#9F5262]">
                            <Check size={10} strokeWidth={2.5} />
                          </span>
                          <span>{responsibility}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#E3C8CE] bg-[#FFF7F9] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-[#40383B] transition-colors duration-300 group-hover:border-[#D99AA5] group-hover:bg-[#FBECEF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
