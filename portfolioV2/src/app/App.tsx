import { RouterProvider } from 'react-router-dom'
import { QueryProvider, ThemeProvider } from './providers'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ThemeProvider>
  )
}
