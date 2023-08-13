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
    <div className="container relative w-full flex justify-center items-center mt-20 mb-20">
      <h1 className="text-8xl md:text-9xl lg:text-15xl absolute bottom-14 md:bottom-16 lg:bottom-20 text-transparent m-0">
        &lt;{headingSup} /&gt;
      </h1>
      <h1
        className={`${className} flex text-7xl md:text-8xl lg:text-10xl text-${color} font-extrabold m-0`}
      >
        {headingSub}
      </h1>
    </div>
  );
};

export default CustomHeading;
