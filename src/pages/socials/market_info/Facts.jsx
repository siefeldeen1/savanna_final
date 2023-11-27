import React, { useEffect } from 'react'

function Facts({title,body,date,url}) {

  useEffect(() => {
      document.querySelectorAll(".facts_bodyy").forEach(e => {
         e.innerHTML.slice(0,300)
        console.log(e.innerHTML.slice(0,300));
      });
  
  }, [])
  

  return (
    <div className='factsz'>
        <div className='facts_header'>
             <h2 className='facts_title'>{title}</h2>
             <div className='facts_date'>{date}</div>
           
        </div>

        <div className='facts_bodyy'>{body}</div>
        <a className='facts_url' href={url} target='_blank' rel="noreferrer" >{url}</a>
    </div>
  )
}

export default Facts