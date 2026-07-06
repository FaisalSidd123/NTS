import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const timelineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll-triggered progress bar fill for heritage timeline
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-progress-fill',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: true,
          },
        }
      );

      // Fade in timeline items sequentially
      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            end: 'bottom 50%',
            scrub: false,
            toggleActions: 'play none none none'
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="container">
        {/* Section Header */}
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
            Our Origin Story
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>
            New Brand, Old Trust
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: '500' }}>
            Established in 2024, Nexus Technical Solutions is built on a legacy of excellence dating back to 1982. We combine family business values with modern engineering precision.
          </p>
        </div>

        {/* 3-Column Layout: About, Mission, Vision */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
          }}
        >
          {/* About Us Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
              position: 'relative',
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>SEC-01 // PROFILE</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.75rem', marginBottom: '1.25rem' }}>About NTS</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                NTS is an engineering-driven firm specializing in safety infrastructure for commercial, industrial, and residential sectors. We help engineers, developers, and consultants achieve total regulatory compliance while assuring the utmost occupancy comfort.
              </p>
            </div>
            <div style={{ marginTop: '2rem', height: '3px', backgroundColor: 'var(--color-pillar-1)', width: '40px' }}></div>
          </div>

          {/* Mission Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
              position: 'relative',
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>SEC-02 // PURPOSE</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.75rem', marginBottom: '1.25rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                To make constructed spaces safer and more efficient by providing innovative fire safety products, suppression systems, alarms, and custom engineered MEP solutions that strictly conform to international and local regulatory standards.
              </p>
            </div>
            <div style={{ marginTop: '2rem', height: '3px', backgroundColor: 'var(--color-pillar-4)', width: '40px' }}></div>
          </div>

          {/* Vision Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
              position: 'relative',
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>SEC-03 // OUTLOOK</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.75rem', marginBottom: '1.25rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Facilitating the well-being of mankind by assuring secure environments, reliable fire protection, and energy-efficient water systems in every constructed landscape across the country.
              </p>
            </div>
            <div style={{ marginTop: '2rem', height: '3px', backgroundColor: 'var(--color-pillar-2)', width: '40px' }}></div>
          </div>
        </div>

        {/* Heritage Timeline snippet */}
        <div
          ref={timelineRef}
          style={{
            backgroundColor: '#ffffff',
            padding: '3rem 2.5rem',
            border: '1px solid var(--border-color)',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>Heritage & Transformation Timeline</h3>
            <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-muted)', backgroundColor: 'var(--bg-secondary)', padding: '0.25rem 0.75rem', border: '1px solid var(--border-color)' }}>
              TRACKING 40+ YEARS OF BUSINESS HISTORY
            </span>
          </div>

          {/* Progress bar line */}
          <div style={{ position: 'relative', height: '4px', backgroundColor: 'var(--border-color)', marginBottom: '3rem', width: '100%' }}>
            <div
              className="timeline-progress-fill"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '100%',
                backgroundColor: 'var(--color-pillar-1)',
                transformOrigin: 'left center',
              }}
            />
          </div>

          {/* Timeline Milestones Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Year 1982 */}
            <div className="timeline-item" style={{ position: 'relative' }}>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  border: '4px solid var(--color-pillar-1)',
                  position: 'absolute',
                  top: '-56px',
                  left: '0',
                  zIndex: 2,
                }}
              />
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-pillar-1)', display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--heading)' }}>
                1982
              </span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Heritage Inception</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Foundation laid with a construction, trading, and engineering family consortium (Seasonmaster Engineering).
              </p>
            </div>

            {/* Years of Growth */}
            <div className="timeline-item" style={{ position: 'relative' }}>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  border: '4px solid var(--text-primary)',
                  position: 'absolute',
                  top: '-56px',
                  left: '0',
                  zIndex: 2,
                }}
              />
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--heading)' }}>
                1982 – 2023
              </span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Decades of Execution</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Executing large scale civil, retail, and engineering contracts, establishing a highly trusted reputation.
              </p>
            </div>

            {/* Year 2024 */}
            <div className="timeline-item" style={{ position: 'relative' }}>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  border: '4px solid var(--color-pillar-4)',
                  position: 'absolute',
                  top: '-56px',
                  left: '0',
                  zIndex: 2,
                }}
              />
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-pillar-4)', display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--heading)' }}>
                2024
              </span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Brand Re-imagination</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Nexus Technical Solutions (NTS) is formally established, focusing specifically on high-growth Fire Safety and MEP compliance.
              </p>
            </div>

            {/* Year Present */}
            <div className="timeline-item" style={{ position: 'relative' }}>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  border: '4px solid var(--color-pillar-2)',
                  position: 'absolute',
                  top: '-56px',
                  left: '0',
                  zIndex: 2,
                }}
              />
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-pillar-2)', display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--heading)' }}>
                Present
              </span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Market Leaders</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Serving over 40+ major landmark developments across Pakistan as authorized distributors for globally recognized brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
