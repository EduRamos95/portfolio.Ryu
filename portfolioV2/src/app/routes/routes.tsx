import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/modules/home'
import { ProjectsPage } from '@/modules/projects'
import { AboutPage } from '@/modules/about'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
])
