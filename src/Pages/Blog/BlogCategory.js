import React from 'react'
import { Link } from 'react-router-dom'
import { BlogData } from './BlogData'

function BlogCategory() {
  return (
    <div>
      {BlogData.map((item) => (
        <Link key={item.id} to={`/blog/${item.id}`}>
          <div>{item.title}</div>
        </Link>
      ))}
    </div>
  )
}

export default BlogCategory