import BlogLayout from './pages/blog/index';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Categories from './pages/blog/Categories';
import Post from './pages/blog/Post';
import Blog from './pages/blog/Blog';
import Blog404 from './pages/blog/404';
import Page404 from './pages/404';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import AuthLayout from './pages/auth/AuthLayout';
import Login from './pages/auth/Login';
import HomeLayout from './pages/HomeLayout';

const routes = [
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'Contact',
                element: <Contact />
            },
            {
                path: 'blog',
                element: <BlogLayout />,
                auth: true,
                children: [
                    {
                        index: true,
                        element: <Blog />
                    },
                    {
                        path: 'categories',
                        element: <Categories />
                    },
                    {
                        path: 'post/:id/:url',
                        element: <Post />
                    },
                    {
                        path: '*',
                        element: <Blog404 />
                    }
                ]
            },
            {
                path: 'profile',
                element: <Profile />,
                auth: true
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        path: '*',
        element: <Page404 />
    }
]

const authMap = routes => routes.map(route => {
    if(route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children) {
        route.children = authMap(route.children)
    }
    return route
})

export default authMap(routes)