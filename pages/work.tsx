import React from 'react';
import Head from 'next/head';
import LIST_DATA from '../public/data/project.list';
import WorkCover from '../components/WorkCover';
import CustomHeading from '../components/CustomHeading';

const Work = () => {
  return (
    <div className="py-20">
      <Head>
        <title>Work - Vaibhav Bhoir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center">
        <CustomHeading headingSup="Work" headingSub="More Projects" />

        <div className="container flex flex-col items-center justify-center">
          <h3 className="text-success dark:text-jaguar text-5xl md:text-6xl self-start">
            All Projects
          </h3>
          <div className="w-full min-h-screen my-12 transition ease-in-out">
            {LIST_DATA.map((e) => (
              <WorkCover data={e} key={e.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
