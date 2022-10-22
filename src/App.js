import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/etc/About';
import Profile from './pages/user/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import Register from './pages/user/Register';
import Login from './pages/user/Login';
import AuthWrapper from './pages/auth/AuthWrapper';

/**
 * 
 * @returns https://jeonghwan-kim.github.io/dev/2020/03/20/role-based-react-router.html
 */

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/articles' element={<Articles />}>
          <Route path=':id' element={<Article />} />
        </Route>
        <Route path='/user/profiles/:username' element={<AuthWrapper component={Profile}/>}/>
        <Route path='/user/register' element={<Register />} />
        <Route path='/user/login' element={<Login />} />
      </Route>za
    </Routes>
  );
}

export default App;
