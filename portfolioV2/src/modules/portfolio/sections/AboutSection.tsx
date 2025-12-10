import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/shared/components/ui/avatar'
import { GlassCard } from '@/shared/components/ui/glass-card'
import { cn } from '@/shared/utils/utils'

interface AboutSectionProps {
  greeting?: string
  name?: string
  role?: string
  avatarImage?: string
  githubUrl?: string
  linkedinUrl?: string
  email?: string
  className?: string
}

export function AboutSection({
  greeting = 'Hi!',
  name = "I'm Edu R.",
  role = 'Full-stack Developer',
  avatarImage = '/assets/svgs/zorro_v2.svg',
  githubUrl = 'https://github.com',
  linkedinUrl = 'https://linkedin.com',
  email = 'mailto:contact@example.com',
  className,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className={cn(
        'flex flex-col-reverse sm:flex-row items-center justify-center',
        'w-full max-w-5xl mx-auto',
        'gap-4 p-4',
        className
      )}
    >
      {/* Content Card */}
      <GlassCard variant="solid" className="flex-1 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          {/* Text Content */}
          <div className="flex flex-col justify-center flex-1 text-center sm:text-left">
            <p className="text-xl md:text-2xl font-medium text-foreground">
              {greeting}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground my-2">
              {name}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {role}
            </p>

            {/* Social Links */}
            <div className="flex gap-2 mt-4 justify-center sm:justify-start">
              <Button
                variant="text"
                size="icon"
                color="primary"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="text"
                size="icon"
                color="primary"
                asChild
              >
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="text"
                size="icon"
                color="primary"
                asChild
              >
                <a href={email}>
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>

            {/* CTA */}
            <Button
              variant="text"
              color="warning"
              className="mt-4 font-semibold"
              asChild
            >
              <a href={email}>Send me an Email...</a>
            </Button>
          </div>

          {/* Avatar - Desktop */}
          <div className="hidden sm:flex flex-shrink-0 justify-center">
            <Avatar className="w-32 h-32 md:w-40 md:h-40">
              <AvatarImage src={avatarImage} alt={name} className="scale-150" />
              <AvatarFallback className="text-4xl bg-primary text-primary-contrast">
                {name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </GlassCard>

      {/* Avatar - Mobile */}
      <div className="flex sm:hidden justify-center w-full">
        <Avatar className="w-32 h-32">
          <AvatarImage src={avatarImage} alt={name} />
          <AvatarFallback className="text-4xl bg-primary text-primary-contrast">
            {name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </section>
  )
}
