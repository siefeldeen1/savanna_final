import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hire_child({icon,title,desc}) {
  const navigate = useNavigate()

  return (

 <div className='hire_child' onClick={()=>{navigate(`/Confrim/${title.replaceAll(" ","_")}`)}}> 
    <div className='colored_cont'>{icon}</div>
    <div className='flex_column_hire'>
        <div className='grid_title_hire'>{title}</div>
        <div className='grid_desc_hire'>{desc}</div>
    </div>
</div>
  )
}

export default Hire_child