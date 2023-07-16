import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import CustomLink from './CustomLink';

const GetInTouch = () => {
  return (
    <div data-aos="fade-in" data-aos-duration="1000" className="container">
      <h3 className="text-success dark:text-jaguar text-5xl md:text-4xl mb-16">Get in Touch</h3>
      <h2 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl mb-16">
        This is how you can reach me. Lets work together to create something worth sharing.
      </h2>
      <div className="flex gap-12">
        <CustomLink url="mailto:bhoirvaibhav90@gmail.com" target="_blank">
          <AiOutlineMail />
          <span className="mx-2">Mail</span>
        </CustomLink>
        <CustomLink
          url="https://www.linkedin.com/in/vaibhav-bhoir-b50a9a185"
          color="info"
          target="_blank"
        >
          <AiOutlineLinkedin />
          <span className="mx-2">LinkedIn</span>
        </CustomLink>
        <CustomLink url="https://github.com/vaibhav-bhoir" color="normal" target="_blank">
          <AiOutlineGithub />
          <span className="mx-2">GitHub</span>
        </CustomLink>
      </div>
    </div>
  );
};

export default GetInTouch;
