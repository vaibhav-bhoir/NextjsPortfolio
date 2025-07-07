import webDevAnimation from '../public/animations/not-found.json';

import CustomLink from '@/components/CustomLink';
import Lottie from 'lottie-react';

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="max-w-[1000px]">
        <Lottie animationData={webDevAnimation} />
        <CustomLink url={'/'}>Go to homepage</CustomLink>
      </div>
    </div>
  );
}
