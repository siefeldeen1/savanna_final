import React from 'react'
import Header from '../header/Header'
import './Getstarted.css'
import { useNavigate } from 'react-router-dom'

function Getstarted() {
    const navigate = useNavigate()
  return (
    <div className='bigbodygetstart'>
        <Header/>
        <div className='getstared_body'>
            <h1 className='getstarted_class'>Create Your First AI Workforce</h1>
            <div className='grid_getstart'>
                <div className='bodyofadd' onClick={()=>{navigate('/hireai')}}>
                    <div className='add_icon_class'>+</div>
                </div>

                <div className='dashed_border_get'>
                    <div className='jump_backin'>Or jump back in...</div>
                </div>
            </div>

            <div className='getstart2grid'>
                <div className='getstart_contair'></div>
                <div className='getstart_contair'></div>
            </div>
        </div>
    </div>
  )
}

export default Getstarted