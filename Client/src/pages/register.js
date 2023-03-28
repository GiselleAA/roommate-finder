import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');

    const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/register', {firstName: firstName, lastName: lastName, username: username, password: password}).then((data) => {
    setFirst('');
    setLast('');
    setUsername('');
    setPassword('');
    })
}

    return (
        <div>
        <form className='mx-auto px-5 pt-5 pb-3 rounded-2xl bg-theme-orange w-72 mt-36' onSubmit={submitHandler}>
        <div className='flex justify between mb-3'>
            <img src="images/palm-logo.png" width={75} height={75} style={{alignSelf: 'center'}} alt="logo"/>
            <h3 className='pl-5 text-3xl text-black'>Roommate<br></br>Finder</h3>
        </div>
        <input className='w-full h-8 p-1 mb-2 rounded-lg focus:outline-none' id='firstName' type='text' placeholder="First Name" value={firstName} onChange={(e) => setFirst(e.target.value)} />
        <input className='w-full h-8 p-1 mb-4 rounded-lg focus:outline-none' id='lastName' type='text' placeholder="Last Name" value={lastName} onChange={(e) => setLast(e.target.value)} />
        <input className='w-full h-8 p-1 mb-2 rounded-lg focus:outline-none' id='username' type='text' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className='w-full h-8 p-1 mb-4 rounded-lg focus:outline-none' id='password' type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='flex justify-center'>
            <button className='px-3 py-1 rounded-lg bg-theme-purple text-black' type='submit'>Register</button>
        </div>
    </form>  
    </div>
    );
}

export default Register;
