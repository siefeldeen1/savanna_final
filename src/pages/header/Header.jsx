import React, { useState } from 'react'
import './Header.css'
import { AiOutlineMenu } from 'react-icons/ai';
import Calender from './Calender';
import { useNavigate } from 'react-router-dom';
import { RiSettingsFill } from "react-icons/ri";

function Header({menu,...props}) {
  const navigate = useNavigate()
  const tabswitcher =(e)=>{
    document.querySelectorAll(".tabs_switch").forEach((el)=>{
      el.classList.remove("active_tabheader")
    })
    if(e ==1){
      document.querySelector("#tabone").classList.add("active_tabheader")
      // document.querySelector(".tabs_hr").style.left="-3%"
      // document.querySelector(".tabs_hr").style.width="13%"
      navigate("/hireai")
    }else{
      document.querySelector("#tabtwo").classList.add("active_tabheader")
      // document.querySelector(".tabs_hr").style.left="9.5%"
      // document.querySelector(".tabs_hr").style.width="9vw"
      navigate("/Manageteams")
    }
  }
  
  return (
    <div className="header">
          <div className="logo">
                <img src="/imgs/logo.png"/>
            </div>
          
          
      {/* </div> */}
      {/* <Calender/> */}
      <div className='tabs_inheader'>
            <div onClick={(e)=>{tabswitcher(1)}} id='tabone' className='tabs_switch active_tabheader'>Entities</div>
            <div onClick={(e)=>{tabswitcher(2)}} id='tabtwo' className='tabs_switch'>Manage Teams</div>
      </div>

      {menu == false ?
               <div style={{display:"flex",justifyContent:"end"}}>
                 <RiSettingsFill style={{cursor:"pointer"}} size={25} color='grey'/>
               </div>:
               
                <AiOutlineMenu color='black' size={24} onClick={()=>{props.active()}}/>
            }
    </div>
  )
}

export default Header