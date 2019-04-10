import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const BackgroundBanner = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        css={`
          position: absolute;
          height: 600px;
          width: 100%;
          top: 0;
          left: 0;
          z-index: -5;
          @media screen and (max-width: 652px) {
            height: 500px;
          }
        `}
        style={{
          position: 'absolute',
          minHeight: '500px',
          width: '100%',
          top: '0',
          left: '0',
          zIndex: '-5',
        }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)
export default BackgroundBanner
