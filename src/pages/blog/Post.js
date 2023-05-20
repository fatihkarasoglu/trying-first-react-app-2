import { useParams } from "react-router-dom"

export default function Post() {

    const { url} = useParams()

    return(
        <div>
            Post page = { url }
        </div>
    )
}