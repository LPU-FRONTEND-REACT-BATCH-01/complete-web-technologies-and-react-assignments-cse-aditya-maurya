
import React from 'react'
import { Link } from 'react-router'
const NavBar = () => {
  return (
   <nav>
   <Link to={'landing'}>Landing Page</Link>
   <Link to={'product'}>Product</Link>
   <Link to={'about'}>About</Link>
   <Link to={'cart'}>Cart</Link></nav>
  )
} 

export default NavBar