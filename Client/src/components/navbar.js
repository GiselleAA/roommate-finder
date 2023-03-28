import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between w-ful h-16 py-2 text-black px-28'>
            <ul className='flex justify-start'>
                <li>
                    <Link to='/'><img src="images/palm-logo.png" width={50} height={50} alt="logo" /></Link>
                </li>
                <li className='text-xl pt-5'>Roommate Finder</li>
            </ul>
            <button className='flex items-center h-9 px-3 py-1 text-md text-white rounded-lg bg-theme-orange' type='button'>
                <Link to='/signin'>Login/Register</Link>
            </button>
        </nav>
    )
}