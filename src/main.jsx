import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MainHome from './componand/MainHome';
import ErrorPage from "./ErrorPage";
import Home from './componand/Home';
import Apply from './componand/Applied';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Blog from './componand/Blog';
import Statistics from './componand/Statistics';
import Jobdetails from './componand/jobdetails/Jobdetails';



const router = createBrowserRouter([
 {
    path: "/",
    element: <MainHome></MainHome> ,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('data.json')
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
        path: '/Jobs/:id',
         element: <Jobdetails></Jobdetails>,
      },
        {
        path: '/Blog',
        element: <Blog></Blog>,
      },
      
    ],

    errorElement: <ErrorPage />,
  },
  

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)