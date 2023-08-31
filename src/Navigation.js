import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/add">Add</Link>
    </div>
  )
}
