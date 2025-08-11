import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalCss } from './styles';
import Home from './pages/home';
import Footer from './components/Footer';
import { store } from './store';
import CardPage2 from './pages/Pratos';
import CartGlobal from './components/Cart';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <CartGlobal />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/restaurante/:id',
    element: (
      <>
        <CartGlobal />
        <CardPage2 />
        <Footer />
      </>
    ),
  },
  {
    path: '/checkout',
    element: (
      <>
        <CartGlobal />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </Provider>
  );
}

export default App;
