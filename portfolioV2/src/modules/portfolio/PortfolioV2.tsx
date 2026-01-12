import { MainLayout } from './layouts'
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
} from './sections'

export function PortfolioV2() {
  return (
    <MainLayout>
      {/* Mobile Layout */}
      <div className="flex flex-col">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </MainLayout>
  )
}
