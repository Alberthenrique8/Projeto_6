import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/home'
import Italiana from './pages/Italiana'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'


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
      <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Cart /> 
      <Footer />
      </Provider>
    </>
  )
}

export default App


