import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';

interface LottieFromCmsProps {
  animationUrl: string; // URL from Contentful asset
}

const LottieFromCms: React.FC<LottieFromCmsProps> = ({ animationUrl }) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(animationUrl);
        const json = await response.json();
        setAnimationData(json);
      } catch (error) {
        console.error('Error loading Lottie JSON:', error);
      }
    };

    fetchAnimation();
  }, [animationUrl]);

  if (!animationData) return null;

  return <Lottie animationData={animationData} loop={true} />;
};

export default LottieFromCms;
