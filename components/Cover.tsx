import React from 'react';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
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

const Cover = ({ pdata, handleClose }: CoverProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-light-gray  rounded-xl px-4 transform transition-transform hover:scale-[1.02]"
    >
      <div className="justify-between items-center mx-2 flex">
        <div className="flex my-6">
          <span
            className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"
            onClick={() => handleClose(pdata.sys.id)}
          ></span>
          <span className="w-6 h-6 mx-2 bg-primary rounded-full"></span>
          <span className="w-6 h-6 bg-secondary rounded-full"></span>
        </div>
        <h1 className="text-white my-6">{pdata.fields.type}</h1>
      </div>
      <hr />
      {pdata.fields.liveUrl ? (
        <Link href={pdata.fields.liveUrl} target="_blank">
          <a>
            <h1 className="text-white text-4xl mx-4 my-4">{pdata.fields.title}</h1>
          </a>
        </Link>
      ) : (
        <h1 className="text-white text-4xl mx-4 my-4">{pdata.fields.title}</h1>
      )}
      <h1 className="text-white text-xl mx-4 my-2">
        {pdata.fields.liveUrl ? 'Completed' : 'Currently Working on'}
      </h1>
      <div className="flex items-center justify-between m-4">
        <p className="text-white mx-4">--</p>
        <div className="flex">
          <p className="text-secondary text-3xl mx-4 cursor-pointer">
            {pdata.fields.liveUrl && (
              <Link href={pdata.fields.liveUrl} target="_blank">
                <a>
                  <AiOutlineLink />
                </a>
              </Link>
            )}
          </p>
          <p className="text-secondary text-3xl mx-4 cursor-pointer">
            {pdata.fields.githubUrl && (
              <Link href={pdata.fields.githubUrl} target="_blank">
                <a>
                  <AiOutlineGithub />
                </a>
              </Link>
            )}
          </p>
        </div>
      </div>
      <Image
        src={`https:${pdata.fields.thumbnailImage.fields.file.url}`}
        alt=""
        height={pdata.fields.thumbnailImage.fields.file.details.image.height}
        width={pdata.fields.thumbnailImage.fields.file.details.image.width}
        className="rounded-2xl"
      />
      <div className="flex flex-wrap justify-between items-center my-4 mx-4">
        <p className="text-secondary text-2xl mx-4 cursor-pointer font-semibold">
          {pdata.fields.githubUrl && (
            <Link href={pdata.fields.githubUrl}>
              <a target="_blank">GitHub</a>
            </Link>
          )}
        </p>
        <p className="text-secondary text-2xl mx-4 cursor-pointer font-semibold">
          {pdata.fields.liveUrl && (
            <Link href={pdata.fields.liveUrl}>
              <a target="_blank">Visit</a>
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default Cover;
