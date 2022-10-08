import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../Avatar/Avatar'

import './Navbar.css'

const Navbar = () => {
    let User = null;
  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' />
            </Link>
            <Link to='/' className='nav-item nav-btn'>
                About
            </Link>
            <Link to='/' className='nav-item nav-btn'>
                Products
            </Link>
            <Link to='/' className='nav-item nav-btn'>
                For Teams
            </Link>
            <form>
                <input   type='text' placeholder='Search...' />
                <img src={search} alt='search' width="18" className='icon'/>
            </form>
            {User === null ? 
            <Link to='/auth' className='nav-item nav-link'>Login</Link>:
            <>
                <Link style={{textDecoration: 'none'}} to="/user" className=''><Avatar backgroundColor='#009dff' py='7px' px='10px' borderRadius='50%' color='white'>N</Avatar></Link>
                <button className='nav-item nav-link'>Logout</button>
            </>}
        </div>
    </nav>
  )
}

export default Navbar 