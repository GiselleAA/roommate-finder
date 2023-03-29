import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [img, setImg] = useState('');
    const [uni, setUni] = useState('');
    const [major, setMajor] = useState('');
    const [bio, setBio] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState(1);

    const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/register', {firstName: firstName, lastName: lastName, gender: gender, age: age, img: img, uni: uni, major: major, bio: bio, username: username, password: password}).then((data) => {
    setFirst('');
    setLast('');
    setAge('');
    setGender('');
    setImg('');
    setUni('');
    setMajor('');
    setBio('');
    setUsername('');
    setPassword('');
    navigate('/profile');
    })
}

    const handlePress = p =>{
        setStep(step + 1);
    }

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-md">
            {step === 1 && (<div style={{ animation: 'slide-in-right 0.5s ease' }}>
                <form className='mx-auto px-5 pt-5 pb-3 rounded-2xl bg-theme-orange w-72 mt-36' onSubmit={submitHandler}>
                    <h3 className='text-3xl pb-4'>Create Account</h3>
                    <input className='w-full h-9 p-1 mb-4 rounded-lg focus:outline-none' id='username' type='text' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className='w-full h-9 p-1 mb-4 rounded-lg focus:outline-none' id='password' type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className='flex justify-center'>
                        <button className='px-3 py-1 rounded-lg bg-theme-purple text-black' type='button' onClick={handlePress}>Next</button>
                    </div>
                </form>
                </div>)}
                {step === 2 && (<div style={{ animation: 'slide-in-right 0.5s ease' }}>
                    <form className='mx-auto w-80 px-6 pt-6 pb-3 rounded-2xl bg-theme-orange mt-36'>
                        <div className='flex flex-col mr-3'>
                            <h3 className='text-3xl pb-4'>Basic Information</h3>
                            <input className='h-9 px-3 py-2 mb-4 rounded-lg focus:outline-none' id='firstName' type='text' placeholder="First Name" value={firstName} onChange={(e) => setFirst(e.target.value)} />
                            <input className='h-9 px-3 py-2 mb-4 rounded-lg focus:outline-none' id='lastName' type='text' placeholder="Last Name" value={lastName} onChange={(e) => setLast(e.target.value)} />
                            <input className='h-9 px-3 py-2 mb-4 rounded-lg focus:outline-none' id='username' type='text' placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                            <input className='h-9 px-3 py-2 mb-4 rounded-lg focus:outline-none' id='password' type='password' placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className='flex justify-center'>
                            <button className='px-3 py-1 rounded-lg bg-theme-purple text-black mb-1' type='button' onClick={handlePress}>Next</button>
                        </div>
                    </form>
                </div>)}
                {step === 3 && (
                    <div style={{ animation: 'slide-in-right 0.5s ease' }}>
                    <form className='flex flex-col mx-auto px-6 pt-6 pb-3 rounded-2xl bg-theme-orange w-80 mt-36'>
                        <div className='flex flex-col mr-3'>
                            <h3 className='text-3xl pb-3'>My school is...</h3>
                            <input className='h-9 px-3 py-2 mb-5 rounded-lg focus:outline-none' id='firstName' type='text' placeholder="CSU or UC" value={uni} onChange={(e) => setUni(e.target.value)} />
                            <h3 className='text-3xl pb-2'>I study...</h3>
                            <input className='h-9 px-3 py-2 mb-4 rounded-lg focus:outline-none' id='major' type='text' placeholder="Major" value={major} onChange={(e) => setMajor(e.target.value)} />
                        </div>
                        <div className='flex justify-center'>
                            <button className='px-3 py-1 rounded-lg bg-theme-purple text-black mb-1' type='button' onClick={handlePress}>Next</button>
                        </div>
                    </form>
                </div>)}
                {step === 4 && (
                    <div style={{ animation: 'slide-in-right 0.5s ease' }}>
                        <form className='flex flex-col mx-auto px-6 pt-6 pb-3 rounded-2xl bg-theme-orange w-80 mt-36' onSubmit={submitHandler}>
                            <div className='flex flex-col mr-3'>
                                <h3 className='text-3xl pb-1'>Add a bio</h3>
                                <h3 className='text-md pb-2'>Describe yourself and what you're looking for in a roommate</h3>
                                <textarea className='h-36 px-3 py-2 mb-4 rounded-lg resize-none focus:outline-none text-align: right;' id='bio' type='text' value={bio} onChange={(e) => setBio(e.target.value)} />
                            </div>
                            <div className='flex justify-center'>
                                <button className='px-3 py-1 rounded-lg bg-theme-purple text-black' type='submit'>Finish</button>
                            </div>
                        </form>
                    </div>)}
            </div>
            <style>
            {`@keyframes slide-in-right {0% {opacity: 0; transform: translateX(100%);}
                100% {opacity: 1;transform: translateX(0);}}`}
            </style>
        </div>
    );
}

export default Register;
