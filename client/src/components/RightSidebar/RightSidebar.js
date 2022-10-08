import React from 'react'
import Widget from '../Widget/Widget'
import WidgetTags from '../WidgetTags/WidgetTags'
import './RightSidebar.css'

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget />
      <WidgetTags />
    </aside>
  )
}

export default RightSidebar