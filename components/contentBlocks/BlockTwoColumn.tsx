import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React, { useRef } from 'react';
import LottieFromCms from '../LottieFromCms';

interface BlockTwoColumnProps {
  title: string;
  description: any;
  imagePosition?: 'Left' | 'Right';
  animation?: any; // Assuming this is a Lottie animation or similar
}
const BlockTwoColumn: React.FC<BlockTwoColumnProps> = ({
  title,
  description,
  imagePosition = 'left',
  animation,
}) => {
  const shouldRenderTitle = !!title;
  const webDevAnimationRef = useRef<any>(null);
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const animationUrl = animation?.fields?.file?.url;

  const handleIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      webDevAnimationRef.current?.play();
    } else {
      webDevAnimationRef.current?.pause();
    }
  };

  useIntersectionObserver({
    target: animationContainerRef?.current,
    callback: handleIntersection,
  });

  return (
    <section
      ref={animationContainerRef}
      className="flex flex-col justify-center py-20 bg-pearl-black"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`${imagePosition === 'left' ? '' : 'order-2'}`}>
            {animationUrl && <LottieFromCms animationUrl={`https:${animationUrl}`} />}
          </div>
          <div className="">
            {shouldRenderTitle && (
              <h3
                className="text-primary uppercase font-semibold  text-2xl mb-6"
                data-aos="fade-down"
              >
                {title}
              </h3>
            )}
            <div
              className="text-primary text-base max-w-6xl mb-8 flex flex-col gap-4"
              data-aos="fade-down"
            >
              {documentToReactComponents(description)}
            </div>
            {/* <div className="flex">
              <CustomLink url="/about">More About Me</CustomLink>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockTwoColumn;
