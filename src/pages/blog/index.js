import { Outlet } from "react-router-dom"
import { Helmet } from "react-helmet"

export default function BlogLayout() {

    return(
        <div>
            <Helmet>
                Blog
            </Helmet>
            Blog Sayfası
            <Outlet />
        </div>
    )
}