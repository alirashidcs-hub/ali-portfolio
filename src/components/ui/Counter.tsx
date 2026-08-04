import { useEffect, useRef } from 'react'
import { useInView, animate } from 'framer-motion'

export default function Counter({ to, duration = 1.4 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || !ref.current) return
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toString()
      },
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return <span ref={ref}>0</span>
}
