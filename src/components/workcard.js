import React from 'react'
import { Link } from 'gatsby'
import { secondary } from '../components/colours'

const WorkCard = ({ title, slug }) => (
  <Link
    to={slug}
    css={`
      text-decoration: none;
    `}
  >
    <div
      css={`
        display: grid;
        grid-template-rows: 5fr 1fr;
        min-height: 300px;
        min-width: 300px;
        border-radius: 3px;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
        @media screen and (max-width: 320px) {
          min-width: 200px;
        }
      `}
    >
      <div>
        <img />
      </div>
      <h3
        css={`
          margin: 0;
          font-weight: 900;
          color: white;
          border-bottom-radius: 3px;
          padding: 4px;
          background: ${secondary};
        `}
      >
        {title}
      </h3>
    </div>
  </Link>
)

export default WorkCard
