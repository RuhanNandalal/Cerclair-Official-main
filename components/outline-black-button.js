import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const OutlineBlackButton = (props) => {
  return (
    <>
      <div className="outline-black-button-container">
        <button className="outline-black-button-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .outline-black-button-container {
            display: flex;
            position: relative;
          }
          .outline-black-button-button {
            color: var(--dl-color-secondary-700);
            cursor: pointer;
            outline: none;
            min-width: 150px;
            transition: 0.3s;
            padding-top: var(--dl-layout-space-triplequarterunit);
            padding-left: var(--dl-layout-space-fourunits);
            border-radius: var(--dl-layout-radius-radius75);
            padding-right: var(--dl-layout-space-fourunits);
            padding-bottom: var(--dl-layout-space-triplequarterunit);
          }
          .outline-black-button-button:hover {
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

OutlineBlackButton.defaultProps = {
  button: 'Button',
}

OutlineBlackButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineBlackButton
