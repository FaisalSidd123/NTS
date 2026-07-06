import { motion } from 'framer-motion';

export default function Brands() {
  const partners = [
    {
      name: 'Grundfos',
      logoType: 'image',
      logoUrl: '/grundfos.jpeg',
      role: 'Authorized Distributor (Pakistan)',
      cat: 'Pumps — Commercial & Domestic',
      cred: 'Founded in 1945. Active in over 60+ countries globally.',
      certNo: 'CERT-GR-PK-982'
    },
    {
      name: 'SFFECO Global',
      logoType: 'svg',
      role: 'Authorized Distributor',
      cat: 'Fire Fighting Equipment & Systems',
      cred: 'ISO 9001 Certified. Global manufacturer since 1983.',
      certNo: 'CERT-SF-GL-104',
      svgColor: 'var(--color-pillar-1)'
    },
    {
      name: 'PEMALL USA',
      logoType: 'svg',
      role: 'Authorized Distributor',
      cat: 'Clean Agent Fire Suppression',
      cred: 'Leading developer of custom clean agent suppression systems.',
      certNo: 'CERT-PM-US-403',
      svgColor: 'var(--color-pillar-2)'
    },
    {
      name: 'Tyco (Johnson Controls)',
      logoType: 'svg',
      role: 'Authorized Distributor',
      cat: 'Sprinklers, Valves & Suppression',
      cred: 'Industrial safety benchmark deployed in 190+ countries.',
      certNo: 'CERT-TY-JC-712',
      svgColor: 'var(--color-pillar-2)'
    },
    {
      name: 'ViVA Competitive Systems',
      logoType: 'svg',
      role: 'Authorized Distributor',
      cat: 'Fire, Gas & Leakage Alarm Systems',
      cred: 'State-of-the-art addressable alarm panels & emergency systems.',
      certNo: 'CERT-VV-CS-221',
      svgColor: 'var(--color-pillar-3)'
    },
    {
      name: 'Defender',
      logoType: 'svg',
      role: 'Authorized Distributor',
      cat: 'Kitchen Hood Fire Suppression',
      cred: 'Specialized commercial kitchen protection. R&D since 2009.',
      certNo: 'CERT-DF-KH-805',
      svgColor: 'var(--color-pillar-2)'
    }
  ];

  return (
    <section
      id="brands"
      className="section-padding"
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-pillar-4)',
            }}
          >
            Global Partnerships
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>
            Authorized & Exclusive Distribution
          </h2>
          <p style={{ marginTop: '1.25rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            We bring international fire safety and pumping standards to the Pakistani market through exclusive agreements with world-renowned engineering manufacturers.
          </p>
        </div>

        {/* Certificate Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {partners.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0, 0, 0, 0.04)', borderColor: 'var(--text-primary)' }}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                padding: '2.5rem 2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '280px',
              }}
            >
              {/* Technical Seal / Badge Border (Certificate Look) */}
              <div
                style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  bottom: '8px',
                  right: '8px',
                  border: '1px dashed rgba(15, 23, 42, 0.1)',
                  pointerEvents: 'none',
                }}
              />

              {/* Certificate No */}
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '20px',
                  fontSize: '0.6rem',
                  fontFamily: 'monospace',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                }}
              >
                {brand.certNo}
              </div>

              {/* Brand Logo Header */}
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', height: '60px' }}>
                {brand.logoType === 'image' ? (
                  <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    style={{
                      maxHeight: '48px',
                      maxWidth: '180px',
                      objectFit: 'contain',
                    }}
                  />
                ) : (
                  // Custom typographical SVGs to render clean corporate mark
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <polygon points="12,2 22,12 12,22 2,12" stroke={brand.svgColor || 'var(--text-primary)'} strokeWidth="2" fill="none"/>
                      <polygon points="12,6 18,12 12,18 6,12" fill={brand.svgColor || 'var(--text-primary)'} opacity="0.3"/>
                    </svg>
                    <span
                      style={{
                        fontFamily: 'var(--heading)',
                        fontSize: '1.35rem',
                        fontWeight: '800',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {brand.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Credentials / Details */}
              <div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  {brand.cat}
                </span>
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {brand.role}
                </h4>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                  }}
                >
                  {brand.cred}
                </p>
              </div>

              {/* Hover Badge stamp effect */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: 'monospace',
                    fontWeight: '700',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-color)',
                    padding: '0.25rem 0.5rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Verified Distributor
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
