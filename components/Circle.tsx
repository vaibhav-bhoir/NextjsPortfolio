import React from 'react';
import Image from 'next/image';

interface CircleProps {
  data: {
    title: string;
    image_url: string;
  };
}

const Circle: React.FC<CircleProps> = ({ data }) => {
  const { title, image_url } = data;

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="shadow-shadow bg-main-bg w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col justify-center items-center"
    >
      <div className="mt-1">
        <Image src={image_url} alt="icon" width={40} height={40} />
      </div>
      <h1 className="text-md lg:text-base font-medium text-primary">{title}</h1>
    </div>
  );
};

export default Circle;
