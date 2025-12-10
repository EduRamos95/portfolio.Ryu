import { Badge } from '@/shared/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/shared/components/ui/scroll-area'
import { GlassCard } from '@/shared/components/ui/glass-card'
import { cn } from '@/shared/utils/utils'
import type { Skill } from '../types'

interface SkillsSectionProps {
  title?: string
  skills?: Skill[]
  className?: string
}

// Placeholder skills data
const defaultSkills: Skill[] = [
  { name: 'React', category: 'frontend', level: 'expert' },
  { name: 'TypeScript', category: 'frontend', level: 'expert' },
  { name: 'Next.js', category: 'frontend', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'expert' },
  { name: 'Node.js', category: 'backend', level: 'advanced' },
  { name: 'Python', category: 'backend', level: 'intermediate' },
  { name: 'PostgreSQL', category: 'backend', level: 'advanced' },
  { name: 'Docker', category: 'tools', level: 'intermediate' },
  { name: 'Git', category: 'tools', level: 'expert' },
  { name: 'AWS', category: 'tools', level: 'intermediate' },
]

const categoryColors = {
  frontend: 'primary',
  backend: 'secondary',
  tools: 'info',
  other: 'custom1',
} as const

export function SkillsSection({
  title = 'Skills',
  skills = defaultSkills,
  className,
}: SkillsSectionProps) {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>
  )

  return (
    <section
      id="skills"
      className={cn('w-full max-w-5xl mx-auto p-4', className)}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        {title}
      </h2>

      <div className="space-y-6">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <GlassCard key={category} variant="solid" padding="md">
            <h3 className="text-lg font-semibold text-foreground capitalize mb-4">
              {category}
            </h3>

            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-2 pb-2">
                {categorySkills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="default"
                    className={cn(
                      'px-3 py-1 text-sm',
                      `bg-${categoryColors[skill.category]} text-${categoryColors[skill.category]}-contrast`,
                      'hover:opacity-80 transition-opacity'
                    )}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
