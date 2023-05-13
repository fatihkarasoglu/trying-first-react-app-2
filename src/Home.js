import Header from "./Header"
import Footer from "./Footer"
import { useAuth } from "./context/AuthContext"

export default function Home() {

    const { user } = useAuth();

    return(
        <>
            <Header />
                App
                {user && (
                    <div style={{padding: 10, border: '1px solid red'}}>
                        Bu alan sadece giriş yapıldığında görünür
                    </div>
                )}
            <Footer />
        </>
    )
}