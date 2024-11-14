import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Common from './Component/Common/Common.jsx';
import Stat from './Component/Pages/Stat.jsx';
import Dashbord from './Component/Pages/Dashboard.jsx';
import Home from './Component/Pages/Home.jsx';
import Cards from './Component/Cards/Cards.jsx';
import Details from './Component/Details/Details.jsx';
import Whishlist from './Component/Pages/Whishlist.jsx';
import Cart from './Component/Pages/Cart.jsx';
import Error from './Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../category.json'),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch('../data.json'),
          },
          {
            path: "/cards/:category",
            element: <Cards></Cards>,
            loader: () => fetch('../data.json'),
          },
        ],
      },
      {
        path: "stat",
        element: <Stat></Stat>,
        errorElement: <Error></Error>,
      },
      {
        path: "dashboard",
        element: <Dashbord></Dashbord>,
        errorElement: <Error></Error>,
        children: [
          {
            path: "whishlist",
            element: <Whishlist></Whishlist>,
          },
          {
            path: "cart",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard",
            element: <Cart></Cart>,
          },
        ],
      },

      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch('../data.json'),
        errorElement: <Error></Error>,

      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
