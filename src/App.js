import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import './App.css';
import './assets/main.css'
import  './components/nav.css'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {
  const [input, setInput] = useState({value:'home'})
  const select=(e)=>{
     return(
       
        setInput(e.target.value ))
    }


  return (
    <div className="app ">
      {/* <div className='mask'></div> */}
      <BrowserRouter>
        
        { window.screen.width>480? <div className='w-screen  p-7 text-white text-4xl flex space-x-10 justify-center items-center sm:items-stretch container'>
          <NavLink to="/home" className=' px-8 py-4 hover:text-pink-800 rounded-md text-xl font-sans-serif font-medium  text-center nav-item '>HOME </NavLink>
          <NavLink to="/gallery" className='text-gray-100 hover:text-pink-800 px-8 py-4 rounded-md text-xl font-sans-serif font-medium nav-item' >GALLERY</NavLink>
          <NavLink to="/contact" className='text-gray-100 hover:text-pink-800 px-8 py-4 rounded-md text-xl font-sans-serif font-medium nav-item '>CONTACT US</NavLink>        
          </div>: 
          <select value={input} onChange={select} >
            <option value='home'>HOME</option>
            <option value='gallery'>GALLERY</option>
            <option value='contact'>CONTACT US</option>
          </select>
          
          }

          <Switch>
            <Route exact path='/' component={Home}>
              <Redirect to = "/gadekar-arts/home" /> 
            </Route>
            <Route exact path='/gadekar-arts/gallery' component={Gallery} />
            <Route exact path='/gadekar-arts/contact' component={Contact} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
