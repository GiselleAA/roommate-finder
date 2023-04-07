import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Search() {
    const college = window.sessionStorage.getItem('college');
    const [requestMade, setRequestMade] = useState(false);
    useEffect(() => {
        if (!requestMade) {
    axios.post('http://localhost:8080/search', {id: [1, 2, 3]}).then((response) => {
        //create array of (n) id numbers
        setRequestMade(true);
    })
    .catch(error => {
        console.log(error);
    });
    }
}, [requestMade]);
    //create variables for each (n) users for (firstName, age, uni, major, bio)
    return (
        /*display (n) user profiles*/
    <div>
        <div className='flex justify-center overflow-hidden items-center w-full h-[400px] bg-theme-orange'>
            <img className='object-fill -translate-y-10' src="images/poppies.jpg" alt="" />
            <div className='flex absolute bg-black h-20 w-64 justify-center -translate-x-52 hover:border-2 hover:border-white'>
                <button className='text-white text-2xl h-full w-full'>Find A Roomate</button>
            </div>
            <div className='flex absolute bg-black h-20 w-64 justify-center translate-x-52 hover:border-2 hover:border-white'>
                <button className='text-white text-2xl h-full w-full'>Find A Room</button>
            </div>
        </div>
        <div className='flex h-screen mx-40 bg-black'>
                <div className='flex flex-col w-56 h-[600px] mt-20 p-2 bg-gray-300'>
                    <p className='flex justify-center text-2xl text-black font-bold'>Filter By</p>
                    <p className='flex text-lg text-black font-semibold'>Logistics</p>
                    <div className='flex w-full h-10 mb-2 bg-gray-500 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-500' id='budget' type='text'>
                            <option value=''>Budget</option>
                            <option value='Under $1000'>Cost Under $1000</option>
                            <option value='$1000-$2000'>Cost: $1000-$2000</option>
                            <option value='$2000-$3000'>Cost: $2000-$3000</option>
                            <option value='$3000+'>Cost: $3000+</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 bg-gray-500 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-500' id='ageRange' type='text'>
                            <option value=''>Age Range</option>
                            <option value='18-22'>Ages: 18-22</option> 
                            <option value='18-22'>Ages: 18-22</option> 
                            <option value='30+'>Ages: 30+</option> 
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 bg-gray-500 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-500' id='moveWithin' type='text'>
                            <option value=''>Move Within</option>
                            <option value='ASAP'>Move ASAP</option>
                            <option value='1 Month'>Move Within 1 Month</option>
                            <option value='3 Months'>Move Within 3 Months</option>
                            <option value='6 Months'>Move Within 6 Months</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 bg-gray-500 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-500' id='stayLength' type='text'>
                            <option value=''>Lease Length</option>
                            <option value='3 Months'>Lease: 3 Months</option>
                            <option value='6 Months'>Lease: 6 Months</option>
                            <option value='1 Year+'>Lease: 1 Year+</option>
                        </select>
                    </div>
                    <p className='flex text-lg text-black font-semibold'>Lifestyle</p>
                    <div className='flex w-full h-10 mb-2 bg-gray-500 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-500' id='sleep' type='text'>
                            <option value=''>Sleep Pattern</option>
                            <option value='Early Bird'>Early Bird</option>
                            <option value='Night Owl'>Night Owl</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 bg-gray-500 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-500' id='homeTime' type='text'>
                            <option value=''>Time At Home</option>
                            <option value='Often'>At Home Often</option>
                            <option value='Not Often'>Not Home Often</option>
                            <option value='Varies'>Home Time Varies</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 bg-gray-500 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-500' id='cleanliness' type='text'>
                            <option value=''>Cleanliness</option>
                            <option value='High'>Clean Freak</option>
                            <option value='Medium'>Clean Enough</option>
                            <option value='Low'>Dirty Piggie</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 bg-gray-500 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full bg-gray-500' id='study1' type='text'>
                            <option value=''>Study Noise</option>
                            <option value='Quiet'>Studies in Quiet</option>
                            <option value='Noise'>Studies with Noise</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 bg-gray-500 items-center justify-center'>
                        <select className='px-2 py-1 w-full h-full focus:outline-none bg-gray-500' id='study2' type='text'>
                            <option value=''>Study Pattern</option>
                            <option value='Alone'>Studies Alone</option>
                            <option value='With Others'>Studies With Others</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 bg-gray-500 items-center justify-center'>

                    </div>
                </div>
        </div>
    </div>
    )
}