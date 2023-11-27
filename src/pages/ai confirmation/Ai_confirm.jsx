import React, { useEffect, useState } from 'react'
import './Ai_confirm.css'
import { IoArrowBackSharp } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Norm_button from '../../components/Buttons/Norm_button';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

function Ai_confirm() {
    const location = useParams();
    const [title, settitle] = useState("")
    const [screenflip, setscreenflip] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
      console.log("loc",location);
      settitle(location.id.replaceAll("_"," "))
    }, [])
    
  return (
    <div className='ai_confirm_body'>
      <div className='ai_confirm'>
        {!screenflip? 
          <Screen1 title={title} screenflip={()=>{setscreenflip(true)}}/>
          :
          <Screen2 title={title} screenflip={()=>{setscreenflip(false)}}/>
          }
        </div>
    </div>
  )
}

export default Ai_confirm