import React from 'react';
import Lottie from 'lottie-react';
import loaderAnimation from '../public/animations/loader-animation-data.json';

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 p-6 w-full flex justify-center items-center z-20">
      <Lottie animationData={loaderAnimation} />
    </div>
  );
};

export default Loader;
