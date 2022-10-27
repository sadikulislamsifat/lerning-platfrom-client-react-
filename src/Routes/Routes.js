import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Course from "../components/Courses/Course";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import NotFound from "../components/NotFound/NotFound";
import Service from "../components/Service/Service";
import SingUp from "../components/SingUp/SingUp";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://e-school-server-ten.vercel.app/subjects'),
                loader: () => fetch('https://e-school-server-ten.vercel.app/blog'),
                element:<Home></Home>,
                

            },
            {
                path: '/home',
                loader: () => fetch('https://e-school-server-ten.vercel.app/subjects'),
                element:<Home></Home>,
                loader: () => fetch('https://e-school-server-ten.vercel.app/blog')
                

            },
            {
                path: '/courses',
                loader: () => fetch('https://e-school-server-ten.vercel.app/subjects'),
                element:<Courses></Courses>

            },
            {
                path: '/subjects/:id',
                loader: ({params}) => fetch(`https://e-school-server-ten.vercel.app/subjects/${params.id}`),
                element:<PrivateRoute><Course></Course></PrivateRoute>

            },
            {
                path: '/service',
                element:<Service></Service>

            },
            {
                path: '/blog',
                element:<Blog></Blog>,
                loader: () => fetch('https://e-school-server-ten.vercel.app/blog')

            },
            {
                path: '/login',
                element:<Login></Login>

            },
            {
                path: '/singup',
                element:<SingUp></SingUp>

            },
            {
                path: '*',
                element:<NotFound></NotFound>

            },
        ]
    }
])