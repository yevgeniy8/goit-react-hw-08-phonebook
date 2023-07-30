import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import {
    FormRegister,
    LabelRegister,
    RegisterButton,
    InputRegister,
    H2,
} from './RegisterForm.styled';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        evt.target.reset();
    };

    return (
        <div>
            <FormRegister onSubmit={handleSubmit}>
                <H2>Register form</H2>
                <LabelRegister>
                    Username
                    <InputRegister type="text" name="name" />
                </LabelRegister>
                <LabelRegister>
                    Email
                    <InputRegister type="email" name="email" />
                </LabelRegister>
                <LabelRegister>
                    Password
                    <InputRegister type="password" name="password" />
                </LabelRegister>
                <RegisterButton type="submit">Register</RegisterButton>
            </FormRegister>
        </div>
    );
};

export default RegisterForm;
