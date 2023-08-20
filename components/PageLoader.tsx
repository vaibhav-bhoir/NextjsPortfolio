import React from 'react';
import Lottie from 'lottie-react';
import pageLoader from '../public/animations/pageloader-animation-data2.json';

const PageLoader = () => {
  return (
    <div className="fixed bg-main-bg top-0 left-0 right-0 bottom-0 p-6 w-full flex justify-center items-center z-50">
      <Lottie animationData={pageLoader} />
    </div>
  );
};

export default PageLoader;
