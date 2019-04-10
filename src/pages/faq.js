import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import SEO from '../components/seo'
import { PageHeading } from '../components/typography'
import { Container } from '../components/shared'
const FaqImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "faq.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
const FAQ = () => (
  <Layout>
    <NavBar fullPage={false} />
    <SEO title="Frequently Asked Questions" />
    <Container text>
      <PageHeading>Frequently Asked Questions</PageHeading>
      <FaqImage />
      <h2>Who is KavPRO?</h2>
      <p>
        KavPRO is an independent creative consultancy. Our principals are
        Jean-Pierre Kavanaugh (Founder and Creative Lead), Jordan Jones (Chief
        Technical Officer) and Dwayne Milford (Design Lead). We don’t believe in
        having a C-Suite, everyone is a partner and has authority.
      </p>
      <h2>What do you do?</h2>
      <p>
        We do work in 5 main disciplines:
        <ul>
          <li>Photography</li>
          <li>Videography</li>
          <li>Graphic Design</li>
          <li>Web Design</li>
          <li>Communication Strategy</li>
        </ul>
        Ideally, we work in a combination of these to provide you with the best
        possible content and branding solutions. We also believe in sharing
        knowledge about these disciplines, ask us for our favourite free
        resources - or get in touch with us about teaching your team/conducting
        a workshop.
      </p>
      <h2>What are your values?</h2>
      <p>
        We believe in allowing creators freedom. We only do work that we want to
        do and believe in. We’re big on contributing to the overall creative
        body of knowledge, and in the free flow of information. One of our
        guarantees is that 20% of our annual billable hours will be given away
        free to worthy causes - get in touch if you have a project that will be
        impactful that you think we can partner on.
      </p>
      <h2>How do I get in touch with your team?</h2>
      <p>
        For general enquiries, click <Link to="/contact">here</Link> or send us
        an email at team@kavpro.xyz
      </p>
    </Container>
  </Layout>
)

export default FAQ
