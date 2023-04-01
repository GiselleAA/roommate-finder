import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
    const navigate = useNavigate();
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [uni, setUni] = useState('');
    const [major, setMajor] = useState('');
    const [bio, setBio] = useState('');
    const [social1, setSocial1] = useState('')
    const [social2, setSocial2] = useState('')
    const [social3, setSocial3] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [job, setJob] = useState('');
    const [location, setLocation] = useState('');
    const [horoscope, setHoroscope] = useState('');
    const [religion, setReligion] = useState('');
    const [orientation, setOrientation] = useState('');
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');
    const [minBudget, setMinBudget] = useState('');
    const [maxBudget, setMaxBudget] = useState('');
    const [stayLength, setStayLength] = useState('');
    const [amenities, setAmenities] = useState('');
    const [pets, setPets] = useState('');
    const [guests, setGuests] = useState(false);
    const [parties, setParties] = useState(false);
    const [sleep, setSleep] = useState('');
    const [homeTime, setHomeTime] = useState('');
    const [cleanliness, setCleanliness] = useState('');
    const [study1, setStudy1] = useState('');
    const [study2, setStudy2] = useState('');
    const [smoker1, setSmoker1] = useState('');
    const [smoker2, setSmoker2] = useState('');
    const [drinker, setDrinker] = useState('');
    const [trait1, setTrait1] = useState('');
    const [trait2, setTrait2] = useState('');
    const [trait3, setTrait3] = useState('');
    const [music1, setMusic1] = useState('');
    const [music2, setMusic2] = useState('');
    const [music3, setMusic3] = useState('');
    const [prefLocation, setPrefLocation] = useState('');
    const [prefGender, setPrefGender] = useState('');
    const [prefReligion, setPrefReligion] = useState('');
    const [prefOrientation, setPrefOrientaion] = useState('');
    const [prefSmoker1, setPrefSmoker1] = useState('');
    const [prefSmoker2, setPrefSmoker2] = useState('');
    const [prefDrinker, setPrefDrinker] = useState('');
    const [prefCleanliness, setPrefCleanliness] = useState('');
    const [prefPets, setPrefPets] = useState('');
    const [prefSleep, setPrefSleep] = useState('');
    const [prefHomeTime, setPrefHomeTime] = useState('');
    const [prefStudy1, setPrefStudy1] = useState('');
    const [prefStudy2, setPrefStudy2] = useState('');
    const [prefGuests, setPrefGuests] = useState(false);
    const [prefParties, setPrefParties] = useState(false);
    const [hostScout, setHostScout] = useState(false);
    const [onCampus, setOnCampus] = useState(false);
    
    const [isClicked1, setClicked1] = useState(true);
    const [isClicked2, setClicked2] = useState(false);
    const [isClicked3, setClicked3] = useState(true);
    const [isClicked4, setClicked4] = useState(false);

    const handleClick1 = () => {
        setClicked1(true);
        setClicked2(false);
        setHostScout('host');
    };
    const handleClick2 = () => {
        setClicked1(false);
        setClicked2(true);
        setHostScout('scout');
    };
    const handleClick3 = () => {
        setClicked3(true);
        setClicked4(false);
        setOnCampus(true);
    };
    const handleClick4 = () => {
        setClicked3(false);
        setClicked4(true);
        setOnCampus(false);
    };

    const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/settings', {firstName: firstName, lastName: lastName, email: email, age: age, gender: gender, img1: img1, img2: img2, img3: img3, uni: uni, major: major, bio: bio, social1: social1, social2: social2, social3: social3, username: username, password: password, job: job, location: location, horoscope: horoscope, religion: religion, orientation: orientation, minAge: minAge, maxAge: maxAge, minBudget: minBudget, maxBudget: maxBudget, stayLength: stayLength, amenities: amenities, pets: pets, guests: guests, parties: parties, sleep: sleep, homeTime: homeTime, cleanliness: cleanliness, study1: study1, study2: study2, smoker1: smoker1, smoker2: smoker2, drinker: drinker, trait1: trait1, trait2: trait2, trait3: trait3, music1: music1, music2: music2, music3: music3, hostScout: hostScout, onCampus: onCampus, prefLocation: prefLocation, prefGender: prefGender, prefReligion: prefReligion, prefOrientation: prefOrientation, prefSmoker1: prefSmoker1, prefSmoker2: prefSmoker2, prefDrinker: prefDrinker, prefCleanliness: prefCleanliness, prefPets: prefPets, prefSleep: prefSleep, prefHomeTime: prefHomeTime, prefStudy1: prefStudy1, prefStudy2: prefStudy2, prefGuests: prefGuests, prefParties: prefParties}).then((data) => {
        setFirst('');
        setLast('');
        setEmail('');
        setAge('');
        setGender('');
        setImg1('');
        setImg2('');
        setImg3('');
        setUni('');
        setMajor('');
        setBio('');
        setSocial1('');
        setSocial2('');
        setSocial3('');
        setUsername('');
        setPassword('');
        setJob('');
        setLocation('');
        setHoroscope('');
        setReligion('');
        setOrientation('');
        setMinAge('');
        setMaxAge('');
        setMinBudget('');
        setMaxBudget('');
        setStayLength('');
        setAmenities('');
        setPets('');
        setGuests('');
        setParties('');
        setSleep('');
        setHomeTime('');
        setCleanliness('');
        setStudy1('');
        setStudy2('');
        setSmoker1('');
        setSmoker2('');
        setDrinker('');
        setTrait1('');
        setTrait2('');
        setTrait3('');
        setMusic1('');
        setMusic2('');
        setMusic3('');
        setHostScout('');
        setOnCampus('');
        setPrefLocation('');
        setPrefGender('');
        setPrefReligion('');
        setPrefOrientaion('');
        setPrefSmoker1('');
        setPrefSmoker2('');
        setPrefDrinker('');
        setPrefCleanliness('');
        setPrefPets('');
        setPrefSleep('');
        setPrefHomeTime('');
        setPrefStudy1('');
        setPrefStudy2('');
        setPrefGuests('');
        setPrefParties('');
        navigate('/profile');
    })
}

    return (
        <div className='flex flex-col mt-10 mx-48 h-screen'>
            <div className="flex flex-col text-4xl justify-center text-center h-20 mb-5">
                Edit Your Profile
            </div>
            <div className='flex flex-row'>
                <div className='block ml-96 w-60 overflow-hidden'>
                    <img className='rounded-2xl object-cover object-center' src="images/girl.png" alt="" />
                </div>
                <div className='flex mt-10 flex-col'>
                    <p className='text-5xl ml-52 mb-10'>Fake Name</p>
                    <div className='flex text-2xl ml-40'>
                        <button className={`p-3 w-44 text-white resize:none hover:border-2 hover:border-black ${isClicked1 ? 'bg-theme-purple': 'bg-theme-gray'}`} onClick={handleClick1}>
                            Host
                        </button>
                        <button className={`p-3 w-44 text-white hover:border-2 hover:border-black ${isClicked2 ? 'bg-theme-purple': 'bg-theme-gray'}`} onClick={handleClick2}>
                            Scout
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <p className='flex justify-center text-3xl my-5'>About Me</p>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Age</p>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='age' type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Gender</p>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='gender' type='text' value={gender} onChange={(e) => setGender(e.target.value)}/>
                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>University</p>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='uni' type='text' value={uni} onChange={(e) => setUni(e.target.value)}/>
                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Major</p>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='major' type='text' value={major} onChange={(e) => setMajor(e.target.value)}/>
                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Job</p>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='job' type='text' value={job} onChange={(e) => setJob(e.target.value)}/>
                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-36 h-12 bg-theme-gray text-white'>Current Location</p>
                    <input className='px-3 py-2 w-[337px] h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='location' type='text' value={location} onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <div className='flex justify-center flex-row text-center mt-5 ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='horoscope' type='text' value={horoscope} onChange={(e) => setHoroscope(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Horoscope</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='religion' type='text' value={religion} onChange={(e) => setReligion(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Religion</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='orientation' type='text' value={orientation} onChange={(e) => setOrientation(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Orientation</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='age' type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Interests</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='age' type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Traits</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='age' type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Music</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-6 mt-5'>
                    <p className='p-3 w-24 h-44 bg-theme-gray text-white'>Bio</p>
                    <textarea className='resize-none h-44 w-[570px] px-3 py-2 mb-3 focus:outline-none bg-theme-lpurple' id='bio' type='text' value={bio} onChange={(e) => setBio(e.target.value)}/>
                </div>

                <p className='flex justify-center text-3xl my-4'>Room Location</p>
                <div className='flex text-2xl mb-2'>
                        <button className={`p-3 w-44 text-white resize:none hover:border-2 hover:border-black ${isClicked3 ? 'bg-theme-purple': 'bg-theme-gray'}`} onClick={handleClick3}>
                            On Campus
                        </button>
                        <button className={`p-3 w-44 text-white hover:border-2 hover:border-black ${isClicked4 ? 'bg-theme-purple': 'bg-theme-gray'}`} onClick={handleClick4}>
                            Off Campus
                        </button>
                    </div>
                <p className='flex justify-center text-3xl my-5'>Logistics</p>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <input className='px-3 py-2 w-[380px] h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='age' type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
                    <p className='p-3 w-[102px] h-12 bg-theme-gray text-white'>Budget</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-[211px]'>
                    <input className='px-3 py-2 w-[380px] h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='gender' type='text' value={gender} onChange={(e) => setGender(e.target.value)}/>
                    <p className='p-3 w-30 h-12 bg-theme-gray text-white'>Age Range</p>                
                </div>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <input className='px-3 py-2 w-[355px] h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='uni' type='text' value={uni} onChange={(e) => setUni(e.target.value)}/>
                    <p className='p-3 w-32 h-12 bg-theme-gray text-white'>Move In Date</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <input className='px-3 py-2 w-[355px] h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='major' type='text' value={major} onChange={(e) => setMajor(e.target.value)}/>
                    <p className='p-3 w-32 h-12 bg-theme-gray text-white'>Length of Stay</p>
                </div>
                
                <p className='flex justify-center text-3xl my-5'>Room Info</p>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Amenities</p>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='age' type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Pets</p>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='gender' type='text' value={gender} onChange={(e) => setGender(e.target.value)}/>
                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Guests</p>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='uni' type='text' value={uni} onChange={(e) => setUni(e.target.value)}/>
                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Parties</p>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='major' type='text' value={major} onChange={(e) => setMajor(e.target.value)}/>
                </div>

                <p className='flex justify-center text-3xl my-5'>Lifestyle</p>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='age' type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Sleep</p>                
                </div>
                <div className='flex justify-center flex-row text-center  ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='gender' type='text' value={gender} onChange={(e) => setGender(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>At Home</p>
                </div>
                <div className='flex justify-center flex-row text-center  ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='uni' type='text' value={uni} onChange={(e) => setUni(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Cleanliness</p>                
                </div>
                <div className='flex justify-center flex-row text-center  ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='major' type='text' value={major} onChange={(e) => setMajor(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Study</p>                
                </div>
                <div className='flex justify-center flex-row text-center  ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='major' type='text' value={major} onChange={(e) => setMajor(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Smoking</p>                
                </div>
                <div className='flex justify-center flex-row text-center  ml-[210px]'>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='major' type='text' value={major} onChange={(e) => setMajor(e.target.value)}/>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Drinking</p>                
                </div>

                <div className='flex w-96 justify-between mt-6 mb-14'>
                    <Link to='/profile'><button className='w-40 h-14 px-3 py-1 rounded-lg bg-theme-purple text-black' type='button'>Back</button></Link>
                    <button className='w-40 h-14 px-3 py-1 rounded-lg bg-theme-purple text-black' type='button' onClick={submitHandler}>Save Changes</button>
                </div>
            </div>
        </div>
    )
}