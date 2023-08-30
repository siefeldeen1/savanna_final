import React from "react";
import "./channel.css";
import Chat from "../../components/Chat";
import Benchmark from "../Benchmark";
import Distribution from "../../components/Distribution";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const channel = () => {
const [distriubtion, setdistriubtion] = useState()

 useEffect(() => {
  fetch(`${import.meta.env.VITE_BACKEND_API}/apis/channels/channel_distribution/`,{
    method:"post",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
      email:localStorage.getItem("email"),
    })
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
    setdistriubtion( data.channel_distribution)
    });
  
   
 }, [])
 

  return (
    <div className="General">
      <section>
        <div className="Website">
          <div className="Website-cont">
          <h2>Website Benchmarking</h2>
          <div className="flex-content">
           
            <Benchmark />
          </div>
          </div>
        </div>

        <div className="Channel">
          <h2>Channel Distribution</h2>

          <div className="channel-group">
           {distriubtion?.map((e,i)=>{
            return(
              <div key={i} className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={`/imgs/${e.type}.svg`} alt="" />
                  {e.type}
                </p>
                <h5>{e.percent}%</h5>
              </div>
              <Distribution value={e.percent} variant="fs" />
            </div>
            )
           }) 
         
            }

            {/* <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Facebook} alt="" />
                  Facebook
                </p>
                <h5>35.63%</h5>
              </div>
              <Distribution value={35.63} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Instagram} alt="" />
                  Instagram
                </p>
                <h5>24.08%</h5>
              </div>
              <Distribution value={24.08} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Twitter} alt="" />
                  Twitter
                </p>
                <h5>23.33%</h5>
              </div>
              <Distribution value={23.33} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Reddit} alt="" />
                  Reddit
                </p>
                <h5>18.69%</h5>
              </div>
              <Distribution value={18.69} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Tiktok} alt="" />
                  Tiktok
                </p>
                <h5>18.05%</h5>
              </div>
              <Distribution value={18.05} variant="fs" />
            </div>

            <div className="channel-progress">
              <div className="flex-channel">
                <p>
                  {" "}
                  <img className="big_img3" src={Linkedin} alt="" />
                  Linkedin
                </p>
                <h5>12.49%</h5>
              </div>
              <Distribution value={12.49} variant="fs" />
            </div> */}
          </div>
        </div>

        <div className="Channel-strategy">
          <h2>Channel Strategy</h2>
          <div className="coming-soon">
            <h3>Coming Soon</h3>
          </div>
        </div>
      </section>
      <Chat />
    </div>
  );
};

export default channel;
