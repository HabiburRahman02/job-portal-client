import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/Home/JobDetails";



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
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
            },

        ]
    },
]);

export default router;