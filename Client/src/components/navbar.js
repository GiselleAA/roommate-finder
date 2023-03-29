import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='flex justify-between w-full h-16 py-2 text-black px-28'>
            <ul className='flex justify-start'>
                <li>
                    <Link to='/'><img src="images/palm-logo.png" width={50} height={50} alt="logo" /></Link>
                </li>
                <li className='text-xl pt-5'>Roommate Finder</li>
            </ul>
            <div className='flex items-center'>
                <button className={`h-9 px-3 py-1 text-md text-white rounded-lg bg-theme-orange ${JSON.parse(window.localStorage.getItem('isAuth')) === true ? 'invisible' : ''}  type='button'`}>
                    <Link to='/signin'>Login/Register</Link>
                </button>
                <button className={`w-12 h-12 p-1 rounded-full bg-theme-purple -ml-20 ${JSON.parse(window.localStorage.getItem('isAuth')) === true ? 'visible' : 'visible'}  type='button'`}>
                    <Link to='/profile'>.</Link>
                </button>
            </div>
        </nav>
    )
}