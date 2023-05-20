import React from 'react';
import Head from 'next/head';
import LIST_DATA from '../public/data/project.list';
import WorkCover from '../components/WorkCover';

const Work = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Head>
        <title>Work - Vaibhav Bhoir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center mt-20 mb-40">
        <div className="h-1/4 mt-96 container relative w-full flex justify-center items-center">
          <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent">
            &lt;Work /&gt;{' '}
          </h1>
          <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold">
            More Projects
          </h1>
        </div>
        <main className="container flex flex-col items-center justify-center">
          <h3 className="text-success dark:text-jaguar text-5xl md:text-4xl self-start">
            All Projects
          </h3>
          <div className="w-full min-h-screen my-12 transition ease-in-out">
            {LIST_DATA.map((e) => (
              <WorkCover data={e} key={e.id} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Work;
