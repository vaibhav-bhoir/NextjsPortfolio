import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin , AiOutlineMail, AiOutlineGlobal, AiOutlineWhatsApp} from "react-icons/ai";
import Link from 'next/link';

interface socialIconsProps {
    id: number,
    icon: any,
    link: string
}

const  socialIcons: Array<socialIconsProps> = [
    {
        id: 1,
        icon: <AiOutlineGlobal />,
        link: "https://vaibhav-bhoir.github.io/myportfolio/",
    },
    {
        id: 2,
        icon: <AiOutlineGithub />,
        link: "https://github.com/vaibhav-bhoir",
    },
    {
        id: 3,
        icon: <AiOutlineLinkedin />,
        link: "https://www.linkedin.com/in/vaibhav-bhoir-b50a9a185",
    },
    {
        id: 4,
        icon: <AiOutlineMail />,
        link: "mailto:bhoirvaibhav90@gmail.com",
    },
]


const LeftSidebar = () => {
    return (
        <div className="fixed bottom-24 right-4 z-40 flex flex-col items-center">
            {
                socialIcons.map((e) => (
                    <div key={e.id} className="mb-6">
                        <Link href={e.link}>
                            <a target="_blank" className="text-secondary-100 dark:text-black text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success dark:hover:text-red-500">
                                {e.icon}
                            </a>
                        </Link>
                    </div>
                ))
            }
            <div className="whatsapp">
                <Link href="https://wa.me/+918975588567?text=Hi%20Vaibhav.%20I%27d%20like%20to%20chat%20with%20you">
                    <a target="_blank">
                        <AiOutlineWhatsApp />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default LeftSidebar
