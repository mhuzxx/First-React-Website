import Reveal from '../components/Reveal';
import { aboutBullets } from '../data/content';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <Reveal as="div">
          <h2 className="about-heading">
            About <span>Code&apos;s Thinker</span>
          </h2>
          <p className="about-lead">
            We redefine excellence in business solution at Code&apos;s Thinker&hellip;
          </p>
          <ul className="about-bullets">
            {aboutBullets.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 80}>
                <span className="about-dot" />
                {item}
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" delay={150} className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
            alt="Codes Thinker team collaborating"
            className="about-image"
          />
        </Reveal>
      </div>
    </section>
  );
}
