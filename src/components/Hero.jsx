import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // 4 Diamonds assembly coordinates
  const diamondVariants = {
    hiddenTop: { opacity: 0, y: -80, rotate: 45 },
    hiddenBottom: { opacity: 0, y: 80, rotate: 45 },
    hiddenLeft: { opacity: 0, x: -80, rotate: 45 },
    hiddenRight: { opacity: 0, x: 80, rotate: 45 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 45,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 80% 20%, #f1f5f9 0%, #ffffff 70%)',
        paddingTop: '80px',
        overflow: 'hidden',
      }}
      className="dossier-grid"
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Tagline */}
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--text-muted)',
                  borderLeft: '3px solid var(--color-pillar-1)',
                  paddingLeft: '0.75rem',
                }}
              >
                Nexus Technical Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                lineHeight: '1.05',
                color: 'var(--text-primary)',
                fontWeight: '800',
              }}
            >
              Where Comfort <br />
              <span style={{ color: 'var(--color-pillar-1)' }}>Meets Compliance</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
                color: 'var(--text-secondary)',
                maxWidth: '540px',
                fontWeight: '500',
                lineHeight: '1.6',
              }}
            >
              Full-range fire safety, suppression, detection, and pumping solutions. Authorized by global leaders, engineered for compliance and safety across Pakistan.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}
            >
              <button onClick={() => scrollToSection('solutions')} className="btn-primary">
                Explore Our Solutions
              </button>
              <button onClick={() => scrollToSection('brands')} className="btn-secondary">
                View Brand Partners
              </button>
            </motion.div>

            {/* Trust badge */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.5rem',
                marginTop: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-color)',
                maxWidth: '500px',
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: '700' }}>40+</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Landmark Projects</p>
              </div>
              <div style={{ height: '30px', width: '1px', backgroundColor: 'var(--border-color)' }}></div>
              <div>
                <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: '700' }}>1982</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Combined Heritage</p>
              </div>
              <div style={{ height: '30px', width: '1px', backgroundColor: 'var(--border-color)' }}></div>
              <div>
                <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: '700' }}>6</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Exclusive Partners</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Graphical/Visual Column */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justify: 'center' }} className="hero-graphic-col">
            {/* Branded circular medallion frame */}
            <div
              style={{
                position: 'relative',
                width: 'clamp(260px, 35vw, 440px)',
                height: 'clamp(260px, 35vw, 440px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Rotating outer technical ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '1px dashed var(--color-pillar-4)',
                  opacity: 0.5,
                }}
              />

              {/* Middle thin border ring */}
              <div
                style={{
                  position: 'absolute',
                  width: '92%',
                  height: '92%',
                  borderRadius: '50%',
                  border: '1px solid var(--border-color)',
                }}
              />

              {/* Solid inner white circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  width: '84%',
                  height: '84%',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)',
                  zIndex: 2,
                }}
              >
                <img
                  src="/nexus logo.png"
                  alt="Nexus Technical Solutions"
                  style={{
                    width: '85%',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </motion.div>

              {/* Compass tick indicators (blueprint style) */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', borderLeft: '1px dashed rgba(15, 23, 42, 0.1)', height: '100%', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '1px', borderTop: '1px dashed rgba(15, 23, 42, 0.1)', width: '100%', pointerEvents: 'none' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
