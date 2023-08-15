import React from 'react';
import CustomHeading from './CustomHeading';
import CustomLink from './CustomLink';
import Lottie from 'lottie-react';
import webDevAnimation from '../public/animations/web-devoloper-animation-data.json';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AboutMe = (props: any) => {
  return (
    <section className="flex flex-col justify-center py-20 bg-pearl-black">
      <CustomHeading headingSup="About" headingSub="Vaibhav Bhoir" color="primary" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="">
            <Lottie animationData={webDevAnimation} />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="">
            <h3 className="text-secondary uppercase font-semibold  text-2xl mb-6">
              {props.heroProps.aboutHeading}
            </h3>
            <div className="text-white text-base max-w-6xl mb-8 flex flex-col gap-4">
              {documentToReactComponents(props.heroProps.aboutDescription)}
            </div>
            <div className="flex">
              <CustomLink url="/about">Learn More</CustomLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
