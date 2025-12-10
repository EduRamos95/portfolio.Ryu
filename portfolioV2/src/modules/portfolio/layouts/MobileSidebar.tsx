import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/shared/components/ui/sheet'
import { cn } from '@/shared/utils/utils'
import type { NavItem } from '../types'

interface MobileSidebarProps {
  navItems: NavItem[]
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileSidebar({ navItems, open, onOpenChange }: MobileSidebarProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    onOpenChange(false)

    // Small delay to allow sheet to close
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        })
      }
    }, 300)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-2 mt-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg',
                'text-sm font-medium',
                'hover:bg-accent hover:text-accent-foreground',
                'transition-colors'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
