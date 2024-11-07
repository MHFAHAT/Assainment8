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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/stat",
        element: <Stat></Stat>,
      },
      {
        path: "/dashboard",
        element: <Dashbord></Dashbord>,
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
