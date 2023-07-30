import React from 'react';
import useAuth from 'hooks/useAuth';
import { logout } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import { Wrapper, UserMenuButton } from './UserMenu.styled';

const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <p>Welcome, {user.name}</p>
            <UserMenuButton
                onClick={() => {
                    dispatch(logout());
                }}
            >
                Logout
            </UserMenuButton>
        </Wrapper>
    );
};

export default UserMenu;
