import React from 'react'
import Head from 'next/head'
import LIST_DATA from '../components/project.list';
import WorkCover from '../components/WorkCover';

const Work = () => {
    return (
        <div className="min-h-screen px-3 overflow-hidden">

            <Head>
                <title>Work - Vaibhav Bhoir</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen flex flex-col items-center justify-center mt-20 mb-40">
                <div className="h-1/4 mt-96 container relative w-full flex justify-center items-center">
                    <h1 className=" text-8xl md:text-15xl absolute bottom-20 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', zIndex: '-1' }}>&lt;Work /&gt; </h1>
                    <h1 className=" hidden md:flex text-10xl text-secondary-100 dark:text-darkblue font-extrabold" >More Projects</h1>
                </div>
                <main className="container px-10 md:px-36 lg:px-56 flex flex-col items-center justify-center">
                    <h3 className="text-success dark:text-jaguar md:text-4xl self-start">All Projects</h3>
                    <div className="w-full min-h-screen my-12 transition ease-in-out">
                        {
                            LIST_DATA.map((e) => <WorkCover data={e} key={e.id} />)
                        }
                    </div>
                </main>
            </div>

        </div>
    )
}

export default Work
