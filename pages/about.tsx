import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Circle from '../components/Circle';
import SKILL_DATA from '../public/data/skill.data';
import CustomHeading from '../components/CustomHeading';
import CustomLink from '../components/CustomLink';

const About = () => {
  return (
    <>
      <Head>
        <title>About - Vaibhav Bhoir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="py-20">
          <div className="container">
            <CustomHeading headingSup="About" headingSub="Vaibhav Bhoir" />

            <h3
              className="text-success  text-2xl lg:text-4xl font-semibold mb-8"
              data-aos="fade-in"
            >
              Let me tell you a few things....
            </h3>
            <div className="max-w-2xl mb-8 flex flex-col gap-4">
              <p className="text-black text-base" data-aos="fade-in">
                I am creative Web developer based in Mumbai, India. I Have Done Bachelor of
                engineering in Electronics and Telecommunications.
              </p>
              <p className="text-black text-base" data-aos="fade-in">
                I have build several websites , looking at the design I can convert it into a HTML
                CSS template with pixel perfect precision. I use bootstrap very often , so the turn
                around of my project is very quick and I always use GIT to track my progress and
                files, as well to collaborate with other developers.
              </p>
            </div>
            <div className="flex">
              <CustomLink url="https://drive.google.com/file/d/1SQBc9-Px8UvT6FeuOBZyCaugx4lPemx6/view?usp=drivesdk">
                Get Resume
              </CustomLink>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-l from-primary to-secondary py-20">
          <div className="container">
            <CustomHeading color="black" headingSup="Toolbox" headingSub=" My Weapons ⚔" />

            <h3
              className="text-success  text-2xl lg:text-4xl font-semibold mb-7 lg:mb-14"
              data-aos="fade-in"
            >
              Technologies that I use
            </h3>
            <div className="flex gap-5 lg:gap-10 flex-wrap justify-center items-center">
              {SKILL_DATA.map((e) => (
                <Circle data={e} key={e.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
