import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams()
  console.log(slug)
  return (
    <div>BlogPost</div>
  )
}
