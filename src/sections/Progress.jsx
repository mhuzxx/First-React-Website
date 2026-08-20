import Reveal from '../components/Reveal';
import { useCountUp } from '../components/useCountUp';
import { useInView } from '../components/useInView';
import { progressStats } from '../data/content';
import './Progress.css';

function StatCard({ stat, delay }) {
  const [ref, inView] = useInView(0.4);
  const value = useCountUp(stat.value, inView, 1600, stat.decimals || 0);

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal progress-card ${inView ? 'reveal-visible' : ''}`}>
      <h3>
        {stat.prefix || ''}{value}{stat.suffix || ''}
      </h3>
      <p>{stat.label}</p>
    </div>
  );
}

export default function Progress() {
  return (
    <section className="progress-section">
      <div className="container">
        <Reveal as="h2" className="progress-heading">
          Our <span>Progress</span>
        </Reveal>
        <Reveal as="p" className="progress-lead" delay={80}>
          TOJO GLOBAL connects your business directly to your target audience, eliminating the
          need to search for clients. With us, they&apos;ll find their way to you.
        </Reveal>

        <div className="progress-grid">
          {progressStats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
