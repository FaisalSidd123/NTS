import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, Shield, Bell, Droplets } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger Horizontal Pinning for Desktop (min-width: 1024px)
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.horizontal-panel');
      if (panels.length === 0) return;

      const mediaQuery = window.matchMedia('(min-width: 1024px)');

      if (mediaQuery.matches) {
        // Horizontal scroll sequence
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${triggerRef.current.offsetWidth * 1.5}`,
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      id: '01',
      title: 'Fire Fighting',
      desc: 'Robust equipment to combat and extinguish structural fire hazards.',
      brand: 'SFFECO Global',
      brandSub: 'Authorized Distributor',
      accent: 'var(--color-pillar-1)',
      bgLight: 'var(--color-pillar-1-light)',
      icon: <Flame size={32} style={{ color: 'var(--color-pillar-1)' }} />,
      products: ['Fire Pumps & Controllers', 'Hose Cabinets & Reels', 'Fire Doors (Steel/Wooden)', 'Portable Extinguishers', 'Fire Blankets'],
      visual: '[Visual: Fire Pump Station & Cabinets Setups]',
      spec: 'SPECIFICATION // FF-SFFECO-2024'
    },
    {
      id: '02',
      title: 'Fire Suppression',
      desc: 'Automatic clean-agent and localized suppression for critical zones.',
      brand: 'PEMALL USA, Tyco, Defender',
      brandSub: 'Exclusive & Authorized Distributor',
      accent: 'var(--color-pillar-2)',
      bgLight: 'var(--color-pillar-2-light)',
      icon: <Shield size={32} style={{ color: 'var(--color-pillar-2)' }} />,
      products: ['Clean Agent Systems (FM-200 / Novec)', 'Kitchen Hood Suppression Systems', 'Sprinklers, Valves & Flow Switches', 'Special Hazard Fire Suppression'],
      visual: '[Visual: Kitchen Hood & Gas Cylinder Suppressors]',
      spec: 'SPECIFICATION // FS-TYCO-PEMALL-DEF'
    },
    {
      id: '03',
      title: 'Detection & Alarm',
      desc: 'Precision systems to detect fire, gas leakage, and coordinate egress.',
      brand: 'ViVA Competitive Systems',
      brandSub: 'Authorized Distributor',
      accent: 'var(--color-pillar-3)',
      bgLight: 'var(--color-pillar-3-light)',
      icon: <Bell size={32} style={{ color: 'var(--color-pillar-3)' }} />,
      products: ['Addressable Fire Alarm Panels', 'LPG/Natural Gas Leakage Detectors', 'Access Control Systems', 'Emergency Lighting Systems'],
      visual: '[Visual: Alarm Panel & Gas Detection Assemblies]',
      spec: 'SPECIFICATION // DA-VIVA-SYSTEMS'
    },
    {
      id: '04',
      title: 'Pumps & Water Systems',
      desc: 'High-performance commercial and domestic pumping systems.',
      brand: 'Grundfos',
      brandSub: 'Authorized Distributor (Pakistan)',
      accent: 'var(--color-pillar-4)',
      bgLight: 'var(--color-pillar-4-light)',
      icon: <Droplets size={32} style={{ color: 'var(--color-pillar-4)' }} />,
      products: ['Commercial & Domestic Pumping', 'Water Pressure Booster Systems', 'Wastewater & Borehole Pumps', 'Energy-Efficient Circulator Pumps'],
      visual: '[Visual: Commercial Booster Pumps & Boreholes]',
      spec: 'SPECIFICATION // PUMP-GRUNDFOS-PK'
    }
  ];

  return (
    <div ref={sectionRef} id="solutions" style={{ overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
      <div ref={triggerRef} style={{ width: '100%' }}>
        {/* Horizontal Container for Desktop, stacked for Mobile */}
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
          className="horizontal-container flex-col lg:flex-row"
        >
          {/* Slide 0: Intro Title (stays pinned or transitions) */}
          <div
            className="horizontal-panel"
            style={{
              minWidth: '100vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--bg-secondary)',
              position: 'relative',
              padding: '2rem',
              borderRight: '1px solid var(--border-color)',
            }}
          >
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--text-muted)',
                }}
              >
                Core Competencies
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: '1.1',
                  marginTop: '1rem',
                  marginBottom: '1.5rem',
                  maxWidth: '700px',
                }}
              >
                The Four Pillars of <br />
                <span style={{ color: 'var(--accent-primary)' }}>Safety & Water Infrastructure</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                We structure our solutions into four distinct pillars of compliance. Scroll down to inspect our specialized engineering products and distributor networks.
              </p>
              <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }} className="hidden lg:flex">
                <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Scroll Down / Track Right
                </span>
                <span
                  style={{
                    width: '30px',
                    height: '2px',
                    backgroundColor: 'var(--text-primary)',
                    display: 'inline-block',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Pillars Slides */}
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="horizontal-panel"
              style={{
                minWidth: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'var(--bg-primary)',
                position: 'relative',
                padding: '2rem',
                borderRight: '1px solid var(--border-color)',
              }}
            >
              <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="pillar-grid">
                  {/* Info Column */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <span
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: '800',
                          fontFamily: 'monospace',
                          color: pillar.accent,
                          border: `1px solid ${pillar.accent}`,
                          width: '36px',
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {pillar.id}
                      </span>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: pillar.bgLight,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                        }}
                      >
                        {pillar.icon}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                      {pillar.desc}
                    </p>

                    <div style={{ marginBottom: '2.5rem' }}>
                      <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                        Global Brand Partners
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                          {pillar.brand}
                        </span>
                        <span style={{ fontSize: '0.85rem', color: pillar.accent, fontWeight: '600' }}>
                          {pillar.brandSub}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                        Core Product Range
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {pillar.products.map((prod, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', fontWeight: '500' }}>
                            <span style={{ width: '6px', height: '6px', backgroundColor: pillar.accent, transform: 'rotate(45deg)' }}></span>
                            {prod}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Graphic Column */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                      style={{
                        width: '100%',
                        maxWidth: '420px',
                        height: '340px',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2.5rem',
                        textAlign: 'center',
                        borderTop: `4px solid ${pillar.accent}`,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                      }}
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
                        {pillar.spec}
                      </div>

                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          backgroundColor: pillar.bgLight,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                          marginBottom: '1.5rem',
                        }}
                      >
                        {pillar.icon}
                      </div>

                      <p style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        {pillar.visual}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Detailed blueprint schematic & ISO test certificates mapping.
                      </p>

                      <div
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          right: '10px',
                          width: '15px',
                          height: '15px',
                          borderRight: '1px solid var(--text-muted)',
                          borderBottom: '1px solid var(--text-muted)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Responsive adjustments (Tailwind-like classes simulated by basic inline styling rules or media classes in CSS) */}
      <style>{`
        @media (max-width: 1023px) {
          .horizontal-container {
            flex-direction: column !important;
          }
          .horizontal-panel {
            min-width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            padding: 4rem 1.5rem !important;
            border-right: none !important;
            border-bottom: 1px solid var(--border-color);
          }
          .pillar-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
