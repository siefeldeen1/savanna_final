import React from "react";
import "../competitor/competitor.css";
import Chat from "../../components/Chat";
import EBAY from "/imgs/ebay.svg";
import AMAZON from "/imgs/amazon.svg";
import FLIPKART from "/imgs/flipkart.svg";
import MYNTRA from "/imgs/myntra.svg";
import AJIO from "/imgs/ajio.svg";
import axios from "axios";
import { useEffect } from "react";

const competitor = () => {
  const [Competitive, setCompetitive] = React.useState("");
  const [Socio, setSocio] = React.useState("");
  const [Geography, setGeography] = React.useState("");
  const [Marketshare, setMarketshare] = React.useState("");
  const [Marketprice, setMarketprice] = React.useState("");


  // const fetchCompetitive = async () => {
  //   const response = await axios.get(
  //     `${
  //       import.meta.env.VITE_BACKEND_API
  //     }/apis/competitor/competitive_targeting/`
  //   );
  //   setCompetitive(response.data?.posts);
  // };
  // React.useEffect(() => {
  //   fetchCompetitive();
  // }, []);

  // const fetchSocio = async () => {
  //   const response = await axios.get(
  //     `${import.meta.env.VITE_BACKEND_API}/apis/competitor/socioeconomics/`
  //   );
  //   setSocio(response.data?.posts);
  // };
  // React.useEffect(() => {
  //   fetchSocio();
  // }, []);

  // const fetchGeography = async () => {
  //   const response = await axios.get(
  //     `${import.meta.env.VITE_BACKEND_API}/apis/competitor/geography/`
  //   );
  //   setGeography(response.data?.posts);
  // };
  // React.useEffect(() => {
  //   fetchGeography();
  // }, []);

  // const fetchMarketshare = async () => {
  //   const response = await axios.get(
  //     `${import.meta.env.VITE_BACKEND_API}/apis/competitor/market_share/`
  //   );
  //   setMarketshare(response.data?.posts);
  // };
  // React.useEffect(() => {
  //   fetchMarketshare();
  // }, []);

  // const fetchMarketprice = async () => {
  //   const response = await axios.get(
  //     `${import.meta.env.VITE_BACKEND_API}/apis/competitor/market_prices/`
  //   );
  //   setMarketprice(response.data?.posts);
  // };
  // React.useEffect(() => {
  //   fetchMarketprice();
  // }, []);

  // React.useEffect(() => {
  //   if (window.Tawk_API) {
  //     window.Tawk_API.hideWidget();
  //   }
  //   return () => {
  //     if (window.Tawk_API) {
  //       window.Tawk_API.showWidget();
  //     }
  //   };
  // }, []);

  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/competitor/competitive_targeting/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
      })
    }).then((res)=>res.json())
    .then((data)=>{
      setCompetitive(data)
     
    })
    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/competitor/socioeconomics/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
      })
    }).then((res)=>res.json())
    .then((data)=>{
      setSocio(data)
    })
  
    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/competitor/geography/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
      })
    }).then((res)=>res.json())
    .then((data)=>{
      setGeography(data)
      
    })
    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/competitor/market_share/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
      })
    }).then((res)=>res.json())
    .then((data)=>{
      setMarketshare(data)
      // console.log(data);
    })
    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/competitor/market_prices/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
      })
    }).then((res)=>res.json())
    .then((data)=>{
      setMarketprice(data)
      // console.log(data);
    })
  
  }, [])
  

  return (
    <div className="General compatitor">
      <section>
        <div className="competitive">
          <h1>Competitive Targeting</h1>

          <div className="stats_wrapper_compatitor">
            <div className="percent">
              <span>
                <p>Reach</p>
                <h3>{Competitive.Reach}</h3>
              </span>
            </div>

            <div className="percent">
              <span>
                <p>Age</p>
                <h3>{Competitive.Age?.range}</h3>
                <p>{Competitive.Age?.percent}%</p>
              </span>
            </div>

            <div className="percent">
              <span>
                <p>Gender</p>
                <h3>{Competitive.Gender?.gender}</h3>
                <p>{Competitive.Gender?.percent}%</p>
              </span>
            </div>

            <div className="percent">
              <span>
                <p>Income</p>
                <h3>{Competitive.Income?.range}</h3>
              </span>
            </div>
          </div>

          <div className="flex-target">
            <div className="socio">
              <h2>Socioeconomics</h2>
              <div className="Grid-socio">
                <div className="household" id="household">
                  <span>
                    <p>Household-size</p>
                    <h4>{Socio.HouseholdSize?.range}</h4>
                    <p>{Socio.HouseholdSize?.percent}%</p>
                  </span>
                </div>

                <div className="household" id="education">
                  <span>
                    <p>Education-level</p>
                    <h4>{Socio.EducationLevel?.type}</h4>
                    <p>{Socio.EducationLevel?.percent}%</p>
                  </span>
                </div>

                <div className="household" id="employment">
                  <span>
                    <p>Employment-Status</p>
                    <h4>{Socio.EmploymentStatus?.type}</h4>
                    <p>{Socio.EmploymentStatus?.percent}%</p>
                  </span>
                </div>

                <div className="household" id="interest">
                  <span>
                    <p>Interest</p>
                    <h4>{Socio.Interest?.level}</h4>
                    <p>{Socio.Interest?.percent}%</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="geography">
              <h2>Geography</h2>
              <table id="stat">
                <thead id="head">
                  <tr id="rowww">
                    <th>Competitor</th>
                    <th>Traffic</th>
                    <th id="unique-th">Changes</th>
                  </tr>
                </thead>
                <tbody>
                 {Geography?.geography?.map((e,i)=>{
                  return(
                    <tr id="row" key={i}>
                          <td id="column">{e.Country}</td>
                          <td id="column">{e.Traffic}%</td>
                          <td id="coluumn">{e.Changes}%</td>
                    </tr>
                  )
                 })
                  }
                  {/* <tr id="row">
                    <td id="column">United Kingdom</td>
                    <td id="column">30.97%</td>
                    <td id="coluumn">2.03%</td>
                  </tr>
                  <tr id="row">
                    <td id="column">Germany</td>
                    <td id="column">30.41%</td>
                    <td id="coluumn">4.59%</td>
                  </tr>
                  <tr id="row">
                    <td id="column">Mexico</td>
                    <td id="column">39.95%</td>
                    <td id="colummn">1.05%</td>
                  </tr>
                  <tr id="row">
                    <td id="column">Canada</td>
                    <td id="column">38.01%</td>
                    <td id="colummn">8.99%</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="market-share">
          <h1>Market share</h1>
          <div style={{overflow:"auto"}}>
            <table id="share-table">
              <thead className="head2">
                <tr>
                  <th id="share-head">Competitor</th>
                  <th id="share-head">Total</th>
                  <th id="share-head">Direct</th>
                  <th id="share-head">Referral</th>
                  <th id="share-head">Organic Search</th>
                  <th id="share-head">Paid Search</th>
                  <th id="share-head">Organic Social</th>
                  <th id="share-head">Paid Social</th>
                  <th id="share-head">Email</th>
                  <th id="share-head">Display Ads</th>
                </tr>
              </thead>
              <tbody>
               {Marketshare?.market_share?.map((e,i)=>{
              
                return(
                <tr key={i}>
                  <td id="share-content1">
                    <img className="big_img3" src={`/imgs/${e.Competitor}.svg`} alt="" />
                  </td>
                  <td id="share-content">{e.Total}</td>
                  <td id="share-content">{e.Direct}%</td>
                  <td id="share-content">{e.Referral}%</td>
                  <td id="share-content">{e.OrganicSearch}%</td>
                  <td id="share-content">{e.PaidSearch}%</td>
                  <td id="share-content">{e.OrganicSocial}%</td>
                  <td id="share-content">{e.PaidSocial}%</td>
                  <td id="share-content">{e.Email}%</td>
                  <td id="share-content">{e.DisplayAds}%</td>
                </tr>
                )
               })
                
                }
                {/* <tr>
                  <td id="share-content1">
                    <img className="big_img3" src={Amazon} alt="" />
                  </td>
                  <td id="share-content">1,236,000</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">19.45%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                </tr>
                <tr>
                  <td id="share-content1">
                    <img className="big_img3" src={Flipkart} alt="" />
                  </td>
                  <td id="share-content">1,236,000</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">19.45%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                </tr>
                <tr>
                  <td id="share-content1">
                    <img className="big_img3" src={Myntra} alt="" />
                  </td>
                  <td id="share-content">1,236,000</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">19.45%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                </tr>

                <tr>
                  <td id="share-content1">
                    <img className="big_img3" src={Ajio} alt="" />
                  </td>
                  <td id="share-content">1,236,000</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">19.45%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                  <td id="share-content">11.18%</td>
                </tr> */}
              </tbody>
            </table>  
          </div>
          
        </div>

        <div className="market-price">
          <h2>Market Prices</h2>
          <div className="coming-soon">
            <h3>Coming Soon</h3>
          </div>
        </div>
      </section>
      <Chat />
    </div>
  );
};

export default competitor;
