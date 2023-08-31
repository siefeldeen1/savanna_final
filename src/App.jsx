import React from 'react'
import { useState } from 'react'
import Router from './Router'
import './App.css'
import { MainContext } from '../utils/MainContext';
import { useEffect } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
 const [username, setusername] = useState()
 const [email, setemail] = useState()
 const day = new Date().getDate()
 const mounth = new Date().getMonth()+1
 const year = new Date().getFullYear()
 const full_date = `${year}-${mounth}-${day}`
const [current_day, setcurrent_day] = useState(full_date)


  
const location = useLocation()
const tawkMessengerRef = useRef();
  useEffect(() => {

    if(location.pathname != "/support" ){
      setTimeout(() => {
        document.querySelector("iframe").style.display="none !important"
      }, 1500);
    }else if (location.pathname == "/support" ){
      setTimeout(() => {
        document.querySelector("iframe").style.display="block !important"
      }, 1500);
    }
  
  }, [location])

  return (
 <>
    <MainContext.Provider value={{
      username, setusername,
      email, setemail,
      current_day, setcurrent_day,
    }}>
    <Router/>
    
    </MainContext.Provider>
  
  </>
  )
}

export default App
