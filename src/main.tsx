import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MainHome from './componand/MainHome';
import ErrorPage from "./ErrorPage";
import Home from './componand/Home';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'



const router = createBrowserRouter([
 {
    path: "/",
    element: <MainHome></MainHome> ,
    children: [
      {
        path: '/',
        element: <Home></Home>,
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
