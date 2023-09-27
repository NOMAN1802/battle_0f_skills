/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../Pages/Home/Home";
import Carnival from "../Pages/Carnival/Carnival";
import Cpc from "../Pages/CPC/Cpc";
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminPanel from "../Pages/Dashboard/AdminPanel/AdminPanel";
import FacultyPanel from "../Pages/Dashboard/FacultyPanel/FacultyPanel";
import StudentPanel from "../Pages/Dashboard/StudentPanel/StudentPanel";
import AppointmentDetails from "../Pages/Appointment/AppointmentDetails";
import Tasks from "../Pages/Tasks/Tasks";
import AddEvent from "../Pages/Dashboard/AdminPanel/AddEvent";
import AllUsers from "../Pages/Dashboard/AdminPanel/AllUsers";
import CheckOut from "../Pages/Payment/CheckOut/CheckOut";
// import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <MainLayOut></MainLayOut>,
      
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "carnival",
          element: <Carnival></Carnival>,
        },
        {
          path:'checkOut',
          element:<CheckOut></CheckOut>
        },
        {
          path: "cpc",
          element: <Cpc></Cpc>,
        },
        {
          path: "appointment",
          element: <Appointment></Appointment>,
        },
        {
          path:"appointment/:id",
          element:<AppointmentDetails></AppointmentDetails>,
          loader: ({ params }) => fetch(`https://battle-of-skills-server.vercel.app/getFaculty/${params.id}`)
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"signUp",
            element:<SignUp></SignUp>
        }
      ],
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'adminPanel',
          element:<AdminPanel></AdminPanel>
        },
        {
          path:'addEvent',
          element:<AddEvent></AddEvent>
        },
        {
          path:'allUsers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'facultyPanel',
          element:<FacultyPanel></FacultyPanel>
        },
        {
          path:'task',
          element:<Tasks></Tasks>
        },
        {
          path:'studentPanel',
          element:<StudentPanel></StudentPanel>
        }
      ]
    },
    
  ]);