import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard = (props) => {
  return (
    <>
      <div className="feature-card-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="feature-card-image"
        />
        <h5 className="feature-card-text1 HeadingThree">{props.newProp}</h5>
        <span className="feature-card-text2">{props.text}</span>
      </div>
      <style jsx>
        {`
          .feature-card-container {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            margin-top: var(--dl-layout-space-triplequarterunit);
            align-items: center;
            padding-left: var(--dl-layout-space-triplequarterunit);
            padding-right: var(--dl-layout-space-triplequarterunit);
            flex-direction: column;
          }
          .feature-card-image {
            height: 50px;
            object-fit: cover;
            margin-bottom: var(--dl-layout-space-unitandahalfunit);
          }
          .feature-card-text1 {
            color: var(--dl-color-secondary-600);
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .feature-card-text2 {
            text-align: center;
            margin-bottom: var(--dl-layout-space-unit);
          }
          @media (max-width: 767px) {
            .feature-card-container {
              width: 50%;
            }
          }
          @media (max-width: 479px) {
            .feature-card-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  imageSrc: '/rocket1.svg',
  imageAlt: 'image',
  text: 'Get the latest design ideas and turn it into reality.',
  newProp: 'Design',
}

FeatureCard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  newProp: PropTypes.string,
}

export default FeatureCard
