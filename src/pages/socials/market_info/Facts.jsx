import React from 'react'

function Facts({title,body,date,url}) {
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