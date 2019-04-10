import React from 'react'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import { PageHeading } from '../components/typography'
import { Container } from '../components/shared'

const Process = () => (
  <Layout>
    <NavBar fullPage={false} />
    <Container>
      <PageHeading>Our Process </PageHeading>
    </Container>
  </Layout>
)

export default Process
