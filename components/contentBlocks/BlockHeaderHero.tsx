import useIntersectionObserver from '@/hooks/useIntersectionObserver';
// import TypingEffect from '@/hooks/useTyping';
import React, { useRef } from 'react';
import CustomLink from '../CustomLink';

interface BlockHeaderHeroProps {
  smallCaption: string;
  heading: string;
  subheadings: [string];
  description: string;
  resume: any;
}

const BlockHeaderHero: React.FC<BlockHeaderHeroProps> = ({
  smallCaption,
  heading,
  description,
  subheadings,
  resume,
}) => {
  const shouldRenderHeading = !!heading;
  const shouldRenderSmallCaption = !!smallCaption;
  const shouldRenderResume = !!resume?.fields?.file?.url;
  const shoudlRenderSubheadings = subheadings && subheadings.length > 0;
  const shouldRenderDescription = !!description;

  const pdfUrl = `https:${resume?.fields?.file?.url}`;
  const computerAnimationRef = useRef<any>(null);
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const handleIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      computerAnimationRef.current?.play();
    } else {
      computerAnimationRef.current?.pause();
    }
  };

  useIntersectionObserver({
    target: animationContainerRef?.current,
    callback: handleIntersection,
  });

  return (
    <section
      ref={animationContainerRef}
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          {shouldRenderSmallCaption && (
            <h3 className="text-primary text-xl mb-2" data-aos="fade-down" data-aos-delay="100">
              {smallCaption}
            </h3>
          )}
          {shouldRenderHeading && (
            <h1
              className="text-primary-text mb-6 text-7xl md:text-7xl lg:text-9xl font-extrabold tracking-tight"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {heading}
            </h1>
          )}
          {shoudlRenderSubheadings && (
            <h1
              className="text-primary text-3xl mb-4 h-10"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              {/* <TypingEffect strings={subheadings}></TypingEffect> */}
            </h1>
          )}
          {shouldRenderDescription && (
            <p
              className="text-primary text-base max-w-6xl mb-8"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {description}
            </p>
          )}
          <div className="flex gap-4 lg:gap-8">
            <CustomLink url="/contact">
              <div className="flex items-center">
                <svg height="1.6em" width="1.6em">
                  <use xlinkHref="#hire-me" />
                </svg>
                <span className="ml-2">Hire me</span>
              </div>
            </CustomLink>
            {shouldRenderResume && (
              <CustomLink url={pdfUrl} target="_blank" download={true}>
                <div className="flex items-center">
                  <svg height="1.2em" width="1.2em">
                    <use xlinkHref="#file" />
                  </svg>
                </div>
                <span className="ml-2">Get Resume</span>
              </CustomLink>
            )}
          </div>
        </div>
        <div className="">
          {/* <Lottie lottieRef={computerAnimationRef} animationData={computerAnimationRef} /> */}
        </div>
      </div>
    </section>
  );
};

export default BlockHeaderHero;
