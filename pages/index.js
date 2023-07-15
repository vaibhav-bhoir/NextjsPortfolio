import Head from 'next/head';
import { createClient } from 'contentful';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cover from '../components/Cover';
import ExCover from '../components/ExCover';
import ContactForm from '../components/ContactForm';
import Image from 'next/image';
import GetInTouch from '../components/GetInTouch';
import HeroBanner from '../components/HeroBanner';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import folderAnimation from '../public/animations/document-folder-animation-data.json';
import webDevAnimation from '../public/animations/web-devoloper-animation-data.json';

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
    <div className="overflow-hidden">
      <Head>
        <title>Vaibhav Bhoir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBanner heroProps={heroProps} />

      <div className="flex flex-col items-center justify-center my-64">
        <div className="container relative w-full flex justify-center items-center">
          <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent">
            &lt;About /&gt;{' '}
          </h1>
          <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold">
            Vaibhav Bhoir
          </h1>
        </div>
        <main className="container flex flex-row flex-wrap items-center justify-center">
          <div className="w-full lg:w-1/2 md:p-16 mb-24">
            <Lottie animationData={webDevAnimation} />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="w-full lg:w-1/2">
            <h3 className="text-success dark:text-jaguar text-5xl md:text-4xl">
              {heroProps.aboutHeading}
            </h3>
            <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">
              {documentToReactComponents(heroProps.aboutDescription)}
            </h3>
            <Link href="/about">
              <button className="rounded-lg border-2 px-8 py-4 mt-4 mb-24 dark:text-white dark:bg-darkblue dark:border-darkblue border-success text-success hover:bg-success hover:text-black">
                Learn More
              </button>
            </Link>
          </div>
        </main>
      </div>

      <div className="flex flex-col items-center justify-center my-64">
        <div className="container relative w-full flex justify-center items-center">
          <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent">
            &lt;Work /&gt;{' '}
          </h1>
          <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold">
            Experience
          </h1>
        </div>
        <main className="container">
          <h3 className="text-success dark:text-jaguar text-5xl md:text-4xl" data-aos="fade-in">
            Projects on which I have worked
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 my-12 transition ease-in-out">
            {EXP_DATA.map((expData) => (
              <ExCover expData={expData} key={expData.sys.id} />
            ))}
          </div>
        </main>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="container relative w-full flex justify-center items-center">
          <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent">
            &lt;Work /&gt;{' '}
          </h1>
          <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold">
            Featured Projects
          </h1>
        </div>
        <main className="container flex flex-wrap flex-col items-center justify-center">
          <h3 className="text-success dark:text-jaguar text-5xl md:text-4xl self-start">
            Some Selected Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 my-12 transition ease-in-out">
            {data.length > 0 &&
              data.map((pdata) => (
                <Cover pdata={pdata} key={pdata.sys.id} handleClose={handleClose} />
              ))}
          </div>
          {data.length === 0 && (
            <>
              <div className="flex flex-col justify-center items-center">
                <div className="my-12">
                  <Lottie animationData={folderAnimation} />
                </div>
                <h3 className="text-success dark:text-jaguar md:text-4xl" data-aos="fade-in">
                  No Projects Opened
                </h3>
              </div>
              <button
                className="rounded-lg border-2 px-8 py-4 my-4 dark:text-white dark:bg-darkblue dark:border-darkblue border-info text-info self-center"
                onClick={() => setData(PROJECTS_DATA)}
              >
                Load All Again
              </button>
            </>
          )}
          {data.length !== 0 && (
            <Link href="/work">
              <button className="rounded-lg border-2 px-8 py-4 my-4 dark:text-white dark:bg-darkblue dark:border-darkblue border-success text-success self-center hover:bg-success hover:text-black">
                View More
              </button>
            </Link>
          )}
        </main>
      </div>

      <div className="flex flex-col items-center justify-center mt-96 md:mb-0">
        <div className="container relative w-full flex justify-center items-center">
          <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent">
            &lt;Contact /&gt;{' '}
          </h1>
          <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold">
            Say Hello
          </h1>
        </div>
        <GetInTouch />
      </div>
      <ContactForm />
    </div>
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
