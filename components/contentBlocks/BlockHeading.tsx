import React from 'react';

export type BlockHeadingProps = {
  heading: string;
  subheading: string;
  className?: string;
  color?: string;
};

const BlockHeading: React.FC<BlockHeadingProps> = ({
  heading,
  subheading,
  className = '',
  color = '',
}) => {
  if (!heading || !subheading) {
    return null;
  }
  return (
    <div className="container relative w-full flex justify-center items-center mt-12">
      <h1
        className="font-poppins text-6xl md:text-9xl lg:text-10xl tracking-tight absolute bottom-5 md:bottom-8 lg:bottom-11 text-transparent m-0"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        &lt;{heading} /&gt;
      </h1>
      <h2
        className={`${className} ${color} flex font-poppins text-5xl md:text-8xl lg:text-9xl text-primary-text font-extrabold m-0 relative z-[1]`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {subheading}
      </h2>
    </div>
  );
};

export default BlockHeading;
