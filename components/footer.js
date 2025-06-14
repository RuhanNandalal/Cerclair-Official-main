import React from 'react'

import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer">
        <div className="footer-container1">
          <div className="footer-container2">
            <span className="footer-text10">Cerclair</span>
            <span className="footer-gray-text11">Social</span>
            <div className="footer-gray-container4">
                <a
                  href="https://aaa.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-gray-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="footer-gray-icon10"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                </a>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="footer-gray-icon12"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-gray-icon14"
                >
                  <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="footer-gray-icon16">
                  <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="footer-gray-icon18">
                  <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                </svg>
              </div>
            
          </div>
          
          <div className="footer-container3">
            <div className="footer-container4">
              <span className="footer-text12 Large">Company</span>
              <span className="footer-text13 Large">About Us</span>
              <span className="footer-text14 Large">Services</span>
              <span className="footer-text15 Large">Our Team</span>
            </div>
            <div className="footer-container5">
              <span className="footer-text16 Large">Pages</span>
              <span className="footer-text17 Large">Home</span>
              <span className="footer-text18 Large">Contact Us</span>
            </div>
            <div className="footer-container6">
              <span className="footer-text20 Large">Products</span>
              <span className="footer-text21 Large">Landing Page</span>
              <span className="footer-text22 Large">Portfolio</span>
              <span className="footer-text23 Large">Poster</span>
              <span className="footer-text23 Large">Logo</span>
            </div>
          </div>
        </div>
        <span className='copyright'>All rights reserved. Copyright © 2025 Cerclair.</span>
        <img alt="image" src="/waves-white.svg" className="footer-image" />
      </footer>
      <style jsx>
        {`
          .copyright {
            text-align: center;
            margin-top: -1rem;
            margin-bottom: 0.5rem;
          }
          .footer-gray-text11 {
            margin-top: 1rem;
            color: #d2d6daff;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          .footer-gray-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            margin-bottom: 3rem;
          }
          .footer-gray-link {
            display: contents;
          }
            .footer-gray-icon10 {
            fill: var(--dl-color-gray-white);
            width: 20px;
            margin-right: var(--dl-layout-space-unit);
            text-decoration: none;
          }
          .footer-gray-icon12 {
            fill: var(--dl-color-gray-white);
            width: 20px;
            margin-right: var(--dl-layout-space-unit);
          }
          .footer-gray-icon14 {
            fill: var(--dl-color-gray-white);
            width: 20px;
            margin-right: var(--dl-layout-space-unit);
          }
            .footer-gray-icon16 {
            fill: var(--dl-color-gray-white);
            width: 20px;
            margin-right: var(--dl-layout-space-unit);
          }
          .footer-gray-icon18 {
            fill: var(--dl-color-gray-white);
            width: 20px;
            margin-right: var(--dl-layout-space-unit);
          }
          .footer-footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
          .footer-container1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-tripleunit);
            z-index: 1;
            max-width: 1320px;
            justify-content: space-between;
          }
          .footer-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text10 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-container3 {
            display: flex;
            justify-content: space-between;
          }
          .footer-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text12 {
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text13 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text13:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text14 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text14:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text15 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text15:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-sixunits);
            flex-direction: column;
          }
          .footer-text16 {
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text17 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text17:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text18 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text18:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text19 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text19:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container6 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-sixunits);
            flex-direction: column;
          }
          .footer-text20 {
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text21 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text21:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text22 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text22:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text23 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-text23:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .footer-container1 {
              padding: var(--dl-layout-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .footer-container1 {
              flex-direction: column;
            }
            .footer-container2 {
              align-items: center;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .footer-container5 {
              margin-left: var(--dl-layout-space-doubleunit);
            }
            .footer-container6 {
              margin-left: var(--dl-layout-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
