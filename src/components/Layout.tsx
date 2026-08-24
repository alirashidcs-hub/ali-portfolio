import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from './BackToTop'
import ScrollProgress from './ScrollProgress'
import ScrollToTop from './ScrollToTop'
import CustomCursor from './CustomCursor'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <ScrollProgress />
      <CustomCursor />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}