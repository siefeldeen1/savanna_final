import React, { useEffect, useState } from 'react'
import './Manageteams.css'
import { MdAdd } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function Manageteams() {
    const navigate = useNavigate()
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_API_local}/get_groups`,{
            method:"get",
            headers:{
              user_name:localStorage.getItem("email")
            }
        }).then((res)=>res.json())
        .then((data)=>{
            setdata(data);
        })   
    }, [])
    

    const navigator =(e)=>{
        console.log(e);
        navigate(`/${e.trim().replaceAll(" ","_")}`)
    }


  return (
  <div className='Manageteams_body'>
      <div className='Manageteams'>
        <h1 className='title_manage'>Organize Your Company Infrastructure</h1>

        <div className='section_manage'>
                <div className='flex_row_manage'>
                    <div className='section_manage_title'>Entity Workforce</div>
                    <div className='add_button_manage'><MdAdd size={30} /></div>
                </div>
                {/* <hr /> */}
            <div className='grid_manage_ai responsive_grid_mangage' style={{gap:"15px"}}>
               <div className='colored_cont'></div>
               <div className='colored_cont'></div>
               <div className='colored_cont'></div>
               <div className='colored_cont'></div>
               <div className='colored_cont'></div>
               <div className='colored_cont'></div>
               <div className='colored_cont'></div>
            </div>
        </div>

        <div className='section_manage' style={{overflow:"auto",}}>
                <div className='flex_row_manage'>
                    <div className='section_manage_title'>Teams</div>
                    <div className='add_button_manage' onClick={()=>{navigate("/Createteam")}}><MdAdd size={30} /></div>
                </div>
                {/* <hr /> */}
            <div className='grid_manage_teams'>
              {data.map((e,i) => {
                    return(
                    <div key={i} className='team_dev_manage' onClick={()=>{navigator(`${e.group_name}/${e.id}`)}}>
                      <div className='colored_cont'></div>
                      <div className='team_managetitle'>{e.group_name}</div>
                    </div>
                )})}
               
            </div>
        </div>
      </div>
  </div>
  )
}

export default Manageteams