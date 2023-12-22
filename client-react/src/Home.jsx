import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <h1> this is home</h1>
      <Link to="/lab " > go to lab</Link>
    </div>
  )
}

export default Home
