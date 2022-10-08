import React from 'react'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

const Home = () => {
  return (
    <div className='home-container'>
      <LeftSidebar />
      <div className='home-main-container'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home