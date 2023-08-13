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
      className="bg-white rounded-xl px-4 pt-4 pb-8 transform transition-transform hover:scale-[1.02]"
    >
      <div className="justify-between items-center flex">
        <div className="flex my-4">
          <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></span>
          <span className="w-6 h-6 mx-2 bg-primary rounded-full"></span>
          <span className="w-6 h-6 bg-secondary rounded-full"></span>
        </div>
        <h1 className="text-black my-4">{expData.fields.date}</h1>
      </div>
      <hr />
      <h1 className="text-black  text-4xl mx-4 my-6">{expData.fields.title}</h1>
      <h2 className="text-black text-xl mx-4 mb-2 flex items-center">
        <MdLocationPin />
        &nbsp;{expData.fields.location}
      </h2>
      <div className="flex flex-col md:flex">
        <p className="text-black  mx-4 mb-4">{expData.fields.jobPosition}</p>
        <p className="text-gray text-3xl mx-4 cursor-pointer">
          {expData.fields.projectDescription}
        </p>
      </div>
    </div>
  );
};

export default ExCover;
