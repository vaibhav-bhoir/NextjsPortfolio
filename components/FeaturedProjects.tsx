import React from 'react';
import CustomHeading from './CustomHeading';
import Cover from './Cover';
import Lottie from 'lottie-react';
import CustomLink from './CustomLink';
import folderAnimation from '../public/animations/document-folder-animation-data.json';

const FeaturedProjects = (props: any) => {
  return (
    <section className="py-20 bg-pearl-black">
      <CustomHeading headingSup="Work" headingSub="Featured Projects" color="primary" />

      <div className="container">
        <h3
          className="text-primary text-2xl lg:text-4xl font-semibold mb-7 lg:mb-14"
          data-aos="fade-in"
        >
          Some Selected Projects
        </h3>
        {props.data.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mb-14 transition ease-in-out">
            {props.data.map((pdata: any) => (
              <Cover pdata={pdata} key={pdata.sys.id} handleClose={props.handleClose} />
            ))}
          </div>
        )}
        {props.data.length === 0 && (
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
                className="bg-main-bg shadow-shadow text-base text-primary px-4 py-2 md:px-8 md:py-4 uppercase tracking-wide
                flex items-center justify-between font-medium"
                onClick={() => props.setData(props.PROJECTS_DATA)}
              >
                Load All Again
              </button>
            </div>
          </>
        )}
        <div className="flex justify-center items-center">
          {props.data.length !== 0 && <CustomLink url="/work">View More</CustomLink>}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
