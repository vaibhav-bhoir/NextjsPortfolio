import React from 'react';
import CustomHeading from './CustomHeading';
import Cover from './Cover';
import Lottie from 'lottie-react';
import CustomLink from './CustomLink';
import folderAnimation from '../public/animations/document-folder-animation-data.json';

const FeaturedProjects = (props: any) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-pearl-black">
      <CustomHeading headingSup="Work" headingSub="Featured Projects" color="primary" />

      <div className="container flex flex-wrap flex-col items-center justify-center">
        <h3 className="text-secondary  text-5xl md:text-6xl self-start mb-20">
          Some Selected Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 transition ease-in-out">
          {props.data.length > 0 &&
            props.data.map((pdata: any) => (
              <Cover pdata={pdata} key={pdata.sys.id} handleClose={props.handleClose} />
            ))}
        </div>
        {props.data.length === 0 && (
          <>
            <div className="flex flex-col justify-center items-center">
              <div className="my-12">
                <Lottie animationData={folderAnimation} />
              </div>
              <h3 className="text-success  md:text-4xl" data-aos="fade-in">
                No Projects Opened
              </h3>
            </div>
            <button
              className="rounded-lg border-2 px-8 py-4 my-4  border-info text-info self-center"
              onClick={() => props.setData(props.PROJECTS_DATA)}
            >
              Load All Again
            </button>
          </>
        )}
        {props.data.length !== 0 && <CustomLink url="/work">View More</CustomLink>}
      </div>
    </div>
  );
};

export default FeaturedProjects;
