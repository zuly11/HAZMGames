import React, { useState } from 'react';

const Register = ()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const register = ()=>{
        console.log('register')
    }
    const _register = (ev)=> {
        ev.preventDefault();
        register({username, password});
    };
    return(
        <div>
            <h1 className="title">Register a new account!</h1>
            <form onSubmit={_register}>
                <input
                placeholder='username'
                value={ username } 
                onChange = { ev => setUsername(ev.target.value) }
                >
                </input>
                <input
                   placeholder='password'
                   value={ password } 
                   type = 'password'
                   onChange = { ev => setPassword(ev.target.value) }
                >
                
                </input>

                <button>Register</button>
                

            </form>
        </div>
    );
};

export default Register;