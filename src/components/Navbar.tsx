import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const Navbar = () => {
  const {user} = useContext(GlobalContext)
  const path = useLocation().pathname

  return (
    <nav>
      <h1 className={path === '/' ? 'home' : path.replace('/','')}>
        <Link to="/">Cocktail</Link>
      </h1>

      <NavLink to="/about">About</NavLink>
      <NavLink to="/cocktails">Recipes</NavLink>
      <p>{user}</p>
    </nav>  
  )
}

export default Navbar