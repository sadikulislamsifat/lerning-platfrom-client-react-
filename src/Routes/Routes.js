import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import NotFound from "../components/NotFound/NotFound";
import Service from "../components/Service/Service";
import SingUp from "../components/SingUp/SingUp";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>

            },
            {
                path: '/home',
                element:<Home></Home>

            },
            {
                path: '/courses',
                element:<Courses></Courses>

            },
            {
                path: '/service',
                element:<Service></Service>

            },
            {
                path: '/blog',
                element:<Blog></Blog>

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