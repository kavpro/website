import styled from 'styled-components'
import { Link } from 'gatsby'
import { primary, secondary } from './colours'

const inputStyles = `  border: none;
border-bottom: 1px solid #a8a8a8;
margin-bottom: 40px;
&:focus {
  outline: none;
  border-bottom: 1px solid ${secondary};
}`

const Input = styled.input`
  height: 30px;
  font-size: 14px;
  margin-top: 10px;
  font-family: sans-serif;
  ${inputStyles}
`
const TextArea = styled.textarea`
  ${inputStyles}
  height: 100px;
  margin-top: 10px;
  font-family: sans-serif;
  font-size: 14px;
`
const Submit = styled.input`
  padding: 10px;
  color: white;
  border: none;
  border-bottom: 2px solid #049156;
  border-radius: 3px;
  font-size: 18px;
  background: ${primary};
  transition: all 0.2 ease-in;
  &:active {
    background: #07bb70;
    border-bottom: 5px solid #049156;
    border-right: 5px solid #049156;
    border-left: 5px solid #049156;
  }
  &:focus {
    outline: none;
  }
`
const Button = styled(Link)`
  border-radius: 3px;
  color: white;
  min-width: 100px;
  font-size: 18px;
  max-width: 40%;
  text-align: center;
  font-family: Montserrat;
  text-transform: capitalize;
  text-decoration: none;
  background: none;
  &:before {
    width: 0;
    height: 0;
    border-top: 5px solid ${primary};
    border-left: 60px solid ${primary};
    border-bottom: 40px solid ${primary};
    margin-left: -12px;
    margin-top: -10px;
    border-radius: 4px;
    z-index: -3;
    position: absolute;
    content: '';
    transition: all 0.3s ease-out;
  }

  &:hover {
    &:before {
      border-right: 60px solid ${primary};
    }
  }
  @media screen and (max-width: 665px) {
    font-size: 13px;
    &:before {
      border-left: 40px solid ${primary};
      border-right: 60px solid ${primary};
      border-bottom: 32px solid ${primary};
    }
  }
`
const ButtonLink = styled.a`
  border-radius: 3px;
  color: white;
  min-width: 100px;
  font-size: 18px;
  max-width: 40%;
  text-align: center;
  font-family: Montserrat;
  text-transform: capitalize;
  text-decoration: none;
  background: none;
  &:before {
    width: 0;
    height: 0;
    border-top: 5px solid ${primary};
    border-left: 60px solid ${primary};
    border-bottom: 40px solid ${primary};
    margin-left: -12px;
    margin-top: -10px;
    border-radius: 4px;
    z-index: -3;
    position: absolute;
    content: '';
    transition: all 0.3s ease-out;
  }

  &:hover {
    &:before {
      border-right: 60px solid ${primary};
    }
  }
  @media screen and (max-width: 665px) {
    font-size: 13px;
    &:before {
      border-left: 40px solid ${primary};
      border-right: 60px solid ${primary};
      border-bottom: 32px solid ${primary};
    }
  }
`
export { Input, TextArea, Button, ButtonLink, Submit }
