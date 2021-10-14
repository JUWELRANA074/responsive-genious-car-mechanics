import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2 className="m-4" >Please Login</h2>

            <button onClick={signInUsingGoogle} className="m-3 btn btn-danger" >Google Sign In</button>

        </div>
    );
};

export default Login;