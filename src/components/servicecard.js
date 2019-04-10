import React from 'react'

import { secondary } from './colours'

const ServiceCard = ({ icon, title, body }) => (
  <div
    css={`
      display: grid;
      grid-template-rows: 1fr 20px 100px;
      padding: 10px;
      max-height: 300px;
      align-items: center;
      justify-items: center;
      min-width: 300px;
      color: white;
      background: ${secondary};
      border-radius: 3px;
      @media screen and (max-width: 1093px) {
        max-width: 450px;
      }
      @media screen and (max-width: 425px) {
        min-width: 100px;
        margin: 10px;
      }
    `}
  >
    <img
      css={`
        height: 70px;
        @media screen and (max-width: 425px) {
          height: 50px;
        }
      `}
      src={icon}
      alt={title}
    />
    <p
      css={`
        margin: 0;
        font-weight: 900;
      `}
    >
      {title}
    </p>
    <p
      css={`
        text-align: justify;
      `}
    >
      {body}
    </p>
  </div>
)

export default ServiceCard
