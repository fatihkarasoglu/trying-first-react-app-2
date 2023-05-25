import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"

export default function Post() {

    const { url} = useParams()

    return(
        <div>
            <Helmet>
                <title>{url} Detay</title>
            </Helmet>
            Post page = { url }
        </div>
    )
}