import FobiddenPage from '../etc/FobiddenPage';

const AuthRoute = ({ role, component: Component }) => {
    //
    return (
        role === 'admin' ? Component : <FobiddenPage />
    )
};

export default AuthRoute;