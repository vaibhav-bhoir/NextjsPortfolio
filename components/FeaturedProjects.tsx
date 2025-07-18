import Lottie from 'lottie-react';
import React from 'react';
import folderAnimation from '../public/animations/document-folder-animation-data.json';
import Cover from './Cover';

interface Projects {
  fields: {
    title: string;
    description: any;
    liveUrl: string;
    githubUrl: string;
    thumbnailImage: string;
    type: string;
  };
  sys: {
    id: string;
  };
}

interface FeaturedProjectsProps {
  PROJECTS_DATA: Projects[];
  data: Projects[];
  handleClose: () => void;
  setData: any;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  PROJECTS_DATA,
  data,
  handleClose,
  setData,
}) => {
  return (
    <section className="py-20 bg-pearl-black">
      <div className="container">
        <h3
          className="text-primary text-2xl lg:text-4xl font-semibold mb-7 lg:mb-14"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Some Personal Projects
        </h3>
        {data.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mb-14 transition ease-in-out">
            {data.map((pdata: any) => (
              <Cover pdata={pdata} key={pdata.sys.id} handleClose={handleClose} />
            ))}
          </div>
        )}
        {data.length === 0 && (
          <>
            <div className="flex flex-col justify-center items-center">
              <div className="mb-8">
                <Lottie animationData={folderAnimation} />
              </div>
              <h3 className="text-primary text-2xl" data-aos="fade-in">
                No Projects Opened
              </h3>
            </div>
            <div className="flex justify-center items-center mt-8">
              <button
                data-aos="fade-in"
                className="relative inline-flex items-center justify-start px-5 py-3.5 md:px-7 md:py-4 uppercase shadow-shadow  lg:tracking-wide overflow-hidden font-medium transition-all bg-main-bg hover:bg-main-bg group"
                onClick={() => setData(PROJECTS_DATA)}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-bg absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span
                  className={`relative flex items-center w-full text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white`}
                >
                  Load all again
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
