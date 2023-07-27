import React from 'react';

function Login() {
    const handleSubmit = evt => {
        evt.preventDefault();
        console.log('object');
        evt.target.reset();
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" />
                    </label>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
