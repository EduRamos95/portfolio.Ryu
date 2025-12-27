import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/modules/home'
import { ProjectsPage } from '@/modules/projects'
import { AboutPage } from '@/modules/about'
import { Portfolio, PortfolioV2 } from '@/modules/portfolio'
import LibPage from '@/modules/libCom/LibPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/new',
    element: <PortfolioV2 />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/lib',
    element: <LibPage />,
  },
])
