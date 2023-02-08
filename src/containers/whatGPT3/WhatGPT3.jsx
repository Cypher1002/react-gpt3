import React from 'react'
import './whatgpt.css';
import { Feature } from '../../components';
const WhatGpt = () => {
  return (
    <div className='gpt3__whatgpt3   section__margin' id='wgpt3'>
     <div className="gpt3__whatgpt3-feature">
       <Feature title='what is GPT3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nobis similique voluptas eligendi, quisquam autem!'/>
     </div>

     
     <div className="gpt3__whatgpt3-heading">
       <h1 className='gradient__text'>n
         possibilities are beyond ur imagination
       </h1>
        <p>Explore the libraray</p>
    </div>
    <div className='gpt3__whatgpt3-container'>
      <Feature title='chatbots' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nobis similique voluptas eligendi, quisquam autem!'/>
      <Feature  title='Knowledgebase' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nobis similique voluptas eligendi, quisquam autem!'/>
      <Feature  title='Education' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nobis similique voluptas eligendi, quisquam autem!'/>
      
      </div>

    </div>
  )
}

export default WhatGpt
