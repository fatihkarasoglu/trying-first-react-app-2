export default function Header({ user, setUser }) {

    const loginHandle = user => {
        setUser(user)
    }

    const logoutHandle = () => {
        setUser(false)
    }

    return(
        <header className="header">
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