import React from 'react'
import './possibility.css'
import PossibilityImg from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={PossibilityImg} alt="possibility"/>
      </div>

      <div className='gpt3__possibility-content'>
        <h4>request early acess to get started</h4>
        <h1 className="gradient__text">The possibilities are beyond imagination</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime molestiae minima saepe libero vitae accusantium ipsum error sint aperiam ullam.</p>
        <h4>request early acess</h4>
      </div>

      
    </div>
  )
}

export default Possibility
