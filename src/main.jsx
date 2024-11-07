import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter,  RouterProvider} from 'react-router-dom';
import { HomePage } from './pages/home-page.jsx';
import { CountryPage } from './pages/country-page.jsx';

const router = createBrowserRouter([
  {path: "/", element: <HomePage/>},
  {path: "/country/:name", element: <CountryPage />},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
