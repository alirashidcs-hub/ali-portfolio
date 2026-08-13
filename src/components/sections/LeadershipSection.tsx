import SectionHeading from '../ui/SectionHeading'
import TimelineList from '../Timeline'

export default function LeadershipSection() {
  return (
    <section id="leadership" className="relative mx-auto max-w-4xl px-6 py-32">
      <SectionHeading
        eyebrow="Leadership & Experience"
        title="Education, leadership &"
        highlight="milestones"
        description="Everything from my degree at UET Taxila to leadership roles, certifications, and shipped work — in one timeline."
      />
      <div className="mt-16">
        <TimelineList />
      </div>
    </section>
  )
}
