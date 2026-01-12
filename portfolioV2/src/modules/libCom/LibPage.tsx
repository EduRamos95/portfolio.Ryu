import { Plus, Settings, Heart, X } from 'lucide-react'
import { CardWithCutoutButton } from './CardWithCutoutButton'
import GridDashboard from './GridDashboard'

export default function LibPage() {
  // component to test
  // return <GridDashboard />
  return (
    <div className="p-8 space-y-8 bg-background min-h-screen">
      <h1 className="text-2xl font-bold">CardWithCutoutButton Examples</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Top Right (default) */}
        <CardWithCutoutButton
          buttonContent={<Plus className="w-5 h-5" />}
          buttonProps={{ onClick: () => alert('Add clicked!') }}
        >
          <h3 className="font-semibold mb-2">Top Right (default)</h3>
          <p className="text-muted-foreground text-sm">
            El botón está en la esquina superior derecha con efecto de recorte.
          </p>
        </CardWithCutoutButton>

        {/* Top Left */}
        <CardWithCutoutButton
          buttonPosition="top-left"
          buttonContent={<Settings className="w-5 h-5" />}
          buttonProps={{ onClick: () => alert('Settings clicked!') }}
        >
          <h3 className="font-semibold mb-2">Top Left</h3>
          <p className="text-muted-foreground text-sm">
            El botón está en la esquina superior izquierda.
          </p>
        </CardWithCutoutButton>

        {/* Bottom Right */}
        <CardWithCutoutButton
          buttonPosition="bottom-right"
          buttonContent={<Heart className="w-5 h-5" />}
          buttonSize={56}
          cutoutGap={6}
        >
          <h3 className="font-semibold mb-2">Bottom Right</h3>
          <p className="text-muted-foreground text-sm">
            Botón más grande (56px) con mayor gap de recorte (6px).
          </p>
        </CardWithCutoutButton>

        {/* Bottom Left */}
        <CardWithCutoutButton
          buttonPosition="bottom-left"
          buttonContent={<X className="w-5 h-5" />}
          cardRadius={24}
        >
          <h3 className="font-semibold mb-2">Bottom Left</h3>
          <p className="text-muted-foreground text-sm">
            Card con bordes más redondeados (24px radius).
          </p>
        </CardWithCutoutButton>
      </div>
    </div>
  )
}
