import React from 'react'
import { secondary } from '../components/colours'
import { FooterContainer, Container, FooterLink } from './shared'

import logo from '../images/logo.png'
import doodles from '../images/doodles.png'
import facebook from '../images/facebook.svg'
import behance from '../images/behance.png'
import instagram from '../images/instagram.svg'

const Footer = props => (
  <React.Fragment>
    <div
      css={`
        text-align: center;
        padding-top: 60px;
        background: url(${doodles});
      `}
    />
    <div style={{ background: secondary, padding: '10px' }}>
      <FooterContainer>
        <div
          css={`
            @media screen and (max-width: 655px) {
              display: none;
            }
          `}
        >
          <img src={logo} height={100} style={{ padding: '20px' }} alt="Logo" />
        </div>

        <div>
          <h4>{'Company'.toUpperCase()}</h4>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/faq">F.A.Q</FooterLink>
        </div>
        <div>
          <h4>{'About'.toUpperCase()}</h4>
          <FooterLink to="/privacypolicy">Privacy Policy</FooterLink>
        </div>
        <div>
          <h4>{'Brand'.toUpperCase()}</h4>
          <FooterLink to="/brand">Brand</FooterLink>
        </div>
      </FooterContainer>
    </div>
    <div style={{ background: 'white' }}>
      <Container
        style={{
          padding: '10px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 50px)',
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/teamkavpro/"
        >
          <img src={facebook} height={30} alt="facebook" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.behance.net/KavPRO"
        >
          <img src={behance} height={30} alt="behance" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/teamkavpro/"
        >
          <img src={instagram} height={30} alt="instagram" />
        </a>
      </Container>
    </div>
  </React.Fragment>
)

export default Footer
/**
          <FooterLink to="/process">Our Process</FooterLink>
 * 
          <FooterLink to="/testimonials">Testimonials</FooterLink>
          <FooterLink to="/advertise">Advertise</FooterLink>
 * 
 *           <FooterLink to="/terms-and-conditions">
            Terms and Conditions
          </FooterLink>
          <FooterLink to="/deliverables">Deliverables</FooterLink>

 */
