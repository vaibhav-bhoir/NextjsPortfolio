import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import Cover from '../components/Cover';
import PROJECTS_DATA from '../components/projects.data';
import { AiOutlineGithub, AiOutlineLinkedin , AiOutlineMail} from "react-icons/ai";
import ExCover from '../components/ExCover';
import ContactForm from '../components/ContactForm';
import EXP_DATA from '../components/experience.data';
import USER_DATA from '../components/user.data';
import Typed from 'react-typed';
import Image from 'next/image';
import heroImg from '../public/landing.svg';
import projectImg from '../public/projects.svg';


export default function Home() {

  const [data, setData] = useState(PROJECTS_DATA)

  const {name, subtitles} = USER_DATA;

  const handleClose = (id) => {
    const newData = data.filter((e) => e.id !== id)
    setData(newData)
  }

  return (
    <div className="px-3 overflow-hidden">

      <Head>
        <title>Vaibhav Bhoir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center mt-64 md:mb-0">
        <main className="container px-10 md:px-36 lg:px-56 flex flex-row flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2">
          <h3
            className="text-success dark:text-jaguar md:text-4xl"
            data-aos="fade-in"
          >
            👋 Hi, I am
          </h3>
          <h1
            className="text-secondary-100 dark:text-darkblue text-9xl md:text-7xl lg:text-8xl font-bold"
            data-aos="fade-in"
            data-aos-delay={500}
          >{name}</h1>
          <h1 className='text-secondary-900 dark:text-jaguar text-4xl md:text-6xl'>
            <Typed
                  strings={subtitles}
                      typeSpeed={40}
                      backSpeed={60}
                      loop >
            </Typed>
          </h1>
          <p className="text-secondary-900 text-3xl md:text-4xl max-w-6xl" data-aos="fade-in" data-aos-delay={1500}>I’m a <span className="text-success dark:text-darkblue font-bold">Web Developer</span> based in Mumbai, India specializing in building exceptional digital experiences. I enjoy using my skill-set to empower people to accomplish their goals.</p>
          <Link href="/contact">
            <button className="rounded-lg border-2 px-8 py-4 mt-4 mb-24 border-success text-success dark:text-white dark:bg-darkblue dark:border-darkblue hover:bg-success hover:text-black" data-aos="fade-in" data-aos-delay={2000}>Contact Now</button>
          </Link>
          </div>
          <div className=" hidden md:block w-full md:w-1/2 p-16">
            <Image
            alt=""
            src={heroImg}
            width="100%" height="100%" layout="responsive" objectFit="contain"
            />
          </div>
        </main>
      </div>

      <div className="flex flex-col items-center justify-center my-64">
        <div className="container relative w-full flex justify-center items-center">
          <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', zIndex: '-1' }}>&lt;About /&gt; </h1>
          <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold" >Vaibhav Bhoir</h1>
        </div>
        <main className="container px-10 md:px-36 lg:px-56 flex flex-row flex-wrap items-center justify-center">
          <div className="w-full lg:w-1/2 md:p-16">
            <Image
            alt=""
            src={projectImg}
            width="100%" height="100%" layout="responsive" objectFit="contain"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-success dark:text-jaguar md:text-4xl" data-aos="fade-in">About Me</h3>
            <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I am creative Web developer based in Mumbai, India. I Have Done Bachelor of engineering in Electronics and Telecommunications.</h3>
            <h4 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I have build several websites , looking at the design I can convert it into a HTML CSS template with pixel perfect precision . I use bootstrap very often , so the turn around of my project is very quick and I always use GIT to track my progress and files, as well to collaborate with other developers.
            </h4>
            <Link href="/about">
              <button data-aos="fade-in" className="rounded-lg border-2 px-8 py-4 mt-4 mb-24 dark:text-white dark:bg-darkblue dark:border-darkblue border-success text-success hover:bg-success hover:text-black">Learn More</button>
            </Link>
          </div>
        </main>
      </div>

      <div className="flex flex-col items-center justify-center my-64">
        <div className="container relative w-full flex justify-center items-center">
          <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', zIndex: '-1' }}>&lt;Work /&gt; </h1>
          <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold" >Experience</h1>
        </div>
        <main className="container px-10 md:px-36 lg:px-56">
          <h3 className="text-success dark:text-jaguar md:text-4xl" data-aos="fade-in">Projects on which I've worked</h3>
          <div className="flex flex-wrap items-center justify-center my-12 transition ease-in-out">
            {
              EXP_DATA.map((e) => <ExCover data={e} key={e.id} />)
            }
          </div>
        </main>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="container relative w-full flex justify-center items-center">
          <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', zIndex: '-1' }}>&lt;Work /&gt; </h1>
          <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold" >Featured Projects</h1>

        </div>
        <main className="container px-10 md:px-36 lg:px-56 flex flex-wrap flex-col items-center justify-center">
          <h3 className="text-success dark:text-jaguar md:text-4xl self-start">Some Selected Projects</h3>
          <div className="flex flex-wrap items-center justify-center my-12 transition ease-in-out">
            {
              data.length === 0 ? (
                <div className="flex flex-col justify-center items-center">
                  <img src="/noData.svg" alt="" className="w-1/2 h-auto my-12" />
                  <h3 className="text-success md:text-4xl" data-aos="fade-in">No Projects Opened</h3>
                </div>
              ) : data.map((e) => <Cover data={e} key={e.id} handleClose={handleClose} />)
            }
          </div>
          {
            data.length === 0 && <button className="rounded-lg border-2 px-8 py-4 my-4 dark:text-white dark:bg-darkblue dark:border-darkblue border-info text-info self-center" onClick={() => setData(PROJECTS_DATA)}>Load All Again</button>
          }
          {
            data.length !== 0 && <Link href="/work"><button className="rounded-lg border-2 px-8 py-4 my-4 dark:text-white dark:bg-darkblue dark:border-darkblue border-success text-success self-center hover:bg-success hover:text-black">View More</button></Link>
          }
        </main>
      </div>

      <div className="flex flex-col items-center justify-center mt-96 md:mb-0">
        <div className="container relative w-full flex justify-center items-center">
          <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', zIndex: '-1' }}>&lt;Contact /&gt; </h1>
          <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold" >Say Hello</h1>
        </div>
        <main className="container px-10 md:px-36 lg:px-56">
          <h3 className="text-success dark:text-jaguar md:text-4xl" data-aos="fade-in">Get in Touch</h3>
          <h2 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">This is how you can reach me. Let’s work together to create something worth sharing.</h2>
          <div className="flex">
              <a href="mailto:bhoirvaibhav90@gmail.com" target="_blank">
              <button data-aos="fade-in" className="rounded-lg border-2 px-4 py-2 my-2 mr-3 md:px-8 md:py-4 md:my-4 md:mx-4 flex items-center justify-between dark:text-white dark:bg-darkblue dark:border-darkblue border-success text-success hover:bg-success hover:text-black">
                  <AiOutlineMail/>
                  <span className="mx-2">Mail</span>
              </button>
              </a>
              <a href="https://www.linkedin.com/in/vaibhav-bhoir-b50a9a185" target="_blank">
              <button data-aos="fade-in" className="rounded-lg border-2 px-4 py-2 my-2 mx-3 md:px-8 md:py-4 md:my-4 md:mx-4 flex items-center justify-between dark:text-white dark:bg-darkblue dark:border-darkblue border-info text-info hover:bg-info hover:text-black">
                  <AiOutlineLinkedin />
                  <span className="mx-2">LinkedIn</span>
              </button>
              </a>
              <a href="https://github.com/vaibhav-bhoir" target="_blank">
              <button data-aos="fade-in" className="rounded-lg border-2 px-4 py-2 my-2 mx-3 md:px-8 md:py-4 md:my-4 md:mx-4 flex items-center justify-between dark:text-white dark:bg-darkblue dark:border-darkblue border-normal text-normal hover:bg-normal hover:text-black">
                  <AiOutlineGithub/>
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
