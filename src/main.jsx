import React from 'react';
import './index.css'
import { createRoot } from 'react-dom/client';

import { createBrowserRouter,  RouterProvider} from 'react-router-dom';
import { HomePage } from './pages/home-page.jsx';
import { CountryPage } from './pages/country-page.jsx';

const router = createBrowserRouter([
  {path: "/", element: <HomePage/>},
  {path: "/country/:name", element: <CountryPage />},
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
