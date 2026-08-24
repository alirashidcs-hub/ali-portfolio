import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import CertificatesPage from './pages/CertificatesPage'
import PublicationsPage from './pages/PublicationsPage'
import NotFound from './pages/NotFound'
import PageLoaderSection from './components/sections/PageLoaderSection'

export default function App() {
  return (
    <>
      <PageLoaderSection />

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="certificates" element={<CertificatesPage />} />
            <Route path="publications" element={<PublicationsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}