import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import useAuth from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

import { Header } from './AppBar.styled';

const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    );
};

export default AppBar;
