import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'; 
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">

      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>request early access</p>
      </div>

      <div className='gpt3__footer-links'>
         <div className='gpt3__footer-links_logo'>
           <img src={gpt3Logo} alt="logo"/>
           <p>Created with react by Mehul </p>
      </div>

      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <p>overons</p>
        <p>social Media</p>
        <p>counters</p>
        <p>contact</p>
      </div>



      <div className='gpt3__footer-links_div'>
        <h4>Comapny</h4>
        <p>Terms $ conditions</p>
        <p>privacy policy</p>
        <p>contact</p>
      </div>


      <div className='gpt3__footer-links_div'>
        <h4>Get in touch </h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>1234567890</p>
        <p>abcd@gmail.com</p>
      </div>
    </div>

    <div className='gpt3__footer-copyright'>
      <p>all rights reserved</p>
    </div>
    </div>
  )
}

export default Footer
