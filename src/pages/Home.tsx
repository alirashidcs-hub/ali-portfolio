import Hero from '../components/Hero'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ExperienceSection from '../components/sections/ExperienceSection'
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
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <FeaturedPublicationsSection />
      <FeaturedCertificatesSection />
      <GitHubStats />
      <EducationSection />
      <LeadershipSection />
      <ResumeSection />
      <ContactSection />
    </div>
  )
}
