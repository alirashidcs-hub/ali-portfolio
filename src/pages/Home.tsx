import Hero from '../components/Hero'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection'
import FeaturedPublicationsSection from '../components/sections/FeaturedPublicationsSection'
import FeaturedCertificatesSection from '../components/sections/FeaturedCertificatesSection'
import EducationSection from '../components/sections/EducationSection'
import LeadershipSection from '../components/sections/LeadershipSection'
import GitHubStats from '../components/GitHubStats'
import ResumeSection from '../components/ResumeSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Introduction */}
      <Hero />

      {/* 2. About & Expertise */}
      <AboutSection />
      <SkillsSection />

      {/* 3. Selected Work */}
      <FeaturedProjectsSection />

      {/* 4. Writing & Publications */}
      <FeaturedPublicationsSection />

      {/* 5. Professional Credentials */}
      <FeaturedCertificatesSection />

      {/* 6. Developer Activity */}
      <GitHubStats />

      {/* 7. Academic Background */}
      <EducationSection />

      {/* 8. Leadership & Activities */}
      <LeadershipSection />

      {/* 9. Resume */}
      <ResumeSection />

      {/* 10. Contact */}
      <ContactSection />
    </div>
  )
}
