import React from 'react'

const Avatar = ({ children, backgroundColor, borderRadius, fontSize, color, cursor, py, px}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    borderRadius,
    textAlign: 'center',
    fontSize,
    color: color || 'black',
    cursor: cursor || null,
    textDecoration: 'none'
  }
  return (
    <div style={style}>
      { children }
    </div>
  )
}

export default Avatar