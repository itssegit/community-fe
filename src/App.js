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
import AuthRoute from './pages/auth/AuthRoute';

/**
 * <Route path='/user/profiles/:username' element={<Profile />}/>
 * @returns https://jeonghwan-kim.github.io/dev/2020/03/20/role-based-react-router.html
 */

function App() {
  //
  const userRole = 'admin';

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/articles' element={<Articles />}>
          <Route path=':id' element={<Article />} />
        </Route>
        <Route 
          path='/user/profiles/:username'
          element={
            <AuthRoute       
              component={<Profile/>}
              role={userRole}
            />
          }
        />
        <Route path='/user/register' element={<Register />} />
        <Route path='/user/login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
