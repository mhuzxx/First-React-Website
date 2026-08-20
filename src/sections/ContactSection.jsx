import { useState } from 'react';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { collaborateItems } from '../data/content';
import './ContactSection.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <Reveal as="p" className="contact-eyebrow">let&apos;s Talk</Reveal>
        <Reveal as="h2" className="contact-heading" delay={60}>
          <span>Let&apos;s Collaborate</span> and Innovate
        </Reveal>

        <div className="contact-grid">
          <div className="contact-items">
            {collaborateItems.map((item, i) => (
              <Reveal as="div" key={item.title} delay={i * 100} className="contact-item">
                <div className="contact-item-icon">
                  <Icon name={item.icon} size={22} color="#3d6bff" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" delay={150} className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>CONTACT US</h3>
              <div className="contact-form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-dark">
                {submitted ? 'Message Sent!' : 'Send'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
