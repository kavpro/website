import React from 'react'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import SEO from '../components/seo'
import { PageHeading } from '../components/typography'
import { Container } from '../components/shared'
const Success = () => (
  <Layout>
    <SEO title="Success" />

    <NavBar fullPage={false} />
    <Container text center>
      <PageHeading>Success!</PageHeading>
      <h2>Thanks For Contacting KavPRO</h2>

      <p>A representative will respond shortly.</p>
    </Container>
  </Layout>
)

export default Success
