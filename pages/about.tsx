import React from 'react';
import Head from 'next/head';
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
              className="text-primary  text-2xl lg:text-4xl font-semibold mb-8"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Let me tell you a few things....
            </h3>
            <div className="max-w-2xl mb-8 flex flex-col gap-4">
              <p className="text-primary text-base" data-aos="fade-down" data-aos-duration="1000">
                I am creative Web developer based in Mumbai, India. I Have Done Bachelor of
                engineering in Electronics and Telecommunications.
              </p>
              <p className="text-primary text-base" data-aos="fade-down" data-aos-duration="1000">
                I have build several websites , looking at the design I can convert it into a HTML
                CSS template with pixel perfect precision. I use bootstrap very often , so the turn
                around of my project is very quick and I always use GIT to track my progress and
                files, as well to collaborate with other developers.
              </p>
            </div>
            <div className="flex">
              <CustomLink
                url="https://assets.ctfassets.net/qj2xf4iz1a0x/6VbeSJSe0WJTk448CNpvkW/813f3c03e3daf74ed7cf678d5644bb1c/Vaibhav_Bhoir_Resume.pdf"
                target="_blank"
                download={true}
              >
                Get Resume
              </CustomLink>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="container">
            <CustomHeading color="black" headingSup="Toolbox" headingSub=" My Weapons ⚔" />

            <h3
              className="text-primary  text-2xl lg:text-4xl font-semibold mb-7 lg:mb-14"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Technologies that I use
            </h3>
            <div className="flex gap-5 lg:gap-7 flex-wrap justify-center items-center">
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
