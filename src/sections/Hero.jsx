import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import HeroSlide from './HeroSlide';
import heroSlides from './heroSlides';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background stays fixed — not part of the slider */}
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}