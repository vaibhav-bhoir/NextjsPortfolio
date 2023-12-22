import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ExCover from './ExCover';

interface Experience {
  fields: {
    title: string;
    date: string;
    jobPosition: string;
    projectDescription: string;
    location: string;
  };
  sys: {
    id: string;
  };
}

interface ExperienceProjectsProps {
  EXP_DATA: Array<Experience>;
}

const Carousel: React.FC<ExperienceProjectsProps> = ({ EXP_DATA }) => {
  return (
    <section className="container py-20">
      <h3
        className="text-primary text-2xl lg:text-4xl font-semibold mb-7 lg:mb-14"
        data-aos="fade-in"
      >
        Projects on which I have worked
      </h3>
      <Swiper
        className="swiper"
        slidesPerView={1.2}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 2.5,
          },
          1366: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {EXP_DATA.map((expData) => (
          <SwiperSlide className="swiper-slide" key={expData.sys.id}>
            <ExCover expData={expData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
