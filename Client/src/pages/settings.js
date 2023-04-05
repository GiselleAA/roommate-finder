import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
    const navigate = useNavigate();
    const isAuth = window.localStorage.getItem('isAuth');
    const [firstName, setFirst] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [img1, setImg1] = useState('');
    const [uni, setUni] = useState('');
    const [major, setMajor] = useState('');
    const [bio, setBio] = useState('');
    const [job, setJob] = useState('');
    const [location, setLocation] = useState('');
    const [horoscope, setHoroscope] = useState('');
    const [religion, setReligion] = useState('');
    const [orientation, setOrientation] = useState('');
    const [interest1, setInterest1] = useState('');
    const [interest2, setInterest2] = useState('');
    const [interest3, setInterest3] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [budget, setBudget] = useState('');
    const [stayLength, setStayLength] = useState('');
    const [moveWithin, setMoveWithin] = useState('');
    const [amenity1, setAmenity1] = useState('');
    const [amenity2, setAmenity2] = useState('');
    const [amenity3, setAmenity3] = useState('');
    const [amenity4, setAmenity4] = useState('');
    const [pets, setPets] = useState('');
    const [guests, setGuests] = useState('');
    const [parties, setParties] = useState('');
    const [sleep, setSleep] = useState('');
    const [homeTime, setHomeTime] = useState('');
    const [cleanliness, setCleanliness] = useState('');
    const [study1, setStudy1] = useState('');
    const [study2, setStudy2] = useState('');
    const [smoker1, setSmoker1] = useState('');
    const [smoker2, setSmoker2] = useState('');
    const [drinker, setDrinker] = useState('');
    const [trait1, setTrait1] = useState('');
    const [music1, setMusic1] = useState('');
    const [hostScout, setHostScout] = useState('');
    const [onCampus, setOnCampus] = useState('');
    const [requestMade, setRequestMade] = useState(false);

