import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/utils/utils'

interface HeroSectionProps {
  name?: string
  tagline?: string
  avatarImage?: string
  maskImage?: string
  className?: string
}

export function HeroSection({
  name = 'RyuJak',
  tagline = 'Construyo interfaces modernas',
  avatarImage = '/assets/svgs/zorro_face.svg',
  maskImage = '/assets/svgs/masks/div.svg',
  className,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className={cn(
        'relative h-[calc(100dvh-8rem)] md:h-[calc(100dvh-10rem)]',
        'rounded-3xl overflow-hidden',
        'm-4',
        className
      )}
    >
      {/* Background Avatar */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${avatarImage})` }}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-end">
        {/* Name with stroke effect */}
        <div className="relative w-full z-10">
          {/* Stroke layer */}
          <h1
            className={cn(
              'absolute top-0 left-0 w-full text-center',
              'text-5xl md:text-7xl font-bold text-primary my-2',
              'font-["Wallpoet",sans-serif]'
            )}
            style={{
              WebkitTextStroke: '12px black',
            }}
          >
            {name}
          </h1>
          {/* Main text layer */}
          <h1
            className={cn(
              'relative w-full text-center',
              'text-5xl md:text-7xl font-bold text-primary my-2',
              'font-["Wallpoet",sans-serif]'
            )}
          >
            {name}
          </h1>
        </div>

        {/* Masked Bottom Section */}
        <div
          className={cn(
            'w-full p-4 rounded-lg',
            'bg-primary',
            'flex flex-col items-end',
            'max-h-36'
          )}
          style={{
            WebkitMaskImage: `url("${maskImage}")`,
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            WebkitMaskPosition: 'center',
            maskImage: `url("${maskImage}")`,
            maskRepeat: 'no-repeat',
            maskSize: '100% 100%',
            maskPosition: 'center',
          }}
        >
          {/* Tagline */}
          <div className="w-[85%] h-1/2 flex items-start justify-end">
            <p className="text-lg md:text-xl text-primary-contrast text-right font-medium">
              {tagline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="w-full h-1/2 flex flex-col items-center justify-end gap-2 xs:flex-row xs:justify-center sm:justify-end">
            <Button
              color="secondary"
              variant="contained"
              className="rounded-full px-6 tracking-wider"
            >
              View Projects
            </Button>
            <Button
              color="primary"
              variant="outlined"
              className="rounded-full px-6 tracking-wider border-primary-contrast text-primary-contrast hover:bg-primary-contrast/10"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
