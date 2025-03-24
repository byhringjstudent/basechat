import React, { useState } from 'react';

function CallToAction() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    fetch('http://127.0.0.1:5000/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    .then(response => {
      if (response.ok) {
        alert('Subscribed!');
        setEmail('');
      }
    });
  };

  return (
    <section style={styles.section}>
      <h2>Start Your Free Trial Today</h2>
      <input 
        type="email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Enter your email" 
        style={styles.input}
      />
      <button onClick={handleSubmit} style={styles.btn}>Subscribe</button>
    </section>
  );
}

const styles = {
  section: { padding: '2rem', backgroundColor: '#ddd', textAlign: 'center' },
  input: { padding: '0.5rem', marginRight: '1rem' },
  btn: { padding: '0.5rem 1rem' }
};

export default CallToAction;
