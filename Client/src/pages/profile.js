import { Link } from 'react-router-dom';

export default function Profile(){
    const isAuth = window.localStorage.getItem('isAuth');
    return (
        <div className="flex flex-col items-center justify-center mt-10 mx-48">
            <div className="flex flex-col items-center justify-center text-center rounded-2xl w-1/3 h-20 bg-theme-orange">
                <p className="text-3xl">Fake Name</p>
                <p className="text-lg">Host</p>
                <button className={`h-20 w-20 absolute left-2/3 ${isAuth /*pull profile id from db and compare*/ ? 'visbile' : 'invisible'}`}>
                    <Link to='/settings'><img src="images/cog.png" alt="" /></Link>
                </button>
            </div>
            <div className="flex justify-center items-center h-full w-full my-6">
                <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                    <div className="grid rounded-2xl w-96 h-72 overflow-hidden bg-theme-orange">
                        <img className='mx-auto -translate-y-6 w-fit h-fit object-cover object-center' src="images/girl.png" alt="" />
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-orange">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-2">About Me</p>
                            <p className="text-xl pb-1">Age:</p>
                            <p className="text-xl pb-1">Gender:</p>
                            <p className="text-xl pb-1">Religion:</p>
                            <p className="text-xl pb-1">College:</p>
                            <p className="text-xl pb-1">Horoscope:</p>
                            <p className="text-xl pb-1">Ally:</p>
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-orange">
                    <div className="flex flex-col">
                            <p className="text-4xl pb-2">Important Info</p>
                            <p className="text-xl pb-1">Age Range:</p>
                            <p className="text-xl pb-1">Price Range:</p>
                            <p className="text-xl pb-1">On/Off Campus:</p>
                            <p className="text-xl pb-1">Length of Stay:</p>
                            <p className="text-xl pb-1">Job:</p>
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-lpurple">
                    <div className="flex flex-col">
                            <p className="text-4xl pb-2">Lifestyle</p>
                            <p className="text-xl pb-1">Cleanliness:</p>
                            <p className="text-xl pb-1">Smoking:</p>
                            <p className="text-xl pb-1">Drinking:</p>
                            <p className="text-xl pb-1">Interests:</p>
                        </div>
                    </div>
                    <div className="grid overflow-hidden rounded-2xl w-96 h-72">
                        <img className='mx-auto w-full h-full object-cover object-center' src="images/students.jpg" alt="" />
                    </div>
                    <div className="grid overflow-hidden rounded-2xl w-96 h-72">
                        <img className='mx-auto w-full h-full object-cover object-center' src="images/friends.JPG" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}