import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/home'
import Italiana from './pages/Italiana'
import Footer from './components/Footer'


const rotas = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
},
  {
    path:'/Italiana',
    element:<Italiana/>
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


