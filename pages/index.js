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
import ExperienceProjects from '../components/ExperienceProjects';
import AboutMe from '../components/AboutMe';

export default function Home({ EXP_DATA, PROJECTS_DATA, hero }) {
  const [data, setData] = useState(PROJECTS_DATA);

  const heroProps = hero[0].fields;

  const handleClose = (id) => {
    const newData = data.filter((e) => e.sys.id !== id);
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBanner heroProps={heroProps} />
      <AboutMe heroProps={heroProps}></AboutMe>
      <ExperienceProjects EXP_DATA={EXP_DATA}></ExperienceProjects>
      <FeaturedProjects
        PROJECTS_DATA={PROJECTS_DATA}
        data={data}
        setData={setData}
        handleClose={handleClose}
      ></FeaturedProjects>
      <div className="">
        <div className="flex flex-col items-center justify-center py-20 ">
          <CustomHeading headingSup="Contact" headingSub="Say Hello" color="black" />
          <GetInTouch />
        </div>
        <ContactForm />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  });

  const projectListRes = await client.getEntries({ content_type: 'projectsOnWhichIveWorked' });
  const hero = await client.getEntries({ content_type: 'heading' });
  const featuredProjects = await client.getEntries({ content_type: 'featuredProjects' });

  return {
    props: {
      EXP_DATA: projectListRes.items,
      hero: hero.items,
      PROJECTS_DATA: featuredProjects.items,
    },
    revalidate: 10,
  };
}
