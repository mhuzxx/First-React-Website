import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { ourValues } from '../data/content';
import './OurValue.css';

export default function OurValue() {
  return (
    <section className="ourvalue">
      <div className="container ourvalue-grid">
        <Reveal as="div">
          <h2 className="ourvalue-heading">
            OUR <span>VALUE</span>
          </h2>
          <p className="ourvalue-sub">A melting pot for the best ideas</p>

          <div className="ourvalue-list">
            {ourValues.map((v, i) => (
              <Reveal as="div" key={v.title} delay={i * 100} className="ourvalue-item">
                <div className="ourvalue-icon">
                  <Icon name={v.icon} size={26} color="#7cc9ff" />
                </div>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" delay={150} className="ourvalue-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
            alt="Team discussing project values"
            className="ourvalue-image"
          />
        </Reveal>
      </div>
    </section>
  );
}
