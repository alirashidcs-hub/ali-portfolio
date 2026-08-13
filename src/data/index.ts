import projectsData from './projects.json'
import certificatesData from './certificates.json'
import skillsData from './skills.json'
import timelineData from './timeline.json'
import profileData from './profile.json'
import type { Project, Certificate, SkillGroup, TimelineItem, Profile } from './types'

export const projects = projectsData as Project[]
export const certificates = certificatesData as Certificate[]
export const skillGroups = skillsData as SkillGroup[]
export const timeline = timelineData as TimelineItem[]
export const profile = profileData as Profile

export * from './types'
