import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';

export default function Navbar() {
    const [isAuth, setIsAuth]  = useState(() => window.localStorage.getItem('isAuth') || '');
    const college = window.sessionStorage.getItem('college');
    const [img1, setImg1] = useState('');

    useEffect(() => {
        if (isAuth) {
        axios.post('http://localhost:8080/nav', {id: isAuth})
            .then((response) => {
                //const mimeType = response.headers['content-type'];
                const dataUrl = `data:image/png;base64,${response.data}`;
                setImg1(dataUrl);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [isAuth]);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'isAuth') {
                setIsAuth(prevIsAuth => window.localStorage.getItem('isAuth') || prevIsAuth);
            }
        };
        
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [])

    return (
        <nav className=' flex justify-between w-full h-16 py-2 text-black px-28 '>
            <ul className='flex justify-start'>
                <li>
                    <Link to={college !== null ? '/search' : '/'}><img src="images/palm-logo.png" width={50} height={50} alt="logo" /></Link>
                </li>
                <li className='text-3xl pt-2 italic'>RoomMe!</li>
            </ul>
            <div className='flex items-center'>
                <Link className='h-9 w-[120px]' to='/signin'>
                    <button className={`flex items-center justify-center h-full w-full text-white rounded-lg bg-theme-orange ${isAuth ? 'invisible' : 'visible'}  type='button'`}>
                        Login/Register
                    </button>
                </Link>
                <button className={`w-12 h-12 overflow-hidden rounded-full -ml-28 ${isAuth ? 'visible' : 'invisible'}  type='button'`}>
                    <Link to='/profile'>
                        {!img1 && <img src="images/blank.png" alt=""/>}
                        {img1 && <img src="images/jesus.jpg" alt=""/>}
                    </Link>
                </button>
                <button className={`w-12 h-12 overflow-hidden rounded-full bg-theme-blue ml-4 ${isAuth ? 'visible' : 'invisible'}  type='button'`}>
                    <Link to='/messages'><img className='mx-auto mt-1 w-5/6 h-5/6 object-cover object-center' src="images/msg.png" alt="" /></Link>
                </button>
            </div>
        </nav>
    )
}