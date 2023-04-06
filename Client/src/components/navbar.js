import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const isAuth = window.localStorage.getItem('isAuth');
    const [img1, setImg1] = useState('');
    
    useEffect(() => {
        axios.post('http://localhost:8080/nav', {id: isAuth})
            .then((response) => {
                setImg1('data:image/png;base64,'+response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [isAuth]);

    useEffect(() => {
        console.log(img1);
        }, [img1]);

    return (
        <nav className='flex justify-between w-full h-16 py-2 text-black px-28'>
            <ul className='flex justify-start'>
                <li>
                    <Link to='/'><img src="images/palm-logo.png" width={50} height={50} alt="logo" /></Link>
                </li>
                <li className='text-xl pt-5'>Roommate Finder</li>
            </ul>
            <div className='flex items-center justify-center'>
                <button className={`h-9 px-3 py-1 text-md text-white rounded-lg bg-theme-orange ${JSON.parse(window.localStorage.getItem('isAuth')) === true ? 'visible' : ''}  type='button'`}>
                    <Link to='/signin'>Login/Register</Link>
                </button>
                <button className={`w-12 h-12 overflow-hidden rounded-full -ml-28 ${JSON.parse(window.localStorage.getItem('isAuth')) === true ? 'visible' : 'visible'}  type='button'`}>
                    <Link to='/profile'>
                        {!img1 && <img src="images/blank.png" alt=""/>}
                        {img1 && <img src={img1} type="image.png" alt=""/>}
                    </Link>
                </button>
                <button className={`w-12 h-12 overflow-hidden rounded-full bg-theme-blue ml-4 ${JSON.parse(window.localStorage.getItem('isAuth')) === true ? 'visible' : 'visible'}  type='button'`}>
                    <Link to='/messages'><img className='mx-auto mt-1 w-5/6 h-5/6 object-cover object-center' src="images/msg.png" alt="" /></Link>
                </button>
            </div>
        </nav>
    )
}