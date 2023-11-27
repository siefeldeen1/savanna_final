import React, { useEffect, useState } from "react";
import "./Socail.css";
import Important from "./market_info/Important";
import Latest from "./market_info/Latest";
import { Bar } from "react-chartjs-2";
import Chat from "../../components/Chat";
import { useContext } from "react";
import { MainContext } from '../../../utils/MainContext';

function Socail() {
  const [bar_info, setbar_info] = useState({
    "positive": 0,
    "negative": 0,
    "neutral": 0,
    "mixed": 0
});
  const [graph_data, setgraph_data] = useState();
  const [graph_val, setgraph_val] = useState();
  const [table, settable] = useState();


  const day = new Date().getDate()
  const mounth = new Date().getMonth()+1
  const year = new Date().getFullYear()
  const full_date = `${year}-${mounth}-${day}`

  useEffect(() => {

    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/social/market_sentiment/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
        date:full_date
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setbar_info(data);
      });

    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/social/correlated_keywords/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
        date:full_date
      })
    })
      .then((res) => res.json())
      .then((data) => {
      
        setgraph_data(data);
        // setgraph_val(Object.values(data));
      });

    fetch(`${import.meta.env.VITE_BACKEND_API}/apis/social/query_search_volume/`,{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:localStorage.getItem("email"),
        date:full_date
      })
    })
      .then((res) => res.json())
      .then((data) => {
      //  console.log(data);
        settable(data);
      });
  }, []);

  const option = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
        ltr: true,
        display: false,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          // padding: 20,
          color: "black",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#7E7E7E",
        },
      },
    },
  };

  let score= []
  let keyword = []

  graph_data?.posts?.forEach(e => {
   score.push( e.correlation_score)
   keyword.push( e.keyword)
  });



  const data = {
    labels: keyword,
    // labels : ['Demographs','Trends','Segmatations','Analytics','Forecasting','Behavior','Competition','Opportunity'],

    datasets: [
      {
        // label:"Sep 1, 2022",
        data: score,
        // data:[30,23,43,56,75,100,80,60],
        backgroundColor: ["#FD6333"],
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="socail">
      <div className="market">
        <div className="market_stats">
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}>
            Market Sentiment
          </h2>
          <div className="stats_wrapper">
            <div className="per-cont">
              <div className="per_num">{`${bar_info?.positive}%`}</div>
              <div className="per_name">Positive</div>
            </div>

            <div className="per-cont">
              <div className="per_num">{`${bar_info?.neutral}%`}</div>
              <div className="per_name">Neutral</div>
            </div>

            <div className="per-cont">
              <div className="per_num">{`${bar_info?.negative}%`}</div>
              <div className="per_name">Negative</div>
            </div>

            <div className="per-cont">
              <div className="per_num">{`${bar_info?.mixed}%`}</div>
              <div className="per_name">Mixed</div>
            </div>
          </div>
        </div>

        <div className="market_info">
          <Important />
          <Latest />
        </div>

        <div className="bar_market">
          <div className="keywords_header">
            <h2 style={{ fontSize: "27px" }}>Correlated Keywords</h2>
            {/* <h4 style={{ color: "#9A9A9A", fontWeight: "500",fontSize:"18px" }}>
              Market Research
            </h4> */}
          </div>
          <div className="socail_graph" >
            <Bar options={option} data={data}  style={{width:"100%",height:"100%"}}/>
          </div>
        </div>

        <div className="search_table">
          <h2 style={{ fontSize: "28px", fontWeight: "700" }}>
            What People Are Searching
          </h2>
          <table className="social-table">
            <tr>
              <th className="table-head" style={{ borderRadius: "10px 0 0 0" }}>Query</th>
              <th className="table-head" style={{textAlign:"center"}}>Monthly Searches</th>
              <th className="table-head"style={{ borderRadius: "0 10px 0 0",textAlign:"center" }}>Competition</th>
            </tr>
            {table?.query_search_volume?.map((e, i) => {
              return (
                <tr id="roww" key={i}>
                  <td style={{width:"35%"}}>{e.search_query}</td>
                  <td style={{textAlign:"center"}}>{e.monthly_searches}</td>
                  <td  style={{textAlign:"center"}}>
                    {e.competition == "LOW" && (
                      <div
                        className="table_card"
                        style={{ backgroundColor: "#1AB40D" }}
                      >
                        {e.competition}
                      </div>
                    )}
                    {e.competition == "MEDIUM" && (
                      <div
                        className="table_card"
                        style={{
                          backgroundColor: "transparent",
                          color: "black",
                          border: "1px solid black",
                        }}
                      >
                        {e.competition}
                      </div>
                    )}
                    {e.competition == "HIGH" && (
                      <div
                        className="table_card"
                        style={{ backgroundColor: "#FD6333" }}
                      >
                        {e.competition}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
            {/* <tr id="roww">
              <td>market survey</td>
              <td>4,400</td>
              <td>
                <div
                  className="table_card"
                  style={{ backgroundColor: "#1AB40D" }}
                >
                  Low
                </div>
              </td>
            </tr>
            <tr id="roww">
              <td>paid focus groups </td>
              <td>1,900</td>
              <td>
                <div
                  className="table_card"
                  style={{ backgroundColor: "#1AB40D" }}
                >
                  Low
                </div>
              </td>
            </tr>
            <tr id="roww">
              <td>market research companies</td>
              <td>4,400</td>
              <td>
                <div
                  className="table_card"
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  Medium
                </div>
              </td>
            </tr>
            <tr id="roww">
              <td>paid market research</td>
              <td>4,400</td>
              <td>
                <div
                  className="table_card"
                  style={{ backgroundColor: "#FD6333" }}
                >
                  High
                </div>
              </td>
            </tr>
            <tr id="roww">
              <td>market study</td>
              <td>4,400</td>
              <td>
                <div
                  className="table_card"
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  Medium
                </div>
              </td>
            </tr>
            <tr id="roww">
              <td>market study</td>
              <td>4,400</td>
              <td>
                <div
                  className="table_card"
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  Medium
                </div>
              </td>
            </tr>
            <tr id="roww">
              <td>market survey</td>
              <td>4,400</td>
              <td>
                <div
                  className="table_card"
                  style={{ backgroundColor: "#1AB40D" }}
                >
                  Low
                </div>
              </td>
            </tr>
            <tr id="roww">
              <td>market survey</td>
              <td>4,400</td>
              <td>
                <div
                  className="table_card"
                  style={{ backgroundColor: "#1AB40D" }}
                >
                  Low
                </div>
              </td>
            </tr>
            <tr id="roww">
              <td>market research companies</td>
              <td>4,400</td>
              <td>
                <div
                  className="table_card"
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  Medium
                </div>
              </td>
            </tr>
            <tr id="roww">
              <td>paid market research</td>
              <td>4,400</td>
              <td>
                <div
                  className="table_card"
                  style={{ backgroundColor: "#FD6333" }}
                >
                  High
                </div>
              </td>
            </tr>
            <tr id="roww">
              <td>market study</td>
              <td>4,400</td>
              <td>
                <div
                  className="table_card"
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  Medium
                </div>
              </td>
            </tr>
            <tr id="roww">
              <td>market study</td>
              <td>4,400</td>
              <td>
                <div
                  className="table_card"
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  Medium
                </div>
              </td>
            </tr> */}
          </table>
        </div>
      </div>

      <Chat />
    </div>
  );
}

export default Socail;
