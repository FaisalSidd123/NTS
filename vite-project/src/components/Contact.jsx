import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '650px', marginBottom: '4rem' }}>
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-pillar-1)',
            }}
          >
            Get In Touch
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>
            NTS Office Directory
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Reach out to our engineering representatives or visit our offices in Karachi and Lahore. We are available for technical assessments, compliance queries, and general inquiries.
          </p>
        </div>

        {/* Directory Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Karachi HQ */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              padding: '3rem 2.25rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                fontSize: '0.65rem',
                fontFamily: 'monospace',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
              }}
            >
              LOC // KARACHI-HQ
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-pillar-1-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <MapPin size={20} style={{ color: 'var(--color-pillar-1)' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Head Office Karachi
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                117-C, Khalid Commercial, Phase VII-Ext., D.H.A., Karachi, Pakistan.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '1.5rem',
              }}
            >
              <a href="tel:+9202135857780" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-pillar-1)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                <Phone size={16} style={{ color: 'var(--text-muted)' }} />
                +92 (021) 35857780
              </a>
              <a href="mailto:info@nexusts.com.pk" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-pillar-1)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                <Mail size={16} style={{ color: 'var(--text-muted)' }} />
                info@nexusts.com.pk
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Clock size={16} style={{ color: 'var(--text-muted)' }} />
                <span>Mon – Fri: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Lahore Regional */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              padding: '3rem 2.25rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                fontSize: '0.65rem',
                fontFamily: 'monospace',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
              }}
            >
              LOC // LAHORE-REGIONAL
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-pillar-4-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <MapPin size={20} style={{ color: 'var(--color-pillar-4)' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Regional Office Lahore
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                #1224, 12th Floor, Grand Square Mall, 8-E-III, Main Boulevard Gulberg III, Lahore, Pakistan.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '1.5rem',
              }}
            >
              <a href="tel:+9202135857780" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-pillar-4)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                <Phone size={16} style={{ color: 'var(--text-muted)' }} />
                +92 (021) 35857780
              </a>
              <a href="mailto:info@nexusts.com.pk" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-pillar-4)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                <Mail size={16} style={{ color: 'var(--text-muted)' }} />
                info@nexusts.com.pk
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Clock size={16} style={{ color: 'var(--text-muted)' }} />
                <span>Mon – Fri: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Schematic Map Visual Grid */}
        <div
          style={{
            height: '180px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-secondary)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '2rem',
            textAlign: 'center',
          }}
          className="dossier-grid"
        >
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              fontSize: '0.65rem',
              fontFamily: 'monospace',
              color: 'var(--text-muted)',
            }}
          >
            SYS-REF // COORDINATE-MAPPING-PK
          </div>
          <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
            National Engineering Network Coordinate
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
            Karachi DHA (24.8607° N, 67.0011° E) · Lahore Gulberg (31.5204° N, 74.3587° E)
          </span>

          <div
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--color-pillar-1)',
              borderRadius: '50%',
              left: '42%',
              top: '60%',
              boxShadow: '0 0 10px var(--color-pillar-1)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--color-pillar-4)',
              borderRadius: '50%',
              left: '58%',
              top: '38%',
              boxShadow: '0 0 10px var(--color-pillar-4)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
