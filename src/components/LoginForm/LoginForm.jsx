import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

import { FormLogin, LabelLogin, ButtonLogin } from './LoginForm.styled';

const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;

        dispatch(
            login({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        evt.target.reset();
    };

    return (
        <div>
            <FormLogin onSubmit={handleSubmit}>
                <LabelLogin>
                    Email
                    <input type="email" name="email" />
                </LabelLogin>
                <LabelLogin>
                    Password
                    <input type="password" name="password" />
                </LabelLogin>
                <ButtonLogin type="submit">Log In</ButtonLogin>
            </FormLogin>
        </div>
    );
};

export default LoginForm;
