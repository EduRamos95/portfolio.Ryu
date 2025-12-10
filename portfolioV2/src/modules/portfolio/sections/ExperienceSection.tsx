import { Badge } from '@/shared/components/ui/badge'
import { GlassCard } from '@/shared/components/ui/glass-card'
import { Separator } from '@/shared/components/ui/separator'
import { cn } from '@/shared/utils/utils'
import type { Experience } from '../types'

interface ExperienceSectionProps {
  title?: string
  experiences?: Experience[]
  className?: string
}

// Placeholder experience data
const defaultExperiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Company',
    role: 'Senior Frontend Developer',
    period: '2023 - Present',
    description: 'Leading frontend development team, implementing modern React applications with TypeScript.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: '2',
    company: 'Startup Inc',
    role: 'Full Stack Developer',
    period: '2021 - 2023',
    description: 'Developed full-stack applications using React and Node.js, managing databases and API integrations.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: '3',
    company: 'Agency XYZ',
    role: 'Frontend Developer',
    period: '2019 - 2021',
    description: 'Built responsive web applications for various clients using modern frontend technologies.',
    technologies: ['JavaScript', 'Vue.js', 'SCSS', 'Git'],
  },
]

export function ExperienceSection({
  title = 'Experience',
  experiences = defaultExperiences,
  className,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className={cn('w-full max-w-5xl mx-auto p-4', className)}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        {title}
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-primary hidden md:block" />

              <GlassCard
                variant="solid"
                padding="md"
                className={cn('md:ml-10', index === 0 && 'border-primary/50')}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {experience.role}
                    </h3>
                    <p className="text-primary font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit text-muted-foreground">
                    {experience.period}
                  </Badge>
                </div>

                <Separator className="my-3" />

                <p className="text-muted-foreground text-sm mb-4">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary hover:bg-secondary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
