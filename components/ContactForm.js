import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image'
import axios from 'axios';

const ContactForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    async function onSubmit (values) {

        let config = {
            method : 'post',
            url : 'http://localhost:3000/api/contact',
            headers : {
                'Content-Type' : 'application/json',
            },
            data : values,
        };

        try {
            const responce = await axios(config);
            if (responce.status == 200) {
                console.log('successful');
                reset();
                // router.push('/');
            }
        } catch (error) {
            console.log(error)
        }

    }
    
    return (
        <>
            <div className='min-h-screen flex items-center justify-center mb-40 md:mb-20'>
                <div className="h-1/4 container relative w-full flex flex-wrap justify-center items-center px-5 md:px-36 lg:px-56">
                    <div className="w-full md:w-1/2">
                        <Image
                        alt="Illustration of man sitting on a block"
                        src="/contact.svg"
                        width="100%" height="100%" layout="responsive" objectFit="contain"
                        />
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <h3 className="text-success md:text-4xl">Drop me a message</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col relative mb-7">
                            <label className="mb-3 dark:text-black" htmlFor="name">
                            Your Full Name
                            </label>
                            <input
                            className={`${errors.name ? 'ring-2 ring-red-500' : null} py-2 px-4 bg-gray-700 dark:bg-white border-primary border-2 rounded-md placeholder-gray-400 dark:text-black`}
                            type="text"
                            name="name"
                            placeholder="Tony Stark"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'You must enter your name',
                                },
                            })} 
                            />
                            <span className="text-red-400 text-lg py-2 absolute -bottom-10">
                                {errors?.name?.message}
                            </span>
                        </div>
                        <div className="flex flex-col relative mb-7">
                            <label className="mb-3 dark:text-black" htmlFor="email">
                            Your E-mail
                            </label>
                            <input
                            className={`${errors.email ? 'ring-2 ring-red-500' : null} py-2 px-4 bg-gray-700 dark:bg-white border-primary border-2 rounded-md placeholder-gray-400 dark:text-black`}
                            type="text"
                            name="email"
                            placeholder="ironman@gmail.com"
                            {...register("email", {
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
                            <span className="text-red-400 text-lg py-2 absolute -bottom-10">
                                {errors?.email?.message}
                            </span>
                        </div>
                        <div className="flex flex-col relative mb-7">
                            <label className="my-2 dark:text-black" htmlFor="message">
                            Your message
                            </label>
                            <textarea
                            className={`${errors.message ? 'ring-2 ring-red-500' : null} h-28 max-h-56 py-2 px-4 bg-gray-700 dark:bg-white border-primary border-2 rounded-md dark:text-black`}
                            rows="3"
                            id="message"
                            type="text"
                            name="message"
                            placeholder="Hey, I would like to get in touch with you"
                            {...register("message", {
                                required: {
                                    value: true,
                                    message: 'You need to enter your message',
                                },
                                maxLength: {
                                    value: 1000,
                                    message: "Your message can't be more than 1000 characters",
                                },
                                minLength: {
                                    value: 50,
                                    message: 'Your message must be longer than this!',
                                },
                            })} 
                            />
                            <span className="text-red-400 text-lg py-2 absolute -bottom-10">
                                {errors?.message?.message}
                            </span>
                        </div>
                        <button
                            data-aos="fade-in" className="rounded-lg border-2 px-4 py-2 my-10 md:px-8 md:py-4 flex items-center justify-between  border-info text-info hover:bg-info hover:text-black"
                            type="submit"
                        >
                            Submit
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm