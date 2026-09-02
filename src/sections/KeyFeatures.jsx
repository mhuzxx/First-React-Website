import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { keyFeatures } from '../data/content';
import './KeyFeatures.css';

export default function KeyFeatures() {
  return (
    <section className="keyfeatures">
      <div className="container keyfeatures-grid">
        <Reveal className="keyfeatures-circle">
          <span>KEY</span>
          <span>FEATURES</span>
        </Reveal>

        <div className="keyfeatures-list">
          {keyFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className="keyfeatures-pill">
              <span className="keyfeatures-icon">
                <Icon name={f.icon} size={18} />
              </span>
              {f.title}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    
  );
}
