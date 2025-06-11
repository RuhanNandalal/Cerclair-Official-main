import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const OutlineBlueButton = (props) => {
  return (
    <>
      <div className="outline-blue-button-container">
        <button className="outline-blue-button-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .outline-blue-button-container {
            display: flex;
            position: relative;
          }
          .outline-blue-button-button {
            color: var(--dl-color-blue-500);
            cursor: pointer;
            background: white;
            transition: all 0.15s ease-in;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: var(--dl-color-blue-500);
            border-width: 1px;
            padding-left: var(--dl-layout-space-doubleunit);
            border-radius: var(--dl-layout-radius-radius5);
            padding-right: var(--dl-layout-space-doubleunit);
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: transparent;
          }
          .outline-blue-button-button:hover {
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

OutlineBlueButton.defaultProps = {
  button: 'Button',
}

OutlineBlueButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineBlueButton
