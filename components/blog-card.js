import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NextButton from './next-button'

const BlogCard = (props) => {
  return (
    <>
      <div className="blog-card-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="blog-card-image"
        />
        <h5 className="blog-card-text1">{props.newProp}</h5>
        <span>{props.description}</span>
        <NextButton button="Read more"></NextButton>
      </div>
      <style jsx>
        {`
          .blog-card-container {
            flex: 1;
            width: 255px;
            margin: var(--dl-layout-space-unit);
            display: flex;
            max-width: 300px;
            min-width: 200px;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-card-image {
            width: 100%;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsl(0deg 0% 8% / 12%),
              0 0.125rem 0.25rem -0.0625rem hsl(0deg 0% 8% / 7%);
            object-fit: cover;
            transition: 0.3s;
            border-radius: var(--dl-layout-radius-radius75);
          }

          .blog-card-text1 {
            color: var(--dl-color-secondary-500);
            font-size: 1.25rem;
            font-style: normal;
            margin-top: var(--dl-layout-space-halfunit);
            font-weight: 600;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

BlogCard.defaultProps = {
  imageAlt: 'image',
  description:
    'Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover',
  newProp: 'Rover raised $65 million',
  imageSrc:
    'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-bags.jpg',
}

BlogCard.propTypes = {
  imageAlt: PropTypes.string,
  description: PropTypes.string,
  newProp: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default BlogCard
