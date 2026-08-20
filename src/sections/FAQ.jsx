import { useState } from 'react';
import Reveal from '../components/Reveal';
import { faqItems } from '../data/content';
import './FAQ.css';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq">
      <div className="container">
        <Reveal as="p" className="faq-eyebrow">Have You Any Question</Reveal>
        <Reveal as="h2" className="faq-heading" delay={60}>
          <span>Frequently</span> Asked Questions
        </Reveal>

        <div className="faq-grid">
          <div className="faq-list">
            {faqItems.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal as="div" key={item.q} delay={i * 70} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span>{item.q}</span>
                    <span className="faq-chevron">⌄</span>
                  </button>
                  <div className="faq-answer-wrap">
                    <p className="faq-answer">{item.a}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal as="div" delay={150} className="faq-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80"
              alt="Team answering questions"
              className="faq-image"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
