import React from 'react';

function HeroSection() {
  return (
    <section style={styles.section}>
      <h1>Revolutionize Your Estate Planning with AI</h1>
      <p>
        LegacyIQ transforms the estate planning process with cutting-edge AI technology,
        making it smarter and far more efficient.
      </p>
      <div>
        <button style={styles.btn}>Get Started</button>
        <button style={styles.btn}>Learn More</button>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '4rem', textAlign: 'center', backgroundColor: '#f9c74f' },
  btn: { margin: '0.5rem', padding: '0.75rem 1.5rem' }
};

export default HeroSection;
