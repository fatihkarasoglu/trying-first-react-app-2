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
        name: 'Home',
        element: <HomeLayout />,
        children: [
            {
                name: 'index',
                index: true,
                element: <Home />
            },
            {
                name: 'Contact',
                path: 'Contact',
                element: <Contact />
            },
            {
                name: 'Blog',
                path: 'blog',
                element: <BlogLayout />,
                auth: true,
                children: [
                    {
                        name: 'index',
                        index: true,
                        element: <Blog />
                    },
                    {
                        name: 'categories',
                        path: 'categories',
                        element: <Categories />
                    },
                    {
                        name: 'post',
                        path: 'post/:id/:url',
                        element: <Post />
                    },
                    {
                        name: 'notFound',
                        path: '*',
                        element: <Blog404 />
                    }
                ]
            },
            {
                name: 'profile',
                path: 'profile',
                element: <Profile />,
                auth: true
            }
        ]
    },
    {
        name: 'auth',
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                name: 'login',
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        name: 'notFound',
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