import React from 'react'
import Norm_button from '../../../components/Buttons/Norm_button'
import { useNavigate } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";

function Screen1({title,...props}) {
    const navigate = useNavigate()
  return (
<>
    <div className='colored_cont'></div>
    <h1 className='title_confrim'>{title}</h1>
    <div className='price_confirm'>
        $0/month
    </div>

    <ul className='desc_body'>
        <div className='confrim_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
        <li className='small_confrim_desc'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </li>
        <li className='small_confrim_desc'>Lorem ipsum dolor sit amet, consectetur</li>
        <li className='small_confrim_desc'>Lorem ipsum dolor sit amet </li>
    </ul>

    <Norm_button onClick={()=>{props.screenflip()}} text={"Register Entity"}/>

    <div className='absolt_arrow' onClick={()=>{navigate('/hireai')}}>
      <IoArrowBackSharp size={30}/>
    </div>
</>
  )
}

export default Screen1