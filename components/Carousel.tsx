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
    <div className="container py-20">
      <h3 className="text-success dark:text-jaguar text-5xl md:text-6xl mb-20" data-aos="fade-in">
        Projects on which I have worked
      </h3>
      <Swiper
        className="swiper mb-20"
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
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
    </div>
  );
};

export default Carousel;
