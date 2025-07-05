import React from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import GetInTouch from '../components/GetInTouch';
import HeroBanner from '../components/HeroBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomHeading from '../components/CustomHeading';
import FeaturedProjects from '../components/FeaturedProjects';
import Carousel from '../components/Carousel';
import AboutMe from '../components/AboutMe';

interface Experience {
  fields: {
    title: string;
    date: string;
    jobPosition: string;
    projectDescription: string;
    location: string;
    keyResponsibilities: string;
    description: string;
    projectPeriod: string;
  };
  sys: {
    id: string;
  };
}

interface Hero {
  fields: {
    smallCaption: string;
    heading: string;
    subheadings: [string];
    description: string;
    resume: any;
    aboutHeading: string;
    aboutDescription: any;
    aboutImage: any;
  };
}

interface Project {
  fields: {
    title: string;
    description: any;
    liveUrl: string;
    githubUrl: string;
    thumbnailImage: string;
    type: string;
  };
  sys: {
    id: string;
  };
}
interface HomeProps {
  EXP_DATA: Experience[];
  PROJECTS_DATA: Project[];
  hero: Hero[];
}

const Home: React.FC<HomeProps> = ({ EXP_DATA, PROJECTS_DATA, hero }) => {
  const [data, setData] = useState(PROJECTS_DATA);

  const heroProps = hero[0].fields;

  const handleClose = (id?: any) => {
    const newData = data.filter((e: any) => e.sys.id !== id);
    setData(newData);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Vaibhav Bhoir</title>
      </Head>

      <HeroBanner heroProps={heroProps} />
      <AboutMe heroProps={heroProps} />
      <Carousel EXP_DATA={EXP_DATA} />
      <FeaturedProjects
        PROJECTS_DATA={PROJECTS_DATA}
        data={data}
        setData={setData}
        handleClose={handleClose}
      ></FeaturedProjects>
      <div className="">
        <div className="flex flex-col items-center justify-center py-20 ">
          <CustomHeading headingSup="Contact" headingSub="Say Hello to me" color="black" />
          <GetInTouch />
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

  if (!spaceId || !accessToken) {
    throw new Error('Contentful environment variables are not defined');
  }

  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });

  const hero = await client.getEntries({ content_type: 'heading' });
  const featuredProjects = await client.getEntries({ content_type: 'featuredProjects' });
  const workExperience = await client.getEntries({ content_type: 'workExperience' });

  return {
    props: {
      EXP_DATA: workExperience.items,
      hero: hero.items,
      PROJECTS_DATA: featuredProjects.items,
    },
    revalidate: 10,
  };
}
