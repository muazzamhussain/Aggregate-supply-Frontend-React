import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import AboutPage from './pages/AboutPage.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ProductDetailPage from './pages/ProductDetailsPage.jsx'
import ServiceDetailPage from './pages/ServiceDetailsPage.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([{
  path:"/",
  element:(<App/>),
  children:[
      { path: "/", element: <Home /> },
      {path:"/about", element: <AboutPage/>},
      {path:"/services", element: <ServicesPage/>},
      {path:"/products", element: <ProductsPage/>},
      {path:"/contact", element: <ContactPage/>},
      {path:"/product/:id", element: <ProductDetailPage/>},
      {path:"/service/:id", element: <ServiceDetailPage/>},
      {path:"/profile", element: <Profile/>}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
