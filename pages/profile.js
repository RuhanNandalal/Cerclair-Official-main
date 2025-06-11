import React, { useRef, useState } from 'react'
import Head from 'next/head'


import Header from '../components/header'
import PrimaryBlueButton from '../components/primary-blue-button'
import Footer from '../components/footer'
import emailjs from "@emailjs/browser";
  

const Profile = (props) => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_nmv4qub',   
      'template_crpk27q',  
      form.current,
      'Zn4zRV6ILwlQOatED'  
    )
    .then((result) => {
      setIsSuccess(true);
      setMessage('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      setIsSuccess(false);
      setMessage('Failed to send message. Try again.');
      console.error(error);
      form.current.reset();
    });
  };
  return (
    <>
      <div className="profile-container10">
        <Head>
          <title>Contact - Cerclair</title>
          <meta property="og:title" content="Contact - Cerclair" />
        </Head>
        <Header></Header>

        <div className="profile-contact">
          <div className="profile-container19">
            <div className="profile-form1">
              <h2 className="profile-text28 HeadingOne">
                <span>Contact Us</span>
              </h2>
              <span className="profile-text30 Lead">
                We&apos;d like to talk with you.
              </span>
              <form ref={form} onSubmit={sendEmail} className="profile-form2">
                <label className="profile-text31 Label">Your name</label>
                <input
                  type="text"
                  name='from_name'
                  placeholder="Full Name"
                  className="profile-textinput1 Small input"
                />
                <label className="profile-text32 Label">
                  You&apos;re looking for
                </label>
                <input
                  type="text"
                  name="service"
                  placeholder="Service you're looking for"
                  className="profile-textinput2 Small input"
                />
                <label className="profile-text33 Label">
                  Your contact number
                </label>
                <input
                  type="phone"
                  name="contact"
                  placeholder="Your contact number"
                  className="profile-textinput3 Small input"
                />
                <label className="profile-text34 Label">Your message</label>
                <textarea
                  rows="8"
                  name="message"
                  placeholder="I want to say that..."
                  className="profile-textarea textarea Small"
                ></textarea>
                <div className="profile-container20">
                <div className="profile-container21">
                  <PrimaryBlueButton button="send message" type="submit"></PrimaryBlueButton>
                </div>
                {message && (
                  <div
                    style={{
                      marginTop: '1rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      backgroundColor: isSuccess ? '#d4edda' : '#f8d7da',
                      color: isSuccess ? '#155724' : '#721c24',
                      border: `1px solid ${isSuccess ? '#c3e6cb' : '#f5c6cb'}`
                    }}
                  >
                  {message}
                </div>
                )}

              </div>
              </form>
            </div>
            <div className="profile-info">
              <div className="profile-container22">
                <h3 className="HeadingTwo">
                  <span>
                    Contact
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Information</span>
                </h3>
                <span className="profile-text37">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </span>
                <div className="profile-container23">
                  <div className="profile-container24">
                    <svg viewBox="0 0 1024 1024" className="profile-icon12">
                      <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                    </svg>
                    <a
                      href="tel:+94 70 3079882"
                      className="profile-link1 Small"
                    >
                      (+94) 70 3079882
                    </a>
                  </div>
                  <div className="profile-container25">
                    <svg viewBox="0 0 1024 1024" className="profile-icon14">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <a
                      href="mailto:cerclair.official@outlook.com?subject="
                      className="profile-link2 Small"
                    >
                      cerclair.official@outlook.com
                    </a>
                  </div>
                  <div className="profile-container26">
                    <svg viewBox="0 0 1024 1024" className="profile-icon16">
                      <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                    </svg>
                    <span className="profile-text38 Small">
                      S-2/6, Anderson Flats, Narahenpita, Colombo 05
                    </span>
                  </div>
                </div>
                { <div className="profile-container27">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="profile-icon18"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="profile-icon20"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="profile-icon22"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="profile-icon24"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div> }
              </div>
              <img alt="image" src="/wave-1.svg" className="profile-image2" />
              <div className="profile-container28"></div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .profile-container10 {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .profile-profile {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            margin-top: var(--dl-layout-space-sixunits);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .profile-image1 {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-radius75);
          }
          .profile-container11 {
            flex: 2;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-sixunits);
            margin-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
          }
          .profile-container12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .profile-text10 {
            color: var(--dl-color-secondary-700);
            font-size: 1.5rem;
            font-style: normal;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .profile-container13 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
          }
          .profile-text11 {
            margin-right: var(--dl-layout-space-unit);
          }
          .profile-text12 {
            color: var(--dl-color-secondary-700);
            font-style: normal;
            font-weight: 600;
            text-align: center;
            margin-bottom: 2rem;
          }
          .profile-text14 {
            margin-right: var(--dl-layout-space-unit);
          }
          .profile-text15 {
            color: var(--dl-color-secondary-700);
            font-style: normal;
            font-weight: 600;
          }
          .profile-text18 {
            color: var(--dl-color-secondary-700);
            font-style: normal;
            font-weight: 600;
          }
          .profile-blog-posts {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-doubleunit);
            padding-right: var(--dl-layout-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .profile-text21 {
            color: var(--dl-color-secondary-500);
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
          }
          .profile-container14 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .profile-container15 {
            flex: 1;
            margin: var(--dl-layout-space-unit);
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .profile-card {
            flex: 1;
            width: 255px;
            display: flex;
            padding: var(--dl-layout-space-unitandahalfunit);
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius1);
            flex-direction: column;
            background-size: cover;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg');
          }
          .profile-container16 {
            display: flex;
            z-index: 2;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-text24 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .profile-text25 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-unit);
          }
          .profile-text26 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .profile-container17 {
            display: flex;
            position: relative;
          }
          .profile-button {
            color: var(--dl-color-blue-500);
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: transparent;
          }
          .profile-text27 {
            color: var(--dl-color-gray-white);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .profile-icon10 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .profile-container18 {
            top: auto;
            flex: 0 0 auto;
            left: 0px;
            right: auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius1);
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.4);
          }
          .profile-contact {
            width: 100%;
            max-width: 1320px;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-tripleunit);
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .profile-container19 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
            align-items: stretch;
            border-radius: var(--dl-layout-radius-radius1);
            flex-direction: row;
            background-color: var(--dl-color-gray-white);
            margin-top: 2rem;
          }
          .profile-form1 {
            flex: 5;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fourunits);
            padding-left: var(--dl-layout-space-doubleunit);
            padding-right: var(--dl-layout-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fourunits);
          }
          .profile-text28 {
            color: var(--dl-color-secondary-500);
            margin-bottom: var(--dl-layout-space-unit);
          }
          .profile-text30 {
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .profile-form2 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .profile-text31 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .profile-textinput1 {
            width: 100%;
            height: 40px;
            transition: 0.3s;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-layout-space-triplequarterunit);
            border-radius: var(--dl-layout-radius-radius5);
            padding-right: var(--dl-layout-space-triplequarterunit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .profile-textinput1:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .profile-text32 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .profile-text33 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
          }  
          .profile-textinput3 {
            width: 100%;
            height: 40px;
            transition: 0.3s;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-layout-space-triplequarterunit);
            border-radius: var(--dl-layout-radius-radius5);
            padding-right: var(--dl-layout-space-triplequarterunit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .profile-textinput3:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }  
          .profile-textinput2 {
            width: 100%;
            height: 40px;
            transition: 0.3s;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-layout-space-triplequarterunit);
            border-radius: var(--dl-layout-radius-radius5);
            padding-right: var(--dl-layout-space-triplequarterunit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .profile-textinput2:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .profile-text34 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .profile-textarea {
            width: 100%;
            transition: 0.3s;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-layout-space-triplequarterunit);
            border-radius: var(--dl-layout-radius-radius5);
            padding-right: var(--dl-layout-space-triplequarterunit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .profile-textarea:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .profile-container20 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-container21 {
            display: flex;
          }
          .profile-info {
            flex: 4;
            color: var(--dl-color-gray-white);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-sixunits);
            border-radius: 0px;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/curved5-1400w.jpg');
            border-top-right-radius: var(--dl-layout-radius-radius1);
            border-bottom-right-radius: var(--dl-layout-radius-radius1);
          }
          .profile-container22 {
            display: flex;
            padding: var(--dl-layout-space-fourunits);
            z-index: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-text37 {
            opacity: 0.8;
          }
          .profile-container23 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-layout-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-doubleunit);
            flex-direction: column;
          }
          .profile-container24 {
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
          }
          .profile-icon12 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-layout-space-unit);
          }
          .profile-link1 {
            opacity: 0.8;
            text-decoration: none;
          }
          .profile-container25 {
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
          }
          .profile-icon14 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-layout-space-unit);
          }
          .profile-link2 {
            opacity: 0.8;
            text-decoration: none;
          }
          .profile-container26 {
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
          }
          .profile-icon16 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-layout-space-unit);
          }
          .profile-text38 {
            opacity: 0.8;
          }
          .profile-container27 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .profile-icon18 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-layout-space-doubleunit);
          }
          .profile-icon20 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-layout-space-doubleunit);
          }
          .profile-icon22 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-layout-space-doubleunit);
          }
          .profile-icon24 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-layout-space-doubleunit);
          }
          .profile-image2 {
            top: 0px;
            left: -1px;
            right: auto;
            width: 100px;
            z-index: 2;
            position: absolute;
            object-fit: cover;
          }
          .profile-container28 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            opacity: 0.9;
            position: absolute;
            background-image: linear-gradient(310deg, rgb(19, 78, 137), rgb(83, 137, 218));
          }
          @media (max-width: 991px) {
            .profile-container11 {
              margin-left: var(--dl-layout-space-tripleunit);
              margin-right: var(--dl-layout-space-tripleunit);
            }
            .profile-container15 {
              width: 100%;
            }
            .profile-card {
              width: 100%;
            }
            .profile-container19 {
              flex-direction: column;
            }
            .profile-info {
              padding-left: 0px;
              border-top-right-radius: 0;
              border-bottom-left-radius: var(--dl-layout-radius-radius1);
            }
            .profile-image2 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .profile-profile {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .profile-container11 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .profile-container12 {
              margin-top: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .profile-text10 {
              margin-top: var(--dl-layout-space-unit);
            }
            .profile-blog-posts {
              padding-top: var(--dl-layout-space-doubleunit);
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
              padding-bottom: var(--dl-layout-space-doubleunit);
            }
            .profile-container15 {
              margin-top: var(--dl-layout-space-doubleunit);
            }
            .profile-contact {
              padding-top: var(--dl-layout-space-doubleunit);
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
              padding-bottom: var(--dl-layout-space-doubleunit);
            }
            .profile-form1 {
              padding-top: var(--dl-layout-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Profile
