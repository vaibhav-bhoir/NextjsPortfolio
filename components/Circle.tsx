import React from 'react';
import Image from 'next/image';

interface CircleProps {
  data: {
    name: string;
    imageSrc: string;
  };
}

const Circle: React.FC<CircleProps> = ({ data }) => {
  const { name, imageSrc } = data;

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="shadow-shadow bg-main-bg w-24 h-24 md:w-48 md:h-48 rounded-full flex flex-col justify-center items-center"
    >
      <div className="mt-1">
        <Image src={imageSrc} alt="icon" width={40} height={40} />
      </div>
      <h1 className="text-base lg:text-xl font-medium text-primary">{name}</h1>
    </div>
  );
};

export default Circle;
