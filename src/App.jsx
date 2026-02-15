const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C++', 'SQL', 'Shell Scripting'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'Node.js', 'Express', 'RESTful APIs', 'Microservices'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'OracleDB', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['AWS (EC2, S3, Lambda, Secrets Manager)', 'Docker', 'Firebase'],
  },
  {
    title: 'Tools & Testing',
    items: ['GitHub', 'GitLab', 'Postman', 'JUnit', 'CI/CD', 'Agile', 'Linux', 'Cursor', 'Amazon Q'],
  },
]

const experiences = [
  {
    company: 'Care Health Insurance',
    role: 'Software Developer',
    period: 'August 2024 - Present',
    points: [
      'Migrating legacy Java EE + Ant build flows to Spring Boot + Maven with a target build-time reduction of over 50%.',
      'Built and deployed an OTP-based KYC microservice in Spring Boot handling 10,000+ daily users.',
      'Introduced Redis caching to reduce API response time by more than 20%.',
      'Developed the consumer-facing KYC frontend for better accessibility and user experience.',
    ],
    link: 'https://ix.careinsurance.com/gap_pl/identity',
  },
  {
    company: 'Vaisertech Advance',
    role: 'Full-Stack Developer',
    period: 'January 2024 - August 2024',
    points: [
      'Worked on both frontend and backend development across core product features.',
      'Contributed to a user-friendly platform used by 300+ users.',
      'Helped launch an admin interface for user-progress tracking and personalized feedback.',
      'Improved user retention through product and UX feedback loops with leadership.',
    ],
    link: 'https://app.butter.dating',
  },
]

const projects = [
  {
    name: 'PinMe App',
    type: 'Personal Project',
    summary:
      'A Pinterest-style image sharing platform with real-time updates across users.',
    stack: ['React', 'Sanity CMS', 'HTML5', 'CSS3', 'Socket.IO'],
    link: 'https://github.com/kushagra208/pinme',
  },
  {
    name: 'GearUp App',
    type: 'Team Project',
    summary:
      'A car rental platform where users can book cars and rent out their own vehicles to earn.',
    stack: ['MERN Stack', 'Firebase', 'CarQueryAPI', 'CDN API'],
    link: 'https://github.com/Gear-Up-Rentals/Gear-Up.git',
  },
  {
    name: 'File Sharing App',
    type: 'Personal Project',
    summary:
      'A secure file-sharing platform with upload/download flow, link-based sharing, and access control.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'AWS S3'],
    link: 'https://docs.kushagragarg.in/',
  },
]

function App() {
  return (
    <main className="page">
      <header className="hero section reveal">
        <p className="eyebrow">Software Developer</p>
        <h1>Kushagra Garg</h1>
        <p className="lede">
          I build user-focused products with strong engineering foundations across Java, Spring
          Boot, React, and Node.js.
        </p>
        <div className="hero-links">
          <a href="mailto:kushagrag.2082002@gmail.com">kushagrag.2082002@gmail.com</a>
          <a href="tel:+918527286079">+91 8527286079</a>
          <span>Gurgaon, Haryana</span>
        </div>
        <div className="cta-row">
          <a className="btn" href="/Kushagra_Garg_Resume.pdf" download>
            Download Resume
          </a>
          <a
            className="btn btn-primary"
            href="https://www.linkedin.com/in/kushagra-garg/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn" href="https://github.com/kushagra208" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn" href="https://leetcode.com/u/user1320YI/" target="_blank" rel="noreferrer">
            LeetCode
          </a>
          <a className="btn" href="https://codepen.io/kushagra208" target="_blank" rel="noreferrer">
            CodePen
          </a>
        </div>
      </header>

      <section className="section reveal">
        <h2>Skills</h2>
        <div className="grid skills-grid">
          {skillGroups.map((group) => (
            <article className="card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(' | ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={item.company}>
              <div className="timeline-head">
                <h3>{item.company}</h3>
                <p>{item.role}</p>
                <span>{item.period}</span>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href={item.link} target="_blank" rel="noreferrer">
                Visit project
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <h2>Projects</h2>
        <div className="grid project-grid">
          {projects.map((project) => (
            <article className="card project-card" key={project.name}>
              <div className="project-top">
                <h3>{project.name}</h3>
                <span>{project.type}</span>
              </div>
              <p>{project.summary}</p>
              <p className="stack">{project.stack.join(' | ')}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View project
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal education">
        <h2>Education</h2>
        <article className="card">
          <h3>Bachelor of Technology (CSE)</h3>
          <p>IIIT Sonepat</p>
          <p>CGPA: 8.67</p>
          <p>2020 - 2024</p>
        </article>
      </section>
    </main>
  )
}

export default App
