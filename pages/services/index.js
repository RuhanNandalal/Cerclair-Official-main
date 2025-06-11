import Link from 'next/link';

const services = [
  {
    name: 'Landing Page Designs',
    slug: 'landing-page',
    description: 'Eye-catching landing pages to boost conversions.',
  },
  {
    name: 'Portfolio Designs',
    slug: 'portfolio',
    description: 'Beautiful, personalized portfolio websites to showcase your work.',
  },
  {
    name: 'Poster Designs',
    slug: 'poster-design',
    description: 'Creative poster designs for events, marketing, and branding.',
  },
  {
    name: 'Logo Designs',
    slug: 'logo-design',
    description: 'Unique logos that build your brand identity.',
  }
];

export default function ServicesPage() {
  return (
    <div className="services">
      <h1 className='home-text16 HeadingOne'>Our Services</h1>
      <div className="service-list">
        {services.map(service => (
          <div key={service.slug} className="service-card">
            <h2 className='service-title'>{service.name}</h2>
            <p>{service.description}</p>
            <Link href={`/services/${service.slug}`} className='link'>
              Explore Projects
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .services {
            padding: 2rem;
            font-family: Open Sans;
        }

        .service-list {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
            margin-bottom: 2rem;
        }

        .service-card {
            flex: 1 1 250px; /* Grow/shrink but keep minimum width */
            max-width: 300px;
            padding: 1rem;
            border: 1px solid rgb(83, 137, 218);
            border-radius: 8px;
            transition: 0.3s ease;
        }

        .service-card:hover {
            box-shadow: 0 4px 20px rgb(83, 137, 218);
        }

        .home-text16 {
            background-image: linear-gradient(310deg,rgb(19, 78, 137), rgb(83, 137, 218));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            white-space: normal;
            text-decoration: none;
            margin-bottom: 1rem;
            text-align: center;
        }

        .service-title {
            color: rgb(37, 47, 64);
        }

        .link {
            color:rgb(19, 78, 137);
        }
      `}</style>
    </div>
  );
}