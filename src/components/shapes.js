import styled from 'styled-components'

const Triangle = styled.img`
  position: absolute;
  z-index: -3;
  height: 500px;
  margin-top: -200px;
  @media screen and (max-width: 1093px) {
    height: 300px;
    margin-left: 0px;
    margin-top: -100px;
  }
  @media screen and (max-width: 655px) {
    height: 250px;
    margin-left: -90px;
  }
  @media screen and (max-width: 360px) {
    height: 250px;
    margin-left: -120px;
  }
`
const Ellipse = styled.img`
  position: absolute;
  z-index: -3;
  height: 120px;
  margin-left: 120px;
  margin-top: -100px;
  @media screen and (max-width: 1093px) {
    height: 90px;
    margin-left: 60px;
    margin-top: -50px;
  }
  @media screen and (max-width: 655px) {
    height: 80px;
    margin-left: -25px;
  }
  @media screen and (max-width: 320px) {
    margin-left: -35px;
  }
`

export { Triangle, Ellipse }
