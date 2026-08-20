import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      {/* Center Content */}
      <div className="container hero-content">

        <h1 className="hero-title">
          Your Vision,{' '}
          <span className="hero-title-accent">
            Our Expertise
          </span>
        </h1>

        <p className="hero-text">
          Partner with us to build scalable, modern
          <br />
          websites that bring your vision to life.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">
            View Our Work
          </Link>

          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}