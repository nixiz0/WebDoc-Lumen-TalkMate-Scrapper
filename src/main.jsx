import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Lumen from './pages/projects_page/Lumen.jsx'
import Talkmate from './pages/projects_page/Talkmate.jsx'
import Scrapper from './pages/projects_page/Scrapper.jsx'
import Mentions from './pages/Mentions.jsx'

import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lumen',
    element: <Lumen />,
  },
  {
    path: '/talkmate',
    element: <Talkmate />,
  },
  {
    path: '/scrapper',
    element: <Scrapper />,
  },
  {
    path: '/mentions-legales',
    element: <Mentions />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)