import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import './About.css';

import heroImage from '../assets/about-hero.jpg';
import visionImage from '../assets/about-vision.jpg';

const journey = [
  {
    number: '1',
    title: 'Submit Application',
  },
  {
    number: '2',
    title: 'Initial Screening',
  },
  {
    number: '3',
    title: 'Technical Interview',
  },
  {
    number: '4',
    title: 'Join Our Team',
  },
];

const values = [
  {
    icon: 'integrity',
    title: 'Integrity',
    text: 'We hold ourselves to a strong ethical and moral code.',
  },
  {
    icon: 'trust',
    title: 'Trust',
    text: 'We are dependable, loyal, and hardworking to achieve the same goal.',
  },
  {
    icon: 'excellence',
    title: 'Excellence',
    text: 'We consistently strive to deliver high-quality work without room for error.',
  },
];

const visionPoints = [
  'Industry Expert Staff',
  'Client-Centric Focus',
  'Solutions Geared to Improve Productivity',
  'Collaborative Approach Throughout the Process',
];

export default function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="about-hero">
        <div className="about-container about-hero-inner">

          <Reveal
            direction="left"
            className="about-hero-content"
          >
            <h1>
              Building <span>Future-Ready</span>
              <br />
              <span>Software</span>
            </h1>

            <p>
              We are a team of passionate developers, designers, and
              thinkers building scalable solutions for tomorrow. At
              Code's Thinker, we don't just build software – we craft
              scalable, intelligent solutions that drive real-world
              impact. Our team of developers, designers, and strategists
              work together to deliver innovative digital products
              tailored for tomorrow's challenges. Rooted in collaboration,
              quality, and forward thinking, we're committed to helping
              businesses grow through technology.
            </p>
          </Reveal>

          <Reveal
            direction="right"
            className="about-hero-image"
          >
            <img
              src={heroImage}
              alt="Code's Thinker team"
            />
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}
      <section className="about-journey">
        <div className="about-container">

          <Reveal
            as="h2"
            direction="top"
            className="about-section-title"
          >
            Your Path to Joining Code's Thinker
          </Reveal>

          <div className="journey-grid">

            {journey.map((item, index) => (
              <Reveal
                key={item.title}
                direction="up"
                delay={index * 150}
                className="journey-item"
              >
                <div className="journey-circle">
                  <span>{item.number}</span>
                </div>

                <h3>
                  {item.number} – {item.title}
                </h3>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          VISION
      ===================================================== */}
      <section className="about-vision">
        <div className="about-container vision-grid">

          <Reveal
            direction="left"
            className="vision-image"
          >
            <img
              src={visionImage}
              alt="Our vision"
            />
          </Reveal>

          <Reveal
            direction="right"
            className="vision-content"
          >
            <h2>
              YOUR <span>VISION</span> OUR <span>CODE</span>
            </h2>

            <p>
              At Codes Thinker, we are a passionate team of developers,
              designers, and strategists dedicated to building smart,
              scalable, and user-focused digital solutions. We thrive on
              creativity, and cutting-edge technology to transform ideas
              into impactful products. With a commitment to quality,
              transparency, and client satisfaction, we don't just deliver
              code – we deliver value.
            </p>

            <div className="vision-points">

              {visionPoints.map((point, index) => (
                <div
                  className="vision-point"
                  key={point}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <span>→</span>
                  <p>{point}</p>
                </div>
              ))}

            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="about-values">
        <div className="about-container values-grid">

          {/* LEFT SIDE - VALUES CONTENT */}
          <div className="values-left">

            <Reveal
              direction="left"
              className="values-heading"
            >
              <h2>
                OUR <span>VALUE</span>
              </h2>

              <h3>
                A melting pot for the best ideas
              </h3>
            </Reveal>


            <div className="values-list">

              {values.map((value, index) => (
                <Reveal
                  key={value.title}
                  direction="left"
                  delay={index * 150}
                  className="value-item"
                >

                  <div className="value-icon">
                    <Icon
                      name={value.icon}
                      size={28}
                      color="#5d36ff"
                    />
                  </div>

                  <div>
                    <h3>{value.title}</h3>

                    <p>
                      {value.text}
                    </p>
                  </div>

                </Reveal>
              ))}

            </div>

          </div>


          {/* RIGHT SIDE - VALUES IMAGE */}
          <Reveal
            as="div"
            direction="right"
            delay={150}
            className="about-image-wrap"
          >
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
              alt="Team discussing project values"
              className="about-image"
            />
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}
      <section className="about-testimonials">
        <div className="about-container testimonials-grid">

          <Reveal
            direction="left"
            className="testimonial-heading"
          >
            <h2>
              Our <span>Clients,</span>
              <br />
              In Their Own Words
            </h2>
          </Reveal>


          <Reveal
            direction="right"
            className="testimonial-card"
          >

            <div className="testimonial-stars">
              ★ ★ ★ ★ ★
            </div>


            <div className="testimonial-user">

              <div className="testimonial-avatar">
                <span>👤</span>
              </div>

              <div>
                <h3>Muhammad Waseem</h3>
                <p>Customer</p>
              </div>

            </div>


            <p className="testimonial-text">
              Excellent service! Codes Thinker delivered a stunning,
              responsive website on time. Highly recommended for web
              solutions.
            </p>


            <button className="review-button">
              Add Your Reviews
            </button>

          </Reveal>

        </div>
      </section>

    </main>
  );
}