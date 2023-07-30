import React from 'react';
import { AuthNavLink } from './AuthNav.styled';

const AuthNav = () => {
    return (
        <div>
            <AuthNavLink to="/register">Register</AuthNavLink>
            <AuthNavLink to="/login">Login</AuthNavLink>
        </div>
    );
};

export default AuthNav;
