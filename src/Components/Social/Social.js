import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Social.css'

function Social() {
  return (
    <div className='sociallogos fa fa-lg'>
      <a className='socialmedialink' href="https://twitter.com/tedxiiitv" target="_blank" rel="noreferrer">
        <i className='fa fa-twitter icon'></i>
      </a>
      <a className='socialmedialink' href="https://www.instagram.com/tedxiiitv" target="_blank" rel="noreferrer">
        <i className='fa fa-instagram'></i>
      </a>
      <a className='socialmedialink' href="https://www.youtube.com/channel/UC4mwsjxwalruq9tga_3a92g" target="_blank" rel="noreferrer">
        <i className='fa fa-youtube-play'></i>
      </a>
      <a className='socialmedialink' href='https://www.linkedin.com/company/tedxiiitv' target='_blank' rel="noreferrer">
        <i className='fa fa-linkedin'></i>
      </a>
    </div>
  )
}

export default Social
