import React from 'react'
import articles from './Article-content';
import { Link } from 'react-router-dom';

const about = () => {
  return (
    <div>
    <div className='  my-8 '>
    <div className=' pb-6 w-402 h-158 left-498 top-193 font-poppins font-semibold text-4xl'>
    Everyone has a story to tell.
    </div>
    <div className='text-justify font-poppins text-lg '> 
    Medium is a home for human stories and ideas. Here, anyone 
    can share insightful perspectives,useful knowledge, <br /> and life
    wisdom with the world—without building a mailing list or a following first.
    The internet is noisy and <br /> chaotic; Medium is quiet yet full of insight. 
    Its simple, beautiful, collaborative, and helps you find the right audience <br />
    for whatever you have to say.We believe that what you read and write matters. Words can divide or empower us, <br />
    inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building <br />
    a system that rewards depth, nuance, and time well spent. <br /><br/>
    share your own story
   </div>   
   
   
   
  </div>
  <hr/>
  
  <div className="  font-poppins text-4xl   ">
    {articles.map(article => (
            <Link key={article.name} className="text-center font-sans " to={`/articles/${article.name}`}>
                
                  <div className=''>
                  <h3 className=' m-8  text-xl '>{article.title}</h3>
                  
                    </div>
                <hr/>
            </Link>
        ))}

  </div>
 </div>
  )
}

export default about

