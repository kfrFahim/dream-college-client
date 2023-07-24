import {
     createBrowserRouter,
   } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Main from "../Layout/Main";
import Colleges from "../Pages/Colleges/Colleges";
import Home from "../Pages/Home/Home/Home";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Admission from "../Pages/Admission/Admission";
import CheckOut from "../Pages/CheckOut/CheckOut";

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
        },
        {
          path: "/collegedetails/:id",
          element: <CollegeDetails></CollegeDetails>
         },
         {
          path:"/admission",
          element:<Admission></Admission>
         },
         {
          path:"/checkout/:id",
          element:<CheckOut></CheckOut>
         }
       ]
     },
    
     
   ]);