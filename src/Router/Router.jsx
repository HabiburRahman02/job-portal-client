import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/Home/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import JobApplication from "../pages/JobApplication/JobApplication";
import AddNewJob from "../pages/AddNewJob/AddNewJob";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/jobDetails/:id',
                element: <PrivateRoute> <JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute> <JobApply></JobApply></PrivateRoute>,
            },
            {
                path: '/jobApplication',
                element: <PrivateRoute> <JobApplication></JobApplication></PrivateRoute>,
            },
            {
                path: '/addNewJob',
                element: <PrivateRoute><AddNewJob></AddNewJob></PrivateRoute>,
            },

        ]
    },
]);

export default router;