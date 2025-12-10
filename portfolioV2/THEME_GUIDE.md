# Guía Completa del Sistema de Temas

## 📋 Índice
1. [Configuraciones Disponibles](#configuraciones-disponibles)
2. [Cómo Calcular Colores Contrast](#cómo-calcular-colores-contrast)
3. [Modo Oscuro vs Modo Claro](#modo-oscuro-vs-modo-claro)
4. [Ejemplos Prácticos](#ejemplos-prácticos)

---

## Configuraciones Disponibles

### 1. **Colores** ✅ (Lo que acabamos de configurar)
Cada color tiene 4 variantes:
- `main`: Color principal
- `light`: Para hover (más claro)
- `dark`: Para active/pressed (más oscuro)
- `contrast`: Color del texto sobre el color principal

**Colores disponibles:**
- `primary`, `secondary` - Colores de marca
- `error`, `warning`, `info`, `success` - Estados semánticos
- `custom1`, `custom2` - Para colores adicionales de tu marca

### 2. **Border Radius** (Radio de bordes)
```css
:root {
  --radius: 0.625rem; /* 10px - Cambia esto para botones más/menos redondeados */
}
```

### 3. **Colores Base**
```css
:root {
  --background: 1 0 0;        /* Fondo de la página */
  --foreground: 0.145 0 0;    /* Texto principal */
  --border: 0.922 0 0;        /* Bordes */
  --muted: 0.97 0 0;          /* Fondos secundarios */
  --accent: 0.97 0 0;         /* Acentos/destacados */
  --card: 1 0 0;              /* Fondo de tarjetas */
}
```

### 4. **Tipografía** (Ya configurado en Tailwind v4)
- Fuentes (sans, mono)
- Tamaños de texto (sm, lg, 2xl, 4xl, etc.)
- Pesos de fuente (medium, semibold, bold)

### 5. **Espaciado** (Ya configurado)
- Padding, margin, gap usando la escala de Tailwind
- Base: `--spacing: 0.25rem` (4px)

### 6. **Sombras y Transiciones** (Ya configurado)
- `shadow-sm`, `shadow`, `shadow-lg`
- Transiciones automáticas con `transition-all`

---

## Cómo Calcular Colores Contrast

### La Regla de Oro 🎯

El color `contrast` es el color del **TEXTO** que va sobre el color de fondo. Debe tener suficiente contraste para ser legible.

**Regla simple:**
```
Si L (Lightness) < 0.6  →  Usa texto BLANCO (1 0 0)
Si L (Lightness) >= 0.6 →  Usa texto NEGRO (0.145 0 0)
```

### Formato OKLCH: L C H

```
oklch(L C H)
      │ │ │
      │ │ └─ Hue (tono): 0-360
      │ └─── Chroma (saturación): 0-0.4
      └───── Lightness (brillo): 0-1
```

### Ejemplos Visuales

#### Ejemplo 1: Primary en Light Mode
```css
:root {
  --primary: 0.45 0.25 264;           /* L=0.45 (oscuro) → NECESITA texto claro */
  --primary-contrast: 1 0 0;          /* Blanco (porque 0.45 < 0.6) */
}
```
**Resultado:** Botón azul oscuro con texto blanco ✅

#### Ejemplo 2: Warning en Light Mode
```css
:root {
  --warning: 0.75 0.15 85;            /* L=0.75 (claro) → NECESITA texto oscuro */
  --warning-contrast: 0.145 0 0;      /* Negro (porque 0.75 >= 0.6) */
}
```
**Resultado:** Botón naranja claro con texto negro ✅

#### Ejemplo 3: Primary en Dark Mode
```css
.dark {
  --primary: 0.6 0.22 264;            /* L=0.6 (brillante para bg oscuro) */
  --primary-contrast: 0.145 0 0;      /* Negro (porque ahora 0.6 >= 0.6) */
}
```
**Resultado:** Botón azul brillante con texto oscuro ✅

---

## Modo Oscuro vs Modo Claro

### Diferencias Clave

#### 1. **Lightness (L) se invierte**
- **Light mode:** Colores más oscuros (L: 0.4-0.6)
- **Dark mode:** Colores más brillantes (L: 0.6-0.8) para destacar sobre fondo oscuro

#### 2. **Contraste se invierte**
Cuando aumentas L en dark mode, el contrast también cambia:

```css
/* LIGHT MODE */
:root {
  --primary: 0.45 0.25 264;       /* Oscuro */
  --primary-contrast: 1 0 0;      /* Texto blanco */
}

/* DARK MODE */
.dark {
  --primary: 0.6 0.22 264;        /* Brillante (↑ L de 0.45 → 0.6) */
  --primary-contrast: 0.145 0 0;  /* Texto negro (cambia de blanco a negro) */
}
```

### Tabla de Conversión Rápida

| Light Mode L | Dark Mode L | Contrast Light | Contrast Dark |
|--------------|-------------|----------------|---------------|
| 0.3 - 0.5    | 0.6 - 0.7   | `1 0 0` (blanco) | `0.145 0 0` (negro) |
| 0.5 - 0.6    | 0.65 - 0.75 | `1 0 0` (blanco) | `0.145 0 0` (negro) |
| 0.6 - 0.8    | 0.7 - 0.85  | `0.145 0 0` (negro) | `0.145 0 0` (negro) |

---

## Ejemplos Prácticos

### Caso 1: Cambiar Primary a Verde Oscuro

```css
/* Light Mode */
:root {
  --primary: 0.4 0.2 142;         /* Verde oscuro (L=0.4) */
  --primary-light: 0.55 0.18 142; /* +0.15 lightness */
  --primary-dark: 0.3 0.22 142;   /* -0.1 lightness */
  --primary-contrast: 1 0 0;      /* Blanco (porque 0.4 < 0.6) ✅ */
}

/* Dark Mode */
.dark {
  --primary: 0.65 0.18 142;       /* Verde brillante (L=0.65) */
  --primary-light: 0.75 0.16 142;
  --primary-dark: 0.55 0.2 142;
  --primary-contrast: 0.145 0 0;  /* Negro (porque 0.65 >= 0.6) ✅ */
}
```

### Caso 2: Agregar Nuevo Color "Accent" Morado Claro

```css
/* Light Mode - Morado claro necesita texto oscuro */
:root {
  --accent: 0.7 0.18 300;         /* L=0.7 (claro) */
  --accent-light: 0.8 0.16 300;
  --accent-dark: 0.6 0.2 300;
  --accent-contrast: 0.145 0 0;   /* Negro ✅ */
}

/* Dark Mode - En dark mode, hacemos el morado AÚN MÁS claro */
.dark {
  --accent: 0.75 0.16 300;        /* L=0.75 (más brillante) */
  --accent-light: 0.85 0.14 300;
  --accent-dark: 0.65 0.18 300;
  --accent-contrast: 0.145 0 0;   /* Sigue siendo negro ✅ */
}
```

### Caso 3: Error con Texto Blanco en Ambos Modos

A veces quieres que un color mantenga texto blanco incluso en dark mode:

```css
/* Light Mode */
:root {
  --error: 0.45 0.24 27;          /* Rojo oscuro */
  --error-contrast: 1 0 0;        /* Blanco */
}

/* Dark Mode - Mantener L < 0.6 para conservar texto blanco */
.dark {
  --error: 0.55 0.22 27;          /* Rojo medio (NO muy brillante) */
  --error-contrast: 1 0 0;        /* Sigue siendo blanco ✅ */
}
```

---

## Herramientas Útiles

### Calculadora OKLCH Online
https://oklch.com/

Úsala para:
1. Ver cómo se ve un color OKLCH
2. Ajustar L, C, H visualmente
3. Verificar que el contraste sea suficiente

### Pasos para crear un nuevo color:

1. **Elige el Hue (H)** en oklch.com
   - Rojo: ~27
   - Verde: ~142
   - Azul: ~264
   - Púrpura: ~295

2. **Ajusta Lightness (L) para light mode**
   - Oscuro (0.3-0.5): Usarás texto blanco
   - Claro (0.6-0.8): Usarás texto negro

3. **Ajusta Chroma (C)** para saturación
   - Poco saturado: 0.1-0.15
   - Normal: 0.15-0.25
   - Muy vibrante: 0.25-0.35

4. **Calcula las variantes:**
   ```
   light = main L + 0.15
   dark  = main L - 0.1
   ```

5. **Determina contrast:**
   ```
   Si L < 0.6  → contrast: 1 0 0 (blanco)
   Si L >= 0.6 → contrast: 0.145 0 0 (negro)
   ```

6. **Para dark mode:**
   - Aumenta L en ~0.15-0.2
   - Recalcula contrast con la nueva L

---

## Checklist de Configuración

- [x] **Colores de marca** (primary, secondary)
- [x] **Colores semánticos** (error, warning, info, success)
- [x] **Variantes** (light, dark, contrast) para cada color
- [x] **Dark mode** con colores más brillantes
- [ ] **Border radius** ajustado a tu gusto
- [ ] **Colores base** (background, foreground, border)
- [ ] **Custom colors** adicionales si los necesitas

---

## Preguntas Frecuentes

### ¿Por qué los colores deben ser más brillantes en dark mode?
Porque el fondo es oscuro (casi negro). Un color oscuro sobre fondo oscuro no se ve. Necesitas colores brillantes que destaquen.

### ¿Puedo usar el mismo color en light y dark mode?
Técnicamente sí, pero no es recomendable. Un color con L=0.5 podría funcionar en ambos, pero no se verá óptimo en ninguno.

### ¿Qué pasa si el contrast está mal?
Tu texto será ilegible. Por ejemplo, texto negro sobre fondo negro = invisible ❌

### ¿Cómo pruebo que el contraste es suficiente?
Usa las DevTools del navegador o https://contrast-ratio.com/. El ratio debe ser ≥ 4.5:1 para texto normal.

---

## Resumen Final

**Para cada color, necesitas definir:**

```css
:root {
  --color: L C H;           /* Tu color principal */
  --color-light: L+0.15 C H; /* Hover */
  --color-dark: L-0.1 C H;   /* Active */
  --color-contrast: X 0 0;   /* Texto: blanco (1) si L<0.6, negro (0.145) si L>=0.6 */
}

.dark {
  --color: L+0.2 C H;        /* Más brillante que en light mode */
  --color-light: L+0.35 C H;
  --color-dark: L+0.05 C H;
  --color-contrast: X 0 0;   /* Recalcular según nueva L */
}
```

¡Eso es todo! 🎉
