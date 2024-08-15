// react router dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// layout
import MainLayout from './layout/MainLayout'

// pages
import { Home, Login, Register } from './pages'

function App() {
  let routes = createBrowserRouter([
    {
      path: `/`,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
    {
      path: `/login`,
      element: <Login />
    },
    {
      path: `/register`,
      element: <Register />
    }
  ])

  return <RouterProvider router={routes} />
}

export default App