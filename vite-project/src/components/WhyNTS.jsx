import { Award, Briefcase, Users } from 'lucide-react';

export default function WhyNTS() {
  const stats = [
    {
      label: 'Combined Heritage',
      value: '40+ Years',
      desc: 'Legacy dating back to Seasonmaster Engineering in 1982.',
      icon: <Users size={24} style={{ color: 'var(--color-pillar-1)' }} />,
    },
    {
      label: 'Landmark Projects',
      value: '40+ Completed',
      desc: 'Critical MEP & Fire safety systems installed across Pakistan.',
      icon: <Briefcase size={24} style={{ color: 'var(--color-pillar-4)' }} />,
    },
    {
      label: 'Global Agreements',
      value: '6 Exclusive Brands',
      desc: 'Direct distributor connection for genuine international equipment.',
      icon: <Award size={24} style={{ color: 'var(--color-pillar-3)' }} />,
    },
  ];

  const projects = [
    'Gaddafi Stadium Lahore',
    'Al-Fateh E-Mall Gulberg',
    'High Q Tower Islamabad',
    'Imtiaz Super Market',
    'Carso Tower Islamabad',
    'Jazz Tower Islamabad',
    'Emaar Park Edge Karachi',
    'Naya Nazimabad Karachi',
    'Jinnah Convention Center Islamabad',
    'Zahid Pir Hospital',
    'Indus Hospital Karachi',
    'Nawaz Sharif Cardio Hospital Sargodha',
    'Serena Sost',
  ];

  // Double the project list to create a seamless infinite marquee effect
  const doubleProjects = [...projects, ...projects];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden',
      }}
    >
      {/* Stats Band */}
      <div className="section-padding container">
        <div style={{ maxWidth: '650px', marginBottom: '3.5rem' }}>
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-pillar-1)',
            }}
          >
            NTS Engineering Integrity
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>
            Proven Track Record in B2B MEP Execution
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '1rem',
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                padding: '2.5rem 2rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--border-color)',
                }}
              >
                {stat.icon}
              </div>
              <h3
                style={{
                  fontSize: '2.2rem',
                  fontWeight: '800',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--heading)',
                }}
              >
                {stat.value}
              </h3>
              <h4
                style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem',
                }}
              >
                {stat.label}
              </h4>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.5',
                }}
              >
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Infinite Marquee */}
      <div>
        <div
          style={{
            paddingLeft: '1.5rem',
            marginBottom: '0.75rem',
            fontSize: '0.75rem',
            fontFamily: 'monospace',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          className="container"
        >
          <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-pillar-4)', transform: 'rotate(45deg)' }} />
          Landmark installations across Pakistan
        </div>

        <div className="marquee-container">
          <div className="marquee-content">
            {doubleProjects.map((proj, idx) => (
              <div key={idx} className="marquee-item">
                <span className="marquee-divider" />
                {proj}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
