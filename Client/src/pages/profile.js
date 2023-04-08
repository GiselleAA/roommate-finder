import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
    const [ageRange, setAgeRange] = useState('');
    const [budget, setBudget] = useState('');
    const [stayLength, setStayLength] = useState('');
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
    const [interest1, setInterest1] = useState('');
    const [interest2, setInterest2] = useState('');
    const [interest3, setInterest3] = useState('');
    const [moveWithin, setMoveWithin] = useState('');
    const [hostScout, setHostScout] = useState('');
    const [onCampus, setOnCampus] = useState('');
    const text = hostScout ? "Host" : "Scout";

    const [requestMade, setRequestMade] = useState(false);
    useEffect(() => {
        if (!requestMade) {
    axios.post('http://localhost:8080/profile', {id: isAuth}).then((response) => {
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
        setAgeRange(response.data.ageRange);
        setBudget(response.data.budget);
        setStayLength(response.data.stayLength);
        setPets(response.data.pets);
        setGuests(response.data.guests);
        setParties(response.data.parties);
        setSleep(response.data.sleep);
        setHomeTime(response.data.homeTime);
        setCleanliness(response.data.cleanliness);
        setStudy1(response.data.study1);
        setStudy2(response.data.study2);
        setSmoker1(response.data.smoker1);
        setSmoker2(response.data.smoker2);
        setDrinker(response.data.drinker);
        setInterest1(response.data.interest1);
        setInterest2(response.data.interest2);
        setInterest3(response.data.interest3);
        setMoveWithin(response.data.moveWithin);
        setHostScout(response.data.hostScout); //show rules and room info if true
        setOnCampus(response.data.onCampus);
        setRequestMade(true);
    })
    .catch(error => {
        console.log(error);
    });
    }
}, [requestMade]);

    return (
        <div className="flex flex-col items-center justify-center mt-10 mx-48">
            <div className="flex flex-col items-center justify-center text-center rounded-2xl w-1/3 h-20 bg-theme-orange">
                <p className="text-3xl">{firstName}</p>
                <p className="text-lg">{text}</p>
                <button className={'h-20 w-20 absolute left-2/3'}>
                    <Link to='/settings'><img src="images/cog.png" alt="" /></Link>
                </button>
            </div>
            <div className="flex justify-center items-center h-full w-full my-6">
                <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                    <div className="grid rounded-2xl w-96 h-72 overflow-hidden bg-theme-orange">
                        <img className='mx-auto -translate-y-6 w-fit h-fit object-cover object-center' src="images/jesus.jpg" alt="" />
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-orange">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-1">About Me</p>
                            {age && <p className="text-xl">Age: {age}</p>}
                            {gender && <p className="text-xl">Gender: {gender}</p>}
                            {uni && <p className="text-xl">College: {uni}</p>}
                            {major && <p className="text-xl">Major: {major}</p>}
                            {job && <p className="text-xl">Job: {job}</p>}
                            {location && <p className="text-xl">Living in: {location}</p>}
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-orange">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-1">Personal Info</p>
                            {horoscope && <p className="text-xl">Horoscope: {horoscope}</p>}
                            {religion && <p className="text-xl">Religion: {religion}</p>}
                            {orientation && <p className="text-xl">Orientation: {orientation}</p>}
                            {/*<p className="text-4xl pt-3">Traits</p>
                            {age && gender && uni && <p className="text-xl">{age}, {age}, {age}</p>}*/}
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-lpurple">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-1">Bio</p>
                            {bio && <p className="text-xl">{bio}</p>}
                            <p className="text-4xl mt-8 pb-1">Interests</p>
                            {interest1 && <p className="text-xl">{interest1}, {interest2}, {interest3}</p>}
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-lpurple">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-1">Logistics</p>
                            {budget && <p className="text-xl">Budget: {budget}</p>}
                            {ageRange && <p className="text-xl">Age Range: {ageRange}</p>}
                            {moveWithin && <p className="text-xl">Move Within: {moveWithin}</p>}
                            {stayLength && <p className="text-xl">Length of Stay: {stayLength}</p>}
                        </div>
                    </div>
                    <div className="grid rounded-2xl w-96 h-72 p-5 bg-theme-orange">
                        <div className="flex flex-col">
                            <p className="text-4xl pb-1">Lifestyle</p>
                            {sleep && <p className="text-xl">Sleep: {sleep}</p>}
                            {homeTime && <p className="text-xl">At Home: {homeTime}</p>}
                            {cleanliness && <p className="text-xl">Cleanliness: {cleanliness}</p>}
                            {study1 && <p className="text-xl">Study Environment: {study1}, {study2}</p>}
                            {smoker1 && <p className="text-xl">Smoking: {smoker1}, {smoker2}</p>}
                            {drinker && <p className="text-xl">Drinking: {drinker}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}