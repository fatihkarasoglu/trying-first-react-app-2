import { Navigate, useLocation } from "react-router-dom"

import { useAuth } from "../context/AuthContext"

export default function PrivateRoute({ children }) {

    const location = useLocation()

    const user = useAuth();

    if(!user) {
        return <Navigate to="/auth/login" replace={true} state={{
            return_url: location.pathname + location.search
        }} />
    }

    return children
}