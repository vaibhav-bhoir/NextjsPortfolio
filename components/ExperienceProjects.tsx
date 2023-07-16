import React from 'react';
import CustomHeading from './CustomHeading';
import ExCover from './ExCover';

interface Experience {
  fields: {
    title: string;
    date: string;
    jobPosition: string;
    projectDescription: string;
    location: string;
  };
  sys: {
    id: string;
  };
}

interface ExperienceProjectsProps {
  EXP_DATA: Array<Experience>;
}

const ExperienceProjects: React.FC<ExperienceProjectsProps> = ({ EXP_DATA }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <CustomHeading headingSup="Work" headingSub="Experience" />

      <div className="container">
        <h3 className="text-success dark:text-jaguar text-5xl md:text-4xl mb-20" data-aos="fade-in">
          Projects on which I have worked
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 my-12 transition ease-in-out">
          {EXP_DATA.map((expData) => (
            <ExCover expData={expData} key={expData.sys.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceProjects;
