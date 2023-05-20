import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

import BlogLayout from './pages/blog/index';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Categories from './pages/blog/Categories';
import Post from './pages/blog/Post';
import Blog from './pages/blog/Blog';
import Page404 from './pages/blog/404';

function App() {

  return (
    <div className='App'>
    <nav>
      <NavLink to='/'>Anasayfa</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
      <NavLink to='/contact'>İletişim</NavLink>
    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<BlogLayout />} >
          <Route index={true} element={<Blog />} />
          <Route path='categories' element={<Categories />} />
          <Route path='post/:url' element={<Post />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;