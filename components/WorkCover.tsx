// WorkCover.tsx
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface WorkProps {
  data: {
    fields: {
      title: string;
      description: any;
      keyResponsibilities: any;
      techStack: string[];
      typeOfProjectInternationaldomestic: string;
    };
    sys: {
      id: string;
    };
  };
}

const WorkCover = ({ data }: WorkProps) => {
  const { title, description, keyResponsibilities, techStack, typeOfProjectInternationaldomestic } =
    data?.fields;

  const shouldRenderDescription = description && description !== '';
  const shouldRenderKeyResponsibilities = keyResponsibilities && keyResponsibilities !== '';

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="workcover-card shadow-shadow bg-main-bg  rounded-xl p-4 transform transition-transform hover:scale-[1.02]"
      id={`${data.sys.id}`}
    >
      <div className="justify-between items-center mx-2 flex">
        <div className="flex gap-2 mb-4">
          <span className="w-5 h-5 bg-primary-bg rounded-full cursor-pointer"></span>
          <span className="w-5 h-5 bg-primary-bg rounded-full"></span>
          <span className="w-5 h-5 bg-primary-bg rounded-full"></span>
        </div>
      </div>
      <hr />
      <div className="flex justify-between gap-3 items-start">
        <h1 className="text-primary font-semibold text-xl my-4">{title}</h1>
        {typeOfProjectInternationaldomestic ? (
          <span className="text-white text-xs lg:text-base font-medium my-4 px-3.5 py-1.5 rounded-full bg-[#3B5998]">
            International
          </span>
        ) : (
          <span className="text-white text-xs lg:text-base font-medium my-4 px-3.5 py-1.5 rounded-full bg-[#7FB069]">
            Domestic
          </span>
        )}
      </div>
      {shouldRenderDescription && (
        <div className="prose text-primary text-base max-w-6xl mb-6" data-aos="fade-down">
          {documentToReactComponents(description)}
        </div>
      )}
      {shouldRenderKeyResponsibilities && (
        <div className="prose text-primary text-base max-w-6xl mb-6" data-aos="fade-down">
          {documentToReactComponents(keyResponsibilities)}
        </div>
      )}
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="px-4 py-1.5 bg-body-bg shadow-shadow  text-primary rounded-full"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCover;
