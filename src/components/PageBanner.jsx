import Reveal from './Reveal';
import './PageBanner.css';

export default function PageBanner({ eyebrow, title, text }) {
  return (
    <section className="page-banner">
      <div className="page-banner-overlay" />
      <div className="container page-banner-content">
        {eyebrow && <Reveal as="p" className="page-banner-eyebrow">{eyebrow}</Reveal>}
        <Reveal as="h1" delay={60}>{title}</Reveal>
        {text && <Reveal as="p" className="page-banner-text" delay={120}>{text}</Reveal>}
      </div>
    </section>
  );
}
