import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

import { lazy, useEffect } from 'react';
import useAuth from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path="register"
                    element={
                        <RestrictedRoute
                            redirectTo="/contacts"
                            component={<Register />}
                        />
                    }
                />
                <Route
                    path="login"
                    element={
                        <RestrictedRoute
                            redirectTo="/contacts"
                            component={<Login />}
                        />
                    }
                />
                <Route
                    path="contacts"
                    element={
                        <PrivateRoute
                            redirectTo="/login"
                            component={<Contacts />}
                        />
                    }
                />
            </Route>
        </Routes>
    );
};
