import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const OutlineGrayButton = (props) => {
  return (
    <>
      <div className="outline-gray-button-container">
        <button className="outline-gray-button-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .outline-gray-button-container {
            display: flex;
            position: relative;
          }
          .outline-gray-button-button {
            color: var(--dl-color-secondary-200);
            outlinr: none;
            transition: all 0.15s ease-in;
            padding-top: var(--dl-layout-space-triplequarterunit);
            border-color: var(--dl-color-secondary-200);
            padding-left: var(--dl-layout-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-layout-space-unitandahalfunit);
            padding-bottom: var(--dl-layout-space-triplequarterunit);
          }
          .outline-gray-button-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

OutlineGrayButton.defaultProps = {
  button: 'Button',
}

OutlineGrayButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineGrayButton
