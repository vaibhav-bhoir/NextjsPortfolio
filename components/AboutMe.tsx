import React, { useRef } from 'react';
import CustomHeading from './CustomHeading';
import CustomLink from './CustomLink';
import Lottie from 'lottie-react';
import webDevAnimation from '../public/animations/web-devoloper-animation-data.json';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AboutMeProps {
  heroProps: {
    aboutHeading: string;
    aboutDescription: any;
  };
}
const AboutMe: React.FC<AboutMeProps> = ({ heroProps }) => {
  const { aboutHeading, aboutDescription } = heroProps || {};

  const webDevAnimationRef = useRef<any>(null);
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const handleIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      webDevAnimationRef.current?.play();
    } else {
      webDevAnimationRef.current?.pause();
    }
  };

  useIntersectionObserver({
    target: animationContainerRef?.current,
    callback: handleIntersection,
  });

  return (
    <section
      ref={animationContainerRef}
      className="flex flex-col justify-center py-20 bg-pearl-black"
    >
      <CustomHeading headingSup="About" headingSub="Vaibhav Bhoir" color="primary" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="">
            <Lottie lottieRef={webDevAnimationRef} animationData={webDevAnimation} />
          </div>
          <div className="">
            <h3
              className="text-primary uppercase font-semibold  text-2xl mb-6"
              data-aos="fade-down"
            >
              {aboutHeading}
            </h3>
            <div
              className="text-primary text-base max-w-6xl mb-8 flex flex-col gap-4"
              data-aos="fade-down"
            >
              {documentToReactComponents(aboutDescription)}
            </div>
            <div className="flex">
              <CustomLink url="/about">More About Me</CustomLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
