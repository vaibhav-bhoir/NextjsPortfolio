import React from 'react';
import Image from 'next/image';
import Typed from 'react-typed';
import Link from 'next/link';

const Header = ({heroProps}) => {

    const {
        smallCaption, 
        heading, 
        description, 
        subheadings, 
        heroImage, 
        resumeLink,
    } = heroProps

    return (
        <div className="flex flex-col items-center justify-center mt-64 md:mb-0">
            <main className="container mb-36 md:mb-0 px-10 md:px-36 lg:px-56 flex flex-row flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2">
            <h3
                className="text-success dark:text-jaguar md:text-4xl"
                data-aos="fade-in"
            >
                {smallCaption}
            </h3>
            <h1
                className="text-secondary-100 dark:text-darkblue text-9xl md:text-7xl lg:text-8xl font-bold"
                data-aos="fade-in"
                data-aos-delay={500}
            >{heading}</h1>
            <h1 className='text-secondary-900 dark:text-jaguar text-4xl md:text-6xl'>
                <Typed
                    strings={subheadings}
                        typeSpeed={40}
                        backSpeed={60}
                        loop >
                </Typed>
            </h1>
            <p className="text-secondary-900 text-3xl md:text-4xl max-w-6xl mb-16" data-aos="fade-in" data-aos-delay={1500}>
                {description}
            </p>
            <Link href="/contact">
                <a className="rounded-lg border-2 px-8 py-4 md:px-8 md:py-4 mt-4 mb-24 border-success text-success dark:text-white dark:bg-darkblue dark:border-darkblue hover:bg-success hover:text-black" data-aos="fade-in" data-aos-delay={2000}>Hire Me</a>
            </Link>
            <Link href={resumeLink}>
                <a target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 px-8 py-4 mt-4 mb-24  ml-6 md:ml-8 border-info text-info dark:text-white dark:bg-darkblue dark:border-darkblue hover:bg-info hover:text-black" data-aos="fade-in" data-aos-delay={2000}>Get Resume</a>
            </Link>
            </div>
            <div className=" hidden md:block w-full md:w-1/2 p-16">
                <Image
                    alt=""
                    src={`https:${heroImage.fields.file.url}`}
                    width={heroImage.fields.file.details.image.width} height={heroImage.fields.file.details.image.width} layout="responsive" objectFit="contain"
                />
            </div>
            </main>
        </div>
    );
};

export default Header;
