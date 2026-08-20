import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/codes-thinker-logo.png';


const serviceLinks = ['Business Intelligence', 'Virtual Workstation', 'Network Services', 'Data Science', 'IT Strategy'];
const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Latest Projects', to: '/projects' },
  { label: 'IT Solutions', to: '/services' },
  { label: 'Team Members', to: '/team' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo">
           <img
  src={logo}
  alt="Code's Thinker"
  className="navbar-logo-image"
/>
          </Link>
          <p className="footer-desc">
            We offer a range of cutting-edge web development and software solutions tailored
            to meet client needs. Our experienced team delivers collaboratively and efficiently.
          </p>
          <div className="footer-socials">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((name) => (
              <a key={name} href="#" className="footer-social" aria-label={name}>
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {serviceLinks.map((s) => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {companyLinks.map((c) => (
              <li key={c.label}><Link to={c.to}>{c.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4>Contact Info</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-icon">☎</span>
              <span>+44 7470 103120</span>
            </li>
            <li>
              <span className="footer-icon">✉</span>
              <span>info@codesthinker.com</span>
            </li>
            <li>
              <span className="footer-icon">📍</span>
              <span>Bartle House 9 Oxford Court, Manchester M23WQ United Kingdom (Regional Office)</span>
            </li>
            <li>
              <span className="footer-icon">📍</span>
              <span>Hassan Manzil Basement Goheer Town Bahawalpur (Global Delivery Center)</span>
            </li>
          </ul>

          <form className="footer-newsletter" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">{sent ? 'Sent!' : 'Submit'}</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024-All Rights Reserved-Code&apos;s Thinker</p>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  const paths = {
    facebook: 'M13.5 9H15V6.5h-1.8C11 6.5 10 7.6 10 9.6V11H8.5v2.5H10V19h2.5v-5.5h1.8L14.7 11h-2.2V9.9c0-.6.3-.9.9-.9z',
    twitter: 'M19 7.5c-.5.2-1 .4-1.6.5.6-.3 1-.9 1.2-1.6-.6.3-1.2.6-1.9.7a3 3 0 0 0-5.1 2.7A8.4 8.4 0 0 1 5.6 6.8a3 3 0 0 0 .9 4 3 3 0 0 1-1.3-.4v.1a3 3 0 0 0 2.4 2.9 3 3 0 0 1-1.3.1 3 3 0 0 0 2.8 2.1A6 6 0 0 1 4.6 17a8.4 8.4 0 0 0 4.6 1.4c5.5 0 8.5-4.6 8.5-8.5v-.4c.6-.4 1.1-.9 1.5-1.5z',
    instagram: 'M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.4a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8zM16.7 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM20 8c-.1-1-.3-1.8-.7-2.4a4.4 4.4 0 0 0-2.5-2.5C16.2 2.7 15.4 2.5 14.4 2.4 13.4 2.4 13 2.4 12 2.4s-1.4 0-2.4.1c-1 0-1.8.3-2.4.6a4.4 4.4 0 0 0-2.5 2.5c-.4.6-.6 1.4-.6 2.4C4 8.6 4 9 4 10s0 1.4.1 2.4c0 1 .3 1.8.6 2.4a4.4 4.4 0 0 0 2.5 2.5c.6.4 1.4.6 2.4.6 1 .1 1.4.1 2.4.1s1.4 0 2.4-.1c1 0 1.8-.3 2.4-.6a4.4 4.4 0 0 0 2.5-2.5c.4-.6.6-1.4.6-2.4.1-1 .1-1.4.1-2.4s0-1.4-.1-2.4z',
    linkedin: 'M6.9 8.6H4.2V19h2.7V8.6zM5.6 4.6a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zM19 12.7c0-2.7-1.4-4-3.4-4-1.5 0-2.2.9-2.6 1.5V8.6H10.3c0 .8 0 8.9 0 10.4H13v-5.8c0-.3 0-.6.1-.8.3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6v5.4H19v-6.3z',
  };
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d={paths[name]} />
    </svg>
  );
}
