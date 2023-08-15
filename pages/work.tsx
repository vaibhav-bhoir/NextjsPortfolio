import React from 'react';
import Head from 'next/head';
import LIST_DATA from '../public/data/project.list';
import WorkCover from '../components/WorkCover';
import CustomHeading from '../components/CustomHeading';

const Work = () => {
  return (
    <>
      <Head>
        <title>Work - Vaibhav Bhoir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-pearl-black py-20">
        <CustomHeading headingSup="Work" headingSub="More Projects" />

        <div className="container">
          <h3
            className="text-primary text-2xl lg:text-4xl font-semibold mb-7 lg:mb-14"
            data-aos="fade-in"
          >
            All Projects
          </h3>
          <div className="flex flex-col gap-6 lg:gap-10 transition ease-in-out">
            {LIST_DATA.map((e) => (
              <WorkCover data={e} key={e.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
