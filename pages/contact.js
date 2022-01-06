import React from 'react'
import Head from 'next/head'
import { AiOutlineGithub, AiOutlineLinkedin , AiOutlineMail} from "react-icons/ai";
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <div className="px-3">

            <Head>
                <title>Contact - Vaibhav Bhoir</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center pt-20">
                <div className="container relative w-full flex justify-center items-center mt-96">
                    <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', zIndex: '-1' }}>&lt;Contact /&gt; </h1>
                    <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-red-500 font-extrabold" >Say Hello</h1>
                </div>
                <main className="container px-10 md:px-36 lg:px-56">
                    <h3 className="text-success md:text-4xl">Get in Touch</h3>
                    <h2 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">This is how you can reach me. Let’s work together to create something worth sharing.</h2>
                    <div className="flex">
                        <a href="mailto:bhoirvaibhav90@gmail.com" target="_blank">
                        <button data-aos="fade-in" className="rounded-lg border-2 px-4 py-2 my-2 mr-3 md:px-8 md:py-4 md:my-4 md:mx-4 flex items-center justify-between border-success text-success hover:bg-success hover:text-black">
                            <AiOutlineMail />
                            <span className="mx-2">Mail</span>
                        </button>
                        </a>
                        <a href="https://www.linkedin.com/in/vaibhav-bhoir-b50a9a185" target="_blank">
                        <button data-aos="fade-in" className="rounded-lg border-2 px-4 py-2 my-2 mx-3 md:px-8 md:py-4 md:my-4 md:mx-4 flex items-center justify-between border-info text-info hover:bg-info hover:text-black">
                            <AiOutlineLinkedin />
                            <span className="mx-2">LinkedIn</span>
                        </button>
                        </a>
                        <a href="https://github.com/vaibhav-bhoir" target="_blank">
                        <button data-aos="fade-in" className="rounded-lg border-2 px-4 py-2 my-2 mx-3 md:px-8 md:py-4 md:my-4 md:mx-4 flex items-center justify-between border-normal text-normal hover:bg-normal hover:text-black">
                            <AiOutlineGithub />
                            <span className="mx-2">GitHub</span>
                        </button>
                        </a>
                    </div>
                </main>
            </div>
            <ContactForm/>

        </div>
    )
}

export default Contact
