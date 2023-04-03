import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function Profile(){
    const isAuth = window.localStorage.getItem('isAuth');
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
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
    const [minAge, setMinAge] = useState('');
    const [minBudget, setMinBudget] = useState('');
    const [stayLength, setStayLength] = useState('');
    const [amenities, setAmenities] = useState('');
    const [pets, setPets] = useState('');
    const [guests, setGuests] = useState('');
    const [parties, setParties] = useState('');
    const [sleep, setSleep] = useState('');
    const [homeTime, setHomeTime] = useState('');
    const [cleanliness, setCleanliness] = useState('');
    const [study1, setStudy1] = useState('');
    const [smoker1, setSmoker1] = useState('');
    const [drinker, setDrinker] = useState('');
    const [trait1, setTrait1] = useState('');
    const [music1, setMusic1] = useState('');
    const [hostScout, setHostScout] = useState('');
    const [onCampus, setOnCampus] = useState('');

    const text = hostScout ? "Host" : "Scout";

    axios.post('http://localhost:8080/profile', {id: isAuth}).then((response) => {
        console.log(JSON.stringify(response.data));
        setFirst(response.data.firstName);
        setLast(response.data.lastName);
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
        setMinAge(response.data.minAge);
        setMinBudget(response.data.minBudget);
        setStayLength(response.data.stayLength);
        setAmenities(response.data.amenities);
        setPets(response.data.pets);
        setGuests(response.data.guests);
        setParties(response.data.parties);
        setSleep(response.data.sleep);
        setHomeTime(response.data.homeTime);
        setCleanliness(response.data.cleanliness);
        setStudy1(response.data.study1);
        setSmoker1(response.data.smoker1);
        setDrinker(response.data.drinker);
        setTrait1(response.data.trait1);
        setMusic1(response.data.music1);
        setHostScout(response.data.hostScout); //show rules and room info if true
        setOnCampus(response.data.onCampus);
    })

    return (
        <div className="flex flex-col items-center justify-center mt-10 mx-48">
            <div className="flex flex-col items-center justify-center text-center rounded-2xl w-1/3 h-20 bg-theme-orange">
                <p className="text-3xl">{firstName}</p>
                <p className="text-lg">{text}</p>
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
                            <p className="text-4xl pb-1">About Me</p>
                            {age && <p className="text-xl">Age: {age}</p>}
                            {gender && <p className="text-xl">Gender: {gender}</p>}
                            {uni && <p className="text-xl">College: {uni}</p>}
                            {major && <p className="text-xl">Major: {major}</p>}
                            {job && <p className="text-xl">Job: {job}</p>}
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-orange">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-1">Personal Info</p>
                            {horoscope && <p className="text-xl">Horoscope: {horoscope}</p>}
                            {religion && <p className="text-xl">Religion: {religion}</p>}
                            {orientation && <p className="text-xl">Orientation: {orientation}</p>}
                            <p className="text-4xl pt-3">Traits</p>
                            {age && gender && uni && <p className="text-xl">{age}, {age}, {age}</p>}
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-lpurple">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-1">Bio</p>
                            {bio && <p className="text-xl">{bio}</p>}
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-lpurple">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-1">Interests</p>
                            {age && gender && uni && <p className="text-xl">{age}, {age}, {age}</p>}
                            <p className="text-4xl pt-9">Music</p>
                            {age && gender && uni && <p className="text-xl">{age}, {age}, {age}</p>}
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-orange">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-1">Lifestyle</p>
                            {cleanliness && <p className="text-xl">Cleanliness: {cleanliness}</p>}
                            {smoker1 && <p className="text-xl">Smoking: {smoker1}, {smoker1}</p>}
                            {drinker && <p className="text-xl">Drinking: {drinker}</p>}
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-orange">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-1">Logistics</p>
                            {minBudget && <p className="text-xl">Budget: ${minBudget}-{minBudget}</p>}
                            {minAge && <p className="text-xl">Age Range:{minAge}-{minAge}</p>}
                            {stayLength && <p className="text-xl">Move Within: {stayLength}</p>}
                            {stayLength && <p className="text-xl">Length of Stay: {stayLength}</p>}
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-lpurple">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-1">Lifestyle</p>
                            {sleep && <p className="text-xl">Sleep: {cleanliness}</p>}
                            {homeTime && <p className="text-xl">At Home: {homeTime}</p>}
                            {cleanliness && <p className="text-xl">Cleanliness: {cleanliness}</p>}
                            {study1 && <p className="text-xl">Study Environment: {study1}, {study1}</p>}
                            {smoker1 && <p className="text-xl">Smoking: {smoker1}, {smoker1}</p>}
                            {drinker && <p className="text-xl">Drinking: {drinker}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}