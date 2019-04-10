import React from 'react'
import { animated } from 'react-spring'
import { secondary } from '../components/colours'

function NavBar() {
  const navbarStyles = {
    minHeight: '130px',
    width: '100%',
    zIndex: '-5',
    top: '0',
    left: '0',
    position: 'absolute',
    background: secondary,
  }
  return <animated.div style={navbarStyles} />
}
export default NavBar
