import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 700)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          data-cursor-hover
          type="button"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 16,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 16,
          }}
          transition={{
            duration: 0.25,
            ease: 'easeOut',
          }}
          whileHover={{
            y: -3,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-sky-400/20 bg-slate-950/80 text-sky-300 shadow-lg shadow-violet-950/40 backdrop-blur-xl transition-colors duration-300 hover:border-sky-400/40 hover:bg-slate-900 hover:text-white"
        >
          <ArrowUp size={17} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}