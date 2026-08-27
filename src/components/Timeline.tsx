import { motion } from 'framer-motion'
import {
  GraduationCap,
  Users,
  Trophy,
  Award,
  type LucideIcon,
} from 'lucide-react'
import { timeline } from '../data'
import type { TimelineType } from '../data/types'

const iconMap: Record<TimelineType, LucideIcon> = {
  education: GraduationCap,
  leadership: Users,
  achievement: Trophy,
  certificate: Award,
}

const colorMap: Record<TimelineType, string> = {
  education: 'text-sky-300',
  leadership: 'text-violet-300',
  achievement: 'text-cyan-300',
  certificate: 'text-amber-300',
}

const labelMap: Record<TimelineType, string> = {
  education: 'Education',
  leadership: 'Leadership',
  achievement: 'Achievement',
  certificate: 'Certificate',
}

export default function TimelineList() {
  return (
    <div className="relative border-l border-slate-800/80 pl-7 sm:pl-10">
      {timeline.map((item, i) => {
        const Icon = iconMap[item.type]
        const color = colorMap[item.type]

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              delay: i * 0.06,
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="group relative pb-9 sm:pb-10 last:pb-0"
          >
            {/* Timeline Node */}
            <motion.span
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.2 }}
              className={`glass absolute -left-[43px] flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/70 sm:-left-[52px] sm:h-8 sm:w-8 ${color}`}
            >
              <Icon size={13} className="sm:h-[14px] sm:w-[14px]" />
            </motion.span>

            {/* Period + Type */}
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-300/80 sm:text-xs sm:tracking-widest">
                {item.period}
              </p>

              <span
                className={`rounded-full border border-slate-700/70 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-widest ${color}`}
              >
                {labelMap[item.type]}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-2 font-display text-base leading-snug text-slate-100 transition-colors group-hover:text-sky-200 sm:text-lg">
              {item.title}
            </h3>

            {/* Organization */}
            <p className="mt-1 font-mono text-[10px] leading-5 text-slate-500 sm:text-xs">
              {item.org}
            </p>

            {/* Description */}
            <p className="mt-2 max-w-xl text-[13px] leading-6 text-slate-400 sm:text-sm">
              {item.description}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}