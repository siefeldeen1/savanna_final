import React from 'react'
import './Support.css'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


function Support () {

  

 
  return (
    <div className='support_bg'>
      <div className='support_body'>
        <span className='braces'>{`{`}</span>
        <div style={{display:"flex",flexDirection:"column"}}>
          <span className='big_font_supp'>FEED . BACK</span>
          <div className='words_support'>helpful information or criticism that is given to someone to say what can be done to improve a performance</div>  
        </div>
        <span className='braces'>{`}`}</span>
      </div>
        <TawkMessengerReact
                propertyId="636e033bb0d6371309ce7a9d"
                widgetId="1ghirp90i"/>
                
    </div>

  )
}

export default Support