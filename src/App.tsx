import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import { GlobalCss } from './styles'
import Home from './pages/home'
import Teste from './pages/Italiana'
import Footer from './components/Footer'


const rotas = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
},
  {
    path:'/Teste',
    element:<Teste/>
  }
])
function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer/>
    </>
  )
}

export default App


