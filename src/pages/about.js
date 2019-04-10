import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavBar from '../components/navbar'
import { PageHeading } from '../components/typography'
import { Container } from '../components/shared'

const AboutImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "office.jpg" }) {
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
const About = () => (
  <Layout>
    <NavBar fullPage={false} />
    <SEO title="About Us" />
    <Container text>
      <PageHeading>About</PageHeading>
      <AboutImage />
      <p>
        WE’RE NOT AN <b>AGENCY</b>. WE GIVE CREATIVES AGENCY.
      </p>
      <p>
        KavPRO was initially conceived as the name of a production company, a
        portmanteau of Kavanaugh and Productions. If you’d asked any of us a
        year ago if this is what we’d be doing, we’d have told you no. Is KavPRO
        still a production company? Kind of - but what we really do is create
        online and offline experiences through strong brand design and effective
        creative content.
      </p>
      <PageHeading>2012</PageHeading>
      <p>
        Our principals have been collaborating on projects from as early as 2012
        when Jordan Jones and Jean-Pierre Kavanaugh were in high school, hosting
        events and making (admittedly terrible) flyers. Some wedding photography
        was also involved.
      </p>
      <PageHeading>2014</PageHeading>
      <p>
        In 2014, Dwayne Milford was pulled into the mix. By then everyone was in
        University and trying to make an impact. In 2015, Jean-Pierre and Jordan
        collaborated on a website build for the UWI Mona Guild. In 2016,
        Jean-Pierre and Dwayne collaborated on a human rights campaign for the
        United Nations Development Programme in Jamaica, building a website,
        creating a campaign video and logo and doing campaign posters.
      </p>
      <PageHeading>2017</PageHeading>
      <p>
        In 2017, Jean-Pierre and Dwayne collaborated on a billboard, event
        signage, newspaper ads and a newspaper supplements for various clients.
        In 2018, we finally all collaborated on the Enhancing Knowledge and
        Application of Comprehensive Disaster Management (EDACDM) Initiative -
        which was focused on raising awareness around Disaster Risk Reduction in
        the Caribbean. For the EKACDM, we built their website, created
        newsletters and other graphic content, provided photography coverage and
        did feature videos for the project.
      </p>
      <PageHeading>2018</PageHeading>
      <p>
        2018 marked the turning point. It’s when we decided to formally start
        collaborating. We work extremely well together and our skill sets
        combine excellently. The next question was “what should the business
        look like?” KavPRO is (and always will be) a partnership. Our core team
        members are partners in the business, and all decisions are team
        decisions. External collaborators are compensated fairly, and we don’t
        pad prices from suppliers (although we do charge an administrative fee).
        Quality, authentic content is key in connecting with people. It
        shouldn’t just look good, but be meaningful. We believe in creating
        authentic content that builds brands. Let’s work together to transform
        yours.
      </p>
    </Container>
  </Layout>
)

export default About
