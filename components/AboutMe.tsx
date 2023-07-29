import React from 'react';
import CustomHeading from './CustomHeading';
import CustomLink from './CustomLink';
import Lottie from 'lottie-react';
import webDevAnimation from '../public/animations/web-devoloper-animation-data.json';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AboutMe = (props: any) => {
  return (
    <div className="container flex flex-col justify-center py-20">
      <CustomHeading headingSup="About" headingSub="Vaibhav Bhoir" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="">
          <Lottie animationData={webDevAnimation} />
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" className="">
          <h3 className="text-success dark:text-jaguar text-5xl md:text-6xl mb-16">
            {props.heroProps.aboutHeading}
          </h3>
          <div className="text-secondary-900 text-3xl md:text-4xl max-w-6xl mb-16">
            {documentToReactComponents(props.heroProps.aboutDescription)}
          </div>
          <div className="flex">
            <CustomLink url="/about">Learn More</CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
