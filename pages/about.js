import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Circle from '../components/Circle'
import SKILL_DATA from '../components/skill.data'



const About = () => {
    return (
        <div className="px-3">

            <Head>
                <title>About - Vaibhav Bhoir</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center mb-64 pt-20">
                <div className="container relative w-full flex justify-center items-center mt-96">
                    <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent">&lt;About /&gt; </h1>
                    <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold" >Vaibhav Bhoir</h1>
                </div>
                <main className="container px-10 md:px-36 lg:px-56 mb-20">
                    <h3 className="text-success dark:text-jaguar md:text-4xl" data-aos="fade-in">Let me tell you a few things....</h3>
                    <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I am creative Web developer based in Mumbai, India. I Have Done Bachelor of engineering in Electronics and Telecommunications.</h3>
                    <h4 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I have build several websites , looking at the design I can convert it into a HTML CSS template with pixel perfect precision. I use bootstrap very often , so the turn around of my project is very quick and I always use GIT to track my progress and files, as well to collaborate with other developers.
                    </h4>                    
                    <Link href="https://drive.google.com/file/d/1SQBc9-Px8UvT6FeuOBZyCaugx4lPemx6/view?usp=drivesdk">
                        <a target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 px-4 py-2 md:px-8 md:py-4 mt-8 mb-24 border-info text-info dark:text-white dark:bg-darkblue dark:border-darkblue hover:bg-info hover:text-black" data-aos="fade-in" data-aos-delay={2000}>Get Resume</a>
                    </Link>
                </main>
            </div>

            <div className="flex flex-col items-center justify-center my-40">
                <div className="container relative w-full flex justify-center items-center">
                    <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent">&lt;Toolbox /&gt; </h1>
                    <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold" >My Weapons ⚔</h1>
                </div>
                <main className="container px-10 md:px-36 lg:px-56">
                    <h3 className="text-success dark:text-jaguar md:text-4xl">Technologies that I use</h3>
                    <div className="flex flex-wrap justify-center items-center">
                        {
                            SKILL_DATA.map((e) => <Circle data={e} key={e.id} />)
                        }
                    </div>
                </main>
            </div>

        </div>
    )
}

export default About

