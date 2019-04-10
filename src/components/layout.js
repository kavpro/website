import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Hamburger from './hamburger'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: 'grid',
        }}
      >
        <Hamburger />
        <Header />

        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
