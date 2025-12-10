import { Menu } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/utils/utils'
import type { NavItem } from '../types'

interface PortfolioHeaderProps {
  navItems: NavItem[]
  onMenuClick?: () => void
  className?: string
}

export function PortfolioHeader({ navItems, onMenuClick, className }: PortfolioHeaderProps) {
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
    <header
      className={cn(
        'sticky top-0 z-40 flex h-16 items-center justify-between px-4 md:px-6',
        'bg-primary text-primary-contrast',
        className
      )}
    >
      {/* Logo / Profile */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">Perfil</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className={cn(
              'px-4 py-2 text-sm font-medium transition-colors',
              'hover:bg-primary-light rounded-md'
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <Button
        variant="text"
        color="primary"
        size="icon"
        className="md:hidden text-primary-contrast hover:bg-primary-light"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Menu</span>
      </Button>
    </header>
  )
}
