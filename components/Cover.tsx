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
      className="hover-animation bg-main-bg shadow-shadow rounded-xl p-4 transform transition-transform hover:scale-[1.02]"
    >
      <div className="justify-between items-center mx-2 flex">
        <div className="flex gap-2 mb-4">
          <span
            className="w-5 h-5 bg-red-300 rounded-full cursor-pointer"
            onClick={() => handleClose(pdata.sys.id)}
          ></span>
          <span className="w-5 h-5 bg-red-500 rounded-full"></span>
          <span className="w-5 h-5 bg-red-700 rounded-full"></span>
        </div>
        <h1 className="text-primary mb-4">{pdata.fields.type}</h1>
      </div>
      <hr />
      {pdata.fields.liveUrl ? (
        <Link href={pdata.fields.liveUrl} target="_blank" legacyBehavior>
          <a>
            <h1 className="text-primary font-semibold text-xl my-4">{pdata.fields.title}</h1>
          </a>
        </Link>
      ) : (
        <h1 className="text-primary text-4xl my-4">{pdata.fields.title}</h1>
      )}
      <h1 className="text-primary text-base mb-1">
        {pdata.fields.liveUrl ? 'Completed' : 'Currently Working on'}
      </h1>
      <div className="flex items-center justify-between mb-4">
        <p className="text-primary">--</p>
        <div className="flex gap-4">
          <p className="text-primary text-base cursor-pointer">
            {pdata.fields.liveUrl && (
              <Link href={pdata.fields.liveUrl} target="_blank" legacyBehavior>
                <a>
                  <AiOutlineLink />
                </a>
              </Link>
            )}
          </p>
          <p className="text-primary text-base cursor-pointer">
            {pdata.fields.githubUrl && (
              <Link href={pdata.fields.githubUrl} target="_blank" legacyBehavior>
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
        className="rounded-xl"
      />
      <div className="flex flex-wrap justify-between items-center mt-4">
        <p className="text-primary text-base cursor-pointer font-semibold">
          {pdata.fields.githubUrl && (
            <Link href={pdata.fields.githubUrl} legacyBehavior>
              <a target="_blank">GitHub</a>
            </Link>
          )}
        </p>
        <p className="text-primary text-base cursor-pointer font-semibold">
          {pdata.fields.liveUrl && (
            <Link href={pdata.fields.liveUrl} legacyBehavior>
              <a target="_blank">Visit</a>
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default Cover;
