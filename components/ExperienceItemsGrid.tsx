import React, { useState } from 'react';
import WorkCover from '../components/WorkCover';

interface ExperienceItemsGridProps {
  EXP_DATA: {
    fields: {
      title: string;
      description: any;
      keyResponsibilities: any;
      techStack: string[];
      typeOfProjectInternationaldomestic: string;
    };
  }[];
}

const ExperienceItemsGrid: React.FC<ExperienceItemsGridProps> = ({ EXP_DATA = [] }) => {
  const [filter, setFilter] = useState<string>('all');

  const handleFilter = (filter: string) => {
    setFilter(filter);
  };

  const filteredData =
    filter === 'all'
      ? EXP_DATA
      : EXP_DATA.filter((item) => {
          const projectType = item.fields.typeOfProjectInternationaldomestic
            ? 'International'
            : 'Domestic';
          return projectType === filter;
        });

  return (
    <div className="bg-pearl-black">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 justify-between mb-7 lg:mb-14">
          <h3 className="text-primary text-2xl lg:text-4xl font-semibold" data-aos="fade-in">
            All Projects
          </h3>
          <div className="flex gap-3 mb-4">
            <button
              className={`text-base lg:text-lg font-medium px-3.5 py-2.5 rounded-lg ${
                filter === 'all'
                  ? 'bg-primary-bg text-white'
                  : 'bg-main-bg text-primary shadow-shadow '
              }`}
              onClick={() => handleFilter('all')}
            >
              All
            </button>
            <button
              className={`text-base lg:text-lg font-medium px-3.5 py-2.5 rounded-lg ${
                filter === 'International'
                  ? 'bg-primary-bg text-white'
                  : 'bg-main-bg text-primary shadow-shadow '
              }`}
              onClick={() => handleFilter('International')}
            >
              International
            </button>
            <button
              className={`text-base lg:text-lg font-medium px-3.5 py-2.5 rounded-lg ${
                filter === 'Domestic'
                  ? 'bg-primary-bg text-white'
                  : 'bg-main-bg text-primary shadow-shadow '
              }`}
              onClick={() => handleFilter('Domestic')}
            >
              Domestic
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-10 transition ease-in-out">
          {(filteredData as any).map((data: any, index: number) => (
            <WorkCover data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItemsGrid;
