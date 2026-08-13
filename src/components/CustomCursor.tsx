import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: pos.x, y: pos.y }

    const move = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [data-cursor-hover]'))
    }

    let raf = 0
    const animate = () => {
      ring.x += (pos.x - ring.x) * 0.15
      ring.y += (pos.y - ring.y) * 0.15
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`
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
    <div className="hidden md:block">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[100] h-1.5 w-1.5 -ml-0.75 -mt-0.75 rounded-full bg-cyan-300 pointer-events-none"
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[100] rounded-full border pointer-events-none transition-[width,height,border-color,opacity] duration-200 ease-out -ml-4 -mt-4 ${
          hovering ? 'h-10 w-10 border-violet-400 opacity-90' : 'h-8 w-8 border-sky-400/60 opacity-60'
        }`}
      />
    </div>
  )
}
