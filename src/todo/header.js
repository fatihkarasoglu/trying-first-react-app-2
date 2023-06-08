import { useSelector, useDispatch } from "react-redux"

import { setUser } from "../stores/auth"

export default function Header() {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const loginHandle = user => {
        dispatch(setUser(user))
    }

    const logoutHandle = () => {
        dispatch(setUser(false))
    }

    return(
        <header>
            <h2>Logo</h2>
            {!user && (
                <nav>
                    <button onClick={() => loginHandle({ id: 1, username: 'fatih'})}>Fatih olarak giriş yap</button>
                    <button onClick={() => loginHandle({ id: 2, username: 'fatih.dev'})}>Fatih.developer olarak giriş yap</button>
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