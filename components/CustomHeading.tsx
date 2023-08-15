import React from 'react';

export type HeadingProps = {
  headingSup: string;
  headingSub: string;
  color?: string;
  className?: string;
};

const CustomHeading: React.FC<HeadingProps> = ({
  className = '',
  headingSup,
  headingSub,
  color = 'secondary',
}) => {
  return (
    <div className="container relative w-full flex justify-center items-center my-10 lg:my-20">
      <h1 className="font-poppins text-6xl md:text-9xl lg:text-11xl tracking-tight absolute bottom-5 md:bottom-8 lg:bottom-10 text-transparent m-0">
        &lt;{headingSup} /&gt;
      </h1>
      <h1
        className={`${className} flex font-poppins text-5xl md:text-8xl lg:text-10xl text-${color} font-extrabold m-0 relative z-10`}
      >
        {headingSub}
      </h1>
    </div>
  );
};

export default CustomHeading;
