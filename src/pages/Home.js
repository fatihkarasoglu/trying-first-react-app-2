import { Helmet } from "react-helmet"

export default function Home() {

    return(
        <div>
            <Helmet>
                <title>Ana Sayfa</title>
                <meta name="description" content="anasayfa description" />
            </Helmet>
            Home page
        </div>
    )
}