import React, { useEffect, useState } from 'react';

function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/testimonials')
      .then(response => response.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <section style={styles.section}>
      <h2>Customer Testimonials</h2>
      <div style={styles.container}>
        {testimonials.map((t, index) => (
          <div key={index} style={styles.card}>
            <p>"{t.review}"</p>
            <h4>- {t.name}, {t.role}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '2rem', backgroundColor: '#f1f1f1' },
  container: { display: 'flex', gap: '1rem', justifyContent: 'center' },
  card: { padding: '1rem', border: '1px solid #ccc', borderRadius: '5px', width: '300px' }
};

export default TestimonialsSection;
