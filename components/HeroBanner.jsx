import React, { useRef } from 'react';
import Typed from 'react-typed';
import Lottie from 'lottie-react';
import computerAnimation from '../public/animations/computer-work-animation-data.json';
import CustomLink from './CustomLink';

const HeroBanner = ({ heroProps }) => {
  const { smallCaption, heading, description, subheadings, heroImage, resumeLink } = heroProps;

  const computerAnimationRef = useRef();

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-28 lg:gap-10">
        <div className="">
          <h3 className="text-success  md:text-4xl" data-aos="fade-in">
            {smallCaption}
          </h3>
          <h1
            className="text-black  text-9xl md:text-7xl lg:text-8xl font-bold"
            data-aos="fade-in"
            data-aos-delay={500}
          >
            {heading}
          </h1>
          <h1
            className="text-black  text-4xl md:text-6xl mb-16"
            data-aos="fade-in"
            data-aos-delay={1000}
          >
            <Typed strings={subheadings} typeSpeed={40} backSpeed={60} loop></Typed>
          </h1>
          <p
            className="text-black  text-3xl md:text-4xl max-w-6xl mb-16"
            data-aos="fade-in"
            data-aos-delay={1500}
          >
            {description}
          </p>
          <div className="flex gap-12">
            <CustomLink url="/contact">Hire me</CustomLink>
            <CustomLink url={resumeLink} color="info">
              Get Resume
            </CustomLink>
          </div>
        </div>
        <div className="">
          <Lottie
            onComplete={() => {
              computerAnimationRef?.current?.goToAndPlay(120, true);
            }}
            loop={false}
            lottieRef={computerAnimationRef}
            animationData={computerAnimation}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
