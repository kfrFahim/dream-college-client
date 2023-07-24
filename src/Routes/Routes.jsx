import {
     createBrowserRouter,
   } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Main from "../Layout/Main";
import Colleges from "../Pages/Colleges/Colleges";
import Home from "../Pages/Home/Home/Home";

   export const router = createBrowserRouter([
     {
       path: "/",
       element: <Main></Main>,
       children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/colleges",
          element: <Colleges></Colleges>
        }
       ]
     },
     
   ]);