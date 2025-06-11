import React from 'react'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

import PrimaryBlueButton from './primary-blue-button'

const Header = (props) => {
  return (
    <>
      <div data-role="Header" className="header-header">
        <nav className="header-nav">
          <div className="header-container1">
            <Link href="/">
              <img src="/Cerclair.svg" alt="Cerclair" className='svg' />
            </Link>
            <div className="header-menu1">
              <Link href="/" legacyBehavior>
                <a className="header-link2 Large">Home</a>
              </Link>
              <Link href="/#service" legacyBehavior>
                <a className="header-link2 Large">Services</a>
              </Link>
              <Link href="/#team" legacyBehavior>
                <a className="header-link2 Large">Our Team</a>
              </Link>
            </div>
            <div className="header-container2">
              <div className="header-bot">
                <Link href="/profile" legacyBehavior>
                  <a>
                    <PrimaryBlueButton button="Contact Us" />
                  </a>
                </Link>
              </div>
              <div data-role="BurgerMenu" className="header-burger-menu">
                <svg viewBox="0 0 1024 1024" className="header-icon1">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="header-mobile-menu">
          <div className="header-top">
            <Link href="/">
              <img src="/Cerclair.svg" alt="Cerclair" />
            </Link>
            <div data-role="CloseMobileMenu" className="header-close-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon3">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="header-mid">
            <div className="header-menu2">
              <Link href="/" legacyBehavior>
                <a className="header-link6 Large">Home</a>
              </Link>
              <Link href="/#service" legacyBehavior>
                <a className="header-link6 Large">Services</a>
              </Link>
              <Link href="/#team" legacyBehavior>
                <a className="header-link6 Large">Our Team</a>
              </Link>
            </div>
          </div>
          <div className="header-bot">
            <Link href="/profile" legacyBehavior>
              <a>
                <PrimaryBlueButton button="Contact Us" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .svg {
            cursor: pointer;
          }
          .header-header {
            top: 0px;
            left: auto;
            right: auto;
            width: 100%;
            bottom: auto;
            display: flex;
            z-index: 3;
            position: fixed;
            max-width: 1320px;
            padding-left: var(--dl-layout-space-unitandahalfunit);
            padding-right: var(--dl-layout-space-unitandahalfunit);
            justify-content: center;
          }
          .header-nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            height: 60px;
            display: flex;
            flex-wrap: wrap;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
              0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unitandahalfunit);
            border-radius: var(--dl-layout-radius-radius40);
            padding-right: var(--dl-layout-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-halfunit);
            backdrop-filter: saturate(200%) blur(30px);
            justify-content: space-between;
            background-color: hsla(0, 0%, 100%, 0.8) !important;
          }
          .header-container1 {
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link1 {
            color: var(--dl-color-secondary-700);
            font-weight: 600;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            text-decoration: none;
          }
          .header-menu1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header-link2 {
            margin-top: var(--dl-layout-space-halfunit);
            transition: 0.3s;
            font-weight: 600;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .header-link2:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link3 {
            margin-top: var(--dl-layout-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .header-link3:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link4 {
            margin-top: var(--dl-layout-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .header-link4:hover {
            color: var(--dl-color-gray-500);
          }
          .header-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-icon1 {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-layout-space-unit);
          }
          .header-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-unitandahalfunit);
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .header-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link5 {
            color: var(--dl-color-secondary-700);
            font-weight: 600;
            text-decoration: none;
          }
          .header-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-icon3 {
            width: 24px;
            height: 24px;
          }
          .header-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .header-menu2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .header-link6 {
            transition: 0.3s;
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
            font-weight: 600;
          }
          .header-link6:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link7 {
            transition: 0.3s;
            margin-bottom: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .header-link7:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link8 {
            transition: 0.3s;
            text-decoration: none;
          }
          .header-link8:hover {
            color: var(--dl-color-gray-500);
          }
          .header-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .header-nav {
              max-width: 960px;
            }
            .header-menu1 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .header-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-container3 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Header
