import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>홈 화면</p>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/user/profiles/giorgio">Giorgio의 프로필</Link>
                </li>
                <li>
                    <Link to="/user/profiles/ironman">Ironman의 프로필</Link>
                </li>
                <li>
                    <Link to="/user/profiles/yl">연리의 프로필</Link>
                </li>
                <li>
                    <Link to="/user/profiles/local">로컬의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필</Link>
                </li>
                <li>
                    <Link to="/articles">게시글 목록</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;