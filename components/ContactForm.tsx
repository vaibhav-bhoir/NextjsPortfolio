import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import axios, { Method } from 'axios';
import Loader from './Loader';
import getConfig from 'next/config';
import Lottie from 'lottie-react';
import manWorkingAnimation from '../public/animations/man-working-mobile-tablet-animation-data.json';

const ContactForm = () => {
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
      <section className="flex items-center justify-center py-20">
        <div className="container relative w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-28 lg:gap-10">
          <div className="lg:order-2">
            <Lottie animationData={manWorkingAnimation} />
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="lg:order-1">
            <h3 className="text-primary uppercase text-2xl lg:text-4xl font-semibold mb-7 lg:mb-12">
              Drop me a message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col relative mb-6">
                <label className="text-primary text-base font-medium mb-3" htmlFor="name">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  className={`${
                    errors.name ? 'ring-1 ring-red-500' : null
                  } outline-none text-base p-4 bg-main-bg shadow-shadow rounded-md placeholder-primary `}
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
                  {errors?.name?.message}
                </span>
              </div>
              <div className="flex flex-col relative mb-6">
                <label className="text-primary text-base font-medium mb-3 " htmlFor="email">
                  Your E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  className={`${
                    errors.email ? 'ring-1 ring-red-500' : null
                  } outline-none text-base p-4 bg-main-bg  shadow-shadow rounded-md placeholder-primary `}
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
                  {errors?.email?.message}
                </span>
              </div>
              <div className="flex flex-col relative mb-6">
                <label className="text-primary text-base font-medium my-2 " htmlFor="message">
                  Your message <span className="text-red-500">*</span>
                </label>
                <textarea
                  className={`${
                    errors.message ? 'ring-1 ring-red-500' : null
                  } outline-none text-base h-36 max-h-56 p-4 bg-main-bg shadow-shadow rounded-md placeholder-primary `}
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
                  {errors?.message?.message}
                </span>
              </div>

              <button
                disabled={isSubmitting}
                data-aos="fade-in"
                className="bg-main-bg text-base px-3 py-2 md:px-7 md:py-4 uppercase lg:tracking-wide
                flex items-center justify-between font-medium text-primary hover:text-primary"
                type="submit"
              >
                {loader ? 'Submitting' : 'submit'}
              </button>

              {isSubmitSuccessful && (
                <div className="text-success">
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
