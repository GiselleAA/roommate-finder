import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Search() {
    const college = window.sessionStorage.getItem('college');
    const [requestMade, setRequestMade] = useState(false);
    useEffect(() => {
        if (!requestMade) {
    axios.post('http://localhost:8080/search', {}).then((response) => {

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
            <div className='flex absolute bg-black h-20 w-64 justify-center -translate-x-52 rounded-xl hover:border-2 hover:border-white'>
                <button className='text-white text-2xl h-full w-full'>Find A Roomate</button>
            </div>
            <div className='flex absolute bg-black h-20 w-64 justify-center translate-x-52 rounded-xl hover:border-2 hover:border-white'>
                <button className='text-white text-2xl h-full w-full'>Find A Room</button>
            </div>
        </div>
        <div className='flex h-full justify-between mx-52'>
                <div className='flex flex-col w-56 h-full my-20 p-2 bg-gray-300'>
                    <p className='flex justify-center text-2xl text-black font-bold'>Filter By</p>
                    <p className='flex text-lg text-black font-semibold'>Logistics</p>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='budget' type='text'>
                            <option value=''>Budget</option>
                            <option value='Under $1000'>Cost Under $1000</option>
                            <option value='$1000-$2000'>Cost: $1000-$2000</option>
                            <option value='$2000-$3000'>Cost: $2000-$3000</option>
                            <option value='$3000+'>Cost: $3000+</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='ageRange' type='text'>
                            <option value=''>Age Range</option>
                            <option value='18-22'>Ages: 18-22</option> 
                            <option value='18-22'>Ages: 18-22</option> 
                            <option value='30+'>Ages: 30+</option> 
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='moveWithin' type='text'>
                            <option value=''>Move Within</option>
                            <option value='ASAP'>Move ASAP</option>
                            <option value='1 Month'>Move Within 1 Month</option>
                            <option value='3 Months'>Move Within 3 Months</option>
                            <option value='6 Months'>Move Within 6 Months</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='stayLength' type='text'>
                            <option value=''>Lease Length</option>
                            <option value='3 Months'>Lease: 3 Months</option>
                            <option value='6 Months'>Lease: 6 Months</option>
                            <option value='1 Year+'>Lease: 1 Year+</option>
                        </select>
                    </div>
                    <p className='flex text-lg text-black font-semibold'>House Rules</p>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 w-full h-full focus:outline-none bg-gray-400' id='pets' type='text'>
                            <option value=''>Pets</option>
                            <option value='Small Animals'>Small Animals</option>
                            <option value='Large Animals'>Large Animals</option>
                            <option value='No Pets'>No Pets</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 w-full h-full focus:outline-none bg-gray-400' id='guests' type='text'>
                            <option value=''>Guests</option>
                            <option value='Often'>Guests Invited Often</option>
                            <option value='Sometimes'>Guests Invited Sometimes</option>
                            <option value='Never'>Guests Never Invited</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 w-full h-full focus:outline-none bg-gray-400' id='parties' type='text'>
                            <option value=''>Parties</option>
                            <option value='Often'>Parties Held Often</option>
                            <option value='Sometimes'>Parties Held Sometimes</option>
                            <option value='Never'>Parties Never Held</option>
                        </select>
                    </div>
                    <p className='flex text-lg text-black font-semibold'>Lifestyle</p>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='sleep' type='text'>
                            <option value=''>Sleep Pattern</option>
                            <option value='Early Bird'>Early Bird</option>
                            <option value='Night Owl'>Night Owl</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='homeTime' type='text'>
                            <option value=''>Time At Home</option>
                            <option value='Often'>At Home Often</option>
                            <option value='Not Often'>Not Home Often</option>
                            <option value='Varies'>Home Time Varies</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='cleanliness' type='text'>
                            <option value=''>Cleanliness</option>
                            <option value='Clean Freak'>Clean Freak</option>
                            <option value='Clean Enough'>Clean Enough</option>
                            <option value='Dirty Piggie'>Dirty Piggie</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full bg-gray-400' id='study1' type='text'>
                            <option value=''>Study Noise</option>
                            <option value='Quiet'>Studies in Quiet</option>
                            <option value='Noise'>Studies with Noise</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 w-full h-full focus:outline-none bg-gray-400' id='study2' type='text'>
                            <option value=''>Study Pattern</option>
                            <option value='Alone'>Studies Alone</option>
                            <option value='With Others'>Studies With Others</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 w-full h-full focus:outline-none bg-gray-400' id='smoker1' type='text'>
                            <option value=''>Smoking</option>
                            <option value='Vape Friendly'>Vape Friendly</option>
                            <option value='Weed Friendly'>Weed Friendly</option>
                            <option value='Tobacco Friendly'>Tobacco Friendly</option>
                            <option value='All Friendly'>All Friendly</option>
                            <option value='Non Smoker'>Non Smoker</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='smoker2' type='text'>
                            <option value=''>Smoking Frequency</option>
                            <option value='Often'>Smokes Often</option>
                            <option value='Sometimes'>Smokes Sometimes</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 w-full h-full focus:outline-none bg-gray-400' id='drinker' type='text'>
                            <option value=''>Drinking</option>
                            <option value='Often'>Drinks Often</option>
                            <option value='Sometimes'>Drinks Sometimes</option>
                        </select>
                    </div>
                </div>
            <div className='flex flex-col w-5/6 h-full ml-40 my-20'>
                <div className='flex w-full h-full pr-10 mb-10 bg-gray-300'>
                    <div className='h-72 w-72 bg-black text-white'>
                        <img className='' src="images/girl.png" alt="" />
                    </div>
                    <div className='pl-10'>
                        <p className='absolute text-xl translate-x-72 translate-y-10 font-semibold'>(Recommended Match)</p>
                        <p className='mt-6 text-3xl font-bold'>First Name | Age</p>
                        <div className='absolute h-10 w-36 bg-theme-purple rounded-xl translate-x-[600px] -translate-y-7'>
                            <Link to=''>
                                <button className='flex items-center justify-center h-full w-full font-bold'>
                                    Send A Message
                                </button>
                            </Link>
                        </div>
                        <p className='mt-1 text-xl'>University | Major</p>
                        <div className='mt-2 w-[750px]'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full h-full pr-10 mb-10 bg-gray-300'>
                    <div className='h-72 w-72 bg-black text-white'>
                        <img className='' src="images/girl.png" alt="" />
                    </div>
                    <div className='pl-10'>
                        <p className='mt-6 text-3xl font-bold'>First Name | Age</p>
                        <div className='absolute h-10 w-36 bg-theme-purple rounded-xl translate-x-[600px] -translate-y-7'>
                            <Link to=''>
                                <button className='flex items-center justify-center h-full w-full font-bold'>
                                    Send A Message
                                </button>
                            </Link>
                        </div>
                        <p className='mt-1 text-xl'>University | Major</p>
                        <div className='mt-2 w-[750px]'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full h-full pr-10 mb-10 bg-gray-300'>
                    <div className='h-72 w-72 bg-black text-white'>
                        <img className='' src="images/girl.png" alt="" />
                    </div>
                    <div className='pl-10'>
                        <p className='mt-6 text-3xl font-bold'>First Name | Age</p>
                        <div className='absolute h-10 w-36 bg-theme-purple rounded-xl translate-x-[600px] -translate-y-7'>
                            <Link to=''>
                                <button className='flex items-center justify-center h-full w-full font-bold'>
                                    Send A Message
                                </button>
                            </Link>
                        </div>
                        <p className='mt-1 text-xl'>University | Major</p>
                        <div className='mt-2 w-[750px]'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full h-full pr-10 mb-10 bg-gray-300'>
                    <div className='h-72 w-72 bg-black text-white'>
                        <img className='' src="images/girl.png" alt="" />
                    </div>
                    <div className='pl-10'>
                    <p className='absolute text-xl translate-x-72 translate-y-10 font-semibold'>(Recommended Match)</p>
                        <p className='mt-6 text-3xl font-bold'>First Name | Age</p>
                        <div className='absolute h-10 w-36 bg-theme-purple rounded-xl translate-x-[600px] -translate-y-7'>
                            <Link to=''>
                                <button className='flex items-center justify-center h-full w-full font-bold'>
                                    Send A Message
                                </button>
                            </Link>
                        </div>
                        <p className='mt-1 text-xl'>University | Major</p>
                        <div className='mt-2 w-[750px]'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}