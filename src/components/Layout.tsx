import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from './BackToTop'
import ScrollProgress from './ScrollProgress'
import ScrollToTop from './ScrollToTop'
import CustomCursor from './CustomCursor'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}