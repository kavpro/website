import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import { keyframes } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavBar from '../components/navbar'
import BackgroundBanner from '../components/banner'
import { secondary } from '../components/colours'
import { H1 } from '../components/typography'
import { Button, ButtonLink } from '../components/inputs'
import { Triangle, Ellipse } from '../components/shapes'
import ContactBox from '../components/contactbox'
import ServiceCard from '../components/servicecard'
import { HeroHeading, HeroSubHeading } from '../components/typography'
import {
  ClientImg,
  Container,
  ServicesContainer,
  ClientsContainer,
  ContactContainer,
} from '../components/shared'
import { triangle, ellipse, message } from '../images'
import { clients, services } from '../components/utils'

const IndexPage = () => (
  <Layout
    style={{
      margin: 'auto',
    }}
  >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <NavBar fullPage={true} />
    <Container style={{ marginBottom: '200px' }} center>
      <Triangle src={triangle} alt="triangle" />
      <Ellipse src={ellipse} alt="triangle" />
      <BackgroundBanner />
      <AnimatedHeroText />
    </Container>
    <div style={{ textAlign: 'center' }}>
      <H1>What We Do</H1>
      <ServicesContainer>
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </ServicesContainer>
    </div>
    <div>
      <Container center>
        <H1>Our Clients</H1>
      </Container>
      <ClientsContainer>
        {clients.map((client, index) => (
          <ClientImg src={client} alt="Client Image" />
        ))}
      </ClientsContainer>
    </div>
    <div>
      <Container center>
        <H1>Get In Touch</H1>
      </Container>
      <ContactContainer>
        <HoveringMessage />
        <div
          style={{
            padding: '20px',
          }}
        >
          <ContactBox />
        </div>
      </ContactContainer>
    </div>
  </Layout>
)

function HoveringMessage() {
  const hover = keyframes`
  0% {
    margin-bottom: 0px;
  }
  50%{
    margin-bottom: 50px;
  }
  100% {
    margin-bottom: 0px;

  }
  `
  return (
    <div
      css={`
        background: ${secondary};
        padding: 20px;
        display: grid;
        min-height: 170px;
        justify-content: center;
        align-items: center;
      `}
    >
      <img
        css={`
          filter: drop-shadow(10px 10px 1px #024960);
          animation: 5s ${hover} infinite;
        `}
        src={message}
        height="100"
        alt="Message"
      />
    </div>
  )
}
function AnimatedHeroText() {
  const props = useSpring({
    from: {
      marginTop: '200px',
      opacity: '0',
    },
    to: { opacity: '1', marginTop: '0' },
    config: config.gentle,
  })
  return (
    <animated.div style={props}>
      <HeroHeading>kavpro</HeroHeading>
      <HeroSubHeading>independent creative consultancy</HeroSubHeading>
      <div
        css={`
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          @media screen and (max-width: 665px) {
            margin: auto;
            margin-top: 20px;
            max-width: 400px;
          }
          @media screen and (max-width: 507px) {
            margin: auto;
            margin-top: 50px;
            max-width: 400px;
          }
        `}
      >
        <ButtonLink
          href="https://www.behance.net/KavPRO"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Works
        </ButtonLink>
        <Button to="/contact">contact us</Button>
      </div>
    </animated.div>
  )
}

export default IndexPage
