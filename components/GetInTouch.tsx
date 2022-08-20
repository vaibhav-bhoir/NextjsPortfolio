import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin , AiOutlineMail} from "react-icons/ai";


const GetInTouch = () => {
    return (
        <main data-aos="fade-in" data-aos-duration="1000" className="container px-10 md:px-36 lg:px-56">
            <h3 className="text-success dark:text-jaguar text-5xl md:text-4xl">Get in Touch</h3>
            <h2 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">This is how you can reach me. Let's work together to create something worth sharing.</h2>
            <div className="flex">
                <a href="mailto:bhoirvaibhav90@gmail.com" target="_blank" rel="noreferrer" className="rounded-lg border-2 px-4 py-2 my-2 mr-3 md:px-8 md:py-4 md:my-4 md:mr-4 flex items-center justify-between dark:text-white dark:bg-darkblue dark:border-darkblue border-success text-success hover:bg-success hover:text-black">
                    <AiOutlineMail />
                    <span className="mx-2">Mail</span>
                </a>
                <a href="https://www.linkedin.com/in/vaibhav-bhoir-b50a9a185" target="_blank" rel="noreferrer" className="rounded-lg border-2 px-4 py-2 my-2 mx-3 md:px-8 md:py-4 md:my-4 md:mx-4 flex items-center justify-between dark:text-white dark:bg-darkblue dark:border-darkblue border-info text-info hover:bg-info hover:text-black">
                    <AiOutlineLinkedin />
                    <span className="mx-2">LinkedIn</span>
                </a>
                <a href="https://github.com/vaibhav-bhoir" target="_blank" rel="noreferrer" className="rounded-lg border-2 px-4 py-2 my-2 mx-3 md:px-8 md:py-4 md:my-4 md:mx-4 flex items-center justify-between dark:text-white dark:bg-darkblue dark:border-darkblue border-normal text-normal hover:bg-normal hover:text-black">
                    <AiOutlineGithub />
                    <span className="mx-2">GitHub</span>
                </a>
            </div>
        </main>
    )
}

export default GetInTouch