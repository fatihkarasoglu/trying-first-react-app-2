import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Profile() {

    const navigate = useNavigate()
    const { user, setUser } = useAuth()

    const LogoutHandle = () => {
        setUser(false)
        navigate('/auth/login')
    }

    return(
        <div>
            Profil sayfası <br />
            {!user && <Link to='/auth/login'>Giriş Yap</Link>}
            {user && <button onClick={LogoutHandle} >Çıkış Yap</button>}
        </div>
    )
}