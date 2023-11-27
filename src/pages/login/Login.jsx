import React, { useState } from 'react'
import "./Login.css"
import { GrProductHunt } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';
import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithRedirect } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { MainContext } from '../../../utils/MainContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {

    const{ username, setusername} = useContext(MainContext)
    const{email, setemail} = useContext(MainContext)
  
    const navigate = useNavigate();
    const firebaseConfig = {
      apiKey: "AIzaSyCH9_O3iUwKAw-9mNhl-wCk7fDvp5ExA-k",
      authDomain: "savanna-21ae0.firebaseapp.com",
      projectId: "savanna-21ae0",
      storageBucket: "savanna-21ae0.appspot.com",
      messagingSenderId: "574029428541",
      appId: "1:574029428541:web:fbe3eb87511358ac7d3754",
      measurementId: "G-0N773K94LZ",
      
    };
    
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      
    useEffect(() => {
     if(localStorage.getItem("user")){
      navigate('/getStarted')
      // navigate('/')
     }
    }, [])
    
  
      const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
          // console.log(data.user.photoURL)
          setemail(data.user.email)
          setusername(data.user.displayName)
          localStorage.setItem("user",data.user.displayName)
          localStorage.setItem("profilePic",data.user.photoURL)
          localStorage.setItem("email",data.user.email)
        })
        .catch((error) => {
          console.log(error);
          console.log("Caught error Popup closed");
        })
        .then((nav)=>{
          if(localStorage.getItem("user")){
            navigate('/getStarted')
            // navigate('/')
           }
        })
    }

    return (
      <div className='login'>
          {/* <img className='big_img' src="/imgs/Sign up.png" alt="" /> */}
          <div className='login_body'>
              <div className='login_logo'>
                  <img src="/imgs/login_logo2.png" alt="" />
                  <h1 className='logo_text_log'>SAVANNA</h1>
              </div>
  
              <div className='social_login'  onClick={()=>{handleClick()}}>
                  <FcGoogle color='#DC5425' size={23}/>
                  <div className='social_text'>Sign In With Google </div>
              </div>
              {/* <div style={{color:" #9EA9AB",fontSize:"20px"}}>-OR-</div>
              <div className='social_login'>
                  <GrProductHunt color='#DC5425' size={23}/>
                  <div className='social_text'>Product Hunt</div>
              </div> */}
  
              {/* <div className='login_text'>Already have an account? <span className='ancor_login'>Log in</span></div> */}
          </div>
      </div>
    )
  }
  
  export default Login