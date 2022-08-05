import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h1>My Vinyl List</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/lists">Lists</Link>
        <p></p>
      </div>
    </nav>
  )
}

export default Nav
