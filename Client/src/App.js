import React from 'react'
import CollegeSearch from './components/collegeSearch';
import { Link } from 'react-router-dom';

function App() {
  return (
  <div>
    <div className="flex justify-center items-center relative bg-theme-purple">
      <img className="object-fill" src="images/home-image.jpeg" alt=""/>
      <div className='bg-white w-2/4 h-20 absolute -translate-y-20 rounded-xl flex items-center justify-center'>
           <p className='text-5xl font-bold text-black'> Find Your Roommate Today</p>
      </div>
      <div className='absolute w-2/3 t-1/2 translate-y-1/2 translate-x-1/5 rounded-3xl bg-white focus:outline-none'>
        <CollegeSearch/>
      </div>
    </div>
    <h1 className='text-center text-4xl pt-5 m-12 font-bold'> Helping CSU and UC students find their perfect roommate.</h1>
    <div className='grid grid-cols-5 gap-x-10 mb-64 px-30'>
      <div className='flex items-center justify-end text-3xl'>
        <button className='h-16 w-12 bg-gray-300'>&lt;</button>
      </div>

      <div className='flex flex-col max-w-full h-auto bg-theme-purple'>
        <div className='flex justify-center px-2 pt-2 w-full h-80'>
          <img className= 'max-w-full h-auto'src="images/girl.png" alt="" />
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

    <div className='ml-20 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-x-10 mb-32 px-30 text-center mr-20'>

      <div className='flex flex-col items-center h-100 w-100 overflow-hidden'>

        <p className='flex justify-center font-semibold text-4xl pb-5 md:text-3xl sm:text-2xl mt-6'>Match with fellow students</p>
        <p className='flex justify-center text-center w-3/4 m-5 text-large md:text-sm sm:text-xs'>Search for your perfect roommate and connect instantly. Forever friends are made here each day.</p>
        <img className='flex justify-center rounded-xl drop-shadow-xl h-full w-full object-fit' src="images/friends.JPG" alt="" />
      </div>

      <div className='flex flex-col items-center h-100 w-100 overflow-hidden'>
        <p className='flex justify-center font-semibold text4xl  pb-5 md:text-3xl sm:text-2xl mt-6'>Advertise your open rooms</p>
        <p className='flex justify-center text-center w-3/4 m-5 text-base md:text-sm sm:text-xs'>Streamline your search for the best tenant by becoming a verified host. Never be uncertain again.</p>
        <img className='flex justify-center rounded-xl drop-shadow-xl h-full w-full object-fit' src="images/lazy.jpg" alt="" />
      </div>

      <div className='flex flex-col items-center h-100 w-100 overflow-hidden'>
        <p className='flex justify-center font-semibold text-4xl pb-5 md:text-3xl sm:text-2xl mt-6'>We care about YOU</p>
  
        <p className='flex justify-center text-center w-3/4 m-5 text-base md:text-sm sm:text-xs'>Made by college students, for college students. Finding roommates on your terms has never been simpler.</p>
       
        <div className='flex justify-center items-center h-100 w-100 overflow-hidden'>
        <img className='flex justify-center rounded-xl drop-shadow-xl h-full w-full object-fit' src="images/students.jpg" alt="" />
</div> 
</div>
    </div>

    <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

    <p className='text-center ml-20 mt-5 font-semibold text-3xl md:text-2xl sm:text-2xl mb-10 mr-20'> Finding your perfect roommate is important!</p>

    <div className='ml-20  mb-32 px-30 text-left mr-20'>

    
       <img className='justify-center rounded-xl drop-shadow-xl h-64 w-100 mb-10' src="images/happy_roommate.jpg" alt="" />

       <p className= 'flex justify-center b-5 mb-4 md:text-sm sm:text-xs'> We know finding a good roommate is important for college life. A roommate can have a 
       significant impact on your academic and personal success. We are here to provide the chance to live with a compatible roommate who can promote a healthy and supportive 
       living environment, allowing individuals to focus on their studies and engage in extracurricular activities. </p>
    </div>

    <div className='flex flex-col items-center mb-20 font-semibold'>
      <h1 className='text-center text-4xl mb-10 md:text-3xl sm:text-2xl'>Join now and get to matching!</h1>
      <button className='h-20 w-52 text-3xl md:text-2xl sm:text-2xl text-white rounded-lg bg-theme-orange' type='button'>
        <Link to='/signin'>Sign Up</Link>
      </button>

    </div>

    <footer class="bg-gray-800 text-gray-300 py-20">
      <div class="container mx-auto text-center md:text-base sm:text-sm">
         <p> 2023 ITC: Gabriel, Francisco, Giselle, and Shavleen Website. All rights reserved.</p>
     </div>
    </footer>

  </div>

  
  )
}

export default App;