import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { standOutCards } from '../data/content';
import './StandOut.css';

export default function StandOut() {
  return (
    <section className="standout">
      <div className="container">
        <Reveal as="h2" className="standout-heading">What Makes Us Stand Out?</Reveal>
        <div className="standout-grid">
          {standOutCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100} className="standout-card">
              <div className="standout-icon">
                <Icon name={card.icon} size={26} color="#ffffff" />
              </div>
              <h3>{card.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
