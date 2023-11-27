import React, { useEffect, useState } from 'react'
import './Project_name.css'
import { useNavigate } from 'react-router-dom'

function Project_name() {
  const [value, setvalue] = useState("")
  const navigate = useNavigate()
  useEffect(() => { 
    document.querySelector(".start_chatbtn").disabled = true
  }, [])
  
  const check= (e)=>{
    setvalue(e.target.value)
    if(e.target.value.length >0 ){
      document.querySelector(".start_chatbtn").disabled = false
    }else{
      document.querySelector(".start_chatbtn").disabled = true

    }
  }


  const submit = ()=>{
    fetch(`${import.meta.env.VITE_BACKEND_API_local}/add_group`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        group_name:value,
        user_name:localStorage.getItem("email")
      })
    }).then((res)=> res.json())
    .then((data)=>{
        // console.log(data.group_id);
        navigate(`/${value.trim().replaceAll(" ","_")}/${data.group_id}`)
    })
  }
  return (
    <div className='projectname_body'>
        <div className='projectname'>
            <h1 className='project_name_h1'>Enter Project Name</h1>
            <input type="text" className="projectnameinp" value={value} onChange={(e)=>{check(e)}} placeholder='Savanna Project'/>
        </div>
        <button className='start_chatbtn' onClick={()=>{submit()}}>Start Chat</button>
    </div>
  )
}

export default Project_name