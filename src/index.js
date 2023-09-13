import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import AboutUs from "./KK/Components/Pages/AboutUs";
import Khalid from "./KK/Components/Pages/Khalid";
import AppOne from "./srcJP/AppOne";
import AppTwo from "./AK/AppTwo";
import AppThree from "./src_Renee/AppThree";
// import AppFour from "./src_dat/AppFour";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },

    {
        path: "/AboutUs",
        element: <AboutUs/>,
    },

    {
      path: "/Khalid",
      element: <Khalid/>,
    },

    {
      path: "/AppOne",
      element: <AppOne/>,
    },

    {
      path: "/AK",
      element: <AppTwo/>,
    },

    {
      path: "/Renee",
      element: <AppThree/>, 
    },
    
    // {
    //   path: "/Dat",
    //   element: <AppFour/>,
    // },



    
    
  ]);





const rootElement = document.getElementById('root');
const root = createRoot(rootElement).render(
<RouterProvider router={router}></RouterProvider>


);

