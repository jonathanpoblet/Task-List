import React, { useState } from 'react';

const LoginForm = () => {

    const initalCredentials = [
        {
            user:'',
            password:''
        }
    ];

    const [credentials, setCredentials] = useState(initalCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
