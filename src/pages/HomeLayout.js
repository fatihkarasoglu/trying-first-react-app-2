import { NavLink, Outlet } from "react-router-dom"

export default function HomeLayout() {

    return(
        <>
            <nav>
                <NavLink to='/'>Anasayfa</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>İletişim</NavLink>
                <NavLink to='/profile'>Profil</NavLink>
            </nav>
            <Outlet />
        </>
    )
}