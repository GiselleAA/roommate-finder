import { useState } from 'react';
import axios from 'axios';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/signup', {username: username, password: password}).then((data) => {
      console.log(data);
      setUsername('');
      setPassword('');
    })
  }

  return (
    <div>
      <form className='mx-auto px-5 pt-5 pb-3 rounded-2xl bg-theme-orange w-72 mt-36 h-84' onSubmit={submitHandler}>
        <div className='flex justify between'>
          <img src="images/palm-logo.png" width={75} height={75} style={{alignSelf: 'center'}} alt="logo"/>
          <h3 className='pl-5 text-3xl text-black'>Roommate<br></br>Finder</h3>
        </div>
        <label className='block mb-1 text-xl text-black' htmlFor='username'>Username</label>
        <input className='w-full h-8 p-1 mb-6 rounded-lg focus:outline-none' id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        <label className='block mb-1 text-xl text-black' htmlFor='password'>Password</label>
        <input className='w-full h-8 p-1 mb-3 rounded-lg focus:outline-none' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='flex justify-center'>
          <button className='px-3 py-1 p rounded-lg bg-white' type='submit'>Submit</button>
        </div>
        <a className='block text-center pt-1' href="http://localhost:8080/register">New user?</a>
      </form>  
    </div>
  );
}

export default App;
