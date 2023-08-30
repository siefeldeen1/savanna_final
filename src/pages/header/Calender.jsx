import React, { useEffect } from 'react'
import { useContext } from 'react'
import { MainContext } from '../../../utils/MainContext'

function Calender() {
  const{current_day, setcurrent_day} = useContext(MainContext)

    const today = new Date()

    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    const yes = new Date(today)
    yes.setDate(today.getDate() - 1)

    const tw2 = new Date(today)
    tw2.setDate(today.getDate() - 2)

    const th3 = new Date(today)
    th3.setDate(today.getDate() - 3)
    
    const si6 = new Date(today)
    si6.setDate(today.getDate() + 2)

    const se7 = new Date(today)
    se7.setDate(today.getDate() + 3)
    

    const one = th3.toDateString().split(" ")
    const two = tw2.toDateString().split(" ")
    const yesterday = yes.toDateString().split(" ")
    const todo = today.toDateString().split(" ")
    const tomo = tomorrow.toDateString().split(" ")
    const six = si6.toDateString().split(" ")
    const seven = se7.toDateString().split(" ")


 
  

  const active_day=(e)=>{
    document.querySelectorAll(".days").forEach(el => {
      el.classList.remove("active_day")
    });
    e.currentTarget.classList.add("active_day")

    // console.log(e.currentTarget.getAttribute('data-date'));
    setcurrent_day(e.currentTarget.getAttribute('data-date'))
  }


    return (
    <div className='calender'>
       
            <div className='days' data-date={`${th3.getFullYear()}-${th3.getMonth()+1}-${one[2]}`} onClick={(e)=>{active_day(e)}}>
              <div className='number_day'>{one[2]}</div>
              <div>{one[0]}</div>
            </div>

            <div className='days' data-date={`${tw2.getFullYear()}-${tw2.getMonth()+1}-${two[2]}`} onClick={(e)=>{active_day(e)}}>
              <div className='number_day'>{two[2]}</div>
              <div>{two[0]}</div>
            </div>

            <div className='days' data-date={`${yes.getFullYear()}-${yes.getMonth()+1}-${yesterday[2]}`} onClick={(e)=>{active_day(e)}}>
              <div className='number_day'>{yesterday[2]}</div>
              <div>{yesterday[0]}</div>
            </div>

            <div className='today' data-date={`${today.getFullYear()}-${today.getMonth()+1}-${todo[2]}`} onClick={(e)=>{active_day(e)}}>
              <div className='number_day'>{todo[2]}</div>
              <div>{todo[0]}</div>
            </div>

            <div className='days'>
              <div className='number_day'>{tomo[2]}</div>
              <div>{tomo[0]}</div>
            </div>

            <div className='days'>
              <div className='number_day'>{six[2]}</div>
              <div>{six[0]}</div>
            </div>
            
            <div className='days'>
              <div className='number_day'>{seven[2]}</div>
              <div>{seven[0]}</div>
            </div>

       
    </div>
  )
}

export default Calender