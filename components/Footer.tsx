import React from 'react';

const Footer = () => {
  return (
    <footer
      className="flex flex-col justify-center items-center py-12"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h5 className="text-primary text-base lg:text-xl mb-2">
        Designed and Developed with <span className="text-red-500">❤</span> by
      </h5>
      <h6 className="text-primary-text text-base lg:text-lg uppercase font-bold tracking-widest">
        Vaibhav Bhoir
      </h6>
    </footer>
  );
};

export default Footer;
