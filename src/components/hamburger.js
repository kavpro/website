import { Link } from 'gatsby'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { secondary } from '../components/colours'
import logo from '../images/logo.png'

const HeaderLink = styled(Link)`
  font-weight: 900;
  font-size: 30px;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
`
const Bar = styled.span`
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  background: white;
  border-radius: 3px;
  display: block;
`

const Hamburger = () => (
  <div>
    <Bar />
    <Bar />
    <Bar />
  </div>
)
const Menu = ({ toggle }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <animated.div
      style={props}
      css={`
        display: ${toggle ? 'block' : 'none'};
        position: fixed;
        top: 0;
        right:0
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 998;
        background: ${secondary};
        overflow: hidden;
      `}
    >
      <div
        css={`
          display: grid;
          justify-items: center;
          margin-top: 300px;
          @media screen and (max-height: 700px) {
            margin-top: 150px;
          }
        `}
      >
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
        <a
          css={`
            font-weight: 900;
            font-size: 30px;
            text-decoration: none;
            color: white;
            text-transform: uppercase;
          `}
          href="https://www.behance.net/KavPRO"
          target="_blank"
          rel="noopener noreferrer"
        >
          Works
        </a>
        <HeaderLink to="/team">Team</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
      </div>
    </animated.div>
  )
}

export default () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header
      css={`
        display: none;
        @media screen and (max-width: 641px) {
          display: grid;
          grid-template-columns: 100px 1fr 100px;
          color: white;
          align-items: center;
          justify-items: center;
          padding: 20px;
        }
        @media screen and (max-width: 320px) {
          padding-left: 5px;
          padding-right: 5px;
          padding-bottom: 50px;
        }
      `}
    >
      <Link to="/">
        <img height="80" src={logo} alt="Logo" />
      </Link>
      <div />
      <div
        css={`
          z-index: 999;
        `}
        onClick={() => setToggle(!toggle)}
      >
        <Hamburger />
      </div>
      <div
        css={`
          position: absolute;
        `}
        onClick={() => setToggle(!toggle)}
      >
        <Menu toggle={toggle} />
      </div>
    </header>
  )
}
