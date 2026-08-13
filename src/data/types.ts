export type ProjectStatus = 'Completed' | 'In Progress' | 'Archived'

export type Project = {
  id: string
  emoji: string
  title: string
  description: string
  longDescription: string
  category: string
  tags: string[]
  featured: boolean
  date: string
  status: ProjectStatus
  images: string[]
  liveUrl?: string
  githubUrl?: string
  demoVideoUrl?: string
}

export type Certificate = {
  id: string
  title: string
  issuer: string
  issuerLogo?: string
  category: string
  date: string
  image?: string
  credentialUrl?: string
  description?: string
  skillsLearned?: string[]
  featured: boolean
}

export type SkillItem = { name: string; level: number }
export type SkillGroup = { category: string; items: SkillItem[] }

export type TimelineType = 'education' | 'leadership' | 'achievement' | 'certificate'
export type TimelineItem = {
  id: string
  type: TimelineType
  title: string
  org: string
  period: string
  description: string
}

export type Profile = {
  name: string
  degree: string
  university: string
  tagline: string
  careerGoal: string
  bio: string
  coursework: string[]
  roles: string[]
  socials: {
    linkedin: string
    github: string
    githubUsername: string
    email: string
    phone: string
    location: string
  }
  resumeUrl: string
  pinnedRepos?: string[]
}
