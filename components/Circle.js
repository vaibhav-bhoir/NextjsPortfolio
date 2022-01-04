import React from 'react'

const Circle = ({ data }) => {

    const { name, image } = data

    return (
        <div className=" mx-4 md:mx-8 my-4 border-success hover:border-white dark:hover:border-black border-2 hover:border-4 w-36 h-36 md:w-52 md:h-52 rounded-full flex flex-col justify-center items-center">
            <img src={image} alt="" className="w-12 md:w-20" />
            <h1 className="text-2xl text-secondary-100 dark:text-black">{name}</h1>
        </div>
    )
}

export default Circle
