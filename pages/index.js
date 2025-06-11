import React, { useState } from 'react'
import Head from 'next/head'


import Header from '../components/header'
import PrimaryBlueButton from '../components/primary-blue-button'
import FeatureCard from '../components/feature-card'
import Footer from '../components/footer'
import ServiceCategories from '../pages/services/index'

const Home = (props) => {
  // Testimonials data
  const testimonials = [
  {
    quote: `"Let your vision guide every thought, every heartbeat. Live it, build around it, let it shape your rhythm. Tune out the noise follow the flame. One bold idea, lived fully, can light the way and change everything."`,
    name: "Udani Lokuhetti",
    title: "Project Manager",
    image: "/udani.jpg",
  },
  {
    quote: `"Start with one truth you believe in.
             Let it echo in every choice, every word, every design.
             When your work reflects who you are, it becomes more than a task—it becomes a calling.
             And that’s where real impact begins."`,
    name: "Kanila Gunasekara",
    title: "Software Engineer",
    image: "/kanila.jpg",
  },
  {
    quote: `"Every small iteration is a step closer to something big. Consistency is our superpower."`,
    name: "Thirani Yuhansi",
    title: "UI/UX Designer",
    image: "/thirani.jpg",
  },
  {
    quote: `"Every small iteration is a step closer to something big. Consistency is our superpower."`,
    name: "Ruwanya Nanayakkara",
    title: "UI/UX Designer",
    image: "/ruwanya.jpg",
  },
  {
    quote: `"Every small iteration is a step closer to something big. Consistency is our superpower."`,
    name: "Ruhan Nandalal",
    title: "Software Engineer Designer",
    image: "/ruhan.png",
  },
  {
    quote: `"Every small iteration is a step closer to something big. Consistency is our superpower."`,
    name: "Tharana Bopearachchi",
    title: "Project Manager",
    image: "/tharana.jpg",
  },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Cerclair</title>
          <meta property="og:title" content="Soft UI Pro" />
        </Head>
        <Header></Header>
        <div className="home-hero">
          <video autoPlay muted loop playsInline className="background-video">
            <source src="/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="home-container11">
            <div className="home-card">
              <h1 className="home-text10 HeadingOne">Think. Design. Shine.</h1>
                <span className="home-text12 Lead">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  Explore the story behind Us, most refined design system — built through passion, precision, and purpose.
                </span>
              <div className="home-container12">
                <div className="home-container13">
                  <a href="#about"><PrimaryBlueButton button="About Us"></PrimaryBlueButton></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="home-features">
          <FeatureCard
            text="Head over to www.cerclair.com to explore our work and see what we’re all about."
            newProp="Visit Our Website"
            title="Components"
            imageSrc="/web.png"
          ></FeatureCard>
          <FeatureCard 
            text="Whether it’s branding, design, or collaboration—pick the service or message type you need."
            newProp=" Choose Your Inquiry"
            title="Components"
            imageSrc="/inq.png"
          ></FeatureCard>
          <FeatureCard
            text="Give us your details, project goals, and any questions. The more you share, the better we can help."
            newProp="Fill Out the Contact Form"
            title="Less Code"
            imageSrc="/contact.png"
          ></FeatureCard>
          <FeatureCard
            text="Our team will review your request and get back to you with insights, timelines, or the next steps."
            newProp="Get a Response"
            title="Fully Responsive"
            imageSrc="/response.png"
          ></FeatureCard>
        </section>
        <section className="home-container15">
          <div className="home-container16" id='about'>
            <h1 className="home-text15 HeadingOne">
              <span className="home-text16">From blank space to bold impact</span>
            </h1>
            <span className="home-text17">
              <span className="home-text18">
               Design is not about what you take—it’s about what you give. A well-made experience, a clear message, 
               a feeling that lasts. The most respected designers don’t just build things—they build meaning.
              </span>
            </span>
          </div>
          <div className="home-container17">
            <div className="home-container18">
              <img
                alt="image"
                src="/des1.jpg"
                className="home-image15"
              />
              <span className="home-text19 Small">
                <span className="home-text20">
                  &quot;"Design is not just how something looks—it’s how it works, how it feels, and how it fits into people’s lives. Good design is invisible because it just works."&quot;
                </span>
                <br></br>
                <span className="home-text22">— Steve Jobs</span>
              </span>
              <div className="home-container19">
                <img
                  alt="image"
                  src="/des3.jpg"
                  className="home-image16"
                />
              </div>
            </div>
            <div className="home-container20">
              <img
                alt="image"
                src="/des2.jpg"
                className="home-image17"
              />
              <div className="home-container21">
                <h3 className="HeadingTwo">
                  <span className="home-text24">
                    So what does embracing creativity in design actually mean?
                  </span>
                </h3>
                <p>
                  <br></br>
                  <span className="home-text26">
                    Design trends may evolve every year, and creative tools may grow more powerful, 
                    but the essence of design remains timeless: solving problems and telling stories 
                    through visuals. At Cerclair, we understand that creativity is not just a burst of 
                    inspiration—it's a continual process of exploration, learning, and refinement.
                    Design will always be shaped by function and emotion, and both will shift with time.
                    Even as technologies change and user expectations rise, the purpose of good design 
                    remains the same: to connect. Some projects demand bold reinvention, while others 
                    call for subtle elegance—and both require the same thoughtful, user-centered approach.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span className="home-text29">
                    Just as no two seasons are the same in nature, no two creative challenges are identical.
                    Every project brings its own rhythm and surprises. And while there may not always be a 
                    straight line between idea and execution, what matters most is the journey—from concept 
                    to experience.
                  <br></br>
                  <span></span>
                  <br></br>
                  <span className="home-text32">
                    Across years of creative work, patterns emerge. Trends fade, platforms shift, but the 
                    brands that thrive are those who continue to invest in clarity, empathy, and originality. 
                    At Cerclair, that’s the kind of creativity we believe in—intentional, human, and ever-evolving.
                  </span>
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonials" id="team">
          <div className="home-container22">
            <div className="home-container23">
              <div className="home-container24">
                <h2 className="home-text33 HeadingOne">Work with us</h2>
                  <p className="home-text34 Lead">
                    <span className="home-text35">
                      No matter where you’re starting from — we’re here for it.
                    </span>
                  </p>
                  <p className="home-text36 Body">
                    <span className="home-text37">{current.quote}</span>
                  </p>
                  <p className="home-text38">{current.name}</p>
                  <p className="home-text39 Small">{current.title}</p>
                  <div className="home-container25">
                    {testimonials.map((testimonial, index) => (
                      <img
                        key={index}
                        alt={testimonial.name}
                          src={testimonial.image}
                          className={`home-image18 ${
                          currentIndex === index ? 'selected-avatar' : ''
                        }`}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                          cursor: 'pointer',
                          borderRadius: '50%',
                          margin: '0 5px',
                          border: currentIndex === index ? '2px solid #fff' : 'none',
                          opacity: currentIndex === index ? '100%' : '50%',
                          boxShadow:
                          currentIndex === index ? '0 0 0 2px #f472b6' : 'none',
                        }}
                      />
                    ))}
                  </div>
              </div>
          </div>

        {/* Logo grid */}
        <div className="home-logos">
          <div className="home-container28">
            <div className="home-container29">
              <div className="home-container30">
                <img
                  alt="image"
                  src="/logo-asana.svg"
                  className="home-image21"
                />
              </div>
              <div className="home-containe31">
                <img
                  alt="image"
                  src="/logo-slack.svg"
                  className="home-image22"
                />
              </div>
              <div className="home-container32">
                <img
                  alt="image"
                  src="/logo-google-drive.svg"
                  className="home-image23"
                />
              </div>
            </div>
            <div className="home-container33">
              <div className="home-container34">
                <img
                  alt="image"
                  src="/logo-shopify.svg"
                  className="home-image24"
                />
              </div>
              <div className="home-container35">
                <img
                  alt="image"
                  src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                  className="home-image25"
                />
              </div>
              <div className="home-container36">
                <img
                  alt="image"
                  src="/logo-invision.svg"
                  className="home-image26"
                />
              </div>
            </div>
            <div className="home-container37">
              <div className="home-container38">
                <img
                  alt="image"
                  src="/logo-attlasian.svg"
                  className="home-image27"
                />
              </div>
              <div className="home-container39">
                <img
                  alt="image"
                  src="/logo-weave.svg"
                  className="home-image28"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background waves */}
      <img
        alt="image"
        src="/bottom.svg"
        className="home-bottom-wave-image"
      />
      <img
        alt="image"
        src="/waves-white.svg"
        className="home-image29"
      />
      <img
        alt="image"
        src="/top.svg"
        className="home-top-wave-image"
      />
    </section>
        <div id='service'>
          <ServiceCategories />
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            height: 100vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .background-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
            opacity: 0.9; 
          }

          .home-container11 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-card {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-layout-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-layout-space-tripleunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .home-text10 {
            text-align: center;
            background-image: linear-gradient(310deg, rgb(19, 78, 137), rgb(83, 137, 218));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text11 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            margin-bottom: var(--dl-layout-space-unitandahalfunit);
          }
          .home-text12 {
            color: var(--dl-color-secondary-600);
            margin-right: var(--dl-layout-space-tripleunit);
            margin-bottom: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-tripleunit);
          }
          .home-container12 {
            display: flex;
            margin-top: var(--dl-layout-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
          }
          .home-container13 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-unit);
            flex-direction: row;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-image10 {
            width: 25%;
            object-fit: cover;
          }
          .home-image11 {
            width: 25%;
            object-fit: cover;
          }
          .home-image12 {
            width: 25%;
            object-fit: cover;
          }
          .home-image13 {
            width: 25%;
            object-fit: cover;
          }
          .home-image14 {
            top: 0px;
            left: auto;
            right: 0px;
            width: 70%;
            bottom: 0px;
            height: 80vh;
            position: absolute;
            object-fit: cover;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }
          .home-features {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .home-container16 {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .home-text15 {
            margin-bottom: var(--dl-layout-space-halfunit);
            background-image: linear-gradient(310deg,rgb(19, 78, 137), rgb(83, 137, 218));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text16 {
            color: rgb(19, 78, 137);
            white-space: normal;
            text-decoration: none;
          }
          .home-text17 {
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-text18 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-layout-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-layout-space-unitandahalfunit);
            margin-right: var(--dl-layout-space-unitandahalfunit);
            flex-direction: row;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image15 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            object-fit: cover;
            margin-left: 3rem;
            margin-right: -3rem;
            border-radius: var(--dl-layout-radius-radius75);
          }
          .home-text19 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: flex-end;
            margin-top: var(--dl-layout-space-unitandahalfunit);
            align-items: flex-start;
            border-color: rgb(19, 78, 137);
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: 8rem;
            flex-direction: column;
          }
          .home-text20 {
            color: rgb(19, 78, 137);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text22 {
            color: rgb(19, 78, 137);
            font-weight: 600;
            background-color: rgb(255, 255, 255);
          }
          .home-container19 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image16 {
            top: 0px;
            left: auto;
            width: 90%;
            bottom: auto;
            display: block;
            position: absolute;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: -1.5rem;
            object-fit: cover;
            margin-left: 2rem;
            border-radius: var(--dl-layout-radius-radius75);
            margin-bottom: var(--dl-layout-space-tripleunit);
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-triplequarterunit);
            padding-right: var(--dl-layout-space-triplequarterunit);
            flex-direction: column;
          }
          .home-image17 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 8rem;
            object-fit: cover;
            margin-left: -1.5rem;
            border-radius: var(--dl-layout-radius-radius75);
            margin-bottom: var(--dl-layout-space-tripleunit);
          }
          .home-container21 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text24 {
            color: rgb(37, 47, 64);
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text26 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text29 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text32 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, rgb(19, 78, 137), rgb(83, 137, 218));
          }
          .home-container22 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: 15rem;
            padding-left: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: row;
            padding-bottom: 15rem;
            justify-content: space-between;
          }
          .home-container23 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container24 {
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-tripleunit);
            flex-direction: column;
          }
          .home-text33 {
            color: var(--dl-color-gray-white);
          }
          .home-text34 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .home-text35 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .home-text36 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .home-text37 {
            display: inline;
            font-weight: 600;
            white-space: normal;
          }
          .home-text38 {
            color: var(--dl-color-gray-white);
          }
          .home-text39 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
          }
          .home-container25 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image18 {
            width: 65px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-layout-radius-radius75);
          }
          .home-image18:hover {
            transform: scale(1.2);
          }
          .home-container26 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image19 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-layout-radius-radius75);
          }
          .home-image19:hover {
            transform: scale(1.2);
          }
          .home-container27 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image20 {
            width: 40px;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-layout-radius-radius75);
          }
          .home-image20:hover {
            transform: scale(1.2);
          }
          .home-logos {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container28 {
            flex: 0 0 auto;
            display: flex;
            min-width: 400px;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-triplequarterunit);
            flex-direction: column;
          }
          .home-container29 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container30 {
            width: 58px;
            height: 58px;
            padding: var(--dl-layout-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image21 {
            width: 100%;
          }
          .home-container31 {
            width: 58px;
            height: 58px;
            padding: var(--dl-layout-space-unit);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image22 {
            width: 100%;
          }
          .home-container32 {
            width: 58px;
            height: 58px;
            padding: var(--dl-layout-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image23 {
            width: 100%;
          }
          .home-container33 {
            flex: 0 0 auto;
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container34 {
            width: 58px;
            height: 58px;
            padding: var(--dl-layout-space-unit);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image24 {
            width: 100%;
            object-fit: cover;
          }
          .home-container35 {
            width: 58px;
            height: 58px;
            padding: var(--dl-layout-space-unit);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image25 {
            width: 100%;
          }
          .home-container36 {
            width: 58px;
            padding: var(--dl-layout-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image26 {
            width: 100%;
          }
          .home-container37 {
            flex: 0 0 auto;
            width: 50%;
            height: 70px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container38 {
            width: 58px;
            height: 58px;
            padding: var(--dl-layout-space-unit);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image27 {
            width: 100%;
          }
          .home-container39 {
            width: 58px;
            height: 58px;
            padding: var(--dl-layout-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image28 {
            width: 100%;
            object-fit: cover;
          }
          .home-bottom-wave-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -5px;
            position: absolute;
            object-fit: cover;
          }
          .home-image29 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-top-wave-image {
            top: -5px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-contaier {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .home-container40 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container41 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-radius75);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg,rgb(19, 78, 137), rgb(83, 137, 218));
          }
          .home-icon1 {
            fill: var(--dl-color-gray-800);
            width: 24px;
            height: 24px;
          }
          .home-text40 {
            margin-top: var(--dl-layout-space-unitandahalfunit);
            background-image: linear-gradient(310deg,rgb(19, 78, 137), rgb(83, 137, 218));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text41 {
            color: rgb(19, 78, 137);
            white-space: normal;
            text-decoration: none;
          }
          .home-text42 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-text43 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text45 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-container42 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-layout-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container43 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-sixunits);
            border-radius: var(--dl-layout-radius-radius1);
            padding-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
            background-position: center;
          }
          .home-container43:hover {
            transform: scale(1.04);
          }
          .home-container44 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-layout-radius-radius1);
          }
          .home-container45 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon3 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-layout-space-tripleunit);
          }
          .home-text46 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text47 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-layout-space-tripleunit);
          }
          .home-container46 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .home-divider {
            flex: 0 0 auto;
            width: 90%;
            height: 1px;
            display: flex;
            opacity: 0.25;
            margin-top: 4rem;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius75);
            margin-bottom: 4rem;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-container47 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-layout-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container48 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .home-container49 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-sixunits);
            border-radius: var(--dl-layout-radius-radius1);
            padding-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coffee-shop.jpg');
            background-position: center;
          }
          .home-container49:hover {
            transform: scale(1.04);
          }
          .home-container50 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-layout-radius-radius1);
          }
          .home-container51 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon5 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-layout-space-tripleunit);
          }
          .home-text50 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text51 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-layout-space-tripleunit);
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-tripleunit);
            }
            .home-container11 {
              max-width: 960px;
            }
            .home-card {
              width: 100%;
            }
            .home-features {
              max-width: 960px;
            }
            .home-container15 {
              max-width: 960px;
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
            }
            .home-container16 {
              max-width: 80%;
            }
            .home-text17 {
              text-align: center;
            }
            .home-text19 {
              width: 50%;
            }
            .home-container22 {
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
              justify-content: center;
            }
            .home-container23 {
              align-items: center;
            }
            .home-container24 {
              margin-right: 0px;
            }
            .home-logos {
              display: none;
            }
            .home-contaier {
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
            }
            .home-container46 {
              width: 45%;
              margin-left: var(--dl-layout-space-unit);
            }
            .home-container48 {
              width: 45%;
              margin-right: var(--dl-layout-space-unit);
            }
          }
          @media (max-width: 767px) {
            .home-card {
              align-items: center;
            }
            .home-text12 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-image10 {
              width: 40%;
            }
            .home-image11 {
              width: 40%;
            }
            .home-image12 {
              width: 40%;
            }
            .home-image13 {
              width: 40%;
            }
            .home-image14 {
              display: none;
            }
            .home-features {
              max-width: 720px;
              padding-top: var(--dl-layout-space-doubleunit);
              padding-left: var(--dl-layout-space-unitandahalfunit);
              padding-right: var(--dl-layout-space-unitandahalfunit);
              padding-bottom: var(--dl-layout-space-doubleunit);
            }
            .home-container15 {
              max-width: 720px;
            }
            .home-container17 {
              align-items: center;
              flex-direction: column;
            }
            .home-container18 {
              width: 80%;
            }
            .home-image15 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-text19 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-layout-space-tripleunit);
              margin-bottom: var(--dl-layout-space-tripleunit);
            }
            .home-image16 {
              display: none;
            }
            .home-container20 {
              width: 80%;
            }
            .home-image17 {
              display: none;
            }
            .home-container22 {
              padding-top: 12rem;
              padding-bottom: 12rem;
            }
            .home-container40 {
              width: 80%;
            }
            .home-text44 {
              text-align: center;
            }
            .home-container42 {
              flex-direction: column;
            }
            .home-container46 {
              width: 80%;
              margin-top: var(--dl-layout-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
            .home-divider {
              margin-top: var(--dl-layout-space-doubleunit);
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .home-container47 {
              margin-top: 0px;
              flex-direction: column;
            }
            .home-container48 {
              width: 80%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .home-card {
              padding: var(--dl-layout-space-unit);
            }
            .home-container12 {
              align-items: center;
              flex-direction: column;
            }
            .home-container13 {
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-features {
              width: 100%;
            }
            .home-container22 {
              padding-top: var(--dl-layout-space-sixunits);
              padding-bottom: var(--dl-layout-space-sixunits);
            }
            .home-text44 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
