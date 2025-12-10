import { Button } from '@/shared/components/ui/button'
import { useTheme } from '@/app/providers'

export function HomePage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Portfolio V2</h1>
          <p className="text-lg text-muted-foreground">
            Sistema de Theme Híbrido - Similar a Material UI pero más rápido
          </p>

          {/* Theme Toggle */}
          <div className="flex gap-2">
            <Button
              color="primary"
              variant={theme === 'light' ? 'contained' : 'outlined'}
              onClick={() => setTheme('light')}
            >
              Light
            </Button>
            <Button
              color="primary"
              variant={theme === 'dark' ? 'contained' : 'outlined'}
              onClick={() => setTheme('dark')}
            >
              Dark
            </Button>
            <Button
              color="primary"
              variant={theme === 'system' ? 'contained' : 'outlined'}
              onClick={() => setTheme('system')}
            >
              System
            </Button>
          </div>
        </div>

        {/* Primary Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Primary</h2>
          <div className="flex flex-wrap gap-4">
            <Button color="primary" variant="contained">
              Contained
            </Button>
            <Button color="primary" variant="outlined">
              Outlined
            </Button>
            <Button color="primary" variant="text">
              Text
            </Button>
            <Button color="primary" variant="contained" disabled>
              Disabled
            </Button>
          </div>
        </section>

        {/* Secondary Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Secondary</h2>
          <div className="flex flex-wrap gap-4">
            <Button color="secondary" variant="contained">
              Contained
            </Button>
            <Button color="secondary" variant="outlined">
              Outlined
            </Button>
            <Button color="secondary" variant="text">
              Text
            </Button>
          </div>
        </section>

        {/* Error Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Error</h2>
          <div className="flex flex-wrap gap-4">
            <Button color="error" variant="contained">
              Delete
            </Button>
            <Button color="error" variant="outlined">
              Cancel
            </Button>
            <Button color="error" variant="text">
              Remove
            </Button>
          </div>
        </section>

        {/* Warning Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Warning</h2>
          <div className="flex flex-wrap gap-4">
            <Button color="warning" variant="contained">
              Warning
            </Button>
            <Button color="warning" variant="outlined">
              Caution
            </Button>
            <Button color="warning" variant="text">
              Alert
            </Button>
          </div>
        </section>

        {/* Info Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Info</h2>
          <div className="flex flex-wrap gap-4">
            <Button color="info" variant="contained">
              Info
            </Button>
            <Button color="info" variant="outlined">
              Details
            </Button>
            <Button color="info" variant="text">
              Learn More
            </Button>
          </div>
        </section>

        {/* Success Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Success</h2>
          <div className="flex flex-wrap gap-4">
            <Button color="success" variant="contained">
              Save
            </Button>
            <Button color="success" variant="outlined">
              Confirm
            </Button>
            <Button color="success" variant="text">
              Submit
            </Button>
          </div>
        </section>

        {/* Custom Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Custom Colors (Brand)
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button color="custom1" variant="contained">
              Custom 1
            </Button>
            <Button color="custom1" variant="outlined">
              Custom 1 Outlined
            </Button>
            <Button color="custom2" variant="contained">
              Custom 2
            </Button>
            <Button color="custom2" variant="outlined">
              Custom 2 Outlined
            </Button>
          </div>
        </section>

        {/* Sizes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button color="primary" variant="contained" size="sm">
              Small
            </Button>
            <Button color="primary" variant="contained" size="default">
              Default
            </Button>
            <Button color="primary" variant="contained" size="lg">
              Large
            </Button>
          </div>
        </section>

        {/* Instructions */}
        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 text-2xl font-semibold text-card-foreground">
            Cómo Customizar
          </h2>
          <div className="space-y-2 text-muted-foreground">
            <p>
              1. Edita <code className="rounded bg-muted px-2 py-1">src/styles/globals.css</code>
            </p>
            <p>
              2. Cambia los valores de <code className="rounded bg-muted px-2 py-1">--primary</code>,{' '}
              <code className="rounded bg-muted px-2 py-1">--secondary</code>, etc.
            </p>
            <p>3. Guarda el archivo</p>
            <p>4. 🎉 Todos los botones cambian automáticamente</p>
            <p className="pt-4">
              Lee <code className="rounded bg-muted px-2 py-1">THEME_SYSTEM.md</code> para más
              detalles.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
