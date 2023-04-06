import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [img1, setImg1] = useState('');
    const [location, setLocation] = useState('');
    const [uni, setUni] = useState('');
    const [major, setMajor] = useState('');
    const [interest1, setInterest1] = useState('');
    const [interest2, setInterest2] = useState('');
    const [interest3, setInterest3] = useState('');
    const [bio, setBio] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState(1);
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [requestMade, setRequestMade] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (selectedInterests.length >= 1)
            setInterest1(selectedInterests[0]);
        else
            setInterest1('');
        
        if (selectedInterests.length >= 2)
            setInterest2(selectedInterests[1]);
        else
            setInterest2('');
        
        if (selectedInterests.length >= 3)
            setInterest3(selectedInterests[2]);
        else
            setInterest3('');
        
    }, [selectedInterests]);

    const handleInterestClick = (interest, e) => {
        e.preventDefault();
        if (selectedInterests.includes(interest))
            setSelectedInterests(selectedInterests.filter((g) => g !== interest));
        else if (selectedInterests.length < 3)
            setSelectedInterests([...selectedInterests, interest]);
    };

    const handleImage = (img) => {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const width = img.width;
                const height = img.height;
                const maxWidth = 445;
                const maxHeight = 445;
                let newWidth = width;
                let newHeight = height;
                if (width > height && width > maxWidth) {
                    newWidth = maxWidth;
                    newHeight = Math.round((height * maxWidth) / width);
                } 
                else if (height > width && height > maxHeight) {
                    newHeight = maxHeight;
                    newWidth = Math.round((width * maxHeight) / height);
                }
                const canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, newWidth, newHeight);
                const dataURL = canvas.toDataURL(img.type);
                setImg1(dataURL);
        };
    };
};

    const SubmitHandler = e => {
    if (selectedInterests.length >= 1) {
        setInterest1(selectedInterests[0]);
    }
    if (selectedInterests.length >= 2) {
        setInterest2(selectedInterests[1]);
    }
    if (selectedInterests.length >= 3) {
        setInterest3(selectedInterests[2]);
    }

    e.preventDefault();
    if (!requestMade) {
    axios.post('http://localhost:8080/register', {firstName: firstName, lastName: lastName, gender: gender, age: age, email: email, img1: img1, uni: uni, major: major, interest1: interest1, interest2: interest2, interest3: interest3, bio: bio, username: username, password: password, location: location}).then((data) => {
    navigate('/signin');
    setRequestMade(true);
    console.log(JSON.stringify(data));
    })
    .catch(error => {
        setErrorMessage("Username Taken or Empty Password");
        setStep(1);
    });
    }   
}

    const handlePress = p =>{
        setStep(step + 1);
    }

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-md">
            {step === 1 && (<div style={{ animation: 'slide-in-right 0.5s ease' }}>
                <form className='mx-auto px-5 pt-5 pb-3 rounded-2xl bg-theme-orange w-72 mt-36' onSubmit={SubmitHandler}>
                    <h3 className={`text-3xl ${errorMessage ? '' : 'pb-3'}`}>Create Account</h3>
                    {errorMessage && <h3 className='text-lg text-red-800 py-1'>{errorMessage}</h3>}
                    <input className='w-full h-9 p-1 mb-4 rounded-lg focus:outline-none' id='username' type='text' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className='w-full h-9 p-1 mb-4 rounded-lg focus:outline-none' id='password' type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className='w-full h-9 p-1 mb-4 rounded-lg focus:outline-none' id='email' type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className='flex justify-center'>
                        <button className='px-3 py-1 rounded-lg bg-theme-purple text-black' type='button' onClick={handlePress}>Next</button>
                    </div>
                </form>
                </div>)}
                {step === 2 && (<div style={{ animation: 'slide-in-right 0.5s ease' }}>
                    <form className='mx-auto w-80 px-6 pt-6 pb-3 rounded-2xl bg-theme-orange mt-36'>
                        <div className='flex flex-col mr-3'>
                            <h3 className='text-3xl pb-3'>Basic Information</h3>
                            <input className='h-9 px-3 py-2 mb-4 rounded-lg focus:outline-none' id='firstName' type='text' placeholder="First Name" value={firstName} onChange={(e) => setFirst(e.target.value)} />
                            <input className='h-9 px-3 py-2 mb-4 rounded-lg focus:outline-none' id='lastName' type='text' placeholder="Last Name" value={lastName} onChange={(e) => setLast(e.target.value)} />
                            <select className='text-gray-400 h-9 px-3 mb-4 rounded-lg focus:outline-none' id='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value=''>Select</option>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Nonbinary'>Nonbinary</option>
                                <option value='Transgender'>Transgender</option>
                                <option value='Other'>Other</option>
                                <option value='None'>Prefer not to say</option>
                            </select>
                            <select className='text-gray-400 h-9 px-3 mb-4 rounded-lg focus:outline-none' id='age' value={age} onChange={(e) => setAge(e.target.value)}>
                                <option value=''>Select</option>
                                {Array.from({length: 23}, (_, i) => i + 18).map((age) => (
                                <option key={age} value={age}>{age}</option>
                                ))}
                            </select>
                            <input className='h-9 px-3 py-2 mb-4 rounded-lg focus:outline-none' id='location' type='text' placeholder="Current City" value={location} onChange={(e) => setLocation(e.target.value)} />                    
                        </div>
                        <div className='flex justify-center'>
                            <button className='px-3 py-1 rounded-lg bg-theme-purple text-black mb-1' type='button' onClick={handlePress}>Next</button>
                        </div>
                    </form>
                </div>)}
                {step === 3 && (<div style={{ animation: 'slide-in-right 0.5s ease' }}>
                    <form className='mx-auto w-80 px-6 pt-6 pb-3 rounded-2xl bg-theme-orange mt-36'>
                        <div className='flex flex-col mr-3'>
                            <h3 className='text-3xl pb-2'>Add a<br></br>Profile Picture</h3>
                            <div className='flex w-[222px] h-[222px] ml-4 mb-3 justify-center items-center'>
                                {!img1 && <img src="images/blank.png" alt="" />}
                                {img1 && <img src={img1} alt="" />}
                            </div>
                            <input type="file" onChange={(e) => handleImage(e.target.files[0])}/>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <button className='px-3 py-1 rounded-lg bg-theme-purple text-black mb-1' type='button' onClick={handlePress}>Next</button>
                        </div>
                    </form>
                </div>)}
                {step === 4 && (
                    <div style={{ animation: 'slide-in-right 0.5s ease' }}>
                    <form className='flex flex-col mx-auto px-6 pt-6 pb-3 rounded-2xl bg-theme-orange w-80 mt-36'>
                        <div className='flex flex-col mr-3'>
                            <h3 className='text-3xl pb-3'>My school is...</h3>
                            <select className='text-gray-400 h-10 px-3 mb-4 rounded-lg focus:outline-none' id='uni' type='text' value={uni} onChange={(e) => setUni(e.target.value)}>
                                <option value=''>Select</option>
                                <option value='California State University, Bakersfield'>California State University, Bakersfield</option>
                                <option value='California State University Channel Islands'>California State University Channel Islands</option>
                                <option value='California State University, Chico'>California State University, Chico</option>
                                <option value='California State University, Dominguez Hills'>California State University, Dominguez Hills</option>
                                <option value='California State University, East Bay'>California State University, East Bay</option>
                                <option value='California State University, Fullerton'>California State University, Fullerton</option>
                                <option value='Humboldt State University'>Humboldt State University</option>
                                <option value='California State University, Long Beach'>California State University, Long Beach</option>
                                <option value='California State University, Los Angeles'>California State University, Los Angeles</option>
                                <option value='California State University Maritime Academy'>California State University Maritime Academy</option>
                                <option value='California State University, Monterey Bay'>California State University, Monterey Bay</option>
                                <option value='California State University, Northridge'>California State University, Northridge</option>
                                <option value='California State Polytechnic University, Pomona'>California State Polytechnic University, Pomona</option>
                                <option value='California State University, Sacramento'>California State University, Sacramento</option>
                                <option value='California State University, San Bernardino'>California State University, San Bernardino</option>
                                <option value='San Diego State University'>San Diego State University</option>
                                <option value='San Francisco State University'>San Francisco State University</option>
                                <option value='San José State University'>San José State University</option>
                                <option value='California Polytechnic State University, San Luis Obispo'>California Polytechnic State University, San Luis Obispo</option>
                                <option value='California State University, San Marcos'>California State University, San Marcos</option>
                                <option value='Sonoma State University'>Sonoma State University</option>
                                <option value='California State University, Stanislaus'>California State University, Stanislaus</option>
                                <option value='UC Berkeley'>UC Berkeley</option>
                                <option value='UC Davis'>UC Davis</option>
                                <option value='UC Irvine'>UC Irvine</option>
                                <option value='UCLA'>UCLA</option>
                                <option value='UC Merced'>UC Merced</option>
                                <option value='UC Riverside'>UC Riverside</option>
                                <option value='UC San Diego'>UC San Diego</option>
                                <option value='UC San Francisco'>UC San Francisco</option>
                                <option value='UC Santa Barbara'>UC Santa Barbara</option>
                                <option value='UC Santa Cruz'>UC Santa Cruz</option>
                            </select>
                            <h3 className='text-3xl pb-2'>I study...</h3>
                            <input className='h-9 px-3 py-2 mb-4 rounded-lg focus:outline-none' id='major' type='text' placeholder="Major" value={major} onChange={(e) => setMajor(e.target.value)} />
                        </div>
                        <div className='flex justify-center'>
                            <button className='px-3 py-1 rounded-lg bg-theme-purple text-black mb-1' type='button' onClick={handlePress}>Next</button>
                        </div>
                    </form>
                </div>)}
                {step === 5 && (
                    <div style={{ animation: 'slide-in-right 0.5s ease' }}>
                        <form className='flex flex-col mx-auto px-6 pt-6 pb-3 rounded-2xl bg-theme-orange w-[550px] mt-36'>
                            <div className='flex flex-col mr-3'>
                                <h3 className='text-3xl pb-3'>Interests</h3>
                                <div className='grid grid-cols-4 gap-x-2 gap-y-2 justify-center text-center mb-3'>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Parties') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Parties', e)}>
                        Parties
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Movies') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Movies', e)}>
                        Movies
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Cooking') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Cooking', e)}>
                        Cooking
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Art') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Art', e)}>
                        Art
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Concerts') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Concerts', e)}>
                        Concerts
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Baking') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Baking', e)}>
                        Baking
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Shows') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Shows', e)}>
                        Shows
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Music') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Music', e)}>
                        Music
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Tech') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Tech', e)}>
                        Tech
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Reading') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Reading', e)}>
                        Reading
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Vegetarian') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Vegetarian', e)}>
                        Vegetarian
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Vegan') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Vegan', e)}>
                        Vegan
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Sports') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Sports', e)}>
                        Sports
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('DIY Crafts') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('DIY Crafts', e)}>
                        DIY Crafts
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Gaming') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Gaming', e)}>
                        Gaming
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Athlete') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Athlete', e)}>
                        Athlete
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Photography') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Photography', e)}>
                        Photography
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Gym') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Gym', e)}>
                        Gym
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Cars') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Cars', e)}>
                        Cars
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Astrology') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Astrology', e)}>
                        Astrology
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Thrifting') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Thrifting', e)}>
                        Thrifting
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Knitting') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Knitting', e)}>
                        Knitting
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Writing') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Writing', e)}>
                        Writing
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Crocheting') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Crocheting', e)}>
                        Crocheting
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Dance') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Dance', e)}>
                        Dance
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Anime') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Anime', e)}>
                        Anime
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Instruments') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Instruments', e)}>
                        Instruments
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Adrenaline') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Adrenaline', e)}>
                        Adrenaline
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Exploration') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Exploration', e)}>
                        Exploration
                    </button>
                    <button className={`px-4 py-3 rounded-2xl text-sm ${selectedInterests.includes('Hiking') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={(e) => handleInterestClick('Hiking', e)}>
                        Hiking
                    </button>
                </div>                            
                </div>
                            <div className='flex justify-center'>
                                <button className='px-3 py-1 rounded-lg bg-theme-purple text-black' type='button' onClick={handlePress}>Next</button>
                            </div>
                        </form>
                    </div>)}
                {step === 6 && (
                    <div style={{ animation: 'slide-in-right 0.5s ease' }}>
                        <form className='flex flex-col mx-auto px-6 pt-6 pb-3 rounded-2xl bg-theme-orange w-96 mt-36' onSubmit={SubmitHandler}>
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
