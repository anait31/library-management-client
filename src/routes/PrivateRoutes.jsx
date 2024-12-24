import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import {Navigate, useLocation} from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation()

    if (isLoading) {
        return <span className="loading loading-dots loading-md"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoutes;