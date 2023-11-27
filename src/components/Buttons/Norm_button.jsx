import React from 'react'
import './Norm_button.css'

function Norm_button({text,color,onClick,width}) {
  return (
    <button className='button_aiconfirm' onClick={onClick} style={{backgroundColor:color,width:width}}>{text}</button>
  )
}

export default Norm_button