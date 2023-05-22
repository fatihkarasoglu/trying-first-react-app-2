import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext"

export default function Login() {

    const navigate = useNavigate();

    const { setUser } = useAuth();

    const loginHandle = () => {
        setUser({
            id: 1,
            userName: 'Fatih'
        })
        navigate('/')
    }

    return(
        <div>
            Login page <br />
            <button onClick={loginHandle} >Giriş Yap</button>
        </div>
    )
}