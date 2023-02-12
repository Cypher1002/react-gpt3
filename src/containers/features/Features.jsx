import React from 'react'
import './features.css'
import { Feature } from '../../components/navbar';
const featuresData = [
    {Title: "Lorem ipsum ",
      Text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at"
  },
  {Title: "Lorem ipsum dolor sit amet",
      Text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at"
  },
  {Title: "Lorem ipsum dolor sit amet",
      Text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at"
  },
  {Title: "Lorem ipsum dolor sit amet",
      Text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at"
  },
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding'id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at.</h1>
        <p>request early access</p>
      </div>
      <div className='gpt3__features-containers'>
          {featuresData.map((item,index)=>(
            <Feature title={item.Title} text={item.Text} key={item.Title + index}/>
          ))}
      </div>
    </div>
  )
}

export default Features