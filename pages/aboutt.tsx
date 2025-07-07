import { createClient } from 'contentful';
import Head from 'next/head';
import React from 'react';
import Badge from '../components/Badge';

interface Technology {
  title: string;
  image_url: string;
}

interface Content {
  fields: {
    heading: string;
    skills: {
      frontend: {
        js_frameworks: Technology[];
        css_frameworks: Technology[];
      };
      build_dev_tools: Technology[];
      cms: Technology[];
      database_management: Technology[];
      api_design_architectures: Technology[];
      project_management: Technology[];
      others: Technology[];
    };
  };
}

const About: React.FC<{ TECHNOLOGIES: Content[] }> = ({ TECHNOLOGIES }) => {
  const { fields } = TECHNOLOGIES[0] || {};
  const { heading, skills } = fields || {};
  const {
    frontend,
    cms,
    database_management,
    api_design_architectures,
    build_dev_tools,
    project_management,
    others,
  } = skills;

  return (
    <>
      <Head>
        <title>About - Vaibhav Bhoir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="py-20">
          <div className="container">
            <h3
              className="text-primary text-2xl lg:text-4xl font-semibold mb-7 lg:mb-14"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {heading}
            </h3>
          </div>
          <div className="container">
            <h3 className="text-primary text-lg mb-4">CSS Frameworks</h3>
            <div className="flex gap-5 flex-wrap items-center mb-8">
              {frontend?.css_frameworks?.map((item: any, index: any) => (
                <Badge data={item} key={index} />
              ))}
            </div>

            <h3 className="text-primary text-lg mb-4">JS Frameworks</h3>
            <div className="flex gap-5 flex-wrap items-center mb-8">
              {frontend.js_frameworks.map((item: any, index: any) => (
                <Badge data={item} key={index} />
              ))}
            </div>

            <h3 className="text-primary text-lg mb-4">CMS</h3>
            <div className="flex gap-5 flex-wrap items-center mb-8">
              {cms.map((item: any, index: any) => (
                <Badge data={item} key={index} />
              ))}
            </div>

            <h3 className="text-primary text-lg mb-4">Build dev tools</h3>
            <div className="flex gap-5 flex-wrap items-center mb-8">
              {build_dev_tools.map((item: any, index: any) => (
                <Badge data={item} key={index} />
              ))}
            </div>

            <h3 className="text-primary text-lg mb-4">Api Design Architectures</h3>
            <div className="flex gap-5 flex-wrap items-center mb-8">
              {api_design_architectures.map((item: any, index: any) => (
                <Badge data={item} key={index} />
              ))}
            </div>

            <h3 className="text-primary text-lg mb-4">Api Design Architectures</h3>
            <div className="flex gap-5 flex-wrap items-center mb-8">
              {database_management.map((item: any, index: any) => (
                <Badge data={item} key={index} />
              ))}
            </div>

            <h3 className="text-primary text-lg mb-4">Api Design Architectures</h3>
            <div className="flex gap-5 flex-wrap items-center mb-8">
              {project_management.map((item: any, index: any) => (
                <Badge data={item} key={index} />
              ))}
            </div>

            <h3 className="text-primary text-lg mb-4">Project Management</h3>
            <div className="flex gap-5 flex-wrap items-center mb-8">
              {others.map((item: any, index: any) => (
                <Badge data={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

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

  const technologies = await client.getEntries({ content_type: 'technologies' });

  return {
    props: {
      TECHNOLOGIES: technologies.items,
    },
    revalidate: 10,
  };
}
