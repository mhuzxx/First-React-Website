import { Link } from 'react-router-dom';

export default function HeroSlide({ titleMain, titleAccent, text }) {
  return (
    <div className="container hero-content">
      <h1 className="hero-title">
        {titleMain}
        <span className="hero-title-accent">{titleAccent}</span>
      </h1>

      <p className="hero-text">{text}</p>

      <div className="hero-actions">
        <Link to="/projects" className="btn btn-primary">
          View Our Work
        </Link>
        <Link to="/contact" className="btn btn-outline">
          Contact Us
        </Link>
      </div>
    </div>
  );
}