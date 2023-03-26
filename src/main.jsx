import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Products from './views/Products/products';
import './index.scss';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Pay from './views/Pay/Pay';
import { PRODUCTS_MOCK } from './mock/productsmock'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />
  },
  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCK} />
  },
  {
    path: "/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK} />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
