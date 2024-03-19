import React from 'react';
import CustomLink from './CustomLink';

const GetInTouch = () => {
  return (
    <div data-aos="fade-in" data-aos-duration="1000" className="container">
      <h3
        className="text-primary uppercase text-2xl lg:text-4xl font-semibold mb-4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Get in Touch
      </h3>
      <h2
        className="text-primary text-base lg:text-lg max-w-6xl mb-8"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        This is how you can reach me. Lets work together to create something worth sharing.
      </h2>
      <div className="flex flex-wrap gap-4 lg:gap-5">
        <CustomLink url="mailto:bhoirvaibhav90@gmail.com" target="_blank">
          <div className="text-2xl">
            <svg height="1em" width="1em">
              <use xlinkHref="#email" />
            </svg>
          </div>
          <span className="ml-2">Mail</span>
        </CustomLink>
        <CustomLink url="https://www.linkedin.com/in/vaibhav-bhoir-b50a9a185" target="_blank">
          <div className="text-2xl">
            <svg height="1em" width="1em">
              <use xlinkHref="#linkedin" />
            </svg>
          </div>
          <span className="ml-2">LinkedIn</span>
        </CustomLink>
        <CustomLink url="https://github.com/vaibhav-bhoir" target="_blank">
          <div className="text-2xl">
            <svg height="1em" width="1em">
              <use xlinkHref="#github" />
            </svg>
          </div>
          <span className="ml-2">GitHub</span>
        </CustomLink>
      </div>
    </div>
  );
};

export default GetInTouch;
