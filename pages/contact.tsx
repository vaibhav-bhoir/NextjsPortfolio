import React from 'react';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import GetInTouch from '../components/GetInTouch';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Vaibhav Bhoir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center pt-20">
        <div className="container relative w-full flex justify-center items-center mt-96">
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
    </>
  );
};

export default Contact;
