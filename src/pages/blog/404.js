import { Link } from "react-router-dom"

export default function Page404() {

    return(
        <div>
            Sayfaya Ulaşılamadı
            <Link to="/">Ana Sayfaya gitmek için tıklayın</Link>
        </div>
    )
}