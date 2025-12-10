// Portfolio module types

export interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
}

export interface Skill {
  name: string
  icon?: React.ReactNode
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: 'frontend' | 'backend' | 'tools' | 'other'
}
