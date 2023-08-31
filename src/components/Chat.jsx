import { BsSendFill } from "react-icons/bs";
import React, { useState } from "react";
import "./Chat.css";
import { useContext } from "react";
import { MainContext } from "../../utils/MainContext";
import { useEffect } from "react";

const Chat = () => {
  const [message, setmessage] = useState("");


  const{current_day, setcurrent_day} = useContext(MainContext)

  useEffect(() => {
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
     console.log("imp",data);
     if(current_day.toString().split("-")[2] != new Date().getDate()){
      document.querySelector(".chat_body").innerHTML=""
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
        img.src="/imgs/user.png"
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
      document.getElementById("chat_input").disabled = true
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
         img.src="/imgs/user.png"
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
  
  
   
  }, [current_day])

  const sent_mess_append = () => {
    const sent_mess = document.createElement("div");
    sent_mess.classList.add("sent_message2");
    const inner_sent = document.createElement("div");
    inner_sent.classList.add("inner_sent2");
    inner_sent.innerText = message;
    sent_mess.appendChild(inner_sent);
    document.querySelector(".chat_body").appendChild(sent_mess);
  };

  const send = () => {
    sent_mess_append();

    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/discovery/chat_api/`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email:localStorage.getItem("email"),
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        received_mess_append(data.response);
      });
    const chat_body = document.querySelector(".chat_body");
    chat_body.scrollTo(0, chat_body.scrollHeight);
    setmessage("");
  };

  const received_mess_append = (e) => {
    const sent_mess = document.createElement("div");
    sent_mess.classList.add("received_message2");
    const inner_sent = document.createElement("div");
    inner_sent.classList.add("inner_received2");
    const message = document.createElement("div");
    message.innerText = e;

    const img = document.createElement("img");
    img.src = "/imgs/market_chat_icon.png";
    img.classList.add("img_class");
    inner_sent.appendChild(img);
    inner_sent.appendChild(message);
    sent_mess.appendChild(inner_sent);

    document.querySelector(".chat_body").appendChild(sent_mess);
    const chat_body = document.querySelector(".chat_body");
    chat_body.scrollTo(0, chat_body.scrollHeight);
  };

  const enter_clicked = (e) => {
    if (e.keyCode === 13) {
      send();
    }
  };
  return (
    // <section className="random-chat">
      <div className="chat_market">
        <div className="chat_body scrollbar" style={{ background: "unset" }}>
          {/* <div className='sent_message'>
                <div className='inner_sent2'>kasjadsjsdjsjasdsadasdasdsadsadsdasdsd</div>
            </div>

            <div className='received_message2'>
                <div className='inner_received2'>
                    <img src="/imgs/market_chat_icon.png" alt="" />
                     welcome
                </div>
            </div> */}
        </div>
        <div className="market_input">
          <input
            id="chat_input"
            type="text"
            placeholder="Ask Savanna for insights"
            value={message}
            onKeyDown={(e) => {
              enter_clicked(e);
            }}
            onChange={(e) => {
              setmessage(e.target.value);
            }}
          />
          <BsSendFill color="#8C8C8C" size={20} onClick={send} />
        </div>
      </div>
    // </section>
  );
};

export default Chat;
