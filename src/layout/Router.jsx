import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Register from "../component/register/Register";
import Login from "../component/login/Login";
import Users from "../component/users/Users";
import Roles from "../component/roles/Roles";
import Dashboard from "../component/dashboard/Dashboard";
import DashboardLayout from "./DashboardLayout";
import Personal from "../component/profile/Personal";
import Professional from "../component/profile/Professional";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path:'/dashboard',
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path:'/user',
                        element: <Users></Users>
                    },
                    {
                        path: '/role',
                        element: <Roles></Roles>
                    },
                    {
                        path:'/personal',
                        element: <Personal></Personal>
                    },
                    {
                        path:'/professional',
                        element: <Professional></Professional>
                    }
                ]

            },
            
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            

        ]
    }
])
export default router;