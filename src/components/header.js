import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import logo from '../images/logo.png'

const HeaderLink = styled(Link)`
  font-weight: 400;
  text-decoration: none;
  color: white;
`
const Header = () => (
  <header
    css={`
      display: grid;
      grid-template-columns: 100px auto repeat(5, 100px);
      color: white;
      align-items: center;
      padding: 20px;
      @media screen and (max-width: 641px) {
        display: none;
      }
    `}
  >
    <div>
      <Link to="/">
        <img height="100" src={logo} alt="Logo" />
      </Link>
    </div>
    <div />
    <div>
      <HeaderLink to="/">Home</HeaderLink>
    </div>
    <div>
      <HeaderLink to="/about">About</HeaderLink>
    </div>
    <div>
      <a
        css={`
          font-weight: 400;
          text-decoration: none;
          color: white;
        `}
        href="https://www.behance.net/KavPRO"
        target="_blank"
        rel="noopener noreferrer"
      >
        Works
      </a>
    </div>
    <div>
      <HeaderLink to="/team">Team</HeaderLink>
    </div>
    <div>
      <HeaderLink to="/contact">Contact</HeaderLink>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
