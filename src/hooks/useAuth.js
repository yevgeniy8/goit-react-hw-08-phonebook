import { useSelector } from 'react-redux';

const useAuth = () => {
    const user = useSelector(state => state.auth.user);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const isRefreshing = useSelector(state => state.auth.isRefreshing);

    return { user, isLoggedIn, isRefreshing };
};

export default useAuth;
