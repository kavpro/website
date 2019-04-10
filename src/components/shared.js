import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 10px;
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
  ${props =>
    props.text &&
    css`
      text-align: justify;
      max-width: 700px;
      line-height: 1.58;
      padding: 10px;
      color: rgba(0, 0, 0, 0.84);
    `}
    ${props =>
      props.shadow &&
      css`
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
      `}
`
const ServicesContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  min-height: 400px;
  @media screen and (max-width: 1093px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
const ClientsContainer = styled(Container)`
  min-height: 400px;
  text-align: center;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  margin-bottom: 80px;

  @media screen and (max-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const ContactContainer = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 3fr;
  min-height: 400px;
  border-radius: 3px;
  margin-bottom: 40px;
  padding: 0;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 10px;
  }
`

const CarouselContainer = styled(Container)`
  min-height: 400px;
  text-align: center;
`
const ClientImg = styled.img`
  transition: all 0.4s;
  width: 50%;
  filter: grayscale(100%);
  &:hover {
    filter: none;
  }
  @media screen and (max-width: 481px) {
    width: 50%;
    filter: none;
  }
`
const FooterContainer = styled(Container)`
  display: grid;
  color: white;
  grid-template-columns: 200px repeat(3, 1fr);
  height: 250px;
  @media screen and (max-width: 655px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const FooterLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  line-height: 40px;
`

export {
  ServicesContainer,
  ClientsContainer,
  CarouselContainer,
  ContactContainer,
  FooterContainer,
  FooterLink,
  Container,
  ClientImg,
}
