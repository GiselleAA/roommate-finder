import React from 'react'
import CollegeSearch from './components/collegeSearch';
import { Link } from 'react-router-dom';

function App() {
  return (
  <div>
    <div className="flex justify-center items-center relative bg-theme-purple">
      <img className="object-fill" src="images/home-image.jpeg" alt=""/>
      <div className='absolute w-2/3 t-1/2 translate-y-1/2 translate-x-1/5 rounded-3xl bg-white focus:outline-none'>
        <CollegeSearch/>
      </div>
    </div>
    <h1 className='text-center text-4xl pt-5 m-12 font-bold'>Find Your New Roommate Today!</h1>
    <div className='grid grid-cols-5 gap-x-10 mb-64 px-30'>
      <div className='flex items-center justify-end text-3xl'>
        <button className='h-16 w-12 bg-gray-300'>&lt;</button>
      </div>
      <div className='flex flex-col w-full rounded-xl bg-theme-purple'>
        <div className='flex justify-center px-5 pt-5 w-full h-80'>
          <img className='rounded-xl' src="images/girl.png" alt="" />
        </div>
        <div>
          <p className='flex justify-center text-3xl py-1'>Fake Name</p>
          <p className='flex justify-center'>21 | Computer Science | Hosting</p>
          <p className='flex justify-center py-1 pb-3 text-xl'>Pomona</p>
        </div>
      </div>
      <div className='flex flex-col w-full rounded-xl bg-theme-purple'>
        <div className='flex justify-center px-5 pt-5 w-full h-80'>
          <img className='rounded-xl' src="images/girl.png" alt="" />
        </div>
        <div>
          <p className='flex justify-center text-3xl py-1'>Fake Name</p>
          <p className='flex justify-center'>21 | Computer Science | Hosting</p>
          <p className='flex justify-center py-1 pb-3 text-xl'>Pomona</p>
        </div>
      </div>
      <div className='flex flex-col w-full rounded-xl bg-theme-purple'>
        <div className='flex justify-center px-5 pt-5 w-full h-80'>
          <img className='rounded-xl' src="images/girl.png" alt="" />
        </div>
        <div>
          <p className='flex justify-center text-3xl py-1'>Fake Name</p>
          <p className='flex justify-center'>21 | Computer Science | Hosting</p>
          <p className='flex justify-center py-1 pb-3 text-xl'>Pomona</p>
        </div>
      </div>
      <div className='flex items-center justify-start text-3xl'>
        <button className='h-16 w-12 bg-gray-300'>&gt;</button>
      </div>
    </div>
    <div className='grid grid-cols-3 gap-x-10 mb-32 px-30'>
      <div className='flex flex-col items-center'>
        <p className='flex justify-center text-4xl pb-5'>Match with fellow students</p>
        <p className='flex justify-center text-center w-1/2 mb-5'>Search for your perfect roommate and connect instantly. Forever friends are made here each day.</p>
        <img className='flex justify-center rounded-xl drop-shadow-xl h-3/5' src="images/friends.JPG" alt="" />
      </div>
      <div className='flex flex-col items-center'>
        <p className='flex justify-center text-4xl pb-5'>Advertise your open rooms</p>
        <p className='flex justify-center text-center w-1/2 mb-5'>Streamline your search for the best tenant by becoming a verified host. Never be uncertain again.</p>
        <img className='flex justify-center rounded-xl drop-shadow-xl h-3/5' src="images/lazy.jpg" alt="" />
      </div>
      <div className='flex flex-col items-center'>
        <p className='flex justify-center text-4xl pb-5'>We care about YOU</p>
        <p className='flex justify-center text-center w-1/2 mb-5'>Made by college students, for college students. Finding roommates on your terms has never been simpler.</p>
        <img className='flex justify-center rounded-xl drop-shadow-xl h-3/5' src="images/students.jpg" alt="" />
      </div>
    </div>
    <div className='flex flex-col items-center mb-40'>
      <h1 className='text-6xl mb-10'>Join now and get to matching!</h1>
      <button className='h-20 w-52 text-3xl text-white rounded-lg bg-theme-orange' type='button'>
        <Link to='/signin'>Sign Up</Link>
      </button>
    </div>
  </div>
  )
}

export default App;