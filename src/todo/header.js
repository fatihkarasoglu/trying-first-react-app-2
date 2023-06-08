import { useSelector } from "react-redux"

import { loginHandle, logoutHandle } from "../utils"

export default function Header() {

    const { user } = useSelector(state => state.auth)

    const login = user => {
        loginHandle(user)
    }

    return(
        <header>
            <h2>Logo</h2>
            {!user && (
                <nav>
                    <button onClick={() => login({ id: 1, username: 'fatih'})}>Fatih olarak giriş yap</button>
                    <button onClick={() => login({ id: 2, username: 'fatih.dev'})}>Fatih.developer olarak giriş yap</button>
                </nav>
            )}
            {user && (
                <nav>
                    Hoşgeldin, {user.username}
                    <button onClick={logoutHandle}>Çıkış Yap</button>
                </nav>
            )}
        </header>
    )
}