import { Helmet } from "react-helmet"

export default function Blog() {

    return(
        <div>
            <Helmet>
                Blog
            </Helmet>
            Blog page

            <ul>
                <li>
                    <a href="#">Blog 1</a>
                </li>
                <li>
                    <a href="#">Blog 2</a>
                </li>
            </ul>
        </div>
    )
}