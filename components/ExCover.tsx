import React from 'react'
import { MdLocationPin} from "react-icons/md";

interface ExCoverProps {
    expData: {
        fields: {
            title: string;
            jobPosition: string;
            projectDescription: string;
            location: string;
            date: string;
        };
    }
}

const ExCover = ({ expData }: ExCoverProps) => {


    return (
        <div className="w-full md:w-100 border-1 mx-4 my-4 border-secondary-900 bg-frosted dark:bg-white dark:border-darkblue rounded-xl px-4 transform transition-transform hover:scale-[1.02]">
            <div className="justify-between items-center mx-2 flex">
                <div className="flex my-6">
                    <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></span>
                    <span className="w-6 h-6 mx-2 bg-info rounded-full"></span>
                    <span className="w-6 h-6 bg-success rounded-full"></span>
                </div>
                <h1 className="text-secondary-900 my-6">{expData.fields.date}</h1>
            </div>
            <hr />
            <h1 className="text-secondary-100 dark:text-darkblue text-4xl mx-4 my-6">{expData.fields.title}</h1>
            <h2 className="text-secondary-900 text-xl mx-4 flex items-center"><MdLocationPin />&nbsp;{expData.fields.location}</h2>
            <div className="flex flex-col md:flex">
                <p className="text-secondary-900 dark:text-jaguar mx-4">{expData.fields.jobPosition}</p>
                <p className="text-secondary-900 text-3xl mx-4 cursor-pointer">
                    {expData.fields.projectDescription}
                </p>
            </div>
        </div>
    )
}

export default ExCover
