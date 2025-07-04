import React from 'react';
import Carousel, { Experience } from '../Carousel';
import ExperienceItemsGrid from '../ExperienceItemsGrid';

interface BlockWorkExperienceProps {
  title: string;
  experienceItems?: Experience[];
  showCarousel?: boolean;
}

const BlockWorkExperience: React.FC<BlockWorkExperienceProps> = ({
  title,
  experienceItems = [],
  showCarousel = true,
}) => {
  return (
    <div>
      {showCarousel ? (
        <Carousel title={title} EXP_DATA={experienceItems} />
      ) : (
        <ExperienceItemsGrid EXP_DATA={experienceItems} />
      )}
    </div>
  );
};

export default BlockWorkExperience;
