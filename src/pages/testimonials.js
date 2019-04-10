import React from 'react'
import Layout from '../components/layout'
import NavBar from '../components/navbar'

import { PageHeading } from '../components/typography'
import { Container } from '../components/shared'
const Testimonials = () => (
  <Layout>
    <NavBar fullPage={false} />
    <Container>
      <PageHeading>Testimonials</PageHeading>
    </Container>
  </Layout>
)

export default Testimonials
