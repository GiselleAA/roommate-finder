import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Settings() {
    const [isClicked1, setClicked1] = useState(true);
    const [isClicked2, setClicked2] = useState(false);
    const handleClick1 = () => {
        setClicked1(true);
        setClicked2(false);
    };
    const handleClick2 = () => {
        setClicked1(false);
        setClicked2(true);
    };

    return (
        <div className='flex flex-col mt-10 mx-48 h-screen'>
            <div className="flex flex-col text-4xl justify-center text-center h-20 mb-5">
                Edit Your Profile
            </div>
            <div className='flex flex-row h-60'>
                <div className='block ml-80 w-60 overflow-hidden rounded-2xl'>
                    <img className='object-cover object-center' src="images/girl.png" alt="" />
                </div>
                <div className='flex mt-10 flex-col'>
                    <p className='text-5xl ml-52 mb-10'>Fake Name</p>
                    <div className='flex text-2xl ml-40'>
                        <button className={`p-3 w-44 resize:none hover:border-2 hover:border-black ${isClicked1 ? 'bg-theme-purple': 'bg-theme-lpurple'}`} onClick={handleClick1}>
                            Host
                        </button>
                        <button className={`p-3 w-44 hover:border-2 hover:border-black ${isClicked2 ? 'bg-theme-purple': 'bg-theme-lpurple'}`} onClick={handleClick2}>
                            Scout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}