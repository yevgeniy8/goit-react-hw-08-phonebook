import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/login">Log In</NavLink>
                </nav>
            </header>

            <Outlet />
        </div>
    );
}

export default Layout;
