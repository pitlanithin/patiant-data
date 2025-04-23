import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Patiant from './Patiant.jsx'
import Addpatiant from './Addpatiant.jsx'
import Editoatiant from './Editpatiant.jsx';
const router = createBrowserRouter([
  {
    path: "/patiant",
    element: <Patiant/>
  },
  {
    path: "/addpatiant",
    element: <Addpatiant/>
  },
  {
    path: "/editpatiant",
    element: <Editoatiant/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
