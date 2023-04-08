import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Search() {
    const isAuth = window.localStorage.getItem('isAuth');
    const college = window.sessionStorage.getItem('college');
    const [ageRange, setAgeRange] = useState('');
    const [budget, setBudget] = useState('');
    const [stayLength, setStayLength] = useState('');
    const [moveWithin, setMoveWithin] = useState('');
    const [sleep, setSleep] = useState('');
    const [homeTime, setHomeTime] = useState('');
    const [cleanliness, setCleanliness] = useState('');
    const [study1, setStudy1] = useState('');
    const [study2, setStudy2] = useState('');
    const [smoker1, setSmoker1] = useState('');
    const [smoker2, setSmoker2] = useState('');
    const [drinker, setDrinker] = useState('');
    const [request1Made, setRequest1Made] = useState(false);
    const [request2Made, setRequest2Made] = useState(false);
    const [userDivs, setUserDivs] = useState([]);

    const filters = {
        ageRange,
        budget,
        stayLength,
        moveWithin,
        sleep,
        homeTime,
        cleanliness,
        study1,
        study2,
        smoker1,
        smoker2,
        drinker
    };

    function updateFilterStrings(filters) {
        const filterStrings = Object.entries(filters)
            .filter(([key, value]) => value !== '')
            .map(([key, value]) => `${key} = ?`)
            .join(' AND ');
        return filterStrings;
    }

        function updateFilterValues(filters) {
            const filterValues = Object.values(filters)
                .filter(value => value !== '')
                .map(val => val.toString());
            return filterValues;
        }

        useEffect(() => {
            async function FetchUsers() {
              const filterStrings = updateFilterStrings(filters);
              const filterValues = updateFilterValues(filters);
              if (!request1Made) {
                try {
                  const response1 = await axios.post('http://localhost:8080/interests', {id: isAuth});
                  if (!request2Made) {
                    const response = await axios.post('http://localhost:8080/search', {id: isAuth, uni: college, interest1: response1.data.interest1, interest2: response1.data.interest2, interest3: response1.data.interest3, filterStrings: filterStrings, filterValues: filterValues});
                    const users = response.data.data;
                    const numUsers = users.length;
                    const userDivs = [];
                    for (let i = 0; i < numUsers; i++) {
                      const user = users[i];
                      const firstName = user.firstName;
                      const age = user.age;
                      const uni = user.uni;
                      const major = user.major;
                      const bio = user.bio;
                      const userDiv = (
                        <div className='flex w-full h-full pr-10 mb-10 bg-gray-300'>
                          <div className='h-72 w-72 bg-black text-white'>
                            <img className='' src="images/girl.png" alt="" />
                          </div>
                          <div className='pl-10'>
                            <p className='absolute text-xl translate-x-72 translate-y-8 font-semibold'>(Recommended Match)</p>
                            <p className='mt-6 text-3xl font-bold'>{firstName} | {age}</p>
                            <div className='absolute h-10 w-36 bg-theme-purple rounded-xl translate-x-[600px] -translate-y-7'>
                              <Link to=''>
                                <button className='flex items-center justify-center h-full w-full font-bold'>
                                  Send A Message
                                </button>
                              </Link>
                            </div>
                            <p className='mt-1 text-xl'>{uni} | {major}</p>
                            <div className='mt-2 w-[750px]'>
                              <p>{bio}</p>
                            </div>
                          </div>
                        </div>
                      );
                      userDivs.push(userDiv);
                    }
                    setUserDivs(userDivs);
                    setRequest2Made(true)
                  }
                  setRequest1Made(true);
                } catch (error) {
                  console.log(error);
                }
              }
            }
          
            FetchUsers();
          }, [filters, isAuth, college, request1Made, request2Made]);

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
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='budget' type='text' value={budget} onChange={(e) => setBudget(e.target.value)}>
                            <option value=''>Budget</option>
                            <option value='Under $1000'>Cost Under $1000</option>
                            <option value='$1000-$2000'>Cost: $1000-$2000</option>
                            <option value='$2000-$3000'>Cost: $2000-$3000</option>
                            <option value='$3000+'>Cost: $3000+</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='ageRange' type='text' value={ageRange} onChange={(e) => setAgeRange(e.target.value)}>
                            <option value=''>Age Range</option>
                            <option value='18-22'>Ages: 18-22</option> 
                            <option value='23-29'>Ages: 23-29</option> 
                            <option value='30+'>Ages: 30+</option> 
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='moveWithin' type='text' value={moveWithin} onChange={(e) => setMoveWithin(e.target.value)}>
                            <option value=''>Move Within</option>
                            <option value='ASAP'>Move ASAP</option>
                            <option value='1 Month'>Move Within 1 Month</option>
                            <option value='3 Months'>Move Within 3 Months</option>
                            <option value='6 Months'>Move Within 6 Months</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='stayLength' type='text' value={stayLength} onChange={(e) => setStayLength(e.target.value)}>
                            <option value=''>Lease Length</option>
                            <option value='3 Months'>Lease: 3 Months</option>
                            <option value='6 Months'>Lease: 6 Months</option>
                            <option value='1 Year+'>Lease: 1 Year+</option>
                        </select>
                    </div>
                    <p className='flex text-lg text-black font-semibold'>Lifestyle</p>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='sleep' type='text' value={sleep} onChange={(e) => setSleep(e.target.value)}>
                            <option value=''>Sleep Pattern</option>
                            <option value='Early Bird'>Early Bird</option>
                            <option value='Night Owl'>Night Owl</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='homeTime' type='text' value={homeTime} onChange={(e) => setHomeTime(e.target.value)}>
                            <option value=''>Time At Home</option>
                            <option value='Often'>At Home Often</option>
                            <option value='Not Often'>Not Home Often</option>
                            <option value='Varies'>Home Time Varies</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='cleanliness' type='text' value={cleanliness} onChange={(e) => setCleanliness(e.target.value)}>
                            <option value=''>Cleanliness</option>
                            <option value='Clean Freak'>Clean Freak</option>
                            <option value='Clean Enough'>Clean Enough</option>
                            <option value='Dirty Piggie'>Dirty Piggie</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full bg-gray-400' id='study1' type='text' value={study1} onChange={(e) => setStudy1(e.target.value)}>
                            <option value=''>Study Noise</option>
                            <option value='Quiet'>Studies in Quiet</option>
                            <option value='Noise'>Studies with Noise</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 w-full h-full focus:outline-none bg-gray-400' id='study2' type='text' value={study2} onChange={(e) => setStudy2(e.target.value)}>
                            <option value=''>Study Pattern</option>
                            <option value='Alone'>Studies Alone</option>
                            <option value='With Others'>Studies With Others</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 w-full h-full focus:outline-none bg-gray-400' id='smoker1' type='text' value={smoker1} onChange={(e) => setSmoker1(e.target.value)}>
                            <option value=''>Smoking</option>
                            <option value='Vape Friendly'>Vape Friendly</option>
                            <option value='Weed Friendly'>Weed Friendly</option>
                            <option value='Tobacco Friendly'>Tobacco Friendly</option>
                            <option value='All Friendly'>All Friendly</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 h-full w-full focus:outline-none bg-gray-400' id='smoker2' type='text' value={smoker2} onChange={(e) => setSmoker2(e.target.value)}>
                            <option value=''>Smoking Frequency</option>
                            <option value='Often'>Smokes Often</option>
                            <option value='Sometimes'>Smokes Sometimes</option>
                            <option value='Non Smoker'>Non Smoker</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <select className='px-2 py-1 w-full h-full focus:outline-none bg-gray-400' id='drinker' type='text' value={drinker} onChange={(e) => setDrinker(e.target.value)}>
                            <option value=''>Drinking</option>
                            <option value='Often'>Drinks Often</option>
                            <option value='Sometimes'>Drinks Sometimes</option>
                            <option value='Never'>Non Drinker</option>
                        </select>
                    </div>
                    <div className='flex w-full h-10 mb-2 items-center justify-center'>
                        <button className='w-2/3 h-full px-2 mt-3 py-1 bg-theme-purple' onClick={() => {
                                const filters = {};
                                if (ageRange) filters.ageRange = ageRange;
                                if (budget) filters.budget = budget;
                                if (stayLength) filters.stayLength = stayLength;
                                if (sleep) filters.sleep = sleep;
                                if (homeTime) filters.homeTime = homeTime;
                                if (cleanliness) filters.cleanliness = cleanliness;
                                if (study1) filters.study1 = study1;
                                if (study2) filters.study2 = study2;
                                if (smoker1) filters.smoker1 = smoker1;
                                if (smoker2) filters.smoker2 = smoker2;
                                if (drinker) filters.drinker = drinker;
                                }}
                            >Apply Filters</button>
                    </div>
                </div>
            <div className='flex flex-col w-5/6 h-full ml-40 my-20'>
                {userDivs}
            </div>
        </div>
    </div>
    )
}