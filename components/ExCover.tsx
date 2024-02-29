import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';

interface ExCoverProps {
  expData: {
    fields: {
      title: string;
      jobPosition: string;
      description: any;
      keyResponsibilities: any;
      location: string;
      projectPeriod: string;
    };
    sys: {
      id: string;
    };
  };
}

const ExCover = ({ expData }: ExCoverProps) => {
  const { fields } = expData || {};
  const { title, jobPosition, description, location, projectPeriod, keyResponsibilities } =
    fields || {};

  const shouldRenderLocation = location && location !== '';
  const shouldRenderJobPosition = jobPosition && jobPosition !== '';
  const shouldRenderProjectPeriod = projectPeriod && projectPeriod !== '';

  return (
    <Link
      href={`/work#${expData.sys.id}`}
      data-aos="zoom-in-up"
      className="workcover-card workcover-card--half group hover-animation relative overflow-hidden bg-main-bg rounded-xl p-4 shadow-shadow transform transition-transform inline-block m-1 max-h-80"
    >
      <div className="justify-between items-center flex">
        <div className="flex gap-2 mb-4">
          <span className="w-5 h-5 bg-primary-bg group-hover:bg-white rounded-full cursor-pointer"></span>
          <span className="w-5 h-5 bg-primary-bg group-hover:bg-white rounded-full"></span>
          <span className="w-5 h-5 bg-primary-bg group-hover:bg-white rounded-full"></span>
        </div>
        {shouldRenderProjectPeriod && <h1 className="text-primary mb-4">{projectPeriod}</h1>}
      </div>
      <hr />
      <h1 className="text-primary font-semibold text-xl my-6">{title}</h1>
      {shouldRenderLocation && (
        <h2 className="text-primary text-lg mb-1 flex items-center">
          <MdLocationPin />
          &nbsp;{location}
        </h2>
      )}
      <div className="flex flex-col md:flex">
        {shouldRenderJobPosition && <p className="text-primary mb-4">{jobPosition}</p>}
        <div className="prose text-primary text-base max-w-6xl mb-6" data-aos="fade-down">
          {documentToReactComponents(description || keyResponsibilities)}
        </div>
      </div>
    </Link>
  );
};

export default ExCover;
