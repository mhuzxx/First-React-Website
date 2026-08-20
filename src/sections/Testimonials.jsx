import { useEffect, useState } from 'react';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { testimonials } from '../data/content';
import './Testimonials.css';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section className="testimonials">
      <div className="container testimonials-grid">
        <Reveal as="h2" className="testimonials-heading">
          Our <span>Clients,</span>
          <br />
          In Their Own Words
        </Reveal>

        <div className="testimonials-card-wrap">
          <div className="testimonials-card" key={index}>
            <div className="testimonials-rating">
              <span>{t.rating.toFixed(1)}</span>
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" size={18} color="#f2c94c" filled />
              ))}
            </div>
            <div className="testimonials-person">
              <div className="testimonials-avatar">{t.name.charAt(0)}</div>
              <div>
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
            <p className="testimonials-text">{t.text}</p>

            <div className="testimonials-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials-dot ${i === index ? 'testimonials-dot-active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-cta">
        <a href="#contact" className="btn btn-yellow">Add Your Reviews</a>
      </div>
    </section>
  );
}
