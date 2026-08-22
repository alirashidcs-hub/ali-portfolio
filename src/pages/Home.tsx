import Hero from '../components/Hero'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection'
import FeaturedCertificatesSection from '../components/sections/FeaturedCertificatesSection'
import FeaturedPublicationsSection from '../components/sections/FeaturedPublicationsSection'
import EducationSection from '../components/sections/EducationSection'
import LeadershipSection from '../components/sections/LeadershipSection'
import GitHubStats from '../components/GitHubStats'
import ResumeSection from '../components/ResumeSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <FeaturedCertificatesSection />
      <FeaturedPublicationsSection />
      <EducationSection />
      <LeadershipSection />
      <GitHubStats />
      <ResumeSection />
      <ContactSection />
    </div>
  )
}