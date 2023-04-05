import React from 'react'
import CollegeSearch from './components/collegeSearch';
import { Link } from 'react-router-dom';

function App() {
  return (
  <div>
    <div className="flex justify-center items-center relative">
      <img className="h-full w-full object-fill" src="images/home-image.jpeg" alt=""/>
      <div className='absolute w-2/3 t-1/2 translate-y-1/2 translate-x-1/5 rounded-3xl bg-white focus:outline-none'>
        <CollegeSearch/>
      </div>
    </div>
    <h1 className='text-center text-4xl pt-5 m-12'>Find Your New Roommate Today!</h1>
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

    <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

    <div className='ml-20 grid grid-cols-3 gap-x-10 mb-32 px-30 text-center mr-20'>
      <div className='flex flex-col items-center'>
        <p className='flex justify-center font-semibold  text-4xl pb-5 md:text-3xl sm:text-2xl'>Match with fellow students</p>
        <p className='flex justify-center text-center w-3/4 m-5 text-large md:text-sm sm:text-xs'>Search for your perfect roommate and connect instantly. Forever friends are made here each day.</p>
        <img className='flex justify-center rounded-xl drop-shadow-xl h-auto max-w-full' src="images/friends.JPG" alt="" />
      </div>

      <div className='flex flex-col items-center'>
        <p className='flex justify-center font-semibold text4xl  pb-5 md:text-3xl sm:text-2xl'>Advertise your open rooms</p>
        <p className='flex justify-center text-center w-3/4 m-5 text-base md:text-sm sm:text-xs'>Streamline your search for the best tenant by becoming a verified host. Never be uncertain again.</p>
        <img className='flex justify-center rounded-xl drop-shadow-xl h-auto max-w-full' src="images/lazy.jpg" alt="" />
      </div>

      <div className='flex flex-col items-center'>
        <p className='flex justify-center font-semibold text-4xl pb-5 mb-4 md:text-3xl sm:text-2xl'>We care about YOU</p>
        <p className='flex justify-center text-center w-3/4 m-5 text-base md:text-sm sm:text-xs'>Made by college students, for college students. Finding roommates on your terms has never been simpler.</p>
        <img className='flex justify-center rounded-xl drop-shadow-xl h-auto max-w-full' src="images/students.jpg" alt="" />
      </div>
    </div>

    <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

    <div className='ml-20 grid grid-cols-2 gap-x-10 mb-32 px-30 text-left mr-25'>

       <p className= 'flex justify-center b-5 mb-4 text-base md:text-sm sm:xsm '> Finding a good roommate is important for college life because a roommate can have a significant impact on one's academic 
       and personal success. Living with a compatible roommate can promote a healthy and supportive living environment, allowing individuals to focus on their studies and engage in 
       extracurricular activities. A good roommate can also provide emotional support, encourage healthy habits, and help develop essential life skills.</p>
    <img className= ' ' src=" " alt="" />
    </div>

    <div className='flex flex-col items-center mb-20 font-semibold'>
      <h1 className='text-4xl mb-10'>Join now and get to matching!</h1>
      <button className='h-20 w-52 text-3xl text-white rounded-lg bg-theme-orange' type='button'>
        <Link to='/signin'>Sign Up</Link>
      </button>
    </div>

    <footer class="bg-gray-800 text-gray-300 py-20">
      <div class="container mx-auto text-center">
         <p>&copy; 2023 My Website. All rights reserved.</p>
     </div>
    </footer>

  </div>

  
  )
}

export default App;