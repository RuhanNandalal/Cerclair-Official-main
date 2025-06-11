import { useRouter } from 'next/router';
import Header from '../../components/header';
import PrimaryPinkButton from '../../components/primary-blue-button';
import Head from 'next/head';
import Footer from '../../components/footer';

const projectData = {
  'landing-page': [
    { title: 'SaaS Hero Page', demoUrl: '#', imageUrl: '/service-images/saas-hero.png' },
    { title: 'Marketing Site', demoUrl: '#', imageUrl: '/service-images/saas-hero.png' },
  ],
  'portfolio': [
    { title: 'Photographer Portfolio', demoUrl: '#', imageUrl: '/service-images/saas-hero.png' },
    { title: 'Developer Showcase', demoUrl: '#', imageUrl: '/service-images/saas-hero.png' },
  ],
  'poster-design': [
    { title: 'Event Poster', demoUrl: '#', imageUrl: '/service-images/saas-hero.png' },
  ],
  'logo-design': [
    { title: 'Startup Logo', demoUrl: '#', imageUrl: '/service-images/saas-hero.png' },
  ],
};

export default function ServiceProjectsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const projects = projectData[slug] || [];

  return (
    <div className="page">
        <Head>
            <title>{slug ? `${slug.replace('-', ' ')} Projects | CerClair` : 'Projects | CerClair'}</title>
            <meta name="description" content="Explore our recent design and development projects tailored for various services." />
    </Head>
      <Header />
      <main className="main">
        <h1 className="title">{slug?.replace('-', ' ')} Projects</h1>

        <div className="projects">
          {projects.length === 0 ? (
            <p className="no-projects">No projects found.</p>
          ) : (
            projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <h3>{proj.title}</h3>
                <img src={proj.imageUrl} alt={proj.title} className="project-image" />
                <div className="header-container3">
                <a href={proj.demoUrl} target="_blank" rel="noreferrer">
                    <PrimaryPinkButton button="View Demo"></PrimaryPinkButton>
                </a>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer></Footer>

      <style jsx>{`
        .page {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
          padding-top: 5rem;
        }

        .main {
          width: 100%;
          max-width: 1100px;
          padding: 2rem;
          margin-bottom: 2rem;
          font-family: Open Sans;
        }

        .project-card:hover {
            box-shadow: 0 4px 20px #e293d3ff;
        }

        .title {
          text-transform: capitalize;
          text-align: center;
          background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          white-space: normal;
          text-decoration: none;
          margin-bottom: 2.5rem;
        }

        .projects {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1 rem;
        }

        .project-card {
            padding: 1rem;
            border: 1px solid #c172d5ff;
            border-radius: 8px;
            transition: 0.3s ease;
            background: white;
            max-widh: 320px;
            margin: 0 auto;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }

        h3 {
          margin: 0 0 1rem;
          font-size: 1.4rem;
          color: #222;
        }

        .no-projects {
          text-align: center;
          color: #777;
          font-style: italic;
          font-size: 1rem;
          padding: 2rem 0;
        }

        .project-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
