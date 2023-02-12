import React from 'react'
import './blog.css'
import {Article} from '../../components/navbar';
 import  {blog01,blog02,blog03,blog04,blog05} from './import';
const Blog = () => {
  return (
    <div className="gpt3__blog   section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
   </div>

   <div className='gpt3__blog-container'>
     <div className="gpt3__blog-container_groupA">
        <Article imgurl={blog01} date="sept 20, 2022" title="some title is gonna be here for the blog" />
     </div>

     <div className="gpt3__blog-container_groupB">
     <Article imgurl={blog02} date="sept 20, 2022" title="some title is gonna be here for the blog" />
     <Article imgurl={blog03} date="sept 20, 2022" title="some title is gonna be here for the blog" />
     <Article imgurl={blog04} date="sept 20, 2022" title="some title is gonna be here for the blog" />
     <Article imgurl={blog05} date="sept 20, 2022" title="some title is gonna be here for the blog" />
       </div>
  

   </div>
    </div>
  )
}

export default Blog