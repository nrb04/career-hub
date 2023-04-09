import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MainHome from './componand/MainHome';
import ErrorPage from "./ErrorPage";
import Home from './componand/Home';
import Apply from './componand/Apply';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Blog from './componand/Blog';
import Statistics from './componand/Statistics';



const router = createBrowserRouter([
 {
    path: "/",
    element: <MainHome></MainHome> ,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
       {
        path: '/Statistics',
        element: <Statistics></Statistics>,
      },
       {
        path: '/Apply',
        element: <Apply></Apply>,
      },
        {
        path: '/Blog',
        element: <Blog></Blog>,
      },
      
    ],

    errorElement: <ErrorPage />,
  },
  

  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
