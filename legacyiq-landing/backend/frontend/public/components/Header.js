import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>LegacyIQ</div>
      <nav style={styles.nav}>
        <a href="#professional-services">Professional Services</a>
        <a href="#about-us">About Us</a>
        <a href="#home">Home</a>
      </nav>
      <div>
        <button style={styles.btn}>Boot Camp</button>
        <button style={styles.btn}>Sign Up</button>
      </div>
    </header>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: '#fff' },
  logo: { fontWeight: 'bold' },
  nav: { display: 'flex', gap: '1rem' },
  btn: { marginLeft: '0.5rem' }
};

export default Header;
