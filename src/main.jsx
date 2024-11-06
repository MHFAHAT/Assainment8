import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Common from './Component/Common/Common.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