useEffect(() => {
    if (!requestMade) {
    axios.post('http://localhost:8080/profile', {id: isAuth}).then((response) => {
        console.log(JSON.stringify(response.data));
        setFirst(response.data.firstName);
        setAge(response.data.age);
        setGender(response.data.gender);
        setImg1(response.data.img1);
        setUni(response.data.uni);
        setMajor(response.data.major);
        setBio(response.data.bio);
        setJob(response.data.job);
        setLocation(response.data.location);
        setHoroscope(response.data.horoscope);
        setReligion(response.data.religion);
        setOrientation(response.data.orientation);
        setInterest1(response.data.interest1);
        setInterest2(response.data.interest2);
        setInterest3(response.data.interest3);
        setAgeRange(response.data.ageRange);
        setBudget(response.data.budget);
        setStayLength(response.data.stayLength);
        setAmenity1(response.data.amenity1);
        setAmenity2(response.data.amenity2);
        setAmenity3(response.data.amenity3);
        setAmenity4(response.data.amenity4);
        setPets(response.data.pets);
        setGuests(response.data.guests);
        setParties(response.data.parties);
        setSleep(response.data.sleep);
        setHomeTime(response.data.homeTime);
        setCleanliness(response.data.cleanliness);
        setStudy1(response.data.study1);
        setStudy2(response.data.study1);
        setSmoker1(response.data.smoker1);
        setSmoker2(response.data.smoker1);
        setDrinker(response.data.drinker);
        setTrait1(response.data.trait1);
        setMusic1(response.data.music1);
        setHostScout(response.data.hostScout); //show rules and room info if true
        setOnCampus(response.data.onCampus);
        setRequestMade(true);
    })
    .catch(error => {
        console.log(error);
    });
    }
}, [requestMade]);

    const [isClicked1, setClicked1] = useState(!hostScout);
    const [isClicked2, setClicked2] = useState(hostScout);
    const [isClicked3, setClicked3] = useState(!onCampus);
    const [isClicked4, setClicked4] = useState(onCampus);

    const handleClick1 = () => {
        setClicked1(true);
        setClicked2(false);
        setHostScout(!hostScout);
    };
    const handleClick2 = () => {
        setClicked1(false);
        setClicked2(true);
        setHostScout(!hostScout);
    };
    const handleClick3 = () => {
        setClicked3(true);
        setClicked4(false);
        setOnCampus(!onCampus);
    };
    const handleClick4 = () => {
        setClicked3(false);
        setClicked4(true);
        setOnCampus(!onCampus);
    };

    const [selectedInterests, setSelectedInterests] = useState([]);
    const handleInterestClick = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter((g) => g !== interest));
        } 
        else if (selectedInterests.length < 3) {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const [selectedTraits, setSelectedTraits] = useState([]);
    const handleTraitClick = (trait) => {
        if (selectedTraits.includes(trait)) {
            setSelectedTraits(selectedTraits.filter((g) => g !== trait));
        } 
        else if (selectedTraits.length < 3) {
            setSelectedTraits([...selectedTraits, trait]);
        } 
    };

    const [selectedMusic, setSelectedMusic] = useState([]);
    const handleMusicClick = (music) => {
        if (selectedMusic.includes(music)) {
            setSelectedMusic(selectedMusic.filter((g) => g !== music));
        } 
        else if (selectedMusic.length < 3) {
            setSelectedMusic([...selectedMusic, music]);
        } 
    };

    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const handleAmenitiesClick = (amenity) => {
        if (selectedAmenities.includes(amenity)) {
            setSelectedAmenities(selectedAmenities.filter((g) => g !== amenity));
        } 
        else if (selectedAmenities.length < 4) {
            setSelectedAmenities([...selectedAmenities, amenity]);
        } 
    };

    /*const submitHandler = e => {
    e.preventDefault();
    if (selectedInterests.length >= 1) {
        setInterest1(selectedInterests[0]);
    }
    if (selectedInterests.length >= 2) {
        setInterest2(selectedInterests[1]);
    }
    if (selectedInterests.length >= 3) {
        setInterest3(selectedInterests[2]);
    }

    if (selectedTraits.length >= 1) {
        setTrait1(selectedTraits[0]);
    }
    if (selectedTraits.length >= 2) {
        setTrait2(selectedTraits[1]);
    }
    if (selectedTraits.length >= 3) {
        setTrait3(selectedTraits[2]);
    }

    if (selectedMusic.length >= 1) {
        setMusic1(selectedMusic[0]);
    }
    if (selectedMusic.length >= 2) {
        setMusic2(selectedMusic[1]);
    }
    if (selectedMusic.length >= 3) {
        setMusic3(selectedMusic[2]);
    }

    if (selectedAmenities.length >= 1) {
        setAmenity1(selectedAmenities[0]);
    }
    if (selectedAmenities.length >= 2) {
        setAmenity2(selectedAmenities[1]);
    }
    if (selectedAmenities.length >= 3) {
        setAmenity3(selectedAmenities[2]);
    }
    if (selectedAmenities.length >= 4) {
        setAmenity3(selectedAmenities[3]);
    }
    axios.post('http://localhost:8080/settings', {firstName: firstName, lastName: lastName, email: email, age: age, gender: gender, img1: img1, img2: img2, img3: img3, uni: uni, major: major, bio: bio, social1: social1, social2: social2, social3: social3, username: username, password: password, job: job, location: location, horoscope: horoscope, religion: religion, orientation: orientation, interest1: interest1, interest2: interest2, interest3: interest3, minAge: minAge, maxAge: maxAge, minBudget: minBudget, maxBudget: maxBudget, stayLength: stayLength, amenity1: amenity1, amenity2: amenity2, amenity3: amenity3, pets: pets, guests: guests, parties: parties, sleep: sleep, homeTime: homeTime, cleanliness: cleanliness, study1: study1, study2: study2, smoker1: smoker1, smoker2: smoker2, drinker: drinker, trait1: trait1, trait2: trait2, trait3: trait3, music1: music1, music2: music2, music3: music3, hostScout: hostScout, onCampus: onCampus, prefLocation: prefLocation, prefGender: prefGender, prefReligion: prefReligion, prefOrientation: prefOrientation, prefSmoker1: prefSmoker1, prefSmoker2: prefSmoker2, prefDrinker: prefDrinker, prefCleanliness: prefCleanliness, prefPets: prefPets, prefSleep: prefSleep, prefHomeTime: prefHomeTime, prefStudy1: prefStudy1, prefStudy2: prefStudy2, prefGuests: prefGuests, prefParties: prefParties}).then((data) => {
        navigate('/profile');
    })
}*/

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
                    <p className='text-5xl ml-52 mb-10'>{firstName}</p>
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
                <p className='flex justify-center text-4xl my-5'>About Me</p>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Age</p>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='age' value={age} onChange={(e) => setAge(e.target.value)}>
                        <option value=''>Select</option>
                        {Array.from({length: 100}, (_, i) => i + 1).map((age) => (
                        <option key={age} value={age}>{age}</option>
                        ))}
                    </select>          
                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Gender</p>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value=''>{gender}</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Nonbinary'>Nonbinary</option>
                        <option value='Transgender'>Transgender</option>
                        <option value='Other'>Other</option>
                        <option value='None'>Prefer not to say</option>
                    </select>

                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>University</p>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='uni' type='text' value={uni} onChange={(e) => setUni(e.target.value)}>
                        <option value=''>{uni}</option>
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
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Living in</p>
                    <input className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='location' type='text' value={location} onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <div className='flex justify-center flex-row text-center mt-5 ml-[210px]'>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='horoscope' type='text' value={horoscope} onChange={(e) => setHoroscope(e.target.value)}>
                        <option value=''>{horoscope}</option>
                        <option value='Aquarius'>Aquarius</option>
                        <option value='Pisces'>Pisces</option>
                        <option value='Aries'>Aries</option>
                        <option value='Taurus'>Taurus</option>
                        <option value='Gemini'>Gemini</option>
                        <option value='Cancer'>Cancer</option>
                        <option value='Leo'>Leo</option>
                        <option value='Virgo'>Virgo</option>
                        <option value='Libra'>Libra</option>
                        <option value='Scorpio'>Scorpio</option>
                        <option value='Sagittarius'>Sagittarius</option>
                        <option value='Capricorn'>Capricorn</option>
                    </select>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Horoscope</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='religion' type='text' value={religion} onChange={(e) => setReligion(e.target.value)}>
                        <option value=''>{religion}</option>
                        <option value='Christianity'>Christianity</option>
                        <option value='Islam'>Islam</option>
                        <option value='Judaism'>Judaism</option>
                        <option value='Hinduism'>Hinduism</option>
                        <option value='Buddhism'>Buddhism</option>
                        <option value='Indigenous'>Indigenous</option>
                        <option value='Other'>Other</option>
                        <option value='Atheist '>Atheist</option>
                    </select>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Religion</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='orientation' type='text' value={orientation} onChange={(e) => setOrientation(e.target.value)}>
                        <option value=''>{orientation}</option>
                        <option value='Heterosexual'>Heterosexual</option>
                        <option value='Homosexual'>Homosexual</option>
                        <option value='Bisexual'>Bisexual</option>
                        <option value='Pansexual'>Pansexual</option>
                        <option value='Asexual'>Asexual</option>
                        <option value='Other'>Other</option>
                    </select>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Orientation</p>
                </div>
                <p className='flex justify-center text-2xl my-2'>Interests</p>
                <div className='grid grid-cols-5 gap-x-2 gap-y-2 justify-center text-center mb-3'>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Parties') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Parties')}>
                        Parties
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Movies') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Movies')}>
                        Movies
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Cooking') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Cooking')}>
                        Cooking
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Art') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Art')}>
                        Art
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Concerts') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Concerts')}>
                        Concerts
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Baking') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Baking')}>
                        Baking
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Shows') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Shows')}>
                        Shows
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Music') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Music')}>
                        Music
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Tech') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Tech')}>
                        Tech
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Reading') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Reading')}>
                        Reading
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Vegetarian') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Vegetarian')}>
                        Vegetarian
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Vegan') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Vegan')}>
                        Vegan
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Sports') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Sports')}>
                        Sports
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('DIY Crafts') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('DIY Crafts')}>
                        DIY Crafts
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Gaming') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Gaming')}>
                        Gaming
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Athlete') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Athlete')}>
                        Athlete
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Photography') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Photography')}>
                        Photography
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Gym') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Gym')}>
                        Gym
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Cars') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Cars')}>
                        Cars
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Astrology') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Astrology')}>
                        Astrology
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Thrifting') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Thrifting')}>
                        Thrifting
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Knitting') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Knitting')}>
                        Knitting
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Writing') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Writing')}>
                        Writing
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Crocheting') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Crocheting')}>
                        Crocheting
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Dance') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Dance')}>
                        Dance
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Anime') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Anime')}>
                        Anime
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Instruments') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Instruments')}>
                        Instruments
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Adrenaline') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Adrenaline')}>
                        Adrenaline
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Exploration') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Exploration')}>
                        Exploration
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedInterests.includes('Hiking') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleInterestClick('Hiking')}>
                        Hiking
                    </button>
                </div>
                <p className='flex justify-center text-2xl my-2'>Traits</p>
                <div className='grid grid-cols-4 gap-x-2 gap-y-2 justify-center text-center mb-3'>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Easy Going') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Easy Going')}>
                        Easy Going
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Introverted') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Introverted')}>
                        Introverted
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Confident') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Confident')}>
                        Confident
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Creative') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Creative')}>
                        Creative
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Energetic') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Energetic')}>
                        Energetic
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Studious') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Studious')}>
                        Studious
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Extroverted') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Extroverted')}>
                        Extroverted
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Friendly') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Friendly')}>
                        Friendly
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Blunt') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Blunt')}>
                        Blunt
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Reliable') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Reliable')}>
                        Reliable
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Procrastinator') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Procrastinator')}>
                        Procrastinator
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Flexible') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Flexible')}>
                        Flexible
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Compassionate') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Compassionate')}>
                        Compassionate
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Realistic') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Realistic')}>
                        Realistic
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Determined') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Determined')}>
                        Determined
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedTraits.includes('Adaptable') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleTraitClick('Adaptable')}>
                        Adaptable
                    </button>
                </div>
                <p className='flex justify-center text-2xl my-2'>Music</p>
                <div className='grid grid-cols-5 gap-x-2 gap-y-2 justify-center text-center mb-3'>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Alternative') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Alternative')}>
                        Alternative
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Rock') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Rock')}>
                        Rock
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Hip-Hop') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Hip-Hop')}>
                        Hip-Hop
                    </button>            
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Pop') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Pop')}>
                        Pop
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Blues') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Blues')}>
                        Blues
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Classical') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Classical')}>
                        Classical
                    </button>            
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Jazz') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Jazz')}>
                        Jazz
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Electronic') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Electronic')}>
                        Electronic
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Reggaeton') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Reggaeton')}>
                        Reggaeton
                    </button>            
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Punk') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Punk')}>
                        Punk
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Country') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Country')}>
                        Country
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Rap') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Rap')}>
                        Rap
                    </button>            
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Midwest') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Midwest')}>
                        Midwest
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Raggae') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Raggae')}>
                        Raggae
                    </button>            
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('R&B') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('R&B')}>
                        R&B
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Instrumental') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Instrumental')}>
                        Instrumental
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('EDM') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('EDM')}>
                        EDM
                    </button>            
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('K-Pop') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('K-Pop')}>
                        K-Pop
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Metal') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Metal')}>
                        Metal
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedMusic.includes('Folk') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleMusicClick('Folk')}>
                        Folk
                    </button>            
                </div>
                <div className='flex justify-center flex-row text-center ml-6 mt-5'>
                    <p className='p-3 w-24 h-44 bg-theme-gray text-white'>Bio</p>
                    <textarea className='resize-none h-44 w-[570px] px-3 py-2 mb-3 focus:outline-none bg-theme-lpurple' id='bio' type='text' value={bio} onChange={(e) => setBio(e.target.value)}/>
                </div>

                <p className='flex justify-center text-4xl my-4'>Room Location</p>
                <div className='flex text-2xl mb-2'>
                    <button className={`p-3 w-44 text-white resize:none hover:border-2 hover:border-black ${isClicked3 ? 'bg-theme-purple': 'bg-theme-gray'}`} onClick={handleClick3}>
                        On Campus
                    </button>
                    <button className={`p-3 w-44 text-white hover:border-2 hover:border-black ${isClicked4 ? 'bg-theme-purple': 'bg-theme-gray'}`} onClick={handleClick4}>
                        Off Campus
                    </button>
                </div>
                <p className='flex justify-center text-4xl my-5'>Logistics</p>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='budget' type='text' value={budget} onChange={(e) => setBudget(e.target.value)}>
                        <option value=''>{budget}</option>
                        <option value='Under $1000'>Under $1000</option>
                        <option value='$1000-$2000'>$1000-$2000</option>
                        <option value='$2000-$3000'>$2000-$3000</option>
                        <option value='$3000+'>$3000+</option>
                    </select>
                    <p className='p-3 w-[102px] h-12 bg-theme-gray text-white'>Budget</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-[211px]'>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='ageRange' type='text' value={ageRange} onChange={(e) => setAgeRange(e.target.value)}>
                        <option value=''>{ageRange}</option>
                        <option value='18-22'>18-22</option> 
                        <option value='18-22'>18-22</option> 
                        <option value='30+'>30+</option> 
                    </select>
                    <p className='p-3 w-30 h-12 bg-theme-gray text-white'>Age Range</p>                
                </div>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <select className='px-3 py-2 w-[359px] h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='moveWithin' type='text' value={moveWithin} onChange={(e) => setMoveWithin(e.target.value)}>
                        <option value=''>{stayLength}</option>
                        <option value='ASAP'>ASAP</option>
                        <option value='1 Month'>1 Month</option>
                        <option value='3 Months'>3 Months</option>
                        <option value='6 Months'>6 Months</option>
                    </select>
                    <p className='p-3 w-32 h-12 bg-theme-gray text-white'>Move Within</p>
                </div>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <select className='px-3 py-2 w-[359px] h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='stayLength' type='text' value={stayLength} onChange={(e) => setStayLength(e.target.value)}>
                        <option value=''>{stayLength}</option>
                        <option value='3 Months'>3 Months</option>
                        <option value='6 Months'>6 Months</option>
                        <option value='1 Year+'>1 Year+</option>
                    </select>
                    <p className='p-3 w-32 h-12 bg-theme-gray text-white'>Length of Stay</p>
                </div>
                
                <p className='flex justify-center text-4xl mt-5'>Room Info</p>
                <p className='flex justify-center text-2xl my-2'>Amenities</p>
                <div className='grid grid-cols-5 gap-x-2 gap-y-2 justify-center text-center mb-3'>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('In-Unit Laundry') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('In-Unit Laundry')}>
                        In-Unit Laundry
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Kitchen Appliances') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Kitchen Appliances')}>
                        Kitchen Appliances
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Dishwasher') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Dishwasher')}>
                        Dishwasher
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Air Conditioning') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Air Conditioning')}>
                        Air Conditioning
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Heater') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Heater')}>
                        Heater
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Fast Internet') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Fast Internet')}>
                        Fast Internet
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Private Bathroom') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Private Bathroom')}>
                        Private Bathroom
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Media Room') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Media Room')}>
                        Media Room
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Natural Light') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Natural Light')}>
                        Natural Light
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('View') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('View')}>
                        View
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Fireplace') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Fireplace')}>
                        Fireplace
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Backyard') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Backyard')}>
                        Backyard
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Patio') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Patio')}>
                        Patio
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Balcony') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Balcony')}>
                        Balcony
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Pool') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Pool')}>
                        Pool
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Barbeque') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Barbeque')}>
                        Barbeque
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Gym') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Gym')}>
                        Gym
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Private Parking') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Private Parking')}>
                        Private Parking
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Garage') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Garage')}>
                        Garage
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('EV Charging') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('EV Charging')}>
                        EV Charging
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Storage') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Storage')}>
                        Storage
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Gated') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Gated')}>
                        Gated
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Security Features') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Security Features')}>
                        Security Features
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Pet Area') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Pet Area')}>
                        Pet Area
                    </button>
                    <button className={`px-4 py-2 rounded-2xl ${selectedAmenities.includes('Concierge') ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleAmenitiesClick('Concierge')}>
                        Concierge
                    </button>
                </div>
                <p className='flex justify-center text-2xl my-2'>Rules</p>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Pets</p>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='pets' type='text' value={pets} onChange={(e) => setPets(e.target.value)}>
                        <option value=''>{pets}</option>
                        <option value='Small Animals'>Small Animals</option>
                        <option value='Large Animals'>Large Animals</option>
                        <option value='Not Allowed'>Not Allowed</option>
                    </select>
                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Guests</p>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='guests' type='text' value={guests} onChange={(e) => setGuests(e.target.value)}>
                        <option value=''>{guests}</option>
                        <option value='Often'>Often</option>
                        <option value='Sometimes'>Sometimes</option>
                        <option value='Never'>Never</option>
                    </select>
                </div>
                <div className='flex justify-center flex-row text-center mr-40'>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Parties</p>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='parties' type='text' value={parties} onChange={(e) => setParties(e.target.value)}>
                        <option value=''>{parties}</option>
                        <option value='Often'>Often</option>
                        <option value='Sometimes'>Sometimes</option>
                        <option value='Never'>Never</option>
                    </select>
                </div>

                <p className='flex justify-center text-4xl my-5'>Lifestyle</p>
                <div className='flex justify-center flex-row text-center ml-[210px]'>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='sleep' type='text' value={sleep} onChange={(e) => setSleep(e.target.value)}>
                        <option value=''>{sleep}</option>
                        <option value='Early Bird'>Early Bird</option>
                        <option value='Night Owl'>Night Owl</option>
                    </select>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Sleep</p>                
                </div>
                <div className='flex justify-center flex-row text-center  ml-[210px]'>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='homeTime' type='text' value={homeTime} onChange={(e) => setHomeTime(e.target.value)}>
                        <option value=''>{homeTime}</option>
                        <option value='Often'>Often</option>
                        <option value='Not Often'>Not Often</option>
                        <option value='Varies'>Varies</option>
                    </select>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>At Home</p>
                </div>
                <div className='flex justify-center flex-row text-center  ml-[210px]'>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='cleanliness' type='text' value={cleanliness} onChange={(e) => setCleanliness(e.target.value)}>
                        <option value=''>{cleanliness}</option>
                        <option value='High'>High</option>
                        <option value='Medium'>Medium</option>
                        <option value='Low'>Low</option>
                    </select>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Cleanliness</p>                
                </div>
                <div className='flex justify-center flex-row text-center  ml-[210px]'>
                    <div className='flex flex-col'>
                        <select className='px-3 py-2 w-[367px] h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='study1' type='text' value={study1} onChange={(e) => setStudy1(e.target.value)}>
                            <option value=''>{study1}</option>
                            <option value='Quiet'>Quiet</option>
                            <option value='Noise'>Noise</option>
                        </select>
                        <select className='px-3 py-2 w-[367px] h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='study2' type='text' value={study2} onChange={(e) => setStudy2(e.target.value)}>
                            <option value=''>{study1}</option>
                            <option value='Alone'>Alone</option>
                            <option value='With Others'>With Others</option>
                        </select>
                    </div>
                    <p className='p-3 w-30 h-[108px] bg-theme-gray text-white'>Study<br></br>Environment</p>                
                </div>
                <div className='flex justify-center flex-row text-center  ml-[210px]'>
                    <div className='flex flex-col'> 
                        <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='smoker1' type='text' value={smoker1} onChange={(e) => setSmoker1(e.target.value)}>
                            <option value=''>{smoker1}</option>
                            <option value='Vape'>Vape</option>
                            <option value='Weed'>Weed</option>
                            <option value='Tobacco'>Tobacco</option>
                            <option value='None'>None</option>
                        </select>
                        <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='smoker2' type='text' value={smoker2} onChange={(e) => setSmoker2(e.target.value)}>
                            <option value=''>{smoker1}</option>
                            <option value='Often'>Often</option>
                            <option value='Sometimes'>Sometimes</option>
                        </select>
                    </div>
                    <p className='p-3 w-24 h-[108px] bg-theme-gray text-white'>Smoking</p>                
                </div>
                <div className='flex justify-center flex-row text-center  ml-[210px]'>
                    <select className='px-3 py-2 w-96 h-12 p-1 mb-3 focus:outline-none bg-theme-lpurple' id='drinker' type='text' value={drinker} onChange={(e) => setDrinker(e.target.value)}>
                        <option value=''>{drinker}</option>
                        <option value='Often'>Often</option>
                        <option value='Sometimes'>Sometimes</option>
                    </select>
                    <p className='p-3 w-24 h-12 bg-theme-gray text-white'>Drinking</p>                
                </div>

                <div className='flex w-96 justify-between mt-6 mb-14'>
                    <Link to='/profile'><button className='w-40 h-14 px-3 py-1 rounded-lg bg-theme-purple text-black' type='button'>Back</button></Link>
                    <button className='w-40 h-14 px-3 py-1 rounded-lg bg-theme-purple text-black' type='button' /*onClick={submitHandler}*/>Save Changes</button>
                </div>
            </div>
        </div>
    )
}