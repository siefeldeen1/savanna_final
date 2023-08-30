import React from 'react'
import './Sorry.css'

function Sorry() {
  return (
    <div className='sorry_page'>
    <img className='big_img2' src="/imgs/sorry.png" alt="" />
    <div className='login_body'>
        <div className='login_logo'>
            <h1 className='logo_text_log'>Hello Builders!</h1>
        </div>

       <div className='sorry_text'>
            <div className='text_sorry'>We've been listening to your stories, your challenges, and your victories.</div>
            <div className='text_sorry'>Now, we're hard at work to bring you some exclusive, state-of-the-art features to propel your business to new heights.</div>
            <h3 >Stay tuned....</h3>
       </div>
    </div>
</div>
  )
}

export default Sorry