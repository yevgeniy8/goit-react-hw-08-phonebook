import React from 'react';
import useAuth from 'hooks/useAuth';
import { NavigationLink } from './Navigation.styled';

const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <nav>
            <NavigationLink to="/">Home</NavigationLink>
            {isLoggedIn && (
                <NavigationLink to="/contacts">Contacts</NavigationLink>
            )}
        </nav>
    );
};

export default Navigation;
