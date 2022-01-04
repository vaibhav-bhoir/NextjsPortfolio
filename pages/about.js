import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Circle from '../components/Circle'
import SKILL_DATA from '../components/skill.data'



const About = () => {
    return (
        <div className="min-h-screen px-3">

            <Head>
                <title>About - Vaibhav Bhoir</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="h-1/4 mt-96 container relative w-full flex justify-center items-center">
                    <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', zIndex: '-1' }}>&lt;About /&gt; </h1>
                    <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-red-500 font-extrabold" >Vaibhav Bhoir</h1>
                </div>
                <main className="container px-5 md:px-36 lg:px-56 mb-20">
                    <h3 className="text-success md:text-4xl" data-aos="fade-in">Let me tell you a few things....</h3>
                    <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I am creative Web developer based in Mumbai, India. I Have Done Bachelor of engineering in Electronics and Telecommunications.</h3>
                    <h4 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I have build several websites , looking at the design I can convert it into a HTML CSS template with pixel perfect precision. I use bootstrap very often , so the turn around of my project is very quick and I always use GIT to track my progress and files, as well to collaborate with other developers.
                    </h4>                    
                    <Link href="https://drive.google.com/file/d/12oLbPyz9DUeocdihhhPYKaUlX-TMUtt0/view?usp=drivesdk">
                        <button className="flex items-center justify-center rounded-lg border-2  px-4 py-2 my-2 md:px-8 md:py-4 md:my-4 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black">
                        <span>Download Resume</span>
                        </button>
                    </Link>
                </main>
            </div>

            <div className="min-h-screen flex flex-col items-center justify-center mt-64 mb-64">
                <div className="h-1/4 container relative w-full flex justify-center items-center">
                    <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', zIndex: '-1' }}>&lt;Toolbox /&gt; </h1>
                    <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-red-500 font-extrabold" >My Weapons ⚔</h1>
                </div>
                <main className="container px-5 md:px-36 lg:px-56">
                    <h3 className="text-success md:text-4xl">Technologies that I use</h3>
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

