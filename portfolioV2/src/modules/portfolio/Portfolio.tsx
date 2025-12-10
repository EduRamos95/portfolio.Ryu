import { MainLayout } from './layouts'
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
} from './sections'

export function Portfolio() {
  return (
    <MainLayout>
      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 md:hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col">
        {/* Top Section: Hero + Side Panel */}
        <div className="grid grid-cols-[3fr_1fr] gap-4 p-4 min-h-[66vh]">
          {/* Hero takes 3/4 */}
          <HeroSection className="h-full m-0" />

          {/* Side Panel takes 1/4 */}
          <div className="flex flex-col gap-4">
            <AboutSection className="flex-1 p-0 max-w-none" />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="p-4 space-y-8">
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
        </div>
      </div>
    </MainLayout>
  )
}
