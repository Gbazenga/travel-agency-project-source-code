import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Testimonials from './pages/testimonials';
import Rentals from './pages/rentals';
import Restaurants from './pages/restaurants';
import CarRentals from './pages/carRentals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/restaurants",
    element: <Restaurants/>
  },
  {
    path: "/rentals",
    element: <Rentals/>
  },
  {
    path: "/car-rentals",
    element: <CarRentals/>
  },
  {
    path: "/testimonials",
    element: <Testimonials/>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);
