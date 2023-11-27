import React from 'react'

function Hire_grid({title,child}) {
  return (
    <div className='section_hire'>
                <div className='section_hire_title'>{title}</div>
                <hr />
            <div className='grid_hire_ai'>
                {child}
            </div>
    </div>
  )
}

export default Hire_grid