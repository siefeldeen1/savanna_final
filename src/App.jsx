import React from 'react'
import { useState } from 'react'
import Router from './Router'
import './App.css'
import { MainContext } from '../utils/MainContext';
import { useEffect } from 'react';

function App() {
 const [username, setusername] = useState()
 const [email, setemail] = useState()
 const day = new Date().getDate()
 const mounth = new Date().getMonth()+1
 const year = new Date().getFullYear()
 const full_date = `${year}-${mounth}-${day}`
const [current_day, setcurrent_day] = useState(full_date)
 
  return (
 
    <MainContext.Provider value={{
      username, setusername,
      email, setemail,
      current_day, setcurrent_day,
    }}>
    <Router/>
    </MainContext.Provider>
  )
}

export default App
