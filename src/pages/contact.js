import React from 'react'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import SEO from '../components/seo'
import { PageHeading } from '../components/typography'
import { Container } from '../components/shared'
import ContactBox from '../components/contactbox'
const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />

    <NavBar fullPage={false} />
    <Container>
      <PageHeading>Contact</PageHeading>
      <ContactBox />
    </Container>
  </Layout>
)

export default Contact
