import { Route, Routes} from 'react-router-dom';
import './App.css';

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

function App() {

  return (
    <div className='App'>
      <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index={true} element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<BlogLayout />} >
              <Route index={true} element={<Blog />} />
              <Route path='categories' element={<Categories />} />
              <Route path='post/:url' element={<Post />} />
              <Route path='*' element={<Blog404 />} />
            </Route>
            <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          </Route>
          <Route path='/auth' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;