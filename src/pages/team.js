import React from 'react'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { PageHeading } from '../components/typography'
import { Container } from '../components/shared'

function withImageData(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query {
          teamImage: file(relativePath: { eq: "team.jpg" }) {
            childImageSharp {
              fluid(maxHeight: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          jkavImage: file(relativePath: { eq: "jean-pierre.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          jordanImage: file(relativePath: { eq: "jordan.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <WrappedComponent {...props} imageData={data} />}
    />
  )
}
const TeamImage = withImageData(props => (
  <Img fluid={props.imageData.teamImage.childImageSharp.fluid} />
))
const JeanPierre = withImageData(props => (
  <Img
    style={{ minWidth: '200px', maxWidth: '300px' }}
    fluid={props.imageData.jkavImage.childImageSharp.fluid}
  />
))
const Jordan = withImageData(props => (
  <Img
    style={{ minWidth: '200px', maxWidth: '300px' }}
    fluid={props.imageData.jordanImage.childImageSharp.fluid}
  />
))
const Team = () => (
  <Layout>
    <NavBar fullPage={false} />
    <SEO title="Team" />

    <Container text>
      <PageHeading>Team</PageHeading>
      <TeamImage />
      <p>
        We're a closely knit team of creatives specializing in different areas
        of arts, strategy and technology.
      </p>
      <div
        css={`
          display: grid;
          grid-template-columns: 1fr 1fr;
          @media screen and (max-width: 670px) {
            grid-template-columns: 1fr;
            justify-items: center;
          }
        `}
      >
        <div>
          <JeanPierre />
          <h3>Jean-Pierre Kavanaugh</h3>
          <p>Creative Lead</p>
        </div>
        <div>
          <Jordan />
          <h3>Jordan Jones</h3>
          <p>Chief Technical Officer</p>
        </div>
      </div>
    </Container>
  </Layout>
)

export default Team
