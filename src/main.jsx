import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Products from './views/Products/products';
import './index.scss';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Pay from './views/Pay/Pay';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products/:productId",
    element: <Products />,
  },
  {
    path: "/pay",
    element: <Pay title="Contador" list={['Café expresso', 'Café americano', 'Café com leite']} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
