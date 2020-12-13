import React from 'react';
import './App.css';
import './assets/main.css'
import  './components/nav.css'

function App() {
  return (
    <div className="app">
      <div className='w-screen container bg-gradient-to-r from-gray-400 via-gray-800 to-gray-400 hover:bg-gray-600  p-7 text-white text-4xl flex space-x-10 justify-center items-center sm:items-stretch '>
        {/* <nav className="bg-gradient-to-r from-gray-400 via-gray-800 to-gray-400 hover:bg-gray-600  p-7 text-white text-4xl flex space-x-10 justify-center items-center sm:items-stretch "> */}
          <a href="#" className='bg-gray-900 hover:bg-gray-700 px-7 py-2 rounded-md text-lg font-sans-serif font-medium  text-center nav-item '>HOME</a>
          <a href="#" className='text-gray-100 hover:bg-gray-700 hover:text-white px-7 py-2 rounded-md text-lg font-sans-serif font-medium nav-item' >GALLERY</a>
          <a href="#" className='text-gray-100 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-lg font-sans-serif font-medium nav-item '>CONTACT US</a>
          
        {/* </nav> */}
      </div>
    </div>
  );
}

export default App;
