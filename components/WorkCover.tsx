import React from 'react'
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import Link from 'next/link';



interface WorkProps {
    data: {
        name: string;
        github: string;
        link: string;
        tech: Array<any>;
    }
}

const WorkCover = ({ data }: WorkProps) => {

    const { name, github, tech, link } = data;

    return (
        <div className="w-full border-1 my-12 border-secondary-900 bg-frosted dark:bg-white dark:border-darkblue rounded-xl px-4 transform transition-transform hover:scale-[1.02]">
            <div className="justify-between items-center mx-2 flex">
                <div className="flex my-6">
                    <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></span>
                    <span className="w-6 h-6 mx-2 bg-info rounded-full"></span>
                    <span className="w-6 h-6 bg-success rounded-full"></span>
                </div>
                <div className="flex my-6">
                    <p className="text-secondary-900 my-0 text-3xl mx-4 cursor-pointer">
                        {
                            link && <Link href={link} target="_blank">
                                <AiOutlineLink />
                            </Link>
                        }

                    </p>
                    <p className="text-secondary-900 my-0 text-3xl mx-4 cursor-pointer">
                        {
                            github && <Link href={github} target="_blank">
                                <AiOutlineGithub />
                            </Link>
                        }

                    </p>
                </div>
            </div>
            <hr />
            <Link href={link} target="_blank">
                <h1 className="text-secondary-100 dark:text-darkblue text-4xl mx-4 my-6">{name}</h1>
            </Link>
            <div className="flex flex-wrap md:flex my-6">
                {
                    tech.map((e, index) => <div key={index} className="px-4 bg-primary dark:bg-darkblue text-white rounded-full mx-2 my-3">{e}</div>)
                }
            </div>
        </div>
    )
}

export default WorkCover
