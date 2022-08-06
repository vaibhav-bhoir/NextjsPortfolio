import React from 'react'
import { AiOutlineGithub, AiOutlineLink} from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
interface CoverProps {
    pdata: {
        fields: {
            title: string;
            githubUrl: string;
            date: string;
            liveUrl: string;
            type: string;
            thumbnailImage: {
                fields: {
                    file: {
                        url: string;
                        details: {
                            image: {
                                width: number;
                                height: number
                            }
                        }
                    };
                    
                }
            };
        },
        sys: {
            id: string
        }
    }
    handleClose:any;
}

const Cover = ({ pdata, handleClose }: CoverProps) => {

    return (
        <div className="md:w-100 h-full border-1 mx-4 my-4 border-secondary-900 bg-frosted dark:bg-darkblue dark:border-white rounded-xl px-4 transform transition-transform hover:scale-[1.02]">
            <div className="justify-between items-center mx-2 flex">
                <div className="flex my-6">
                    <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer" onClick={() => handleClose(pdata.sys.id)} ></span>
                    <span className="w-6 h-6 mx-2 bg-info rounded-full">
                    </span>
                    <span className="w-6 h-6 bg-success rounded-full"></span>
                </div>
                <h1 className="text-secondary-900 my-6">{pdata.fields.type}</h1>
            </div>
            <hr />
            {
                pdata.fields.liveUrl ? (
                    <Link href={pdata.fields.liveUrl} target="_blank" >
                        <h1 className="text-secondary-100 text-4xl mx-4 my-4">{pdata.fields.title}</h1>
                    </Link>
                ) : (
                    <h1 className="text-secondary-100 text-4xl mx-4 my-4">{pdata.fields.title}</h1>
                )
            }
            <h1 className="text-secondary-900 text-xl mx-4 my-2">{pdata.fields.liveUrl ? "Completed" : "Currently Working on"}</h1>
            <div className="flex items-center justify-between">
                <p className="text-secondary-900 mx-4">--</p>
                <div className="flex">
                    <p className="text-secondary-900 text-3xl mx-4 cursor-pointer">
                        {
                            pdata.fields.liveUrl && <Link href={pdata.fields.liveUrl} target="_blank">
                                <AiOutlineLink />
                            </Link>
                        }
                    </p>
                    <p className="text-secondary-900 text-3xl mx-4 cursor-pointer">
                        {
                            pdata.fields.githubUrl && <Link href={pdata.fields.githubUrl} target="_blank">
                                <AiOutlineGithub />
                            </Link>
                        }
                    </p>
                </div>
            </div>
            <Image 
                src={`https:${pdata.fields.thumbnailImage.fields.file.url}`} 
                alt="" 
                height={pdata.fields.thumbnailImage.fields.file.details.image.height} 
                width={pdata.fields.thumbnailImage.fields.file.details.image.width} 
                className="rounded-2xl" 
            />
            <div className="flex flex-wrap justify-between items-center my-4 mx-4">
                <p className="text-secondary-900 text-2xl mx-4 cursor-pointer font-semibold">
                    {
                        pdata.fields.githubUrl && <Link href={pdata.fields.githubUrl}><a target="_blank">GitHub</a></Link>
                    }
                </p>
                <p className="text-secondary-900 text-2xl mx-4 cursor-pointer font-semibold">
                    {
                        pdata.fields.liveUrl && <Link href={pdata.fields.liveUrl}><a target="_blank">Visit</a></Link>

                    }
                </p>
            </div>
        </div>
    )
}

export default Cover
