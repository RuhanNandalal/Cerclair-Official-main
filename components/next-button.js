import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NextButton = (props) => {
  return (
    <>
      <div className="next-button-container">
        <button className="next-button-button button">
          <span className="next-button-text">{props.button}</span>
          <svg viewBox="0 0 1024 1024" className="next-button-icon1">
            <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
          </svg>
        </button>
      </div>
      <style jsx>
        {`
          .next-button-container {
            display: flex;
            position: relative;
          }
          .next-button-button {
            color: var(--dl-color-blue-500);
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: transparent;
          }
          .next-button-text {
            font-size: 1.25rem;
            margin-right: var(--dl-layout-space-halfunit);
          }
          .next-button-icon1 {
            fill: var(--dl-color-blue-500);
            width: var(--dl-layout-size-unit);
            height: var(--dl-layout-size-unit);
            transition: 0.3s;
          }
          .next-button-icon1:hover {
            transform: translateX(5px);
          }
        `}
      </style>
    </>
  )
}

NextButton.defaultProps = {
  button: 'Button',
}

NextButton.propTypes = {
  button: PropTypes.string,
}

export default NextButton
