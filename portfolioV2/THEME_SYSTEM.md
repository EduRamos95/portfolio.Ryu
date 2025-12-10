# Sistema de Theme Híbrido - Similar a Material UI

Este proyecto usa un sistema híbrido que combina lo mejor de **CSS Variables + Tailwind Config** para lograr un sistema de theming centralizado similar a Material UI, pero **mucho más rápido**.

---

## ¿Cómo Responde a tus Preguntas?

### 1. ✅ Primary con sub-variables basadas en main

**SÍ**, pero defines manualmente las variantes (no automático con alpha):

```css
/* globals.css */
:root {
  --primary: 0.45 0.25 264;        /* MAIN - Azul base */
  --primary-light: 0.6 0.22 264;   /* Hover - L +0.15 */
  --primary-dark: 0.35 0.27 264;   /* Active - L -0.1 */
  --primary-contrast: 1 0 0;       /* Texto sobre primary (blanco) */
}
```

**Por qué manual y no automático:**
- CSS no puede calcular variantes automáticamente
- En Material UI se calcula en JavaScript (runtime = lento)
- Aquí lo defines una vez en CSS (build time = rápido)

### 2. ✅ Contained vs Outlined - Manejo de contrast

**Contained:** Usa `{color}-contrast` para el texto

```tsx
<Button color="primary" variant="contained">
  {/* bg-primary text-primary-contrast */}
  Contained
</Button>
```

**Outlined:** Usa el color principal para borde y texto, fondo transparente

```tsx
<Button color="primary" variant="outlined">
  {/* border-primary text-primary bg-transparent */}
  Outlined
</Button>
```

**Cómo funciona:**
```tsx
// En button.tsx - compoundVariants
{
  color: 'primary',
  variant: 'contained',
  className: 'bg-primary text-primary-contrast hover:bg-primary-light'
},
{
  color: 'primary',
  variant: 'outlined',
  className: 'border-primary text-primary hover:bg-primary/10'
}
```

### 3. ✅ Light vs Dark mode - Definición manual

**SÍ, debes definir valores diferentes para cada modo:**

```css
/* Light mode */
:root {
  --primary: 0.45 0.25 264;         /* Azul más oscuro para fondo blanco */
  --primary-contrast: 1 0 0;        /* Texto blanco */
}

/* Dark mode */
.dark {
  --primary: 0.6 0.22 264;          /* Azul más brillante para fondo oscuro */
  --primary-contrast: 0.145 0 0;    /* Texto oscuro (porque primary es brillante) */
}
```

**Si no defines en `.dark`:**
- Tailwind usa los valores de `:root`
- Pero generalmente necesitas valores diferentes para buena legibilidad

---

## Cómo Funciona el Sistema

### Arquitectura

```
1. globals.css (CSS Variables)
   └─> Define valores: --primary: 0.45 0.25 264

2. tailwind.config.ts (Tailwind Colors)
   └─> Registra: primary: 'oklch(var(--primary) / <alpha-value>)'

3. button.tsx (Componentes)
   └─> Usa clases: bg-primary, text-primary-contrast
```

### Flujo de Datos

```
Usuario cambia --primary en globals.css
           ↓
Tailwind detecta el cambio (HMR)
           ↓
Regenera clases automáticamente
           ↓
TODOS los componentes usan el nuevo color ✅
```

---

## Uso del Sistema

### Cambiar el Color Primary en TODO el Proyecto

**1. Edita `src/styles/globals.css`:**

```css
:root {
  --primary: 0.6 0.2 330;          /* Cambia a magenta */
  --primary-light: 0.7 0.18 330;   /* Ajusta light */
  --primary-dark: 0.5 0.22 330;    /* Ajusta dark */
  --primary-contrast: 1 0 0;       /* Blanco */
}

.dark {
  --primary: 0.7 0.18 330;         /* Magenta brillante en dark */
  --primary-contrast: 0.145 0 0;   /* Negro */
}
```

**2. Resultado:**
- ✅ Todos los botones con `color="primary"` cambian
- ✅ Badges con primary cambian
- ✅ Cards, Inputs, Chips, etc. con primary cambian
- ✅ Dark mode funciona automáticamente

### Uso en Componentes

```tsx
// Button - API similar a Material UI
<Button color="primary" variant="contained">Primary Contained</Button>
<Button color="primary" variant="outlined">Primary Outlined</Button>
<Button color="primary" variant="text">Primary Text</Button>

<Button color="secondary" variant="contained">Secondary</Button>
<Button color="error" variant="contained">Delete</Button>
<Button color="success" variant="outlined">Save</Button>

// Custom colors
<Button color="custom1" variant="contained">My Brand Color</Button>
```

### Agregar un Nuevo Color (custom3)

**1. En `globals.css`:**

