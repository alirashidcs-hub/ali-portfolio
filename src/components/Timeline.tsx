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
    <div className="relative border-l border-slate-800 pl-10">
      {timeline.map((item, i) => {
        const Icon = iconMap[item.type]
        const color = colorMap[item.type]

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              delay: i * 0.06,
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="group relative pb-10 last:pb-0"
          >
            {/* Timeline Node */}
            <motion.span
              whileHover={{ scale: 1.12 }}
              className={`glass absolute -left-[52px] flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/70 ${color}`}
            >
              <Icon size={14} />
            </motion.span>

            {/* Period + Type */}
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-mono text-xs uppercase tracking-widest text-violet-300/80">
                {item.period}
              </p>

              <span
                className={`rounded-full border border-slate-700/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${color}`}
              >
                {labelMap[item.type]}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-2 font-display text-lg text-slate-100 transition-colors group-hover:text-sky-200">
              {item.title}
            </h3>

            {/* Organization */}
            <p className="mt-0.5 font-mono text-xs text-slate-500">
              {item.org}
            </p>

            {/* Description */}
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}