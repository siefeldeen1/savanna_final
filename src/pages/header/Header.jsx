import React, { useState } from 'react'
import './Header.css'
import { AiOutlineMenu } from 'react-icons/ai';
import Calender from './Calender';

function Header({menu,...props}) {
 
  
  return (
    <div className="header">
      <div className='uprow'>
          <div className="logo">
                {/* <img src="/imgs/image 1508.png"/> */}
                <div className="logo_name">SAVANNA</div>
            </div>
          
            {menu == true &&
                <AiOutlineMenu color='white' size={24} onClick={()=>{props.active()}}/>
            }
      </div>
      <Calender/>
    </div>
  )
}

export default Header