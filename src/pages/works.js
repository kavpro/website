import React from 'react'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import SEO from '../components/seo'
import { PageHeading } from '../components/typography'
import { Container } from '../components/shared'

const Works = props => (
  <Layout>
    <NavBar fullPage={false} />
    <SEO title="Works" />
    <Container text>
      <PageHeading>Works</PageHeading>
    </Container>
  </Layout>
)

export default Works
