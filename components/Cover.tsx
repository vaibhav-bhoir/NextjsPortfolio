import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface CoverProps {
  pdata: {
    fields: {
      title: string;
      githubUrl: string;
      date: string;
      liveUrl: string;
      type: string;
      thumbnailImage: {
        fields: {
          file: {
            url: string;
            details: {
              image: {
                width: number;
                height: number;
              };
            };
          };
        };
      };
    };
    sys: {
      id: string;
    };
  };
  handleClose: any;
}

const Cover: React.FC<CoverProps> = ({ pdata, handleClose }) => {
  const { fields, sys } = pdata || {};
  const { title, githubUrl, liveUrl, type, thumbnailImage } = fields || {};
  const { file } = thumbnailImage?.fields || {};

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="group hover-animation bg-main-bg shadow-shadow rounded-xl p-4 transform transition-transform"
    >
      <div className="justify-between items-center mx-2 flex">
        <div className="flex gap-2 mb-4">
          <span
            className="w-5 h-5 bg-primary-bg group-hover:bg-white rounded-full cursor-pointer"
            onClick={() => handleClose(sys.id)}
          ></span>
          <span className="w-5 h-5 bg-primary-bg group-hover:bg-white rounded-full"></span>
          <span className="w-5 h-5 bg-primary-bg group-hover:bg-white rounded-full"></span>
        </div>
        <h1 className="text-primary mb-4">{type}</h1>
      </div>
      <hr />

      <h1 className="text-primary text-xl font-medium my-4">{title}</h1>

      <h1 className="text-primary text-base mb-1">
        {liveUrl ? 'Completed' : 'Currently Working on'}
      </h1>
      <div className="flex items-center justify-between mb-4">
        <p className="text-primary">--</p>
      </div>
      <Image
        src={`https:${file.url}`}
        alt=""
        height={file.details.image.height}
        width={file.details.image.width}
        className="rounded-xl"
      />
      <div className="flex flex-wrap justify-between items-center mt-4">
        <p className="text-primary text-base cursor-pointer font-semibold">
          {githubUrl && (
            <Link href={githubUrl} className="text-primary inline-block" target="_blank">
              GitHub
            </Link>
          )}
        </p>
        <p className="text-primary text-base cursor-pointer font-semibold">
          {liveUrl && (
            <Link href={liveUrl} className="text-primary inline-block" target="_blank">
              Visit
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default Cover;
