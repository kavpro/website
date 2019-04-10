import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import { PageHeading, H2 } from '../components/typography'
import { Container } from '../components/shared'
import {
  primary,
  secondary,
  accent,
  headingColour,
} from '../components/colours'

import lightLogo from '../images/white_logo.png'
import darkLogo from '../images/dark_logo.png'

const Box = ({ colour }) => (
  <div
    css={`
      width: 100px;
      height: 100px;
      border-radius: 3px;
      color: white;
      display: grid;
      justify-content: center;
      align-content: center;
      background: ${colour};
    `}
  >
    {colour}
  </div>
)
const Brand = () => (
  <Layout>
    <SEO title="Branding" />
    <NavBar fullPage={false} />
    <Container>
      <PageHeading>Brand</PageHeading>
      <p>
        KavPRO's branding is an integral part of our company culture. It was
        designed to be cohesive, yet robust enough to stand out in today's
        spectrum of content.
      </p>

      <H2>Colours</H2>
      <div
        css={`
          display: grid;
          grid-template-columns: repeat(4, 150px);
          @media screen and (max-width: 500px) {
            grid-template-columns: 1fr 1fr;
          }
        `}
      >
        <Box colour={primary} />
        <Box colour={secondary} />
        <Box colour={accent} />
        <Box colour={headingColour} />
      </div>
      <p>
        Our colour scheme is fairly basic but at the same time not lacking depth
        or vibrance, which really reflects what KavPRO represents.{' '}
      </p>
      <H2>Typography</H2>
      <p>
        We use the time tested font, Montserrat for passages and Montserrat
        Black for headings, subheadings and the like. As show below.
      </p>
      <div
        css={`
          display: grid;
          grid-template-columns: 1fr 3fr;
          @media screen and (max-width: 665px) {
            grid-template-columns: 1fr;
          }
        `}
      >
        <div>
          <h1>Heading</h1>
          <h2>Subheading</h2>
          <h3>Subheading</h3>
          <h4>Subheading</h4>
          <h5>Subheading</h5>
          <h6>Subheading</h6>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <H2>Logo</H2>
      <p>
        Lastly, but certainly not least is the easily recognisable KavPRO logo
      </p>
      <div
        css={`
          display: grid;
          grid-template-columns: 300px 300px;
          @media screen and (max-width: 650px) {
            grid-template-columns: 1fr;
          }
        `}
      >
        <div style={{ textAlign: 'center' }}>
          <a
            href={`${lightLogo}`}
            css={`
              text-align: center;
            `}
          >
            <img
              height="200"
              src={lightLogo}
              css={`
                background: grey;
                border-radius: 50%;
              `}
              alt="Light Logo"
            />
          </a>
          <br />
          <a href={`${darkLogo}`}>Download</a>
        </div>
        <div
          css={`
            text-align: center;
          `}
        >
          <a href={`${darkLogo}`} style={{ textAlign: 'center' }}>
            <img height="200" src={darkLogo} alt="Dark Logo" />
          </a>
          <br />
          <a href={`${darkLogo}`}>Download</a>
        </div>
      </div>
    </Container>
  </Layout>
)

export default Brand
