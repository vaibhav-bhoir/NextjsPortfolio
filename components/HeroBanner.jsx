import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import computerAnimation from '../public/animations/computer-work-animation-data.json';
import CustomLink from './CustomLink';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import TypingEffect from '../hooks/useTyping';

const HeroBanner = ({ heroProps }) => {
  const { smallCaption, heading, description, subheadings, heroImage, resumeLink } = heroProps;

  const computerAnimationRef = useRef();
  const animationContainerRef = useRef(null);

  const handleIntersection = (entry) => {
    if (entry.isIntersecting) {
      console.log('Intersecting');
      computerAnimationRef.current?.play();
    } else {
      computerAnimationRef.current?.pause();
      console.log('not Intersecting');
    }
  };

  useIntersectionObserver({
    target: animationContainerRef?.current,
    callback: handleIntersection,
  });

  return (
    <section
      ref={animationContainerRef}
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <h3 className="text-primary text-xl mb-2" data-aos="fade-down" data-aos-delay="100">
            {smallCaption}
          </h3>
          <h1
            className="text-primary-text mb-6 text-7xl md:text-7xl lg:text-9xl font-extrabold tracking-tight"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {heading}
          </h1>
          <h1 className="text-primary text-3xl mb-8 h-10" data-aos="fade-down" data-aos-delay="300">
            <TypingEffect strings={subheadings} typeSpeed={40} backSpeed={60} loop></TypingEffect>
          </h1>
          <p
            className="text-primary text-base max-w-6xl mb-8"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            {description}
          </p>
          <div className="flex gap-4 lg:gap-8">
            <CustomLink url="/contact">Hire me</CustomLink>
            <CustomLink url={resumeLink}>Get Resume</CustomLink>
          </div>
        </div>
        <div className="">
          <Lottie
            // onComplete={() => {
            //   computerAnimationRef?.current?.goToAndPlay(120, true);
            // }}
            // loop={false}
            lottieRef={computerAnimationRef}
            animationData={computerAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