```css
:root {
  --custom3: 0.65 0.2 40;        /* Naranja rojizo */
  --custom3-light: 0.75 0.18 40;
  --custom3-dark: 0.55 0.22 40;
  --custom3-contrast: 1 0 0;
}

.dark {
  --custom3: 0.75 0.18 40;
  --custom3-contrast: 0.145 0 0;
}
```

**2. En `tailwind.config.ts`:**

```ts
colors: {
  // ... otros colores
  custom3: {
    DEFAULT: 'oklch(var(--custom3) / <alpha-value>)',
    light: 'oklch(var(--custom3-light) / <alpha-value>)',
    dark: 'oklch(var(--custom3-dark) / <alpha-value>)',
    contrast: 'oklch(var(--custom3-contrast) / <alpha-value>)',
  },
}
```

**3. En `button.tsx` (agregar compound variants):**

```tsx
// En el array compoundVariants
{
  color: 'custom3',
  variant: 'contained',
  className: 'bg-custom3 text-custom3-contrast hover:bg-custom3-light active:bg-custom3-dark',
},
{
  color: 'custom3',
  variant: 'outlined',
  className: 'border-custom3 text-custom3 hover:bg-custom3/10',
},
```

**4. En TypeScript (agregar tipo):**

```tsx
color: {
  primary: '',
  secondary: '',
  // ...
  custom3: '', // Agregar aquí
}
```

---

## Comparación con Material UI

| Aspecto | Material UI | Este Sistema |
|---------|-------------|--------------|
| **Velocidad** | 🐌 Lento (CSS-in-JS runtime) | 🚀 Rápido (CSS pre-generado) |
| **Bundle Size** | 📦 Grande (~300kb) | 📦 Pequeño (~50kb) |
| **Configuración** | JS Object | CSS Variables + Tailwind |
| **Runtime Theme** | ✅ Sí | ✅ Sí (con CSS vars) |
| **TypeScript** | ✅ Completo | ⚠️ Parcial |
| **Developer Experience** | ✅ Excelente | ✅ Excelente |
| **Centralizado** | ✅ Sí | ✅ Sí |

---

## Ventajas de este Sistema

### ✅ Rápido
- No genera CSS en runtime
- Clases pre-generadas en build time
- Tailwind optimiza automáticamente

### ✅ Centralizado
- Un solo archivo para cambiar colores (`globals.css`)
- Cambias primary → todo cambia
- Dark mode automático

### ✅ Flexible
- Puedes cambiar colores en runtime con JavaScript si quieres
- Funciona con cualquier componente de shadcn/ui
- Fácil agregar nuevos colores

### ✅ Type-Safe (parcial)
- TypeScript autocomplete para color y variant props
- VSCode muestra los colores disponibles

---

## Ejemplo Completo: Badge Component

Si quieres aplicar el mismo sistema a otros componentes:

```tsx
// badge.tsx
const badgeVariants = cva('...', {
  variants: {
    color: {
      primary: '',
      secondary: '',
      error: '',
      // ...
    },
    variant: {
      filled: '',
      outlined: '',
      soft: '', // bg con alpha bajo
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'filled',
      className: 'bg-primary text-primary-contrast',
    },
    {
      color: 'primary',
      variant: 'outlined',
      className: 'border-primary text-primary',
    },
    {
      color: 'primary',
      variant: 'soft',
      className: 'bg-primary/20 text-primary',
    },
  ],
})
```

**Uso:**
```tsx
<Badge color="primary" variant="filled">New</Badge>
<Badge color="error" variant="soft">Error</Badge>
<Badge color="success" variant="outlined">Success</Badge>
```

---

## Generación Automática de light/dark

Si quieres calcular automáticamente las variantes, puedes usar un script de Node.js:

```ts
// scripts/generate-theme.ts
function generateVariants(mainColor: string) {
  const [l, c, h] = mainColor.split(' ').map(Number)
  return {
    main: mainColor,
    light: `${l + 0.15} ${c * 0.9} ${h}`,
    dark: `${l - 0.1} ${c * 1.1} ${h}`,
    contrast: l < 0.5 ? '1 0 0' : '0.145 0 0',
  }
}
```

Ejecutas: `node scripts/generate-theme.ts > src/styles/generated.css`

---

## Resumen

**Este sistema te da:**
1. ✅ Configuración centralizada como Material UI
2. ✅ Velocidad como Tailwind
3. ✅ Dark mode automático
4. ✅ Type-safe components
5. ✅ Solo editas `globals.css` para cambiar TODO

**NO necesitas:**
1. ❌ Modificar cada componente manualmente
2. ❌ Instalar CSS-in-JS libraries
3. ❌ Sacrificar performance

**El único "trabajo manual" es:**
- Definir colores en `globals.css` (una vez)
- Agregar compound variants cuando creas un nuevo componente que use colores

Pero esto es MUCHO más rápido que Material UI generando CSS en cada render. 🚀
