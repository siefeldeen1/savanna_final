import React, { useEffect, useState } from "react";
import "./Segmentation.css";
// import '../socials/socail.css'
import Chat from "../../components/Chat";
import ProgressBar from "../../components/ProgressBar";
import Chart from "../Chart";
import Income from "../Incomechart";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import One from "/imgs/1person.svg";
import Two from "/imgs/2person.svg";
import Three from "/imgs/3person.svg";
import Four from "/imgs/4person.svg";
import Retail from "/imgs/Retail.svg";
import Education from "/imgs/Education.svg";
import Computer from "/imgs/Computer.svg";
import Finance from "/imgs/Finance.svg";
import Government from "/imgs/Government.svg";
import Check from "/imgs/check.svg";
// import {RiCheckboxBlankCircleLine} from 'react-icons/Ri'

// import Retail from "../../../public/im"
// import data from "../../components/chart";

const Segmentation = () => {
  const [bar_info, setbar_info] = useState();
  const [graph_data, setgraph_data] = useState();
  const [graph_val, setgraph_val] = useState();
  const [table, settable] = useState();
  const [Geographic, setGeographic] = React.useState("");
  const [Demographic, setDemographic] = React.useState("");
  const [Audience, setAudience] = React.useState("");
  const [male_percent, setmale_percent] = useState()
  const [male_type, setmale_type] = useState()
  const [female_percent, setfemale_percent] = useState()
  const [female_type, setfemale_type] = useState()
  const [Retailda, setRetail] = useState()
  const [Educationda, setEducation] = useState()
  const [Softwareda, setSoftware] = useState()
  const [Financeda, setFinance] = useState()
  const [Governmentda, setGovernment] = useState()
  

 const day = new Date().getDate()
 const mounth = new Date().getMonth()+1
 const year = new Date().getFullYear()
 const full_date = `${year}-${mounth}-${day}`


  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/segmentation/geographic_distribution/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
        date: full_date
      })
    })
      .then((res) => res.json())
      .then((data) => {
       
       setGeographic(data)
      });
    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/segmentation/demographic_distribution/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
      })
    })
      .then((res) => res.json())
      .then((data) => {
       setDemographic(data)
      });

    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/segmentation/audience_interest_behaviour/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
      })
    })
      .then((res) => res.json())
      .then((data) => {
       
       setAudience(data)
      });


  }, []);
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: 'x',
    barThickness: 72, 
    barPercentage: 0.9,
    categoryPercentage: 0.9,
    plugins: {
      legend: {
        position: "bottom",
        ltr: true,
        display: false,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#D2D2D2",
          scales: {
            x: {
              grid: {
                display: false, // Remove vertical gridlines
              },
            },
            y: {
              beginAtZero: false,
              display: false, // Remove vertical gridlines
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
          maxTicksLimit: 6,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#999999",
          maxTicksLimit: 6,
        },
      },
    },
  };


  setTimeout(() => {
    setfemale_type(Demographic?.gender[0].type)
    setfemale_percent(Demographic?.gender[0].percent)
    setmale_type(Demographic?.gender[1].type)
    setmale_percent(Demographic?.gender[1].percent)
    setRetail(Audience?.audience_interest_behaviour[0].percent)
    setEducation(Audience?.audience_interest_behaviour[1].percent)
    setSoftware(Audience?.audience_interest_behaviour[2].percent)
    setFinance(Audience?.audience_interest_behaviour[3].percent)
    setGovernment(Audience?.audience_interest_behaviour[4].percent)

  }, 1000);


  let label_arr = []
  let precent_arr = []
  Demographic.age?.forEach(e => {
    label_arr.push(e.range)
    precent_arr.push(e.percent)
  });

  const chartData = {
    labels: label_arr,
    datasets: [
      {
        data:precent_arr,
        backgroundColor: [
          '#B8B8B8', // Red
          '#D2D2D2', // Blue
          '#C5C4C4', // Yellow
          '#AEAEAE', // Green
          '#999999', // Purple
          '#7F7F7F', // Purple
        ],
        borderRadius: 6,
        minBarLength: 6,
      },
    ],
  };
  
  const myBarChart = document.getElementById('Age-bar');
  
  // Add a listener for screen width changes
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1300) { // Adjust the screen width as needed
      chartOptions.scales.x.barThickness = 60; // Adjust the percentage as needed
      myBarChart.update(); // Update the chart to reflect the changes
    } else {
      // Reset the bar thickness for larger screens
      chartOptions.scales.x.barThickness = 72; // Default value
      myBarChart.update(); // Update the chart to reflect the changes
    }
  });

 

   const countries = [{country:"United States",Traffic:67.66,trend:"-10.4%"},{country:"United Kingdom",Traffic:2.64,trend:"-21.57%"},{country:"Brazil",Traffic:1.81,trend:"-21.57%"},{country:"Germany",Traffic:1.77,trend:"-21.57%"},{country:"India",Traffic:1.77,trend:"-21.57%"},{country:"United state",Traffic:1.77,trend:"-21.57%"},{country:"United Kingdom",Traffic:1.77,trend:"-21.57%"},{country:"Brazil",Traffic:1.77,trend:"-21.57%"},{country:"Germany",Traffic:1.77,trend:"-21.57%"},{country:"India",Traffic:1.77,trend:"-21.57%"}]

  return (
    // <div className="p">
    <div className="General">
      <section className="segmentation">
        <div className="Geo-container">
          <h1>Geographic Distribution</h1>
          {/* <div className="flex-geo">
          
            <div className="countries seg_table_cell">
              <h3>Countries</h3>

              <div className="country_div_cell">
                {[
                  "United States",
                  "United Kingdom",
                  "Brazil",
                  "Germany",
                  "India",
                  "United state",
                  "United Kingdom",
                  "Brazil",
                  "Germany",
                  "India",
                ].map((country) => (
                  <p
                    style={{ display: "flex", gap: "5px", fontWeight: "600", color: "#565656"}}
                    key={country}
                  >
                    <span>&gt;</span>
                    {country}
                  </p>
                ))}
              </div>
            </div>

          
            <div className="Traffic seg_table_cell">
              <h3>Traffic</h3>
              <div>
                {[
                  { text: "67.66%", value: 67.66 },
                  { text: "2.64%", value: 2.64 },
                  { text: "1.81%", value: 1.81 },
                  { text: "1.77%", value: 1.77 },
                  { text: "1.73%", value: 1.73 },
                  { text: "67.66%", value: 67.66 },
                  { text: "2.64%", value: 2.64 },
                  { text: "1.81%", value: 1.81 },
                  { text: "1.77%", value: 1.77 },
                  { text: "1.73%", value: 1.73 },
                ].map((traffic) => (
                  <div className="flex-traffic" key={traffic.text}>
                    <p>{traffic.text}</p>
                    <ProgressBar
                      className="progress"
                      variant="sm"
                      value={traffic.value}
                    />
                  </div>
                ))}
              </div>
            </div>

           
            <div className="Trend seg_table_cell">
              <h3>Trend</h3>
              <div>
                {[
                  "-10.4%",
                  "-21.57%",
                  "+26.07%",
                  "-4.76%",
                  "+1.76%",
                  "-10.34%",
                  "-21.57%",
                  "+26.07%",
                  "-4.76%",
                  "+1.76%",
                ].map((trend) => (
                  <p key={trend}>{trend}</p>
                ))}
              </div>
            </div>
           </div> */} 
         <table className="seg_table">
              <tr>
                <th className="countries_head_cell seg_th">Countries</th>
                <th className="joined_header seg_th" style={{width:"55%"}}>Traffic Share </th>
                <th style={{textAlign:"center"}} className="joined_header seg_th">Trend</th>
              </tr>
             {Geographic.top_countries_list?.map((e,i)=>{
              return(
                <tr key={i}>
                <td className="countries_cell seg_td">
                  <span>&gt;</span>{e.geoName}
                </td>
                <td className="seg_td">
                  <div className="traffic_cell">
                  {`${e.average}`}
                      <ProgressBar
                            className="progress"
                            variant="sm"
                            value={e.average}
                      />
                  </div> 
                </td>
                <td className="seg_td" style={{fontWeight:"500",textAlign:"center"}}>{e.percentage_change}%</td>
              </tr>
              )
             })
             }
          </table>
        </div>

        <div className="demographic">
          <h1>Demographic Distribution</h1>
          <div className="Age-container respon_data_seg">
            <div className="Text">
            <h3 id="heading">Age</h3></div>
            <div className="bar-cont" >
            <Bar id='Age-bar' style={{width:"100%",height:"100%"}} options={chartOptions} data={chartData} />
          </div>
          </div>

          <div className="gender-cont respon_data_seg">
          <h3 id="heading">Gender</h3>
          <div className="gender-group">
          {/* <Check/> */}
            <div className="female"><img src={Check}/>{female_type} <p>{female_percent}%</p></div> 
            {/* <RiCheckboxBlankCircleLine /> */}
            <div className="male"><img src={Check}/>{male_type}  <p>{male_percent}%</p></div> 
          </div>
          </div>

          <div className="Income-cont respon_data_seg">
          <div className="Text">
            <h3 id="heading">Income</h3>
          </div>

          <Income />
          </div>

          <div className="Edu-Container respon_data_seg">
          <div className="Text1">
            <h3 id="heading">Education</h3></div>
            <div className="groupflex2">
             {Demographic.education?.map((e,i)=>{
              return(
                <div key={i} className="Edu-progress">
                <div className="flex-Edu">
                  <p>{e.type}</p>
                  <h5 id="h5">{e.percent}%</h5>
                </div>
                <ProgressBar value={e.percent} variant="md" />
              </div>
              )})}
            </div> 
          </div>

          <div className="Household-container respon_data_seg">
          <div className="Text-house">
            <h3 id="heading">Household <br/>Size</h3></div>
            <div className="flex-general respon_data_seg">
              <div className="flex-ontop">
                <div className="top_1"></div>
                <div className="top_2"></div>
                <div className="top_3"></div>
                <div className="top_4"></div>
              </div>
              <div className="flex-beside">
                <div className="person">
                  <p>
                    <img src={One} />1 Person
                  </p>
                  <p>
                    <img src={Two} />2 Person
                  </p>
                  <p>
                    <img src={Three} />3 Person
                  </p>
                  <p>
                    <img src={Four} />4 Person
                  </p>
                </div>
                <div className="percentage">
                  {Demographic.household_size?.map((e,i)=>{
                    return(
                          <p key={i}>{e.percent}%</p>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="Employment-container respon_data_seg">
          <div className="Text1">
            <h3 id="heading">Employment</h3></div>
            <div className="groupflex">
             {Demographic.employment?.map((e,i)=>{
              return(
                <div key={i} className="Edu-progress">
                <div className="flex-Edu1">
                  <p>{e.type}</p>
                  <h5 id="h5">{e.percent}%</h5>
                </div>
                <ProgressBar value={e.percent} variant="md" />
              </div>
              )
             })}
            </div> 
          </div>
        </div>

        <div className="outside-demographic">
          <h2>Audience interests and Behaviors</h2>
              <div className="Audience-cont">
          <div className="flex-Aundience respon_data_seg">
            <div className="Education">
              <span>
                <img className="retail" src={Retail} alt="" />
                <h4>{Retailda}%</h4>
                <p>Retail</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img className="retail" src={Education} alt="" />
                <h4>{Educationda}%</h4>
                <p>Education</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img className="retail" src={Computer} alt="" />
                <h4>{Softwareda}%</h4>
                <p>Software</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img className="retail" src={Finance} alt="" />
                <h4>{Financeda}%</h4>
                <p>Finance</p>
              </span>
            </div>

            <div className="Education">
              <span>
                <img className="retail" src={Government} alt="" />
                <h4>{Governmentda}%</h4>
                <p>Government</p>
              </span>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Chat />
    </div>
    // {/* </div> */}
  );
};

export default Segmentation;
