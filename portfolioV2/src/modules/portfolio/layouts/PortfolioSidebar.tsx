import { cn } from '@/shared/utils/utils'
import type { NavItem } from '../types'

interface PortfolioSidebarProps {
  navItems: NavItem[]
  className?: string
}

export function PortfolioSidebar({ navItems, className }: PortfolioSidebarProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <aside
      className={cn(
        'hidden md:flex flex-col',
        'w-24 min-w-[100px] bg-muted/50',
        'border-r border-border',
        className
      )}
    >
      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className={cn(
              'flex flex-col items-center gap-1 p-2 rounded-lg',
              'text-xs font-medium text-muted-foreground',
              'hover:bg-accent hover:text-accent-foreground',
              'transition-colors'
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
