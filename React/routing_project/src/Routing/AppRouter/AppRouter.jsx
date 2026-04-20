import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import HomeLayout from '../Layouts/HomeLayout';
import Landing from '../Pages/Landing';
import About from '../Pages/About';
import Cart from '../Pages/Cart';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: 'landing',              
          element: <Landing />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'cart',
          element: <Cart />
        },
        {
            path:'product',
            element:<h1>Product</h1>
        }
    
        
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;