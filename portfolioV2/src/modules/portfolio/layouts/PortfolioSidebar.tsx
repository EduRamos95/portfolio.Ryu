import { cn } from '@/shared/utils/utils'
import { LogoIcon } from '@/shared/components/svg'
import type { NavItem } from '../types'

interface PortfolioSidebarProps {
  navItems: NavItem[]
  className?: string
  /** Whether to show the logo at the top of the sidebar */
  showLogo?: boolean
  /** Custom scroll handler for navigation */
  onScrollToSection?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

const defaultScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

export function PortfolioSidebar({
  navItems,
  className,
  showLogo = true,
  onScrollToSection = defaultScrollToSection,
}: Readonly<PortfolioSidebarProps>) {

  return (
    <aside
      className={cn(
        'hidden md:flex flex-col',
        'w-24 min-w-[100px] bg-muted/50',
        'border-r border-border',
        'sticky top-0 h-screen max-h-[calc(100dvh-2rem)] md:max-h-[calc(100dvh-3rem)]',
        className
      )}
    >
      {showLogo && (
        <div className="flex items-center justify-center p-4 border-b border-border">
          <LogoIcon size={{ default: 48, lg: 56 }} fill="foreground" title="Logo" />
        </div>
      )}
      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => onScrollToSection(e, item.href)}
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
