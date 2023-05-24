import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../../context/AuthContext"

export default function Login() {

    const navigate = useNavigate();
    const location = useLocation();

    const { setUser } = useAuth();

    const loginHandle = () => {
        setUser({
            id: 1,
            userName: 'Fatih'
        })
        navigate(location?.state?.return_url || '/', {
            replace: true,
            state: 'fatih'
        })
    }

    return(
        <div>
            Login page <br />
            <button onClick={loginHandle} >Giriş Yap</button>
        </div>
    )
}