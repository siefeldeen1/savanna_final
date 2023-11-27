import React, { useContext } from 'react'
import './Discovery.css'
import { BsSendFill } from 'react-icons/bs';
import { useEffect } from 'react';
import { useState } from 'react';
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { MainContext } from '../../../utils/MainContext';
import io from "socket.io-client";
import { useParams } from 'react-router-dom';
// const socket = io.connect('https://maf.onrender.com/socket.io/');

function Discovery() {
  const [message, setmessage] = useState('')
  const{current_day, setcurrent_day} = useContext(MainContext)
  const [pfp, setpfp] = useState(localStorage.getItem("profilePic"))
  const param = useParams()
  
  useEffect(() => {
  
    fetch(`${import.meta.env.VITE_BACKEND_API_local}/get_message`,{
      method:"get",
      headers:{
        group_id:param.id,
        user_name:localStorage.getItem("email")
      }
    }).then((res)=> res.json())
    .then((data)=>{
      console.log(data);
      data.forEach(el => {
        if(el.from == "user"){
          const sent_mess = document.createElement("div")
          sent_mess.classList.add("sent_message")
          const inner_sent = document.createElement("div")
          inner_sent.classList.add("inner_sent")
          inner_sent.innerText=el.message
          const user_body = document.createElement("div")
          user_body.classList.add("user_body")
          const img = document.createElement("img")
          img.src=pfp
          user_body.appendChild(img)
          sent_mess.appendChild(inner_sent)
          sent_mess.appendChild(user_body)
          document.querySelector(".chat_body").appendChild(sent_mess)
        }else if(el.from == "agents"){
          const sent_mess = document.createElement("div")
          sent_mess.classList.add("received_message")
          const inner_sent = document.createElement("div")
          inner_sent.classList.add("inner_received")
          inner_sent.innerText= el.message
          const agent_name = document.createElement("div")
          agent_name.classList.add("agent_name")
          agent_name.innerHTML= el.from
          const user_body = document.createElement("div")
          user_body.classList.add("bot_body")
          const img = document.createElement("img")
          img.src="/imgs/bot_img.png"
          user_body.appendChild(img)
          user_body.appendChild(agent_name)
          sent_mess.appendChild(user_body)
          sent_mess.appendChild(inner_sent)
          document.querySelector(".chat_body").appendChild(sent_mess)
          const chat_body = document.querySelector(".chat_body")
          chat_body.scrollTo(0, chat_body.scrollHeight)
        }
       });
    })

    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/get_chat_history/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        // email:"testUser@email.com",
        email:localStorage.getItem("email"),
        date:current_day
      })
    }).then((res)=> res.json())
    .then((data)=>{
    //  console.log("imp",data);
     if(current_day.toString().split("-")[2] != new Date().getDate()){
      document.querySelector(".chat_body").innerHTML=""
      document.getElementById("chat_input").disabled = true
      data.conversation?.forEach(el => {
       if(el.role == "user"){
        const sent_mess = document.createElement("div")
        sent_mess.classList.add("sent_message")
        const inner_sent = document.createElement("div")
        inner_sent.classList.add("inner_sent")
        inner_sent.innerText=el.content
        const user_body = document.createElement("div")
        user_body.classList.add("user_body")
        const img = document.createElement("img")
        img.src=pfp
        user_body.appendChild(img)
        sent_mess.appendChild(inner_sent)
        sent_mess.appendChild(user_body)
        document.querySelector(".chat_body").appendChild(sent_mess)
       }else if(el.role == "assistant"){
        const sent_mess = document.createElement("div")
        sent_mess.classList.add("received_message")
        const inner_sent = document.createElement("div")
        inner_sent.classList.add("inner_received")
        inner_sent.innerText= el.content
        const user_body = document.createElement("div")
        user_body.classList.add("bot_body")
        const img = document.createElement("img")
        img.src="/imgs/bot_img.png"
        user_body.appendChild(img)
        sent_mess.appendChild(inner_sent)
        sent_mess.appendChild(user_body)
        document.querySelector(".chat_body").appendChild(sent_mess)
        const chat_body = document.querySelector(".chat_body")
        chat_body.scrollTo(0, chat_body.scrollHeight)
       }
      });
     
     }else if(current_day.toString().split("-")[2] == new Date().getDate()){
      document.getElementById("chat_input").disabled = false;
      document.querySelector(".chat_body").innerHTML="";
      data.conversation?.forEach(el => {
        if(el.role == "user"){
         const sent_mess = document.createElement("div")
         sent_mess.classList.add("sent_message")
         const inner_sent = document.createElement("div")
         inner_sent.classList.add("inner_sent")
         inner_sent.innerText=el.content
         const user_body = document.createElement("div")
         user_body.classList.add("user_body")
         const img = document.createElement("img")
         img.src=pfp
         user_body.appendChild(img)
         sent_mess.appendChild(inner_sent)
         sent_mess.appendChild(user_body)
         document.querySelector(".chat_body").appendChild(sent_mess)
        }else if(el.role == "assistant"){
         const sent_mess = document.createElement("div")
         sent_mess.classList.add("received_message")
         const inner_sent = document.createElement("div")
         inner_sent.classList.add("inner_received")
         inner_sent.innerText= el.content
         const user_body = document.createElement("div")
         user_body.classList.add("bot_body")
         const img = document.createElement("img")
         img.src="/imgs/bot_img.png"
         user_body.appendChild(img)
         sent_mess.appendChild(inner_sent)
         sent_mess.appendChild(user_body)
         document.querySelector(".chat_body").appendChild(sent_mess)
         const chat_body = document.querySelector(".chat_body")
         chat_body.scrollTo(0, chat_body.scrollHeight)
        }
       });
     }
    })
  
    // return()=>{
    //   socket.on("start_chat",e=>{
    //     console.log("datas",e);
    //   })
    // }
   
  }, [current_day])
  

  const genarate= ()=>{
    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/discovery/generate/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email")
      })
    }).then((res)=> res.json())
    .then((data)=>{
    //  console.log("imp",data.keywords?.join());
    //  console.log("imp",data.keywords?.join().replaceAll(",",", "));
     setmessage(data.keywords?.join().replaceAll(",",", "))

    })
  
  }
  

  

  const sent_mess_append = ()=>{
    const sent_mess = document.createElement("div")
    sent_mess.classList.add("sent_message")
    const inner_sent = document.createElement("div")
    inner_sent.classList.add("inner_sent")
    inner_sent.innerText=message
    const user_body = document.createElement("div")
    user_body.classList.add("user_body")
    const img = document.createElement("img")
    img.src=pfp
    user_body.appendChild(img)
    sent_mess.appendChild(inner_sent)
    sent_mess.appendChild(user_body)
    document.querySelector(".chat_body").appendChild(sent_mess)
  }


  const send= ()=>{
    sent_mess_append()

    // fetch(`${import.meta.env.VITE_BACKEND_API}/apis/discovery/chat_api/`,{
    //   method:"post",
    //   headers:{"content-type":"application/json"},
    //   body:JSON.stringify({
    //     email:localStorage.getItem("email"),
    //     message:message
    //   })
    // }).then((res)=> res.json())
    // .then((data)=>{
    
    //   received_mess_append(data.response)
    // })

    fetch(`${import.meta.env.VITE_BACKEND_API_local}/add_message`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        group:param.group,
        group_id:param.id,
        message:message,
        from: "user",
        to:"agents",
        user_name:localStorage.getItem("email")
      })
    }).then((res)=> res.json())
    .then((data)=>{
        console.log(data);
    })

    fetch(`https://savannabackend.online/apis/assistant_api/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        initial_prompt:message,
      })
    }).then((res)=> res.json())
    .then((data)=>{
      console.log("output",data.output);
      received_mess_append(data.output)
    })
    const chat_body = document.querySelector(".chat_body")
    chat_body.scrollTo(0, chat_body.scrollHeight)
    setmessage("")
    
  }

  const received_mess_append = (e)=>{
    // console.log("message",e);
    e.forEach(el => {
      console.log("text",el.split(":"));
    const sent_mess = document.createElement("div")
    sent_mess.classList.add("received_message")
    const inner_sent = document.createElement("div")
    inner_sent.classList.add("inner_received")
    inner_sent.innerText= el.split(":")[1].trim()
    const agent_name = document.createElement("div")
    agent_name.classList.add("agent_name")
    agent_name.innerHTML= el.split(":")[0].trim()
    const user_body = document.createElement("div")
    user_body.classList.add("bot_body")
    const img = document.createElement("img")
    img.src="/imgs/bot_img.png"
    user_body.appendChild(img)
    user_body.appendChild(agent_name)
    sent_mess.appendChild(user_body)
    sent_mess.appendChild(inner_sent)
    document.querySelector(".chat_body").appendChild(sent_mess)
    const chat_body = document.querySelector(".chat_body")
    chat_body.scrollTo(0, chat_body.scrollHeight)
    
    fetch(`${import.meta.env.VITE_BACKEND_API_local}/add_message`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        group:param.group,
        group_id:param.id,
        message:el.split(":")[1].trim(),
        from: el.split(":")[0].trim(),
        to:"user",
        user_name:localStorage.getItem("email")
      })
    }).then((res)=> res.json())
    .then((data)=>{
        console.log(data);
    })
    
   });
    
  }

  const enter_clicked = (e)=>{
    if (e.keyCode === 13) {
        send()
      }
}

  return (
    <div className='discovery'>

        <div className='chat'>
        <h1>{param.group&& param.group.replaceAll("_"," ")}</h1>
          <div className='chat_body'>
{/* 
            <div className='sent_message'>
                <div className='inner_sent'>kasjadsjsdjsjasdsadasdasdsadsadsdasdsd</div>
                <div className='user_body'>
                  <img src="/imgs/user.png" alt="" />
                </div>
            </div>

            <div className='received_message'>
                <div className='inner_received'> welcome</div>
                <div className='bot_body'>
                  <img src="/imgs/chat_img.png" alt="" />
                </div>
            </div> */}
          </div>

            <div className='lower_chat'>
              <div className='market_input' style={{width:"94%"}}>
                  <input type="text" id='chat_input' placeholder='Ask Savanna for insights' value={message} onKeyDown={(e)=>{enter_clicked(e)}} onChange={(e)=>{setmessage(e.target.value)}} />
                  <BsSendFill color='#8C8C8C' size={20} onClick={send}/>
              </div>
            </div>
        </div>

        {/* <div className='check_list'>
          <div className='checklist_upperpart'>
              <div className='checklist_header'>
                <img src="/imgs/checklist.png" alt="" />
                <p className='checklist_text'>Checklist</p>
              </div>
              <hr />
          </div>

            <div className='checklist_lower'>
              <div className='checklist_items'>
                 
              <Checkbox
                icon={<Icon.FiCheck color="#174A41" size={14} />}
                className="checkbox"
                onChange={(value, event) => {
                  let p = {
                    isTrue: value,
                  };
                 
                }}
                borderColor="black"
                style={{cursor: "pointer",border:"1px solid black" }}
              />
                          
                  <div className='checklist_item_header'>
                      <div>Tutorial Video</div>
                      <img  className="tutorial" src="/imgs/tutorial.png" alt="" />
                  </div>
                  
              </div>
              <div className='checklist_items'>
                 
              <Checkbox
                icon={<Icon.FiCheck color="#174A41" size={14} />}
                className="checkbox"
                onChange={(value, event) => {
                  let p = {
                    isTrue: value,
                  };
                 
                }}
                borderColor="black"
                style={{ cursor: "pointer",border:"1px solid black" }}
              />
                  
                  <div className='checklist_item_header'>
                     <div>Explain Your Business To Savanna</div>
                     <div style={{fontSize:"12px",color:"#525151",fontWeight:"400"}}>Tell her about your idea and answer her questions</div>
                  </div>
                  
              </div>
              
            </div>
            <div className='btn_div' onClick={()=>{genarate()}}>
             <button className='genrate_btn'>Generate Data</button>
            </div>
           
        </div> */}
    </div>
  )
}

export default Discovery