import { useState, type ReactNode } from 'react'
import { User, Code, Briefcase, FolderKanban, Home } from 'lucide-react'
import { GlassCard } from '@/shared/components/ui/glass-card'
import { cn } from '@/shared/utils/utils'
import { PortfolioHeader } from './PortfolioHeader'
import { PortfolioSidebar } from './PortfolioSidebar'
import { MobileSidebar } from './MobileSidebar'
import type { NavItem } from '../types'

interface MainLayoutProps {
  children: ReactNode
  backgroundImage?: string
  className?: string
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '#hero', icon: <Home className="h-4 w-4" /> },
  { label: 'About', href: '#about', icon: <User className="h-4 w-4" /> },
  { label: 'Skills', href: '#skills', icon: <Code className="h-4 w-4" /> },
  { label: 'Experience', href: '#experience', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Projects', href: '#projects', icon: <FolderKanban className="h-4 w-4" /> },
]

export function MainLayout({
  children,
  backgroundImage = '/assets/images/dragon_background_2.jpeg',
  className,
}: MainLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  //
  // const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  //   e.preventDefault()

  //   // Small delay to allow sheet to close
  //   setTimeout(() => {
  //     const element = document.querySelector(href)
  //     if (element) {
  //       const offset = 80
  //       const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset
  //       window.scrollTo({
  //         top: elementPosition,
  //         behavior: 'smooth',
  //       })
  //     }
  //   }, 300)
  // }

  return (
    <div
      className={cn(
        'min-h-screen w-full',
        'bg-cover bg-no-repeat bg-center md:bg-top',
        'p-4 sm:p-5 md:p-6',
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <GlassCard
        variant="glass"
        shadow="combined"
        radius="lg"
        padding="none"
        className="min-h-[calc(100dvh-2rem)] md:min-h-[calc(100dvh-3rem)]"
      >
        <div className="flex flex-row min-h-[calc(100dvh-2rem)] md:min-h-[calc(100dvh-3rem)]">
          {/* Sidebar - Desktop only */}
          <PortfolioSidebar navItems={defaultNavItems} />

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <PortfolioHeader
              navItems={defaultNavItems}
              onMenuClick={() => setMobileMenuOpen(true)}
            />

            {/* Content Area */}
            <main id="main-content" className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </GlassCard>

      {/* Mobile Sidebar */}
      <MobileSidebar
        navItems={defaultNavItems}
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
      />
    </div>
  )
}
