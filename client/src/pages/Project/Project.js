import React from 'react'
import { useParams } from 'react-router-dom'

export default function Project() {
  const { slug } = useParams()
  console.log(slug)
  return (
    <div>Project</div>
  )
}
