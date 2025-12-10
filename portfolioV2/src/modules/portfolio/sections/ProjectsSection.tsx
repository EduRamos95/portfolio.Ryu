import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { Badge } from '@/shared/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/shared/components/ui/card'
import { ScrollArea, ScrollBar } from '@/shared/components/ui/scroll-area'
import { cn } from '@/shared/utils/utils'
import type { Project } from '../types'

interface ProjectsSectionProps {
  title?: string
  projects?: Project[]
  className?: string
}

// Placeholder projects data
const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include cart, payments, and admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    demoUrl: 'https://demo.example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    demoUrl: 'https://demo.example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location-based forecasts and interactive charts.',
    tags: ['React', 'Chart.js', 'OpenWeather API'],
    demoUrl: 'https://demo.example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with React and Tailwind CSS, featuring dark mode and animations.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    repoUrl: 'https://github.com',
  },
  {
    id: '5',
    title: 'API Gateway',
    description: 'Microservices API gateway with rate limiting, caching, and authentication.',
    tags: ['Node.js', 'Redis', 'Docker', 'JWT'],
    repoUrl: 'https://github.com',
  },
]

export function ProjectsSection({
  title = 'Projects',
  projects = defaultProjects,
  className,
}: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className={cn('w-full max-w-5xl mx-auto p-4', className)}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        {title}
      </h2>

      {/* Horizontal Scrollable Projects */}
      <ScrollArea className="w-full">
        <div className="flex gap-4 pb-4">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={cn(
                'min-w-[280px] max-w-[320px] flex flex-col',
                'hover:shadow-lg transition-shadow'
              )}
            >
              {/* Project Image Placeholder */}
              {project.image ? (
                <div
                  className="h-40 bg-cover bg-center rounded-t-xl"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              ) : (
                <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/30">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}

              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                {project.demoUrl && (
                  <Button
                    variant="contained"
                    color="primary"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button
                    variant="outlined"
                    color="primary"
                    size="sm"
                    className={project.demoUrl ? '' : 'flex-1'}
                    asChild
                  >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}
