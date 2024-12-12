/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <p className="text-center">loading......</p>
    }

    if (user) {
        return children
    }

    return <Navigate to='/signin' state={location.pathname}></Navigate>

};

export default PrivateRoute;