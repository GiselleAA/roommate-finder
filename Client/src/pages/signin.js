import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/signin', {username: username, password: password}).then((response) => {
    const data = response.data.data;
    if (data === 'false') {
        navigate('/error');
    }
    else {
        setUsername('');
        setPassword('');
        window.localStorage.setItem('isAuth', data);
        navigate('/search');
    }
    })
}

    return (
    <div>
        <form className='mx-auto px-5 pt-5 pb-3 rounded-2xl bg-theme-orange w-72 mt-36' onSubmit={submitHandler}>
        <div className='flex justify between mb-3'>
            <img src="images/palm-logo.png" width={75} height={75} style={{alignSelf: 'center'}} alt="logo"/>
            <h3 className='text-4xl pt-6 text-black italic'>RoomMe!</h3>
        </div>
        <input className='w-full h-9 p-1 mb-4 rounded-lg focus:outline-none' id='username' type='text' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className='w-full h-9 p-1 mb-4 rounded-lg focus:outline-none' id='password' type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='flex justify-center'>
            <button className='px-3 py-1 rounded-lg bg-theme-purple text-black' type='submit'>Sign In</button>
        </div>
        <a className='block text-center pt-1' href="/register">New user?</a>
    </form>  
    </div>
    );
}

export default Signin;
