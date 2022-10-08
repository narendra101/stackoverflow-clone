import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClass='active'>
          <p>Home</p>
        </NavLink>
        <p>PUBLIC</p>
        <NavLink to='/questions' className='side-nav-links' activeClass='active'>
          <img src={Globe} alt='Globe' />
          <p>Questions</p>
        </NavLink>
        <div className='side-nav-div'>
          <NavLink to='/tags' className='side-nav-links' activeClass='active'>
            <p>Tags</p>
          </NavLink>
          <NavLink to='/users' className='side-nav-links' activeClass='active'>
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar