import React from 'react'
// import { Link } from 'react-router-dom'
// import { BlogData } from './BlogData'

function BlogCategory({title, picture, br}) {
  return (
    <div>
      {/* {BlogData.map((item) => (
        <Link key={item.id} to={`/blog/${item.id}`}>
          <div>{item.title}</div>
        </Link>
      ))} */}

  
      <div className='bg-white rounded-lg w-fit p-3 shadow-md my-5 max-h-[100%] hover:shadow-lg pb-10'>
      <div className='relative w-fit flex flex-col justify-center items-center'>
       <img src={picture} alt=''/>
       <h1 className='bg-primary w-fit text-white p-1 px-2 rounded-lg relative z-10 -mt-5 text-center'>Feburary 16, 2023</h1>
       <h1 className='font-semibold text-xl text-center my-10 '>{title}<br /> {br} </h1>
       <button className='bg-slate-300 py-3 px-8 rounded-lg hover:bg-primary hover:text-white font-semibold'> Read More</button>
      </div>
     

     
     
   
     
      </div>
    </div>
  )
}

export default BlogCategory