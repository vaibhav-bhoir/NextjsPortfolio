import React from 'react';
import { MdLocationPin } from 'react-icons/md';

interface ExCoverProps {
  expData: {
    fields: {
      title: string;
      jobPosition: string;
      projectDescription: string;
      location: string;
      date: string;
    };
  };
}

const ExCover = ({ expData }: ExCoverProps) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="group hover-animation relative overflow-hidden bg-main-bg rounded-xl p-4 shadow-shadow transform transition-transform"
    >
      <div className="justify-between items-center flex">
        <div className="flex gap-2 mb-4">
          <span className="w-5 h-5 bg-primary-bg group-hover:bg-white rounded-full cursor-pointer"></span>
          <span className="w-5 h-5 bg-primary-bg group-hover:bg-white rounded-full"></span>
          <span className="w-5 h-5 bg-primary-bg group-hover:bg-white rounded-full"></span>
        </div>
        <h1 className="text-primary mb-4">{expData.fields.date}</h1>
      </div>
      <hr />
      <h1 className="text-primary font-semibold text-xl my-4">{expData.fields.title}</h1>
      <h2 className="text-primary text-lg mb-1 flex items-center">
        <MdLocationPin />
        &nbsp;{expData.fields.location}
      </h2>
      <div className="flex flex-col md:flex">
        <p className="text-primary mb-4">{expData.fields.jobPosition}</p>
        <p className="text-primary text-base">{expData.fields.projectDescription}</p>
      </div>
    </div>
  );
};

export default ExCover;
