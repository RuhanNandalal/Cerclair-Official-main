import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const PrimaryBlueButton = (props) => {
  return (
    <>
      <div className="primary-blue-button-container">
        <button className="primary-blue-button-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .primary-blue-button-container {
            display: flex;
            position: relative;
          }
          .primary-blue-button-button {
            color: var(--dl-color-gray-white);
            outline: none;
            background-image: linear-gradient(310deg, #17c1e8ff, #ac43c7ff);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            transition: all 0.15s ease-in;
            padding-top: var(--dl-layout-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-layout-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-layout-space-unitandahalfunit);
            padding-bottom: var(--dl-layout-space-triplequarterunit);
          }
          .primary-blue-button-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

PrimaryBlueButton.defaultProps = {
  button: 'Button',
}

PrimaryBlueButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryBlueButton
