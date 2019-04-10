import styled from 'styled-components'
import { headingColour } from './colours'

const responsiveHeadings = `  @media screen and (max-width: 665px) {
  font-size: 24px;
}`
const H1 = styled.h1`
  color: ${headingColour};
  margin-bottom: 60px;
  ${responsiveHeadings}
`
const H2 = styled.h1`
  color: ${headingColour};
  ${responsiveHeadings}
`
const HeroHeading = styled.h1`
  font-size: 150px;
  color: white;
  letter-spacing: 12px;
  text-transform: uppercase;
  font-family: Montserrat;
  font-weight: 900;
  margin-top: 40px;
  margin-bottom: 0;

  @media screen and (max-width: 1093px) {
    font-size: 100px;
  }
  @media screen and (max-width: 665px) {
    font-size: 80px;
  }
  @media screen and (max-width: 481px) {
    font-size: 60px;
    letter-spacing: 3px;
  }
`
const HeroSubHeading = styled.h2`
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 400;
  text-transform: capitalize;
  color: white;
  margin-top: 5px;
  @media screen and (max-width: 1093px) {
    font-size: 30px;
  }

  @media screen and (max-width: 665px) {
    font-size: 20px;
    max-width: 250px;
    margin: auto;
  }
`

const PageHeading = styled.h1`
  font-family: Montserrat;
  color: ${headingColour};
  @media screen and (max-width: 665px) {
    font-size: 24px;
  }
`
export { H1, H2, HeroHeading, HeroSubHeading, PageHeading }
