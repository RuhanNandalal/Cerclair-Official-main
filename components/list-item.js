import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ListItem = (props) => {
  return (
    <>
      <div className="list-item-container">
        <h5 className="list-item-text1 HeadingThree">{props.newProp}</h5>
        <span>{props.description}</span>
      </div>
      <style jsx>
        {`
          .list-item-container {
            flex: 0 0 auto;
            display: flex;
            padding: 1rem;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .list-item-text1 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-layout-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

ListItem.defaultProps = {
  description:
    'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
  newProp: '1. Listen to Social Conversations',
}

ListItem.propTypes = {
  description: PropTypes.string,
  newProp: PropTypes.string,
}

export default ListItem
