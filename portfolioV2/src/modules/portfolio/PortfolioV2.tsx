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
      {/* <div className="flex flex-col gap-4 md:hidden"> */}
      {/* <HeroSection /> */}
      {/* <AboutSection /> */}
      {/* <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </div> */}

      {/* Desktop Layout */}
      <div className="flex flex-col">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </MainLayout>
  )
}
