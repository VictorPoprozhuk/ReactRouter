import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <h1> This page doesn't axist <Link to='/'> home</Link>
      </h1>
    </div >
  )
}

export default NotFoundPage