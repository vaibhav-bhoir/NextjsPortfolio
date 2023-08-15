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
    <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-primary to-secondary">
      <CustomHeading headingSup="Work" headingSub="Experience" color="black" />

      <div className="container">
        <h3
          className="text-success  text-2xl lg:text-4xl font-semibold mb-7 lg:mb-14"
          data-aos="fade-in"
        >
          Projects on which I have worked
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 transition ease-in-out">
          {EXP_DATA.map((expData) => (
            <ExCover expData={expData} key={expData.sys.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceProjects;
