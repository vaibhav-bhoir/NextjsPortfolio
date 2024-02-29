import React, { useState } from 'react';
import CustomHeading from './CustomHeading';
import ExCover from './ExCover';

interface Experience {
  fields: {
    title: string;
    date: string;
    jobPosition: string;
    projectDescription: string;
    location: string;
    description: string;
    projectPeriod: string;
    keyResponsibilities: string;
  };
  sys: {
    id: string;
  };
}

interface ExperienceProjectsProps {
  EXP_DATA: Experience[];
}

const ExperienceProjects: React.FC<ExperienceProjectsProps> = ({ EXP_DATA }) => {
  // const [itemsToShow, setItemsToShow] = useState(window.innerWidth >= 768 ? 6 : 3);
  const [itemsToShow, setItemsToShow] = useState(6);

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + 3);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setItemsToShow(window.innerWidth >= 768 ? 6 : 3);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <section className="flex flex-col items-center justify-center py-20">
      <CustomHeading headingSup="Work" headingSub="Experience" color="black" />

      <div className="container">
        <h3
          className="text-primary  text-2xl lg:text-4xl font-semibold mb-7 lg:mb-14"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Projects on which I have worked
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 transition ease-in-out">
          {EXP_DATA.slice(0, itemsToShow).map((expData) => (
            <ExCover expData={expData} key={expData.sys.id} />
          ))}
        </div>
        {itemsToShow < EXP_DATA.length && (
          <div className="flex justify-center items-center mt-10">
            <button
              data-aos="fade-in"
              className="relative inline-flex items-center justify-start px-5 py-3.5 md:px-7 md:py-4 uppercase shadow-shadow  lg:tracking-wide overflow-hidden font-medium transition-all bg-main-bg hover:bg-main-bg group"
              onClick={loadMoreItems}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-bg absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span
                className={`relative flex items-center w-full text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white`}
              >
                View More
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceProjects;
