import React from 'react';
import './App.css';
import './assets/main.css'
import  './components/nav.css'

function App() {
  return (
    <div className="app ">
      <div className='w-screen  p-7 text-white text-4xl flex space-x-10 justify-center items-center sm:items-stretch container'>
        {/* <nav className="bg-gradient-to-r from-gray-400 via-gray-800 to-gray-400 hover:bg-gray-600  p-7 text-white text-4xl flex space-x-10 justify-center items-center sm:items-stretch "> */}
          <a href="#" className=' px-8 py-4 hover:text-black rounded-md text-xl font-sans-serif font-medium  text-center nav-item '>HOME</a>
          <a href="#" className='text-gray-100 hover:text-black px-8 py-4 rounded-md text-xl font-sans-serif font-medium nav-item' >GAllERY</a>
          <a href="#" className='text-gray-100 hover:text-black px-8 py-4 rounded-md text-xl font-sans-serif font-medium nav-item '>CONTACT US</a>
        {/* </nav> */}
      </div>
    </div>
  );
}

export default App;
