import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>My Vinyl List</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="listings">Lists</Link>
        <Link to="new">Add Record</Link>
      </div>
    </nav>
  )
}

export default Nav
