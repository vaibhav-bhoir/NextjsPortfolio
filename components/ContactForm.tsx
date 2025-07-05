import axios, { Method } from 'axios';
import Lottie from 'lottie-react';
import getConfig from 'next/config';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import manWorkingAnimation from '../public/animations/man-working-mobile-tablet-animation-data.json';
import Loader from './Loader';

interface ContactFormProps {
  heading?: string;
  subheading?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ heading, subheading }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const [loader, setLoader] = useState(false);

  const { publicRuntimeConfig } = getConfig();
  const { BASE_URL } = publicRuntimeConfig;

  const apiUrl = `${BASE_URL}/api/contact`;

  const manWorkingAnimationRef = useRef<any>(null);
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const handleIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      manWorkingAnimationRef.current?.play();
    } else {
      manWorkingAnimationRef.current?.pause();
    }
  };

  useIntersectionObserver({
    target: animationContainerRef?.current,
    callback: handleIntersection,
  });

  async function onSubmit(values: any) {
    setLoader(true);

    let config = {
      method: 'post' as Method,
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const responce = await axios(config);
      if (responce.status == 201) {
        console.log('successful');
        setLoader(false);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section ref={animationContainerRef} className="flex items-center justify-center py-20">
        <div className="container relative w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-28 lg:gap-10">
          <div className="lg:order-2" data-aos="zoom-in-up" data-aos-duration="1000">
            <Lottie lottieRef={manWorkingAnimationRef} animationData={manWorkingAnimation} />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000" className="lg:order-1">
            <h3
              className="text-primary uppercase text-2xl lg:text-4xl font-semibold mb-4"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {heading}
            </h3>
            <h2
              className="text-primary text-base lg:text-lg max-w-6xl mb-8"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {subheading}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col relative mb-6">
                <label className="text-primary text-base font-medium mt-2 mb-3" htmlFor="name">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  className={`${
                    errors.name ? 'ring-1 ring-red-500' : null
                  } outline-none text-base p-4 py-3.5 bg-main-bg shadow-shadow rounded-md placeholder-primary `}
                  type="text"
                  placeholder="Tony Stark"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'You must enter your name',
                    },
                  })}
                />
                <span className="text-red-500 text-md py-2 absolute -bottom-7">
                  {errors?.name?.message as React.ReactNode}
                </span>
              </div>
              <div className="flex flex-col relative mb-6">
                <label className="text-primary text-base font-medium mt-2 mb-3 " htmlFor="email">
                  Your E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  className={`${
                    errors.email ? 'ring-1 ring-red-500' : null
                  } outline-none text-base p-4 py-3.5 bg-main-bg  shadow-shadow rounded-md placeholder-primary`}
                  type="text"
                  placeholder="ironman@gmail.com"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'You must enter your email address',
                    },
                    minLength: {
                      value: 8,
                      message: 'This is not long enough to be an email',
                    },
                    maxLength: {
                      value: 120,
                      message: 'This is too long',
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'This needs to be a valid email address',
                    },
                  })}
                />
                <span className="text-red-500 text-md py-2 absolute -bottom-7">
                  {errors?.email?.message as React.ReactNode}
                </span>
              </div>
              <div className="flex flex-col relative mb-9">
                <label className="text-primary text-base font-medium- mt-2 mb-3 " htmlFor="message">
                  Your message <span className="text-red-500">*</span>
                </label>
                <textarea
                  className={`${
                    errors.message ? 'ring-1 ring-red-500' : null
                  } outline-none text-base h-36 max-h-56 p-4 py-3.5 bg-main-bg shadow-shadow rounded-md placeholder-primary `}
                  rows={3}
                  id="message"
                  placeholder="Hey, I would like to get in touch with you"
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'You need to enter your message',
                    },
                    maxLength: {
                      value: 1000,
                      message: "Your message can't be more than 1000 characters",
                    },
                    minLength: {
                      value: 30,
                      message: 'Your message must be longer than this!',
                    },
                  })}
                />
                <span className="text-red-500 text-md py-2 absolute -bottom-7">
                  {errors?.message?.message as React.ReactNode}
                </span>
              </div>

              <button
                disabled={isSubmitting}
                className="relative inline-flex items-center justify-start px-4 py-2 md:px-5 md:py-2.5 uppercase shadow-shadow  lg:tracking-wide overflow-hidden font-medium transition-all bg-main-bg hover:bg-main-bg group"
                type="submit"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-bg absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span
                  className={`relative flex items-center w-full text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white`}
                >
                  {loader ? 'Submitting' : 'submit'}
                </span>
              </button>

              {isSubmitSuccessful && (
                <div className="text-base text-primary mt-6">
                  Thank you! I will get in touch with you shortly. for quick responce connect me on
                  whatsapp.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {isSubmitting && (
        <div className="fixed inset-0 bg-black opacity-60">
          <Loader />
        </div>
      )}
    </>
  );
};

export default ContactForm;
