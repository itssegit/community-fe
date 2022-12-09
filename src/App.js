import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import About from "./pages/etc/About";
import Profile from "./pages/user/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import MyList from "./pages/article/MyList";
import Layout from "./Layout";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import AuthRoute from "./pages/auth/AuthRoute";
import ArticleRegister from "./pages/article/Register";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./reducers/user.reducer";

/**
 * <Route path='/user/profiles/:username' element={<Profile />}/>
 * @returns https://jeonghwan-kim.github.io/dev/2020/03/20/role-based-react-router.html
 */

function App() {
  //
  const userRole = "admin";
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("[App.js User 호출]", user);
    axios
      .post("/sign-api/refreshTokenAndUser", token, {
        "Content-Type": "application/json",
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("App.js User 호출2", response);
        dispatch(setUser(response.data));
      });
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/register" element={<ArticleRegister />} />
        <Route path="/article/mylist" element={<MyList />} />
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route
          path="/user/profiles/:username"
          element={<AuthRoute component={<Profile />} role={userRole} />}
        />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
