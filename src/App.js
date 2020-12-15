import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import './App.css';
import './assets/main.css'
import  './components/nav.css'
import Gallery from './components/gallery'
import Contact from './components/contact'
import Home from './components/Home'
function App() {
  return (
    <div className="app ">
      <div className='mask'></div>
      <BrowserRouter>
        <div className='w-screen  p-7 text-white text-4xl flex space-x-10 justify-center items-center sm:items-stretch container'>
          <NavLink to="/" className=' px-8 py-4 hover:text-black rounded-md text-xl font-sans-serif font-medium  text-center nav-item '>HOME </NavLink>
          <NavLink to="/gallery" className='text-gray-100 hover:text-black px-8 py-4 rounded-md text-xl font-sans-serif font-medium nav-item' >GALLERY</NavLink>
          <NavLink to="/contact" className='text-gray-100 hover:text-black px-8 py-4 rounded-md text-xl font-sans-serif font-medium nav-item '>CONTACT US</NavLink>        
        
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
