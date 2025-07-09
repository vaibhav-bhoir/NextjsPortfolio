import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ExCover from './ExCover';

export interface Experience {
  title?: string;
  fields: {
    title: string;
    date: string;
    jobPosition: string;
    projectDescription: string;
    location: string;
    keyResponsibilities: string;
    description: string;
    projectPeriod: string;
    techStack: string[];
    typeOfProjectInternationaldomestic: string;
  };
  sys: {
    id: string;
  };
}

interface ExperienceProjectsProps {
  title?: string;
  EXP_DATA: Experience[];
}

const Carousel: React.FC<ExperienceProjectsProps> = ({
  title = 'Projects on which I have worked',
  EXP_DATA,
}) => {
  return (
    <div className="container">
      <h3
        className="text-primary text-2xl lg:text-4xl font-semibold mb-7 lg:mb-14"
        data-aos="fade-in"
      >
        {title}
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
        {EXP_DATA.map((expData: Experience) => (
          <SwiperSlide className="swiper-slide" key={expData.sys.id}>
            <ExCover expData={expData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
