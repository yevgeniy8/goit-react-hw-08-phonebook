import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

function Register() {
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
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input type="text" name="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" />
                </label>
                <label>
                    Password
                    <input type="password" name="password" />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
