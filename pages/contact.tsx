import React from 'react';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import GetInTouch from '../components/GetInTouch';
import CustomHeading from '../components/CustomHeading';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Vaibhav Bhoir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center pt-20">
        <CustomHeading headingSup="Contact" headingSub="Say Hello" />
        <GetInTouch />
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
