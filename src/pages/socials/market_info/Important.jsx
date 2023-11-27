import React, { useEffect, useState } from 'react'
import Facts from './Facts'

function Important() {

    const [impo, setimpo] = useState()

    const day = new Date().getDate()
    const mounth = new Date().getMonth()+1
    const year = new Date().getFullYear()
    const full_date = `${year}-${mounth}-${day}`

    useEffect(() => {
    
        fetch(`${import.meta.env.VITE_BACKEND_API}/apis/social/important_conversations/`,{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
              email:localStorage.getItem("email"),
              date:full_date
            })
          }).then((res)=> res.json())
        .then((data)=>{
           
            // console.log(data.posts);
            setimpo(data)
        })
    }, [])
    
  return (
    <div className='import'>
        <h1 id="latest">Important Conversation</h1>
       
        <div className='facts_body'>
        {impo?.posts?.map((e,i)=>{
            // console.log("s",e);
            return(
                <div key={i} style={{display:'flex',flexDirection:"column",gap:"10px"}}>
                    <Facts title={`${e.title}`} date={`${e.date_posted}`}
                        body={`${e.description.slice(0,255)+"..."}`}
                    />
                    <hr  className='facts_hr'/>
                </div>
            )
        })

        
        }
            {/* <Facts title={"Where to do market research"} date={"1 month ago"}
                body={"Hi everyone, I wanted a little info since I have half an idea that has been buzzing me for a lifetime. Where do you do all your market research?"}
            />
            <hr  className='facts_hr'/>
            <Facts title={"I have a product idea but don't know how to do market research? Please help!"} date={"3 months ago"}
                body={"Hey guys, I just moved to Peachtree City, GA from New England and everyone here drives golf carts all over town. I'm an engineer and got the idea that it would make sense to have a solar roof to extend range and also charge the carts while they are parked."}
            />
            <hr  className='facts_hr'/>
            <Facts title={"Market research for a product, how did you guys do it?"} date={"2 months ago"}
                body={"The UI kit includes hundreds of components that you can use in almost every scenario of web and product design. We make using a design system easy and intuitive ..."}
            />
            <hr  className='facts_hr'/>
            <Facts title={"Market Research Analyst vs Data Analyst"} date={"6 months ago"}
                body={"Hi guys! I currently got a JO for a market research analyst position for a real estate industry. I want to have your insights if this is a good stepping stone for a data analyst role in the future. I'm basically a career shifter so I have little to no background at all."}
            />
            <hr  className='facts_hr'/>
            <Facts title={"The number one marketing mistake indie developers make is not doing any market research."} date={"1 month ago"}
                body={"When they hear the word marketing, most developers think of posting on social networks and sending keys to YouTubers, but they completely ignore market research, the first and most important part of marketing."}
            />
            <hr  className='facts_hr'/> */}
        </div>
    </div>
  )
}

export default Important