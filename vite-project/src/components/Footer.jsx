export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr', gap: '3rem', marginBottom: '3.5rem' }} className="footer-grid">
          {/* Tagline & Logo Column */}
          <div>
            <img
              src="/nexus logo.png"
              alt="NTS Logo"
              style={{
                height: '45px',
                width: 'auto',
                marginBottom: '1.25rem',
                objectFit: 'contain'
              }}
            />
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '280px', fontWeight: '500', marginBottom: '1rem' }}>
              Where Comfort Meets Compliance. Bringing Innovation to Your MEP Systems.
            </p>
            <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>
              ESTABLISHED IN 2024 · KARACHI / LAHORE
            </span>
          </div>

          {/* Quick Navigation Column */}
          <div>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Corporate Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['About', 'Solutions', 'Brands', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--color-pillar-4)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Legal Details Column */}
          <div>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Official Inquiries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <p>
                <strong>Email:</strong> info@nexusts.com.pk
              </p>
              <p>
                <strong>Tel:</strong> +92 (021) 35857780
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.5' }}>
                All equipment is subject to strict testing certifications and authorized compliance guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div style={{ height: '1px', backgroundColor: 'var(--border-color)', marginBottom: '2rem' }} />

        {/* Footer bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }} className="footer-bottom">
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © {currentYear} Nexus Technical Solutions Pvt. Ltd. (NTS). All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span style={{ fontFamily: 'monospace' }}>VERSION // NTS-WEB-1.0.0</span>
            <span>·</span>
            <a href="https://www.nexusts.com.pk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
              www.nexusts.com.pk
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
