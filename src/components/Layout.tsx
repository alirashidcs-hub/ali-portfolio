import { useEffect, useState, Suspense, lazy } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './Loader'
import CustomCursor from './CustomCursor'
import ScrollProgress from './ScrollProgress'
import BackToTop from './BackToTop'
import Navbar from './Navbar'
import Footer from './Footer'

const Background3D = lazy(() => import('./three/Background3D'))

export default function Layout() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1100)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname, location.hash])

  return (
    <div className="relative min-h-screen">
      <Loader show={loading} />
      <div className="grain" />
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

