import React from 'react';

interface FooterProps {
  footerSignature: string;
}

const Footer: React.FC<FooterProps> = ({ footerSignature }) => {
  if (!footerSignature) {
    return null;
  }

  return (
    <footer className="flex flex-col justify-center items-center py-12">
      <h5 className="text-primary text-base lg:text-lg mb-2">
        Designed and Developed with <span className="text-red-500">❤</span> by
      </h5>
      <h6 className="text-primary-text text-base uppercase font-bold tracking-widest">
        {footerSignature}
      </h6>
    </footer>
  );
};

export default Footer;
