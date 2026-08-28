import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const pos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    const ring = {
      x: pos.x,
      y: pos.y,
    }

    const move = (event: MouseEvent) => {
      pos.x = event.clientX
      pos.y = event.clientY

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }

      const target = event.target as HTMLElement | null

      setHovering(
        !!target?.closest(
          'a, button, [data-cursor-hover]',
        ),
      )
    }

    let raf = 0

    const animate = () => {
      ring.x += (pos.x - ring.x) * 0.15
      ring.y += (pos.y - ring.y) * 0.15

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.x}px, ${ring.y}px, 0)`
      }

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
    >
      {/* Cursor dot */}

      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 h-1.5 w-1.5 -ml-0.75 -mt-0.75 rounded-full bg-cyan-300 will-change-transform"
      />

      {/* Cursor ring */}

      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 -ml-4 -mt-4 rounded-full border will-change-transform transition-[width,height,border-color,opacity] duration-200 ease-out ${
          hovering
            ? 'h-10 w-10 border-violet-400 opacity-90'
            : 'h-8 w-8 border-sky-400/60 opacity-60'
        }`}
      />
    </div>
  )
}