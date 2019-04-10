import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NavBar from '../components/navbar'
import { Container } from '../components/shared'

const NotFoundPage = () => (
  <Layout>
    <NavBar fullPage={false} />
    <SEO title="404: Not found" />
    <Container
      shadow
      center
      css={`
        padding: 40px;
        margin-top: 40px;
        margin-bottom: 40px;
      `}
    >
      <h1
        css={`
          font-size: 130px;
          font-family: Montserrat-Black;
        `}
      >
        404
      </h1>
      <h1>Uhhhh Ohhh</h1>
      <p>
        You just hit a route that doesn&#39;t exist... <b>the sadness.</b>
      </p>
    </Container>
  </Layout>
)

export default NotFoundPage
