import React from 'react'
import Norm_button from '../../../components/Buttons/Norm_button'
import { IoArrowBackSharp } from "react-icons/io5";
function Screen2({title,...props}) {
  return (
    <div className='screen2_body'>
        <h1 className='screen2_header'>Register {title}</h1>

        <div className='screen2_desc'>No further steps required.</div>

        <div className='screen2_btn_cont'>
            <Norm_button text={"Confirm"} width={"30%"}/>
            <Norm_button text={"Cancel"} width={"30%"} onClick={()=>{props.screenflip()}}/>
        </div>

        <div className='absolt_arrow' onClick={()=>{props.screenflip()}}>
            <IoArrowBackSharp size={30}/>
        </div>
    </div>
  )
}

export default Screen2