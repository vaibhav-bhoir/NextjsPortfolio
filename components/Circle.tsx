import React from 'react';
import Image from 'next/image'

interface CircleProps {
    data : {
        name: string;
        imageSrc: string;
    }
}

const Circle = ({ data }: CircleProps) => {

    const { name, imageSrc } = data

    return (
        <div className=" mx-4 md:mx-8 my-4 border-success dark:border-jaguar hover:border-white dark:hover:border-black border-2 hover:border-4 w-36 h-36 md:w-52 md:h-52 rounded-full flex flex-col justify-center items-center">
            <img src={imageSrc} alt="" className="w-12 md:w-20" />
            {/* <Image
                className="w-12 md:w-20"
                src={imageSrc}                
                alt="icon"
                width={60}
                height={60}
            /> */}
            <h1 className="text-2xl text-secondary-100 dark:text-black">{name}</h1>
        </div>
    )
}

export default Circle


