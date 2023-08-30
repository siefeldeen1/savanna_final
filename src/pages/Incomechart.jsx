import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "./income.css";

const StackedBarsOnTopWithoutScales = () => {
  
  const [Demographic, setDemographic] = useState()

  useEffect(() => {
    
    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/segmentation/demographic_distribution/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
      })
    })
      .then((res) => res.json())
      .then((data) => {
      //  console.log(data);
       setDemographic(data)
      });
   
  }, [])
  

  let data = 30;
  const someRandomHeight = (data / 100) * 100;

  return (
  
      <div className="container_seg">
         
      {/* <Bar data={chartData} options={chartOptions} /> */}

      {/* CUSTOM BAR CHART SETUP */}
      {Demographic?.income.map((item) => (
            <div key={item}>
            <h2>{item.type}</h2>
            <p style={{fontWeight:"500",fontSize:"16px"}}>{item.percent}%</p>
          <div className="columnn_bar_seg">
            <div className="inner" style={{ height: `${item.percent}%` }}></div>
          </div>
          </div>
        ))}
      </div>
  );
};

export default StackedBarsOnTopWithoutScales;
