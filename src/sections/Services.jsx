import { useState } from 'react';
import Reveal from '../components/Reveal';
import { serviceTabs } from '../data/content';
import './Services.css';

export default function Services() {
  const [active, setActive] = useState(serviceTabs[0].key);
  const activeTab = serviceTabs.find((t) => t.key === active);

  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal as="h2" className="services-heading">
          <span className="services-heading-accent">Services</span> We Offer
        </Reveal>
        <Reveal as="p" className="services-lead" delay={80}>
          TOJO GLOBAL offers crypto solutions, targeted marketing, impactful design, custom
          development, and professional video editing to elevate your brand.
        </Reveal>

        <div className="services-body">
          <Reveal as="div" className="services-tabs" delay={120}>
            {serviceTabs.map((tab) => (
              <button
                key={tab.key}
                className={`services-tab ${tab.key === active ? 'services-tab-active' : ''}`}
                onClick={() => setActive(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </Reveal>

          <div className="services-content">
            <div className="services-items" key={active}>
              {activeTab.items.map((item, i) => (
                <span className="services-item" key={item} style={{ animationDelay: `${i * 60}ms` }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
